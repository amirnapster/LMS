import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  setAllCompanyApprovals,
  setCurrentImageIndex,
  setVisible,
} from 'libs/redux/slices/approvals'
import { scrollHandler } from 'utils/helpers/global'
import useDeviceDetect from 'utils/hooks/useDeviceDetect'
import Row from 'components/ui/Row'
import Col from 'components/ui/Col'
import Card from 'components/card'

import type { ProductLineItemsType } from 'utils/statics/companyStatics/interface'
import type { RootState } from 'libs/redux/store'
import CardCompanyImage from '../CardCompanyImage'
import ShowImageModal from '../showImageModal'

import type { ChangeMode } from '../showImageModal/interface'
import styles from './approvals.module.scss'

const CompanyApprovals = () => {
  const { isMobile } = useDeviceDetect()

  const dispatch = useDispatch()
  const [count, setCount] = useState<number>(3)
  const { details } = useSelector((state: RootState) => state.company)
  const boxRef = useRef<HTMLInputElement | null>(null)

  const data = details?.companyInfoDetail?.companyCommendation

  const {
    visible: visibleCompanyApprovals,
    allCompanyApprovals,
    currentImageIndex,
  } = useSelector((state: RootState) => state.companyApprovals)

  const approvalsCount = data?.length as number

  const closeModal = () => {
    dispatch(setVisible(false))
    dispatch(setAllCompanyApprovals([]))
    dispatch(setCurrentImageIndex(0))
  }

  const openApprovalsImageModal = (number: number) => {
    dispatch(setVisible(true))
    dispatch(setAllCompanyApprovals(data as ProductLineItemsType))
    dispatch(setCurrentImageIndex(number))
  }

  const showMoreHandler = () => {
    if (count === 3) setCount(approvalsCount)
    else {
      setCount(3)
      scrollHandler(0, boxRef?.current?.offsetTop as number)
    }
  }

  const handleChangeCurrent = (mode: ChangeMode) => {
    if (
      mode === 'increment' &&
      currentImageIndex < allCompanyApprovals.length - 1
    ) {
      dispatch(setCurrentImageIndex(currentImageIndex + 1))
    }
    if (mode === 'decrement' && currentImageIndex > 0) {
      dispatch(setCurrentImageIndex(currentImageIndex - 1))
    }
  }
  useEffect(() => {
    if (isMobile) showMoreHandler()
  }, [])

  return details?.companyInfoDetail?.companyCommendation?.length ? (
    <>
      <Card
        ref={boxRef}
        className={styles['approvals--card']}
        hasSource={false}
        title='تاییدیه‌ها و تقدیرنامه ها'
        info='بخش‌های علامت‌گذاری شده با این آیکن، شامل اطلاعات تکمیل شده توسط شرکت است.'
        hasMore={approvalsCount > 3}
        onShow={showMoreHandler}
        count={count}
        baseCount={3}
      >
        <Row
          justify='start'
          align='middle'
          data-selector='images-box'
          gutter={{ xxs: 8, xs: 8, sm: 8, md: 16 }}
          wrap
          id='approvals'
        >
          {data
            ?.slice(0, count)
            .map(({ picture, title, commendationType }, index) => (
              <Col
                key={title}
                xxs={21}
                xs={16}
                sm={11}
                md={12}
                lg={8}
                onClick={() => openApprovalsImageModal(index)}
              >
                <CardCompanyImage
                  src={picture as string}
                  title={title as string}
                  type={commendationType as string}
                  moreInformation={false}
                />
              </Col>
            ))}
        </Row>
      </Card>

      <ShowImageModal
        visible={visibleCompanyApprovals}
        closeModal={closeModal}
        currentImageIndex={currentImageIndex}
        allImageCategory={allCompanyApprovals}
        handleChangeCurrent={handleChangeCurrent}
        title='تصاویر تاییدیه ها و تقدیرنامه‌ها'
      />
    </>
  ) : null
}

export default CompanyApprovals
