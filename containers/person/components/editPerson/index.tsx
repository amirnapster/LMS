import { type ChangeEvent, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Controller, useForm } from 'react-hook-form'
import { ArrowForwardIcon } from 'assets/icons'
import { setEditMode } from 'libs/redux/slices/person'
import {
  PersonSuggestion,
  useSubmitPersonSuggestionMutation,
} from 'libs/redux/services/v3'
import { notify } from 'utils/notification'
import { scrollHandler } from 'utils/helpers/global'
import Image from 'next/image'
import Row from 'components/ui/Row'
import Col from 'components/ui/Col'
import Input from 'components/ui/Input'
import Button from 'components/ui/Button'
import TextArea from 'components/ui/Textarea'
import Select from 'components/ui/Select'

import type { RootState } from 'libs/redux/store'
import type { EditPersonData } from './interface'

import styles from './editPerson.module.scss'

const EditPerson = () => {
  const { details } = useSelector((state: RootState) => state.person)
  const [submitPersonSuggestin] = useSubmitPersonSuggestionMutation()
  const data = details?.person
  const dispatch = useDispatch()

  const [selectedLogo, setSelectedLogo] = useState<string>('')

  const defaultValues: EditPersonData = {
    title: '',
    picture: '',
    description: '',
    gender: Boolean(data?.biography?.gender),
    tel: '',
    mobile: '',
    webSite: '',
    email: '',
    instagram: '',
    linkedIn: '',
    twitter: '',
    personId: Number(data?.biography?.nationalId),
  }

  const { handleSubmit, control, reset, register } = useForm({
    defaultValues,
  })

  const handleNewLogoImage = (e: ChangeEvent<HTMLInputElement>) => {
    const formData = new FormData()

    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader()

      formData.append('file', e.target.files[0])
      reader.readAsDataURL(e.target.files[0])
      reader.onload = (event: ProgressEvent<FileReader>) => {
        setSelectedLogo(event?.target?.result as string)
      }
      notify({
        message: 'تصویر بارگذاری شد.',
        config: { autoClose: 3000 },
      })
    }
  }

  const submitHandler = (userData: PersonSuggestion) => {
    reset()
    submitPersonSuggestin({ personSuggestion: userData })
      .unwrap()
      .then(() => {
        notify({
          message: (
            <>
              <div>
                تغییرات با موفقیت ثبت شد. پیشنهادات شما پس از بررسی، روی سایت
                رسمیو قابل مشاهده خواهد بود.
              </div>
              <div>از همکاری شما سپاسگذاریم.</div>
            </>
          ),
          config: { autoClose: 3000 },
        })
      })

    handleEditPerson()
  }

  const handleEditPerson = () => {
    scrollHandler(0, 0)
    dispatch(setEditMode(false))
  }

  useEffect(() => {
    scrollHandler(0, 0)
  }, [])

  return (
    <Row className={styles['editCard']} wrap>
      <Col className={styles['editCard__header']} span={24}>
        <Row
          className={styles['editCard__header--title']}
          justify='center'
          align='middle'
          gap={0}
        >
          <Button btnType='ghost' data-selector='back-icon'>
            <ArrowForwardIcon onClick={handleEditPerson} />
          </Button>
          <span>ویرایش اطلاعات شخص</span>
        </Row>
      </Col>
      <form onSubmit={handleSubmit(submitHandler)} noValidate>
        <Col className={styles['editCard__body']} span={24}>
          <h2>اطلاعات اولیه</h2>
          <Row
            className={styles['editCard__body--baseInfo']}
            justify='start'
            align='middle'
            gap={0}
          >
            <div data-selector='company-logo'>
              <Image
                src={
                  selectedLogo || data?.pictureUrl || '/svg/search/person-1.svg'
                }
                width={selectedLogo || data?.pictureUrl ? 88 : 39}
                height={selectedLogo || data?.pictureUrl ? 88 : 35}
              />
            </div>
            <div data-selector='upload-box'>
              <label htmlFor='file-upload'>
                تغییر تصویر
                <input
                  type='file'
                  id='file-upload'
                  accept='image/png, image/jpeg'
                  onChange={handleNewLogoImage}
                />
              </label>
              <span>* فقط تصویر فرد با فرمت png و jpg</span>
            </div>
          </Row>
          <Row justify='start' align='middle' gutter={[24, 24]} wrap>
            <Col md={12} xxs={24}>
              <Input
                label='نام و نام خانوادگی (فارسی)'
                autoComplete='name'
                readOnly
                defaultValue={data?.title as string}
              />
            </Col>
            <Col md={12} xxs={24}>
              <Controller
                name='title'
                control={control}
                render={({ field }) => (
                  <Input
                    field={field}
                    label='نام و نام خانوادگی (انگلیسی)'
                    placeholder='نام فرد را به انگلیسی وارد نمایید'
                  />
                )}
              />
            </Col>
            <Col md={12} xxs={24}>
              <Input
                label='کد ملی'
                autoComplete='name'
                readOnly
                defaultValue={data?.id}
              />
            </Col>
            <Col md={12} xxs={24}>
              <Select
                register={register('gender')}
                placeholder='جنسیت فرد را انتخاب نمایید'
                label='جنسیت'
              >
                <option value='true'>مرد</option>
                <option value='false'>زن</option>
              </Select>
            </Col>

            <Col xxs={24}>
              <Controller
                name='description'
                control={control}
                render={({ field }) => (
                  <TextArea
                    field={field}
                    label='بیوگرافی'
                    placeholder='بیوگرافی فرد را به صورت خلاصه بنویسید'
                  />
                )}
              />
            </Col>
          </Row>
          <h2>اطلاعات تماس</h2>
          <Row justify='start' align='middle' gutter={[24, 24]} wrap>
            <Col md={6} xxs={24}>
              <Controller
                name='tel'
                control={control}
                render={({ field }) => (
                  <Input
                    field={field}
                    label='شماره تلفن'
                    autoComplete='phone'
                    placeholder='شماره تلفن'
                  />
                )}
              />
            </Col>
            <Col md={6} xxs={24}>
              <Controller
                name='mobile'
                control={control}
                render={({ field }) => (
                  <Input
                    field={field}
                    label='شماره موبایل'
                    autoComplete='mobile'
                    placeholder='شماره موبایل'
                  />
                )}
              />
            </Col>
            <Col md={6} xxs={24}>
              <Controller
                name='webSite'
                control={control}
                render={({ field }) => (
                  <Input
                    field={field}
                    label='سایت'
                    autoComplete='webSite'
                    placeholder='سایت'
                  />
                )}
              />
            </Col>
            <Col md={6} xxs={24}>
              <Controller
                name='email'
                control={control}
                render={({ field }) => (
                  <Input
                    field={field}
                    label='ایمیل'
                    autoComplete='email'
                    placeholder='ایمیل'
                  />
                )}
              />
            </Col>
          </Row>
          <h2>شبکه‌های اجتماعی</h2>
          <Row justify='start' align='middle' gutter={[24, 24]} wrap>
            <Col md={8} xxs={24}>
              <Controller
                name='instagram'
                control={control}
                render={({ field }) => (
                  <Input
                    field={field}
                    label='اینستاگرام'
                    autoComplete='instagram'
                    placeholder='نام کاربری (مانند example_etc)'
                  />
                )}
              />
            </Col>
            <Col md={8} xxs={24}>
              <Controller
                name='linkedIn'
                control={control}
                render={({ field }) => (
                  <Input
                    field={field}
                    label='لینکدین'
                    autoComplete='linkedIn'
                    placeholder='لینک (مانند linkedin.com/in/example)'
                  />
                )}
              />
            </Col>
            <Col md={8} xxs={24}>
              <Controller
                name='twitter'
                control={control}
                render={({ field }) => (
                  <Input
                    field={field}
                    label='توییتر'
                    autoComplete='twitter'
                    placeholder='نام کاربری (مانند example_etc) '
                  />
                )}
              />
            </Col>
          </Row>
        </Col>
        <Col className={styles['editCard__footer']} span={24}>
          <Button btnType='ghost' onClick={handleEditPerson}>
            انصراف
          </Button>
          <Button btnType='primary' bgColor='white-blue-gradient' type='submit'>
            ثبت تغییرات
          </Button>
        </Col>
      </form>
    </Row>
  )
}

export default EditPerson
