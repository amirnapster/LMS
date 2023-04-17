import { type ChangeEvent, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Controller, useForm } from 'react-hook-form'
import { ArrowForwardIcon, CompanyEditMapIcon } from 'assets/icons'
import { Close } from '@mui/icons-material'
import { setEditMode } from 'libs/redux/slices/company'
import Image from 'next/image'
import Row from 'components/ui/Row'
import Col from 'components/ui/Col'
import Modal from 'components/ui/Modal'
import Input from 'components/ui/Input'
import Button from 'components/ui/Button'
import TextArea from 'components/ui/Textarea'

import { notify } from 'utils/notification'
import { scrollHandler } from 'utils/helpers/global'
import type { RootState } from 'libs/redux/store'
import type { EditCompanyData } from './interface'

import MapModal from './helper'
import styles from './editCompany.module.scss'

const EditCompany = () => {
  const { details } = useSelector((state: RootState) => state.company)
  const data = details?.summary?.companySummary
  const dispatch = useDispatch()

  const [visible, setVisisble] = useState<boolean>(false)
  const [selectedLogo, setSelectedLogo] = useState<string>('')

  const defaultValues: EditCompanyData = {
    nameEn: '',
    picture: '',
    taxNumber: '',
    history: '',
    phone: '',
    fax: '',
    webSite: '',
    email: '',
    instagram: '',
    linkedIn: '',
    twitter: '',
    lat: 0,
    lng: 0,
  }

  const { handleSubmit, register, control, reset, setValue } = useForm({
    defaultValues,
  })

  const handleOpenModal = () => setVisisble(true)
  const handleColseModal = () => setVisisble(false)

  const handleNewLogoImage = (e: ChangeEvent<HTMLInputElement>) => {
    const formData = new FormData()

    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader()

      // Command => yarn generate:endpoints dosnt work for me dear Taha and i couldnt generat company V1 endpoints!!! after generated that we can complete this part

      // Call /api/v1/Companies/UploadCompanyImage API and formData to server get imageUrl and => setValue('picture', res.data.imageUrl)

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

  const setPosition = (position: [number, number]) => {
    position.forEach((latlng, index) =>
      setValue(index === 1 ? 'lng' : 'lat', latlng)
    )
  }

  const submitHandler = (userData: EditCompanyData) => {
    // console.log('userData', userData)
    // Command => yarn generate:endpoints dosnt work for me dear Taha and i couldnt generat company V1 endpoints!!! after generated that we can complete this part

    // Call /api/v1/Companies/SubmitCompanySuggestion API and POST userData  to server

    reset()
    notify({
      message: (
        <>
          <div>
            تغییرات با موفقیت ثبت شد. پیشنهادات شما پس از بررسی، روی سایت رسمیو
            قابل مشاهده خواهد بود.
          </div>
          <div>از همکاری شما سپاسگذاریم.</div>
        </>
      ),
      config: { autoClose: 3000 },
    })

    handleEditCompany()
  }

  const handleEditCompany = () => {
    scrollHandler(0, 0)
    dispatch(setEditMode(false))
  }

  useEffect(() => {
    scrollHandler(0, 0)
  }, [])

  return (
    <>
      <Row className={styles['editCard']} wrap>
        <Col className={styles['editCard__header']} span={24}>
          <Row
            className={styles['editCard__header--title']}
            justify='center'
            align='middle'
            gap={0}
          >
            <Button btnType='ghost' data-selector='back-icon'>
              <ArrowForwardIcon onClick={handleEditCompany} />
            </Button>
            <span>ویرایش اطلاعات شرکت</span>
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
                    selectedLogo ||
                    data?.pictureUrl ||
                    '/svg/search/company-1.svg'
                  }
                  width={selectedLogo || data?.pictureUrl ? 88 : 39}
                  height={selectedLogo || data?.pictureUrl ? 88 : 35}
                />
              </div>
              <div data-selector='upload-box'>
                <label htmlFor='file-upload'>
                  تغییر لوگوی شرکت
                  <input
                    type='file'
                    id='file-upload'
                    accept='image/png, image/jpeg'
                    onChange={handleNewLogoImage}
                  />
                </label>
                <span>* فقط لوگوی شرکت در فرمت های png و jpg</span>
              </div>
            </Row>
            <Row justify='start' align='middle' gutter={[24, 24]} wrap>
              <Col md={12} xxs={24}>
                <Input
                  label='نام شرکت (فارسی)'
                  autoComplete='name'
                  readOnly
                  defaultValue={data?.title as string}
                />
              </Col>
              <Col md={12} xxs={24}>
                <Controller
                  name='nameEn'
                  control={control}
                  render={({ field }) => (
                    <Input
                      field={field}
                      label='نام شرکت (انگلیسی)'
                      placeholder='نام شرکت'
                    />
                  )}
                />
              </Col>
              <Col md={8} xxs={24}>
                <Input
                  label='شناسه ملی'
                  autoComplete='name'
                  readOnly
                  defaultValue={data?.id}
                />
              </Col>
              <Col md={8} xxs={24}>
                <Input
                  label='شماره ثبت'
                  autoComplete='name'
                  readOnly
                  defaultValue={data?.summary?.registrationNo as string}
                />
              </Col>
              <Col md={8} xxs={24}>
                <Controller
                  name='taxNumber'
                  control={control}
                  render={({ field }) => (
                    <Input
                      field={field}
                      label='شماره اقتصادی'
                      autoComplete='taxNumber'
                      placeholder='شماره اقتصادی'
                    />
                  )}
                />
              </Col>
              <Col xxs={24}>
                <Controller
                  name='history'
                  control={control}
                  render={({ field }) => (
                    <TextArea
                      field={field}
                      label='تاریخچه شرکت'
                      placeholder='تاریخچه شرکت را بصورت خلاصه بنویسید'
                    />
                  )}
                />
              </Col>
            </Row>
            <h2>اطلاعات تماس</h2>
            <Row justify='start' align='middle' gutter={[24, 24]} wrap>
              <Col xl={22} lg={21} md={20} sm={19} xxs={24}>
                <Input
                  readOnly
                  label='آدرس'
                  placeholder='استان، شهر، منطقه، خیابان، کوچه و ...'
                  defaultValue={data?.communications?.address as string}
                />
              </Col>
              <Col
                xl={2}
                lg={3}
                md={4}
                sm={5}
                xxs={24}
                data-selector='edit-img'
              >
                <div
                  aria-hidden
                  onClick={handleOpenModal}
                  data-selector='cover'
                >
                  ویرایش آدرس روی نقشه
                </div>
                <img src={CompanyEditMapIcon} alt='rasmio edit company' />
              </Col>
              <Col md={12} xxs={24}>
                <Controller
                  name='phone'
                  control={control}
                  render={({ field }) => (
                    <Input
                      field={field}
                      label='شماره تلفن'
                      autoComplete='phone'
                      placeholder='شماره تلفن شرکت'
                    />
                  )}
                />
              </Col>
              <Col md={12} xxs={24}>
                <Controller
                  name='fax'
                  control={control}
                  render={({ field }) => (
                    <Input
                      field={field}
                      label='فکس'
                      autoComplete='fax'
                      placeholder='فکس شرکت'
                    />
                  )}
                />
              </Col>
              <Col md={12} xxs={24}>
                <Controller
                  name='webSite'
                  control={control}
                  render={({ field }) => (
                    <Input
                      field={field}
                      label='سایت'
                      autoComplete='webSite'
                      placeholder='سایت شرکت'
                    />
                  )}
                />
              </Col>
              <Col md={12} xxs={24}>
                <Controller
                  name='email'
                  control={control}
                  render={({ field }) => (
                    <Input
                      field={field}
                      label='ایمیل'
                      autoComplete='email'
                      placeholder='ایمیل شرکت'
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
            <Button btnType='ghost' onClick={handleEditCompany}>
              انصراف
            </Button>
            <Button
              btnType='primary'
              bgColor='white-blue-gradient'
              type='submit'
            >
              ثبت تغییرات
            </Button>
          </Col>
        </form>
      </Row>
      <Modal visible={visible} onClose={handleColseModal}>
        <div className={styles['mapModal']}>
          <div className={styles['mapModal__header']}>
            <p>انتخاب آدرس روی نقشه</p>
            <Button onClick={handleColseModal}>
              <Close />
            </Button>
          </div>
          <MapModal setValue={setPosition} onClose={handleColseModal} />
        </div>
      </Modal>
    </>
  )
}

export default EditCompany
