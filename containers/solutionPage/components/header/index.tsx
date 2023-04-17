import { useDispatch, useSelector } from 'react-redux'
import { setVisible } from 'libs/redux/slices/auth'
import { ArrowBackOutlined, NavigateBeforeOutlined } from '@mui/icons-material'
import { SolutionHeaderVector } from 'assets/icons'
import Container from 'components/container'
import Button from 'components/ui/Button'
import Col from 'components/ui/Col'
import Row from 'components/ui/Row'

import { solutionHeaderItemsData } from 'utils/statics/solutionStatics'
import type { RootState } from 'libs/redux/store'
import type { SolutionsProps } from '../../interface'
import styles from './header.module.scss'

const SolutionHeader = ({ service }: SolutionsProps) => {
  const dispatch = useDispatch()
  const { accessToken } = useSelector((state: RootState) => state.auth)

  const data = solutionHeaderItemsData[service]

  return (
    <Container>
      <Row className={styles['header']} justify='center' align='middle' wrap>
        <SolutionHeaderVector data-selector='vector' />

        <Col className={styles['header__content']} xxs={24} md={15}>
          <Row align='middle' gap={1}>
            <span data-selector='icon'>{data.icon}</span>
            <span data-selector='subTitle'>{data.subTitle}</span>
          </Row>

          <span data-selector='title'>{data.title}</span>

          <Row className={styles['header__content--action']} align='middle'>
            {!accessToken && (
              <Button
                data-selector='try'
                btnType='primary'
                bgColor='white-gold-gradient'
                color='black'
                onClick={() =>
                  dispatch(setVisible({ mode: 'signUp', visible: true }))
                }
              >
                <span>رایگان امتحان کنید</span>
                <ArrowBackOutlined />
              </Button>
            )}

            <Button
              data-selector='subscription'
              target='_blank'
              href='/pricing'
            >
              <span>مشاهده اشتراک‌ها</span>
              <NavigateBeforeOutlined />
            </Button>
          </Row>
        </Col>

        <Col className={styles['header__bg']} xxs={24} md={8}>
          <img src={`/image/solutions/${service}.png`} alt='bg' />
        </Col>
      </Row>
    </Container>
  )
}

export default SolutionHeader
