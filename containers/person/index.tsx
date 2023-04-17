import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query'
import { useGetV3PersonGetSummaryQuery } from 'libs/redux/services/v3'
import { useSelector } from 'react-redux'
import { notify } from 'utils/notification'

import Container from 'components/container'
import Row from 'components/ui/Row'
import Col from 'components/ui/Col'
import GraphCard from 'components/graphCard'
import Advertisement from 'components/advertisement'
import SocialMediaModal from 'components/socialMediaModal'
import FollowListModal from 'components/followListModal'
import PersonHeader from './components/personHeader'
import Biography from './components/biography'
import Company from './components/company'
import EditPerson from './components/editPerson'

import type { RootState } from 'libs/redux/store'
import styles from './person.module.scss'

const Person = () => {
  const { query } = useRouter()
  const {
    data: details,
    error,
    refetch,
  } = useGetV3PersonGetSummaryQuery({ personHId: query.id as string })
  const { editMode } = useSelector((state: RootState) => state.person)
  const { accessToken } = useSelector((state: RootState) => state.auth)

  useEffect(() => {
    if (accessToken) refetch()
  }, [accessToken])

  if (error) {
    notify({
      type: 'warn',
      message: ((error as FetchBaseQueryError).data as any).Message as string,
    })
  }

  const personName = details?.person?.title
  const personId = details?.person?.id

  return (
    <Container className={styles['person__container']}>
      <SocialMediaModal id={personId} name={personName} mode='person' />
      <FollowListModal type={2} entityId={details?.person?.id as number} />
      <Row wrap>
        {editMode ? (
          <Col xxs={24} xl={24}>
            <EditPerson />
          </Col>
        ) : (
          <>
            <PersonHeader />
            <Col xxs={24} xl={18}>
              <Biography />
              <Company />
              <div data-selector='box'>
                <GraphCard
                  details={details}
                  id={details?.person?.id}
                  mode='person'
                />
              </div>
              <div data-selector='box'>
                <Advertisement
                  news={details?.person?.news}
                  id={details?.person?.id}
                  mode='person'
                />
              </div>
            </Col>
          </>
        )}
      </Row>
    </Container>
  )
}

export default Person
