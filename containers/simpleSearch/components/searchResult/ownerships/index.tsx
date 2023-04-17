import { SearchComponentProps } from 'containers/simpleSearch/interface'
import Image from 'next/image'
import Button from 'components/ui/Button'
import Row from 'components/ui/Row'
import Col from 'components/ui/Col'

import styles from '../searchResult.module.scss'

const Ownerships = ({ data }: SearchComponentProps) => {
  const { id, titleFa, owner, ownerLink } = data
  return (
    <Row
      key={id}
      className={styles['topBoxContainer__body--items']}
      gutter={16}
    >
      <Col md={14} xxs={24} data-selector='title'>
        <div data-selector='company'>
          <Image src='/svg/search/ownership-1.svg' width={20} height={20} />
        </div>
        <p data-selector='unlinked'>{titleFa}</p>
      </Col>
      <Col md={10} xxs={24} data-selector={ownerLink ? 'owner' : 'unlinked'}>
        مالک:{' '}
        <Button data-selector='topBoxContainer-btn' href={ownerLink as string}>
          <span>{owner}</span>
        </Button>
      </Col>
    </Row>
  )
}

export default Ownerships
