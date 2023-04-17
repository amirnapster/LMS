import { useSelector } from 'react-redux'
import NotFoundSection from 'components/notFoundSection'
import Ellipsis from 'components/ui/Ellipsis'
import Skeleton from 'components/skeleton'
import Card from 'components/card'
import type { RootState } from 'libs/redux/store'

import styles from './signature.module.scss'

const CompanySignature = () => {
  const { details } = useSelector((state: RootState) => state.company)

  const data = details?.summary?.signatureHolder
  const isEllipsis = (data?.length as number) > 360

  return (
    <Skeleton
      className={styles['signature--skeleton']}
      data={details}
      width='100%'
      height='172px'
      variant='rounded'
    >
      {details?.summary?.signatureHolder ? (
        <Card
          className={styles['signature']}
          title='دارندگان حق امضا'
          // hasEdit
          // hasNews
        >
          <Ellipsis
            className={styles['signature--content']}
            maxLines={isEllipsis ? 3 : 'auto'}
            lineHeight={2.1}
            showMore={isEllipsis}
          >
            {data}
          </Ellipsis>
        </Card>
      ) : (
        <NotFoundSection
          className={styles['signature--notFound']}
          title='دارندگان حق امضا'
        />
      )}
    </Skeleton>
  )
}

export default CompanySignature
