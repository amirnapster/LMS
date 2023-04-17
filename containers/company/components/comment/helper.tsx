import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { useSaveCommentMutation } from 'libs/redux/services/allv3'
import { validation } from 'utils/helpers/validations'
import { notify } from 'utils/notification'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'
import { setVisible } from 'libs/redux/slices/auth'
import Row from 'components/ui/Row'
import Col from 'components/ui/Col'
import Input from 'components/ui/Input'
import TextArea from 'components/ui/Textarea'
import Button from 'components/ui/Button'

import type {
  CommentPaginationProps,
  CreateNewCommentProps,
  ICompanyComment,
} from 'containers/company/interface'
import type { RootState } from 'libs/redux/store'
import styles from './companyComment.module.scss'

export const CreateNewComment = ({ companyId }: CreateNewCommentProps) => {
  const dispatch = useDispatch()
  const { accessToken } = useSelector((state: RootState) => state.auth)
  const [sendComment] = useSaveCommentMutation()
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: { FullName: '', commentText: '' },
  })

  const openAuthModal = () => {
    if (!accessToken) dispatch(setVisible({ visible: true, mode: 'signIn' }))
  }

  const onSubmit = (values: ICompanyComment) => {
    sendComment({ submitCommentForm: { entityId: companyId, ...values } })
      .unwrap()
      .then(() => {
        notify({
          type: 'info',
          message: 'دیدگاه شما پس از تایید توسط ادمین ثبت خواهد شد.',
        })
        reset()
      })
  }

  return (
    <Row gutter={{ sm: 24, md: 24, lg: 48 }} wrap>
      <Col span={24} className={styles['comment__new--title']}>
        دیدگاه شما
      </Col>
      <Col className={styles['comment__new__form']} xxs={24} md={12}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Row gap={1} wrap>
            <Col span={24}>
              <Input
                register={register('FullName', validation.FULL_NAME)}
                error={errors?.FullName}
                placeholder='نام و نام خانوادگی'
              />
            </Col>
            <Col span={24}>
              <TextArea
                register={register('commentText', validation.MESSAGE)}
                error={errors?.commentText}
                placeholder='دیدگاه خود را اینجا بنویسید...'
              />
            </Col>
            <Col span={24}>
              <Button
                onClick={openAuthModal}
                size='medium'
                type={accessToken ? 'submit' : 'button'}
                btnType='primary'
                bgColor='white-blue-gradient'
              >
                ثبت دیدگاه
              </Button>
            </Col>
          </Row>
        </form>
      </Col>
      <Col className={styles['comment__new__policy']} xxs={24} md={12}>
        <div data-selector='title'>قوانین انتشار نظرات</div>
        <div data-selector='subtitle'>
          لطفا پیش از ارسال نظر، خلاصه قوانین زیر را مطالعه کنید:
        </div>
        <ul>
          <li>
            لازم است محتوای ارسالی منطبق برعرف و شئونات جامعه و با بیانی رسمی و
            عاری از لحن تند، تمسخرو توهین باشد.
          </li>
          <li>
            از ارسال لینک‌های سایت‌های دیگر و ارایه‌ی اطلاعات شخصی خودتان مثل
            شماره تماس، ایمیل و آی‌دی شبکه‌های اجتماعی پرهیز کنید.
          </li>
          <li>
            در نظر داشته باشید هدف نهایی از ارائه‌ی نظر درباره‌ی شرکت ارائه‌ی
            اطلاعات مشخص و دقیق برای راهنمایی سایر کاربران در فرآیند ارتباط با
            شرکت است.
          </li>
        </ul>
      </Col>
    </Row>
  )
}

export const CommentPagination = ({
  totalPage,
  handlePage,
  currentPage,
}: CommentPaginationProps) => {
  const pageArray = Array.from(Array(Math.ceil(totalPage as number)).keys())

  return (
    <Row
      className={styles['comment__pagination']}
      justify='center'
      align='middle'
    >
      <Col xxs={18} sm={10} md={8}>
        <Button
          onClick={() => handlePage(currentPage - 2)}
          disabled={currentPage === 1}
          btnType='primary'
          bgColor='white-blue-gradient'
          data-selector='back'
          ripple
        >
          <KeyboardArrowRight />
        </Button>
        <div data-selector='pages'>
          {pageArray?.map((pageSize) => (
            <Button
              className={
                currentPage === pageSize + 1
                  ? styles['comment__pagination--active']
                  : ''
              }
              key={pageSize + 1}
              onClick={() => handlePage(pageSize)}
            >
              {pageSize + 1}
            </Button>
          ))}
        </div>
        <Button
          onClick={() => handlePage(currentPage)}
          disabled={currentPage === Math.ceil(totalPage as number)}
          btnType='primary'
          bgColor='white-blue-gradient'
          data-selector='next'
          ripple
        >
          <KeyboardArrowLeft />
        </Button>
      </Col>
    </Row>
  )
}
