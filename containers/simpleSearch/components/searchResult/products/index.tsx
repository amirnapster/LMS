import Button from 'components/ui/Button'
import Image from 'next/image'
import Row from 'components/ui/Row'
import Col from 'components/ui/Col'

import type { SearchComponentProps } from 'containers/simpleSearch/interface'
import styles from '../searchResult.module.scss'

const Products = ({ data }: SearchComponentProps) => {
  const { titleFa, owner, ownerLink, id } = data
  return (
    <Row
      className={styles['topBoxContainer__body--items']}
      key={id}
      gutter={16}
    >
      <Col md={14} xxs={24} data-selector='title'>
        <div data-selector='company'>
          <Image src='/svg/search/products-1.svg' width={20} height={20} />
        </div>
        <p data-selector='unlinked'>{titleFa}</p>
      </Col>
      {owner?.trim() && (
        <Col md={10} xxs={24} data-selector='owner'>
          نام شرکت‌:{' '}
          <Button
            data-selector='topBoxContainer-btn'
            href={ownerLink as string}
          >
            <span> {owner}</span>
          </Button>
        </Col>
      )}
    </Row>
  )
}

export default Products
