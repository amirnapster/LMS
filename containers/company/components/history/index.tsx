import { useSelector } from 'react-redux'
import Ellipsis from 'components/ui/Ellipsis'
import Card from 'components/card'
import type { RootState } from 'libs/redux/store'

import styles from './history.module.scss'

const CompanyHistory = () => {
  const { details } = useSelector((state: RootState) => state.company)

  const data = details?.summary?.companySummary?.description
  const isEllipsis = (data?.length as number) > 360

  return (
    <Card className={styles['history']} title='تاریخچه' hasSource={false}>
      <Ellipsis
        className={styles['history--content']}
        maxLines={isEllipsis ? 3 : 'auto'}
        lineHeight={2.2}
        showMore={isEllipsis}
      >
        <div dangerouslySetInnerHTML={{ __html: data as string }} />
      </Ellipsis>
    </Card>
  )
}

export default CompanyHistory
