import { useDispatch } from 'react-redux'
import { ArrowSideIcon } from 'assets/icons'
import { setVisible } from 'libs/redux/slices/requestConsultant'
import { staticsHeaderData } from 'utils/statics'
import RequestConsultantModal from 'components/requestConsultantModal'
import Container from 'components/container'
import cn from 'classnames'
import Button from 'components/ui/Button'
import Row from 'components/ui/Row'

import type { StaticPageHeaderProps } from 'containers/staticPage/interface'
import styles from './header.module.scss'

const StaticPageHeader = ({ service, className }: StaticPageHeaderProps) => {
  const dispatch = useDispatch()
  const currentService = staticsHeaderData[service]
  const openRequestModal = () => dispatch(setVisible(true))

  return (
    <Container>
      <div
        className={cn(styles['header'], className, currentService.className)}
      >
        <RequestConsultantModal />
        <div className={styles['header--icon']}>{currentService.icon}</div>
        <div className={styles['header--subtitle']}>
          سرویس {currentService.title}
        </div>
        <div className={styles['header--title']}>{currentService.subtitle}</div>

        <Row data-selector='action' justify='center' gap={1}>
          <Button
            btnType='primary'
            size='large'
            bgColor='white-blue-gradient'
            data-selector='request-consultant'
            onClick={openRequestModal}
            ripple
          >
            درخواست مشاوره
          </Button>
          <Button
            btnType='link'
            href='/pricing'
            data-selector='subscription'
            ripple
          >
            <span>مشاهده اشتراک‌ها</span>
            <ArrowSideIcon />
          </Button>
        </Row>
      </div>
    </Container>
  )
}

export default StaticPageHeader
