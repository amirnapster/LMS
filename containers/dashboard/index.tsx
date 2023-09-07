import { useMyQuery } from 'libs/redux/services/karnama'
import { ElearningCourseItem } from 'sections/_e-learning/course/item'
import Row from 'components/ui/Row'

import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import Col from 'components/ui/Col'

import styles from './dashboard.module.scss'
import type { RootState } from 'libs/redux/store'

const DashboardComponent = () => {
  const { data: courses } = useMyQuery()
  const { push } = useRouter()
  const { accessToken } = useSelector((state: RootState) => state.auth)

  useEffect(() => {
    if (!accessToken) push('/')
  }, [accessToken])

  return (
    <Row
      className={styles['dashboard']}
      justify='center'
      gutter={[16, 16]}
      wrap
    >
      {courses?.map((course) => (
        <span style={{width:"320px",marginInlineEnd:"1rem",marginBlockEnd:"1rem"}}> 
          <ElearningCourseItem course={course} vertical />
        </span>
      ))}
    </Row>
  )
}

export default DashboardComponent
