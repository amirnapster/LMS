import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SolutionArrowLeftIcon } from 'assets/icons'
import { ArrowBackOutlined, NavigateBeforeOutlined } from '@mui/icons-material'
import { setVisible } from 'libs/redux/slices/auth'
import Container from 'components/container'
import Button from 'components/ui/Button'
import Col from 'components/ui/Col'
import Row from 'components/ui/Row'

import { solutionDescriptionItemsData } from 'utils/statics/solutionStatics'
import type { SolutionsProps } from 'containers/solutionPage/interface'
import type { RootState } from 'libs/redux/store'
import styles from './description.module.scss'

const SolutionDescription = ({ service }: SolutionsProps) => {
  const dispatch = useDispatch()
  const elementsRef = useRef<HTMLSpanElement[]>([])
  const [indexOfImg, setIndexOfImg] = useState<number>(0)
  const { accessToken } = useSelector((state: RootState) => state.auth)

  const data = solutionDescriptionItemsData[service]

  function handleScroll() {
    elementsRef?.current.forEach((element, index) => {
      const castingElement = element as HTMLSpanElement

      if (castingElement.getBoundingClientRect().y < 300) {
        setIndexOfImg(index)
      }
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const showLoginModal = () =>
    dispatch(setVisible({ mode: 'signUp', visible: true }))

  const handleRef = (ref: HTMLSpanElement | null, index: number) => {
    elementsRef.current[index] = ref as HTMLSpanElement
  }

  return (
    <Container className={styles['description__container']}>
      <div className={styles['description']}>
        <Row
          className={styles['description__wrapper']}
          gutter={{ lg: 40 }}
          wrap
        >
          <div data-selector='blur' />
          <Col className={styles['description--img']} xxs={24} md={12}>
            <img src={data[indexOfImg].img as string} alt='solution-bg' />
          </Col>

          <Col className={styles['description__col']} xxs={24} md={12}>
            {data.map((item, index) => (
              <Row
                key={item.title}
                className={styles['description__row']}
                direction='column'
              >
                <Row
                  className={styles['description__title']}
                  align='top'
                  gap={0}
                >
                  <SolutionArrowLeftIcon />

                  <span ref={(ref) => handleRef(ref, index)}>{item.title}</span>
                </Row>

                <span className={styles['description--content']}>
                  {item.content}
                </span>

                <img
                  className={styles['description--bg']}
                  src={item.img as string}
                  alt='solution-bg'
                />
              </Row>
            ))}

            {accessToken ? (
              <Button
                className={styles['description--subscription']}
                href='/pricing'
                target='_blank'
              >
                <span>مشاهده اشتراک‌ها</span>
                <NavigateBeforeOutlined />
              </Button>
            ) : (
              <Button
                className={styles['description--try']}
                onClick={showLoginModal}
                btnType='primary'
                bgColor='white-gold-gradient'
                size='large'
              >
                <span>رایگان امتحان کنید</span>
                <ArrowBackOutlined />
              </Button>
            )}
          </Col>
        </Row>
      </div>
    </Container>
  )
}

export default SolutionDescription
