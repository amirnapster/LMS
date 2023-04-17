import { useSelector } from 'react-redux'
import { UserOutlinedIcon } from 'assets/icons'
import NotFoundSection from 'components/notFoundSection'
import Row from 'components/ui/Row'
import Skeleton from 'components/skeleton'
import Card from 'components/card'
import type { RootState } from 'libs/redux/store'
import CompanyPersonTable from './components/table'

import styles from './managers.module.scss'

const CompanyManagers = () => {
  const { details } = useSelector((state: RootState) => state.company)

  const currentCEOName =
    details?.companyPeople?.companyCEOs?.length &&
    details?.companyPeople?.companyCEOs[0].personTitle

  const currentCEOImage =
    details?.companyPeople?.companyCEOs?.length &&
    details?.companyPeople?.companyCEOs[0].pictureUrl

  return (
    <Skeleton
      className={styles['managers--skeleton']}
      data={details}
      width='100%'
      height='172px'
      variant='rounded'
    >
      {details?.companyPeople?.companyDirectors?.length ? (
        <Row className={styles['managers']} direction='column' align='top'>
          <Card className={styles['managers__card']} title='مدیران' hasSource>
            {currentCEOName && (
              <Row className={styles['managers__ceoSection']}>
                <div className={styles['managers__ceoSection--img']}>
                  {currentCEOImage ? (
                    <img src={currentCEOImage} alt='ceo' />
                  ) : (
                    <UserOutlinedIcon viewBox='0 0 24 24' />
                  )}
                </div>

                <Row
                  className={styles['managers__ceoSection__details']}
                  direction='column'
                  align='top'
                >
                  <span>{currentCEOName}</span>
                  <div>مدیرعامل فعلی</div>
                </Row>
              </Row>
            )}

            <CompanyPersonTable itemKey='companyDirectors' />
          </Card>
        </Row>
      ) : (
        <NotFoundSection
          className={styles['managers--notFound']}
          title='مدیران'
        />
      )}
    </Skeleton>
  )
}

export default CompanyManagers
