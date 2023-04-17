import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { setVisible } from 'libs/redux/slices/auth'
import { DesktopSessionIcon, MobileSessionIcon, PlusIcon } from 'assets/icons'
import {
  useGetActiveSessionsByOtpMutation,
  useTerminateUserSessionByOtpMutation,
} from 'libs/redux/services/v3'
import {
  useGetActiveSessionsByUserInfoMutation,
  useTerminateSessionMutation,
} from 'libs/redux/services/auth'
import { notify } from 'utils/notification'
import dayjs from 'dayjs'
import jalaliday from 'jalaliday'
import Row from 'components/ui/Row'
import Col from 'components/ui/Col'
import Button from 'components/ui/Button'

import type { RootState } from 'libs/redux/store'
import type { SessionProps } from 'containers/authentication/interface'
import type { GetActiveSessionsByUserInfo_Response } from 'libs/redux/services/auth/interface'
import styles from './session.module.scss'

dayjs.extend(jalaliday)

const Session = ({ onSubmit, setIsSessionLimit, isOtp }: SessionProps) => {
  const dispatch = useDispatch()
  const { push } = useRouter()
  const { userName, password } = useSelector((state: RootState) => state.auth)

  const [getActiveSesstions, { data }] =
    useGetActiveSessionsByUserInfoMutation()

  const [getActiveSessionsByOtp, { data: dataOtp }] =
    useGetActiveSessionsByOtpMutation()

  const [terminateSession] = useTerminateSessionMutation()
  const [terminateSessionByOtp] = useTerminateUserSessionByOtpMutation()

  useEffect(() => {
    if (isOtp) {
      getActiveSessionsByOtp({
        verfySignInByOtpCommand: { userName, code: password },
      }).catch((error) => notify({ message: error.message, type: 'error' }))
    } else {
      getActiveSesstions({ userName, password })
    }
  }, [])

  const terminateSessionHandler = (id: string) => {
    terminateSessionsByIds([id])
  }

  const removeAllDevices = () => {
    const sessionIds = (
      data || (dataOtp as unknown as GetActiveSessionsByUserInfo_Response)
    )?.data?.otherSessions?.map((session) => session.id) as string[]

    terminateSessionsByIds(sessionIds)
  }

  const terminateSessionsByIds = (ids: string[]) => {
    if (isOtp) {
      terminateSessionByOtp({
        terminateSessionByUserInfoWithOtp: {
          userName,
          code: password,
          sessionIds: ids,
        },
      })
        .unwrap()
        .then(() => {
          getActiveSessionsByOtp({
            verfySignInByOtpCommand: { userName, code: password },
          })
            .then((res) => {
              setIsSessionLimit(false)
              onSubmit({ password, userName })
            })
            .catch((error) => notify({ message: error.message, type: 'error' }))
        })
    } else {
      terminateSession({ userName, password, sessionIds: ids })
        .unwrap()
        .then(() => {
          getActiveSesstions({ userName, password })
            .unwrap()
            .then((res) => {
              if ((res?.data?.otherSessions?.length as number) < 2) {
                setIsSessionLimit(false)
                onSubmit({ password, userName })
              }
            })
        })
    }
  }

  const returnHandler = () => {
    setIsSessionLimit(false)
    dispatch(setVisible({ visible: false }))
    push('/')
  }

  return (
    <Row className={styles['session']} direction='column' align='middle'>
      <span className={styles['session--title']}>خطای تعداد دستگاه</span>
      <span className={styles['session--subtitle']}>
        تنها در 2 دستگاه (یک موبایل و یک دسکتاپ) مجاز به استفاده همزمان هستید.
        برای ورود،دستگاه های اضافه را حذف نمایید.
      </span>

      <div data-selector='session-wrapper'>
        {(
          data || (dataOtp as unknown as GetActiveSessionsByUserInfo_Response)
        )?.data?.otherSessions?.map((session) => (
          <Row
            key={session.id}
            className={styles['session__card']}
            align='middle'
          >
            <Col span={15} className='d-flex items-center gap-1'>
              <div data-selector='session-device'>
                {session?.operatingSystem?.family === 'Windows' ||
                session?.operatingSystem?.family === 'Linux' ? (
                  <DesktopSessionIcon />
                ) : (
                  <MobileSessionIcon />
                )}
              </div>
              <Row direction='column' align='top' gap={0}>
                <span data-selector='session-device-title'>
                  {session.operatingSystem?.family}
                </span>
                <span data-selector='session-date'>
                  {dayjs(session.loginDate)
                    .calendar('jalali')
                    .locale('fa')
                    .format('D MMMM YYYY')}
                </span>
                <span data-selector='session-location'>{session.ip}</span>
              </Row>
            </Col>
            <Col span={9} className='d-flex justify-center'>
              <Button
                onClick={() => terminateSessionHandler(session.id as string)}
                className={styles['session__card--delete']}
                ripple
              >
                <span>حذف دستگاه</span>
                <PlusIcon />
              </Button>
            </Col>
          </Row>
        ))}
      </div>
      <Button
        btnType='primary'
        className='mt-1 w-100'
        ripple
        onClick={removeAllDevices}
      >
        <span>حذف همه دستگاه ها</span>
      </Button>
      <Button
        btnType='ghost'
        className='mt-1 w-100'
        onClick={returnHandler}
        ripple
      >
        <span>انصراف و بازگشت به صفحه اصلی</span>
      </Button>
    </Row>
  )
}

export default Session
