import { useIntl } from 'react-intl'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from 'libs/redux/store'
import { SearchOutlined, ArrowBack } from '@mui/icons-material'
import { validation } from 'utils/helpers/validations'
import type {
  CompanyIdFormProps,
  ConfirmCompanyState,
} from 'containers/company/interface'
import { setCurrentStep } from 'libs/redux/slices/companyAuth'
import { displayCurrentState } from 'libs/redux/slices/contactSupport'
import Divider from 'components/ui/Divider'
import Input from 'components/ui/Input'
import Button from 'components/ui/Button'

import styles from './verifyCompany.module.scss'

export const ConfirmCompanyInfo = ({ toggleInfo }: ConfirmCompanyState) => {
  const dispatch = useDispatch()
  const intl = useIntl()
  const { currentStep } = useSelector((state: RootState) => state.companyAuth)
  const { ceoTitle, companyTitle, registerNo } = useSelector(
    (state: RootState) => state.company
  )

  const openContact = () => dispatch(displayCurrentState({ showContact: true }))

  return (
    <div className={styles['confirmCompanyInfo']}>
      <Divider className='w-100' />
      <div className={styles['confirmCompanyInfo__header']}>
        <p>{intl.formatMessage({ id: 'company.auth.info.confirm' })}</p>

        <ul>
          <li>
            {intl.formatMessage({ id: 'company.auth.matching.info.confirm' })}
          </li>
        </ul>
      </div>

      <div className={styles['confirmCompanyInfo__form']}>
        <Input
          label='نام شرکت'
          defaultValue={companyTitle as string}
          readOnly
        />

        <Input label='شماره ثبت' defaultValue={registerNo as string} readOnly />

        <Input
          label='مدیرعامل فعلی'
          defaultValue={ceoTitle as string}
          readOnly
        />
      </div>

      <div className={styles['confirmCompanyInfo__footer']}>
        <ul>
          <li>{intl.formatMessage({ id: 'company.auth.call.support' })}</li>
        </ul>

        <div className={styles['confirmCompanyInfo__footer__action']}>
          <Button
            onClick={() => toggleInfo(false)}
            btnType='secondary'
            size='large'
            className={
              styles['confirmCompanyInfo__footer__action--searchAgain']
            }
            ripple
          >
            <p>{intl.formatMessage({ id: 'company.auth.search.again' })}</p>
            <SearchOutlined />
          </Button>

          <p>{intl.formatMessage({ id: 'company.auth.problem' })}</p>
          <Button btnType='ghost' onClick={openContact}>
            {intl.formatMessage({ id: 'company.auth.contact.support' })}
          </Button>
        </div>

        <Button
          className={styles['confirmCompanyInfo__footer--accept']}
          btnType='primary'
          size='large'
          onClick={() => {
            dispatch(setCurrentStep(currentStep + 1))
            dispatch(displayCurrentState({ currentState: false }))
          }}
          ripple
        >
          <p>{intl.formatMessage({ id: 'company.auth.confirm' })}</p>
          <ArrowBack />
        </Button>
      </div>
    </div>
  )
}

export const CompanyIdForm = ({
  onSubmit,
  isError,
  isLoading,
}: CompanyIdFormProps) => {
  const dispatch = useDispatch()
  const intl = useIntl()

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: { companyCode: '' } })

  const openContact = () => dispatch(displayCurrentState({ showContact: true }))

  return (
    <div className={styles['companyIdForm']}>
      <Divider className='w-100' />

      <div className={styles['companyIdForm__content']}>
        <p>{intl.formatMessage({ id: 'company.auth.code' })}</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            className={styles['companyIdForm__content__input']}
            register={register('companyCode', validation.CONFIRM_COMPANY_CODE)}
            placeholder={intl.formatMessage({ id: 'company.auth.placeholder' })}
            error={errors.companyCode}
          />

          {isError && (
            <ul>
              <li>{intl.formatMessage({ id: 'company.auth.not.found' })}</li>
            </ul>
          )}

          <div className={styles['companyIdForm__content__footer']}>
            <Button
              type='submit'
              className={styles['companyIdForm__content__footer--search']}
              loading={isLoading}
              disabled={!watch('companyCode')}
              ripple
            >
              {intl.formatMessage({ id: 'company.auth.search' })}
            </Button>

            {isError && (
              <div
                className={styles['companyIdForm__content__footer--connection']}
              >
                <p>{intl.formatMessage({ id: 'company.auth.problem' })}</p>
                <Button onClick={openContact}>
                  {intl.formatMessage({ id: 'company.auth.contact.support' })}
                </Button>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}
