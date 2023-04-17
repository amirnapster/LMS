import { useSelector } from 'react-redux'
import NotFoundSection from 'components/notFoundSection'
import Skeleton from 'components/skeleton'
import Card from 'components/card'
import type { RootState } from 'libs/redux/store'
import CompanyPersonTable from '../managers/components/table'

import styles from './inspector.module.scss'

const CompanyInspector = () => {
  const { details } = useSelector((state: RootState) => state.company)

  return (
    <Skeleton
      className={styles['inspector--skeleton']}
      data={details}
      width='100%'
      height='172px'
      variant='rounded'
    >
      {details?.companyPeople?.companyInspectors?.length ? (
        <Card className={styles['inspector']} title='بازرسین و سایر'>
          <CompanyPersonTable itemKey='companyInspectors' />
        </Card>
      ) : (
        <NotFoundSection
          className={styles['inspector--notFound']}
          title='بازرسین و سایر'
        />
      )}
    </Skeleton>
  )
}

export default CompanyInspector
