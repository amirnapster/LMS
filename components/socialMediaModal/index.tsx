import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { Close, LinkOutlined } from '@mui/icons-material'
import { setSocialModalVisibility } from 'libs/redux/slices/company'
import { setSocialModalVisibility as setSocialModalVisibilityPerson } from 'libs/redux/slices/person'
import Modal from 'components/ui/Modal'
import Button from 'components/ui/Button'
import Copy from 'components/copy'

import type { RootState } from 'libs/redux/store'
import type { ISocialMedia } from './interface'
import { navigate, socialMedias } from './helper'
import styles from './SocialMediaModal.module.scss'

const SocialMediaModal = ({ name, id, mode }: ISocialMedia) => {
  const dispatch = useDispatch()
  const { socialModalVisible } = useSelector(
    (state: RootState) => state.company
  )
  const { socialModalVisible: socialModalVisiblePerson } = useSelector(
    (state: RootState) => state.person
  )
  const textToShare = `${name} رو در رسمیو ببین`
  const router = useRouter()

  const onClose = () => {
    dispatch(setSocialModalVisibility(false))
    dispatch(setSocialModalVisibilityPerson(false))
  }

  return (
    <Modal
      visible={
        (socialModalVisible as boolean) || (socialModalVisiblePerson as boolean)
      }
      onClose={onClose}
    >
      <div className={styles['socialMedia']}>
        <div className={styles['socialMedia__header']}>
          <h2>اشتراک گذاری</h2>
          <Close onClick={onClose} />
        </div>
        <div className={styles['socialMedia__main']}>
          <div data-selector='section'>
            {socialMedias.map((item) => (
              <Button
                key={item.title}
                target='_blank'
                rel='noopener noreferrer'
                href={navigate(item.title, name, id, textToShare, mode)}
                data-selector='social-media'
              >
                <svg>
                  <use xlinkHref={`#${item.svg}`} />
                </svg>
              </Button>
            ))}
          </div>
          <div data-selector='copy-url-section'>
            <Copy text={`https://rasm.io${router.asPath}`} mode='button' />
            <span data-selector='url-title'>{`rasm.io${router.asPath}`}</span>
            <LinkOutlined data-selector='link-icon' />
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default SocialMediaModal
