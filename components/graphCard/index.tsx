import { CompanyGraphIcon } from 'assets/icons'
import Image from 'next/image'
import Row from 'components/ui/Row'
import Col from 'components/ui/Col'
import Skeleton from 'components/skeleton'
import Button from 'components/ui/Button'
import Card from 'components/card'

import { WEB } from 'utils/statics/routes/web'
import {
  GetDetailsQueryResult,
  GetPersonSummaryQueryResult,
} from 'libs/redux/services/v3'
import styles from './graphCard.module.scss'

interface GraphCardProps {
  id: number | undefined
  details: GetDetailsQueryResult | GetPersonSummaryQueryResult | undefined
  mode: 'company' | 'person'
}

const GraphCard = ({ id, details, mode }: GraphCardProps) => (
  <Skeleton data={details} width='100%' height='172px' variant='rounded'>
    <Card className={styles['graph']} title='شبکه ارتباطات'>
      <Row align='middle' wrap>
        <Col span={24} className={styles['graph--image']}>
          <Image src='/image/graph.png' layout='fill' />
          <Row data-selector='hidden' align='middle' justify='center'>
            <Button
              href={`${
                mode === 'company' ? WEB.COMPANY_GRAPH : WEB.PERSON_GRAPH
              }/${id}`}
              size='medium'
              btnType='secondary'
              color='primary'
            >
              نمایش شبکه ارتباطات <CompanyGraphIcon />
            </Button>
          </Row>
        </Col>
        <Col span={24} className={styles['graph--text']}>
          ارتباط ثبتی شرکت‌ها و افراد با یکدیگر در قالب یک نمودار نمایش داده
          می‌شود.
        </Col>
        <Col span={24} className={styles['graph--btn']}>
          <Button
            href={`${
              mode === 'company' ? WEB.COMPANY_GRAPH : WEB.PERSON_GRAPH
            }/${id}`}
            size='medium'
            btnType='secondary'
            color='primary'
          >
            نمایش شبکه ارتباطات <CompanyGraphIcon />
          </Button>
        </Col>
      </Row>
    </Card>
  </Skeleton>
)

export default GraphCard
