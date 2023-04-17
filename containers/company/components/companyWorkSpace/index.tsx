import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  setAllCompanyWorkSpace,
  setCurrentImageIndex,
  setVisible,
} from 'libs/redux/slices/companyWorkSpace'
import { scrollHandler } from 'utils/helpers/global'
import useDeviceDetect from 'utils/hooks/useDeviceDetect'
import Row from 'components/ui/Row'
import Col from 'components/ui/Col'
import NotFoundSection from 'components/notFoundSection'
import Card from 'components/card'
import type { ProductLineItemsType } from 'utils/statics/companyStatics/interface'
import type { RootState } from 'libs/redux/store'
import CardCompanyImage from '../CardCompanyImage'
import ShowImageModal from '../showImageModal'

import type { ChangeMode } from '../showImageModal/interface'
import styles from './companyWorkSpace.module.scss'

const CompanyWorkSpace = () => {
  const { details } = useSelector((state: RootState) => state.company)
  const { isMobile } = useDeviceDetect()
  const dispatch = useDispatch()
  const boxRef = useRef<HTMLInputElement | null>(null)

  const data = details?.companyInfoDetail?.companyWorkplaceImage

  const {
    visible: visibleCompanyWorkSpace,
    allCompanyWorkSpace,
    currentImageIndex,
  } = useSelector((state: RootState) => state.companyWorkSpace)
  const [count, setCount] = useState<number>(6)

  const imagesCount = data?.length as number

  const closeModal = () => {
    dispatch(setVisible(false))
    dispatch(setAllCompanyWorkSpace([]))
    dispatch(setCurrentImageIndex(0))
  }

  const openWorkSpaceImageModal = (number: number) => {
    dispatch(setVisible(true))
    dispatch(setAllCompanyWorkSpace(data as ProductLineItemsType))
    dispatch(setCurrentImageIndex(number))
  }

  const showMoreHandler = () => {
    if (count === 6) setCount(imagesCount)
    else {
      scrollHandler(0, boxRef?.current?.offsetTop as number)
      setCount(6)
    }
  }

  const handleChangeCurrent = (mode: ChangeMode) => {
    if (
      mode === 'increment' &&
      currentImageIndex < allCompanyWorkSpace.length - 1
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

  return details?.companyInfoDetail?.companyWorkplaceImage?.length ? (
    <>
      <Card
        ref={boxRef}
        className={styles['workSpace--card']}
        hasSource={false}
        title='تصاویر محیط کار'
        hasMore={imagesCount > 6}
        onShow={showMoreHandler}
        count={count}
        baseCount={6}
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
              onClick={() => openWorkSpaceImageModal(index)}
            >
              <CardCompanyImage
                src={picture as string}
                title={title as string}
              />
            </Col>
          ))}
        </Row>
      </Card>

      <ShowImageModal
        visible={visibleCompanyWorkSpace}
        closeModal={closeModal}
        currentImageIndex={currentImageIndex}
        allImageCategory={allCompanyWorkSpace}
        handleChangeCurrent={handleChangeCurrent}
        title='تصاویر محیط کار'
      />
    </>
  ) : null
}

export default CompanyWorkSpace
