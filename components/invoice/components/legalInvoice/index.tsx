import { useIntl } from 'react-intl'
import { useDispatch, useSelector } from 'react-redux'
import { Search } from '@mui/icons-material'
import { Controller, useForm } from 'react-hook-form'
import { useLazyGetCompanySummaryQuery } from 'libs/redux/services/companies'
import {
  useGetProvinceDataQuery,
  useGetVahedSabtiDataQuery,
  useSendLegalPersonMutation,
} from 'libs/redux/services/invoice'
import { setProvince, setCurrentStep } from 'libs/redux/slices/invoice'
import { validation } from 'utils/helpers/validations'
import useDebounce from 'utils/hooks/useDebounce'
import Button from 'components/ui/Button'
import Col from 'components/ui/Col'
import Input from 'components/ui/Input'
import Row from 'components/ui/Row'
import Select from 'components/ui/Select'

import type { RootState } from 'libs/redux/store'
import type { ChangeEvent } from 'react'
import type {
  LegalInvoiceData,
  CompanyData,
} from 'components/invoice/interface'
import { LegalInvoiceDefaultValues as defaultValues } from './helper'
import styles from '../../invoice.module.scss'

const LegalInvoice = () => {
  const intl = useIntl()
  const dispatch = useDispatch()
  const [getCompanySummary] = useLazyGetCompanySummaryQuery()
  const { province } = useSelector((state: RootState) => state.invoice)
  const { data: provinceData } = useGetProvinceDataQuery(null)
  const { data: vahedSabtiData } = useGetVahedSabtiDataQuery(province, {
    skip: !province,
  })
  const [sendLegalPerson] = useSendLegalPersonMutation()

  const {
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm({ defaultValues })

  const changeProvinceHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target
    setValue('province', value)
    dispatch(setProvince(value))
  }

  const debouncedSearchValue = useDebounce((value) => {
    getCompanySummary(value)
      .unwrap()
      .then((res) => {
        const compayData: CompanyData = {
          companyTitle: res?.title as string,
          registrationNo: res?.summary?.registrationNo as string,
          companyId: String(res?.id),
          economicCode: res?.summary?.taxNumber as string,
        }
        Object.keys(compayData).map((item) =>
          setValue(
            item as keyof typeof compayData,
            compayData[item as keyof typeof compayData]
          )
        )
      })
  }, 1000)

  const checkCompanyNationalId = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setValue('checkRegistrationNumber', value)
    debouncedSearchValue(value)
  }

  const onSubmit = (data: LegalInvoiceData) => {
    sendLegalPerson(data)
      .unwrap()
      .then(() => {
        dispatch(setCurrentStep(2))
        setTimeout(() => {
          dispatch(setCurrentStep(3))
        }, 3000)
      })
    dispatch(setCurrentStep(2))
    setTimeout(() => {
      dispatch(setCurrentStep(3))
    }, 3000)
  }

  return (
    <form
      className={styles['form']}
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <Row justify='center'>
        <Col flex='70%'>
          <Controller
            name='checkRegistrationNumber'
            control={control}
            render={({ field }) => (
              <Input
                className={styles['form--search--input']}
                field={field}
                autoComplete='checkRegistrationNumber'
                placeholder={intl.formatMessage({
                  id: 'company.auth.placeholder',
                })}
                suffix={<Search />}
                onChange={checkCompanyNationalId}
              />
            )}
          />
        </Col>
      </Row>
      <Row wrap align='middle' justify='space-between'>
        <Col flex='48%'>
          <Controller
            name='companyTitle'
            control={control}
            rules={validation.INVOICE_COMPANY_NAME}
            render={({ field }) => (
              <Input
                required
                field={field}
                label={intl.formatMessage({
                  id: 'company.name',
                })}
                autoComplete='companyTitle'
                placeholder={intl.formatMessage({
                  id: 'company.name.placeholder',
                })}
                error={errors.companyTitle}
              />
            )}
          />
        </Col>
        <Col flex='48%'>
          <Controller
            name='registrationNo'
            control={control}
            rules={validation.REGISTRATION_NO}
            render={({ field }) => (
              <Input
                required
                field={field}
                label={intl.formatMessage({
                  id: 'registration.number',
                })}
                autoComplete='registrationNo'
                placeholder={intl.formatMessage({
                  id: 'registration.number.placeholder',
                })}
                error={errors.registrationNo}
              />
            )}
          />
        </Col>
        <Col flex='48%'>
          <Controller
            name='companyId'
            control={control}
            rules={validation.INVOICE_NATIONAL_ID}
            render={({ field }) => (
              <Input
                required
                field={field}
                label={intl.formatMessage({
                  id: 'national.id',
                })}
                autoComplete='companyId'
                placeholder={intl.formatMessage({
                  id: 'national.code.placeholder',
                })}
                error={errors.companyId}
              />
            )}
          />
        </Col>
        <Col flex='48%'>
          <Controller
            name='economicCode'
            control={control}
            rules={validation.INVOICE_ECONOMIC_CODE}
            render={({ field }) => (
              <Input
                field={field}
                required
                label={intl.formatMessage({
                  id: 'economic.code',
                })}
                autoComplete='economicCode'
                placeholder={intl.formatMessage({
                  id: 'national.code.placeholder',
                })}
                error={errors.economicCode}
              />
            )}
          />
        </Col>
        <Col flex='48%'>
          <Controller
            name='phoneNumber'
            control={control}
            rules={validation.INVOICE_TELEPHONE}
            render={({ field }) => (
              <Input
                required
                field={field}
                label={intl.formatMessage({
                  id: 'phone',
                })}
                autoComplete='phoneNumber'
                placeholder={intl.formatMessage({
                  id: 'phone.placeholder',
                })}
                error={errors.phoneNumber}
              />
            )}
          />
        </Col>
        <Col flex='48%'>
          <Controller
            name='mobileNumber'
            control={control}
            rules={validation.CONFIRM_CEO_PHONE_NUMBER}
            render={({ field }) => (
              <Input
                required
                field={field}
                label={intl.formatMessage({
                  id: 'contact.support.phone.number',
                })}
                autoComplete='mobileNumber'
                placeholder={intl.formatMessage({ id: 'mobile.placeholder' })}
                error={errors.mobileNumber}
              />
            )}
          />
        </Col>
        <Col flex='48%'>
          <Controller
            name='province'
            control={control}
            rules={validation.INVOICE_CITY}
            render={({ field }) => (
              <Select
                required
                field={field}
                label={intl.formatMessage({
                  id: 'province',
                })}
                error={errors.province}
                onChange={changeProvinceHandler}
              >
                {provinceData?.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </Select>
            )}
          />
        </Col>
        <Col flex='48%'>
          <Controller
            name='city'
            control={control}
            rules={validation.INVOICE_CITY}
            render={({ field }) => (
              <Select
                required
                field={field}
                label={intl.formatMessage({
                  id: 'city',
                })}
                error={errors.city}
              >
                {vahedSabtiData?.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </Select>
            )}
          />
        </Col>
        <Col flex='48%'>
          <Controller
            name='factorAddress'
            control={control}
            rules={validation.INVOICE_ADDRESS}
            render={({ field }) => (
              <Input
                required
                field={field}
                label={intl.formatMessage({
                  id: 'address',
                })}
                autoComplete='factorAddress'
                placeholder={intl.formatMessage({ id: 'address.placeholder' })}
                error={errors.factorAddress}
              />
            )}
          />
        </Col>
        <Col flex='48%'>
          <Controller
            name='postalCode'
            control={control}
            rules={validation.INVOICE_POSTAL_CODE}
            render={({ field }) => (
              <Input
                required
                field={field}
                label={intl.formatMessage({
                  id: 'postal.code',
                })}
                autoComplete='postalCode'
                placeholder={intl.formatMessage({
                  id: 'postal.code.placeholder',
                })}
                error={errors.postalCode}
              />
            )}
          />
        </Col>
        <Col sm={24}>
          <Button
            btnType='primary'
            bgColor='white-blue-gradient'
            type='submit'
            className={styles['form--btn']}
          >
            تایید اطلاعات
          </Button>
        </Col>
      </Row>
    </form>
  )
}

export default LegalInvoice
