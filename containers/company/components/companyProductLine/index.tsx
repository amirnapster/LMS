import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  setAllCompanyProductLine,
  setCurrentImageIndex,
  setVisible,
} from 'libs/redux/slices/companyProductLine'
import { scrollHandler } from 'utils/helpers/global'
import useDeviceDetect from 'utils/hooks/useDeviceDetect'
import Row from 'components/ui/Row'
import Col from 'components/ui/Col'
import NotFoundSection from 'components/notFoundSection'
import Card from 'components/card'
import type { RootState } from 'libs/redux/store'
import type { ProductLineItemsType } from 'utils/statics/companyStatics/interface'
import CardCompanyImage from '../CardCompanyImage'
import ShowImageModal from '../showImageModal'

import type { ChangeMode } from '../showImageModal/interface'
import styles from './companyProductLine.module.scss'

const CompanyProductLine = () => {
  const { details } = useSelector((state: RootState) => state.company)
  const { isMobile } = useDeviceDetect()

  const data = details?.companyInfoDetail?.companyProductionLineImage

  const dispatch = useDispatch()
  const boxRef = useRef<HTMLInputElement | null>(null)
  const {
    visible: visibleCompanyProductLine,
    allCompanyProductLine,
    currentImageIndex,
  } = useSelector((state: RootState) => state.companyProductLine)
  const [count, setCount] = useState<number>(3)

  const productCount = data?.length as number

  const closeModal = () => {
    dispatch(setVisible(false))
    dispatch(setAllCompanyProductLine([]))
    dispatch(setCurrentImageIndex(0))
  }

  const openProductLineImageModal = (number: number) => {
    dispatch(setVisible(true))
    dispatch(setAllCompanyProductLine(data as ProductLineItemsType))
    dispatch(setCurrentImageIndex(number))
  }

  const showMoreHandler = () => {
    if (count === 3) setCount(productCount)
    else {
      setCount(3)
      scrollHandler(0, boxRef?.current?.offsetTop as number)
    }
  }

  const handleChangeCurrent = (mode: ChangeMode) => {
    if (
      mode === 'increment' &&
      currentImageIndex < allCompanyProductLine.length - 1
    ) {
      dispatch(setCurrentImageIndex(currentImageIndex + 1))
    }
    if (mode === 'decrement' && currentImageIndex > 0) {
      dispatch(setCurrentImageIndex(currentImageIndex - 1))
    }
  }
  useEffect(() => {
    if (isMobile) showMoreHandler()
  }, [])

  return details?.companyInfoDetail?.companyProductionLineImage?.length ? (
    <>
      <Card
        ref={boxRef}
        className={styles['product--card']}
        hasSource={false}
        title='تصاویر خط تولید'
        info='بخش‌های علامت‌گذاری شده با این آیکن، شامل اطلاعات تکمیل شده توسط شرکت است.'
        hasMore={productCount > 3}
        onShow={showMoreHandler}
        count={count}
        baseCount={3}
      >
        <Row
          justify='start'
          align='middle'
          data-selector='images-box'
          gutter={{ xxs: 8, xs: 8, sm: 8, md: 16 }}
          wrap
        >
          {data?.slice(0, count).map(({ picture, title }, index) => (
            <Col
              key={title}
              md={12}
              lg={8}
              onClick={() => openProductLineImageModal(index)}
            >
              <CardCompanyImage
                src={picture as string}
                title={title as string}
                moreInformation={false}
              />
            </Col>
          ))}
        </Row>
      </Card>

      <ShowImageModal
        visible={visibleCompanyProductLine}
        closeModal={closeModal}
        currentImageIndex={currentImageIndex}
        allImageCategory={allCompanyProductLine}
        handleChangeCurrent={handleChangeCurrent}
        title='تصاویر خط تولید'
      />
    </>
  ) : null
}

export default CompanyProductLine
