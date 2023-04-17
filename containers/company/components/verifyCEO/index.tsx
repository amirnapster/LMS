import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from 'libs/redux/store'
import { ResendCode_Payload } from 'containers/company/interface'
import { useSendCodeMutation } from 'libs/redux/services/verification'
import { displayCurrentState } from 'libs/redux/slices/contactSupport'
import { omit } from 'utils/helpers/global'
import { CEOFormError, CEOPhoneNumber, ConfirmPhoneNumber } from './helper'

const VerifyCEO = () => {
  const dispatch = useDispatch()

  const companySummary = useSelector((state: RootState) => state.company)
  const { currentState } = useSelector(
    (state: RootState) => state.contactSupport
  )

  const [payload, setPayload] = useState<ResendCode_Payload>()
  const [sendCode, { isError, isLoading }] = useSendCodeMutation()

  const renderComponent = () => {
    if (isError) return <CEOFormError />
    if (currentState) return <ConfirmPhoneNumber payload={payload} />

    return <CEOPhoneNumber isLoading={isLoading} onSubmit={onSubmit} />
  }

  const onSubmit = (data: Record<string, string>) => {
    const callbackData = { ...companySummary, mobile: data.companyCode }
    const sendCodePayload = omit(callbackData, ['code'])

    sendCode(sendCodePayload)
      .unwrap()
      .then((res) => {
        const responseData = {
          phoneNumber: data?.companyCode,
          id: res,
          ...sendCodePayload,
        }

        setPayload(responseData as ResendCode_Payload)
        dispatch(displayCurrentState({ currentState: true }))
      })
  }

  return renderComponent()
}

export default VerifyCEO
