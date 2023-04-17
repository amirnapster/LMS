import { useDispatch } from 'react-redux'
import { ArrowBackOutlined } from '@mui/icons-material'
import {
  SolutionCompanyLineIcon,
  SolutionCompanyVerticalLineIcon,
} from 'assets/icons'
import { setVisible } from 'libs/redux/slices/companyAuth'
import Col from 'components/ui/Col'
import Container from 'components/container'
import Button from 'components/ui/Button'
import Row from 'components/ui/Row'
import cn from 'classnames'

import { SolutionCompanyManagementItemsData } from 'utils/statics/solutionStatics'
import type { SolutionCompanyManagementItemsType } from 'utils/statics/solutionStatics/interface'
import styles from './management.module.scss'

const SolutionCompanyManagement = () => {
  const dispatch = useDispatch()
  const data = Object.keys(SolutionCompanyManagementItemsData)

  return (
    <Container>
      <Row className={styles['management']} direction='column' align='middle'>
        <span className={styles['management--title']}>
          فرآیند مدیریت پروفایل شرکت
        </span>

        <Row className={styles['management__row']} justify='center'>
          {data.map((key, index) => (
            <>
              <Col
                md={3}
                lg={2}
                key={key}
                className={cn(
                  styles['management__col'],
                  data.length - 1 === index
                    ? styles['management__col--spacing']
                    : ''
                )}
              >
                <Row direction='column' align='middle'>
                  <Row
                    className={styles['management__img']}
                    justify='center'
                    align='middle'
                  >
                    <Row data-selector='number' justify='center' align='middle'>
                      {index + 1}
                    </Row>

                    <img src={`/image/solutions/${key}.png`} alt='start-auth' />
                  </Row>

                  <span data-selector='title'>
                    {
                      SolutionCompanyManagementItemsData[
                        key as keyof SolutionCompanyManagementItemsType
                      ]
                    }
                  </span>
                </Row>
              </Col>
              {data.length - 1 !== index && (
                <Col md={6} className={'justify-center pt-4 d-flex'}>
                  <SolutionCompanyLineIcon data-selector='line' />
                  <SolutionCompanyVerticalLineIcon data-selector='vertical-line' />
                </Col>
              )}
            </>
          ))}
        </Row>
        <Button
          data-selector='start'
          onClick={() => dispatch(setVisible(true))}
          btnType='primary'
          bgColor='white-blue-gradient'
          color='simple-white'
          size='large'
        >
          <span>شروع فرایند</span>
          <ArrowBackOutlined />
        </Button>
      </Row>
    </Container>
  )
}

export default SolutionCompanyManagement
