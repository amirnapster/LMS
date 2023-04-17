import { useDispatch, useSelector } from 'react-redux'
import { useLazyGetCompanySummaryQuery } from 'libs/redux/services/companies'
import { setCompanyDetail, setCompanySummary } from 'libs/redux/slices/company'
import type { RootState } from 'libs/redux/store'
import type { CompanyCodeForm } from 'containers/company/interface'
import type {
  CompanyDetail,
  CompanySlice,
} from 'libs/redux/slices/company/interface'
import { displayCurrentState } from 'libs/redux/slices/contactSupport'
import { CompanyIdForm, ConfirmCompanyInfo } from './helper'

const VerifyCompany = () => {
  const dispatch = useDispatch()
  const [getCompanySummary, { isError, isLoading }] =
    useLazyGetCompanySummaryQuery()

  const { currentState } = useSelector(
    (state: RootState) => state.contactSupport
  )

  const toggleInfo = (toggle: boolean) =>
    dispatch(displayCurrentState({ currentState: toggle }))

  const onSubmit = (data: CompanyCodeForm) => {
    getCompanySummary(parseInt(data.companyCode, 10))
      .unwrap()
      .then((res) => {
        const companyDetail: CompanyDetail = {
          registerNo: res?.summary?.registrationNo,
          companyTitle: res?.title,
          ceoTitle: res?.peopleSummary?.ceo?.title,
        }
        const compayData: CompanySlice = {
          nationalCode: res?.peopleSummary?.ceo?.id,
          companyId: res?.id,
          name: res?.peopleSummary?.ceo?.title,
        }
        dispatch(setCompanyDetail(companyDetail))
        dispatch(setCompanySummary(compayData))
        toggleInfo(true)
      })
  }

  return !currentState ? (
    <CompanyIdForm
      onSubmit={onSubmit}
      isError={isError}
      isLoading={isLoading}
    />
  ) : (
    <ConfirmCompanyInfo toggleInfo={toggleInfo} />
  )
}

export default VerifyCompany
