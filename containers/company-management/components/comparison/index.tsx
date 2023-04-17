import { useDispatch } from 'react-redux'
import { ArrowBackOutlined } from '@mui/icons-material'
import { CheckIcon, VerifiedCompanyIcon } from 'assets/icons'
import { setVisible } from 'libs/redux/slices/companyAuth'
import Image from 'next/image'
import Button from 'components/ui/Button'
import Container from 'components/container'
import Row from 'components/ui/Row'
import Col from 'components/ui/Col'

import {
  SolutionCompanyComparisonHeader,
  SolutionCompanyComparisonBody,
} from 'utils/statics/solutionStatics'

import styles from './comparison.module.scss'

const SolutionCompanyComparison = () => {
  const dispatch = useDispatch()

  const handleData = (data: string | boolean) => {
    if (typeof data === 'boolean') {
      if (data) return <CheckIcon />
      return '-'
    }

    return data
  }

  return (
    <Container>
      <Row className={styles['comparison']} justify='center' wrap>
        <Col xxs={24} lg={20} className={styles['comparison--title']}>
          تفاوت‌های پروفایل اختصاصی و عادی
        </Col>
        <Col xxs={24} lg={20} className={styles['comparison--box']}>
          <Row align='top' justify='center'>
            {SolutionCompanyComparisonHeader.map(({ title }) => (
              <Col xxs={8} data-selector='header-item' key={title as string}>
                <h2>{title}</h2>
              </Col>
            ))}
          </Row>
          {SolutionCompanyComparisonBody.map((item, index) => (
            <Row
              className={styles['comparison--box--body']}
              key={item[0]}
              align='top'
              justify='center'
              wrap
            >
              {item?.map((rowsItem) => (
                <Col xxs={8} data-selector='body-item'>
                  <h2>{handleData(rowsItem)}</h2>
                </Col>
              ))}
            </Row>
          ))}

          <Row
            className={styles['comparison--box--body']}
            align='top'
            justify='center'
            wrap
          >
            <Col xxs={24} data-selector='body-item'>
              <Row
                data-selector='footer'
                direction='column'
                align='middle'
                gap={2}
              >
                <VerifiedCompanyIcon />
                <span data-selector='free'>
                  این سرویس برای مشتریان اولیه تا اطلاع بعدی رایگان است.
                </span>

                <Button
                  btnType='primary'
                  onClick={() => dispatch(setVisible(true))}
                  bgColor='white-blue-gradient'
                  color='simple-white'
                  data-selector='free-btn'
                  size='large'
                >
                  <span>همین حالا رایگان امتحان کنید</span>
                  <ArrowBackOutlined />
                </Button>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default SolutionCompanyComparison
