import { useDispatch, useSelector } from 'react-redux'
import { ArrowBackOutlined } from '@mui/icons-material'
import { setVisible } from 'libs/redux/slices/auth'
import Container from 'components/container'
import Button from 'components/ui/Button'
import Col from 'components/ui/Col'
import Row from 'components/ui/Row'

import { solutionGuideItemsData } from 'utils/statics/solutionStatics'
import type { SolutionsProps } from 'containers/solutionPage/interface'
import type { RootState } from 'libs/redux/store'
import styles from './guide.module.scss'

const SolutionGuide = ({ service }: SolutionsProps) => {
  const dispatch = useDispatch()
  const { accessToken } = useSelector((state: RootState) => state.auth)
  const data = solutionGuideItemsData[service]

  return (
    <Container>
      <Row className={styles['guide']} justify='center'>
        <Col className={styles['guide__col']} xxs={24} md={17} lg={14}>
          <span data-selector='title'>{data.title}</span>
          <span data-selector='content'>{data.content}</span>
          {!accessToken && (
            <Button
              data-selector='try'
              btnType='primary'
              bgColor='white-gold-gradient'
              color='black'
              size='large'
              onClick={() =>
                dispatch(setVisible({ mode: 'signUp', visible: true }))
              }
            >
              <span>رایگان امتحان کنید</span>
              <ArrowBackOutlined />
            </Button>
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default SolutionGuide
