import { useIntl } from 'react-intl'
import { Controller, useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { validation } from 'utils/helpers/validations'
import { setCurrentStep, setProvince } from 'libs/redux/slices/invoice'
import {
  useGetProvinceDataQuery,
  useGetVahedSabtiDataQuery,
  useSendRealPersonMutation,
} from 'libs/redux/services/invoice'
import Button from 'components/ui/Button'
import Col from 'components/ui/Col'
import Input from 'components/ui/Input'
import Row from 'components/ui/Row'
import Select from 'components/ui/Select'

import type { RootState } from 'libs/redux/store'
import type { ChangeEvent } from 'react'
import type { RealInvoiceData } from 'components/invoice/interface'
import { RealInvoiceDefaultValues as defaultValues } from './helper'
import styles from '../../invoice.module.scss'

const RealInvoice = () => {
  const intl = useIntl()
  const dispatch = useDispatch()
  const { province } = useSelector((state: RootState) => state.invoice)
  const { data: provinceData } = useGetProvinceDataQuery(null)
  const { data: vahedSabtiData } = useGetVahedSabtiDataQuery(province, {
    skip: !province,
  })
  const [sendRealPerson] = useSendRealPersonMutation()

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

  const onSubmit = (data: RealInvoiceData) => {
    sendRealPerson(data)
      .unwrap()
      .then(() => {
        dispatch(setCurrentStep(2))
        setTimeout(() => {
          dispatch(setCurrentStep(3))
        }, 3000)
      })
  }

  return (
    <form
      className={styles['form']}
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <Row wrap align='middle' justify='space-between'>
        <Col xs={24}>
          <Controller
            name='fullName'
            control={control}
            rules={validation.INVOICE_USERNAME}
            render={({ field }) => (
              <Input
                required
                field={field}
                label={intl.formatMessage({
                  id: 'contact.support.name',
                })}
                autoComplete='fullName'
                placeholder={intl.formatMessage({
                  id: 'contact.support.enter.name',
                })}
                error={errors.fullName}
              />
            )}
          />
        </Col>
        <Col flex='48%'>
          <Controller
            name='nationalCode'
            control={control}
            rules={validation.INVOICE_NATIONAL_CODE}
            render={({ field }) => (
              <Input
                required
                field={field}
                label={intl.formatMessage({
                  id: 'national.code',
                })}
                autoComplete='nationalCode'
                placeholder={intl.formatMessage({
                  id: 'national.code.placeholder',
                })}
                error={errors.nationalCode}
              />
            )}
          />
        </Col>
        <Col flex='48%'>
          <Controller
            name='mobile'
            control={control}
            rules={validation.CONFIRM_CEO_PHONE_NUMBER}
            render={({ field }) => (
              <Input
                required
                field={field}
                label={intl.formatMessage({
                  id: 'contact.support.phone.number',
                })}
                autoComplete='mobile'
                placeholder={intl.formatMessage({ id: 'mobile.placeholder' })}
                error={errors.mobile}
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
                onChange={changeProvinceHandler}
                field={field}
                label={intl.formatMessage({
                  id: 'province',
                })}
                error={errors.province}
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
            name='address'
            control={control}
            rules={validation.INVOICE_ADDRESS}
            render={({ field }) => (
              <Input
                required
                field={field}
                label={intl.formatMessage({
                  id: 'address',
                })}
                autoComplete='address'
                placeholder={intl.formatMessage({ id: 'address.placeholder' })}
                error={errors.address}
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
        <Col xs={24}>
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

export default RealInvoice
