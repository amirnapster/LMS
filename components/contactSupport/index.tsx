import { useDispatch } from 'react-redux'
import {
  Close,
  ArrowForwardOutlined,
  LocalPhoneOutlined,
  EmailOutlined,
} from '@mui/icons-material'
import { useIntl } from 'react-intl'
import Button from 'components/ui/Button'
import Input from 'components/ui/Input'
import PostSvg from 'public/svg/company/postBox.svg'

import styles from './contactSupport.module.scss'

const ContactSupport = () => {
  const dispatch = useDispatch()
  const intl = useIntl()

  const handleClose = () => console.log('close')
  // dispatch(displayCurrentState({ showContact: false }))

  return (
    <div className={styles['contactSupport']}>
      <div className={styles['contactSupport__header']}>
        <div>
          <ArrowForwardOutlined onClick={handleClose} />
          <PostSvg />
          <Close onClick={handleClose} />
        </div>

        <p>{intl.formatMessage({ id: 'contact.support.conection' })}</p>
      </div>

      <div className={styles['contactSupport__content']}>
        <div className={styles['contactSupport__content--phone']}>
          <div>
            <LocalPhoneOutlined />
            <a href='tel:+982191304041'>021-91304041</a>
          </div>
          <p>{intl.formatMessage({ id: 'contact.support.responder' })}</p>
        </div>

        <div className={styles['contactSupport__content--email']}>
          <EmailOutlined />
          <a href='mailto:salam@rasm.io'>salam@rasm.io</a>
        </div>

        <form className={styles['contactSupport__content__form']}>
          <p>{intl.formatMessage({ id: 'contact.support.send' })}</p>

          <div className={styles['contactSupport__content__form__wrapper']}>
            <Input
              className={
                styles['contactSupport__content__form__wrapper--input']
              }
              label={intl.formatMessage({ id: 'contact.support.name' })}
              placeholder={intl.formatMessage({
                id: 'contact.support.enter.name',
              })}
            />

            <Input
              className={
                styles['contactSupport__content__form__wrapper--input']
              }
              label={intl.formatMessage({
                id: 'contact.support.phone.number',
              })}
              placeholder={intl.formatMessage({
                id: 'contact.support.enter.phone.number',
              })}
            />
          </div>

          <textarea
            className={styles['contactSupport__content__form--description']}
            placeholder={intl.formatMessage({
              id: 'contact.support.description',
            })}
          />

          <Button
            className={styles['contactSupport__content__form--submit']}
            btnType='primary'
          >
            {intl.formatMessage({ id: 'contact.support.send.message' })}
          </Button>
        </form>
      </div>
    </div>
  )
}

export default ContactSupport
