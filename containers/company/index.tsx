import { useEffect, useMemo } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { useGetCompanyDetailsQuery } from 'libs/redux/services/companies'
import { useGetCommentsQuery } from 'libs/redux/services/allv3'
import { setCurrentStep, setVisible } from 'libs/redux/slices/companyAuth'
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query'
import { notify } from 'utils/notification'
import Row from 'components/ui/Row'
import Col from 'components/ui/Col'
import BlockingModal from 'components/blockingModal'
import Modal from 'components/ui/Modal'
import Container from 'components/container'
import SocialMediaModal from 'components/socialMediaModal'
import SectionTitle from 'components/sectionTitle'
import GraphCard from 'components/graphCard'
import Advertisement from 'components/advertisement'
import Head from 'next/head'
import AboutCompany from './components/about'
import CompanyAuthentication from './components/authentication'
import ProductsAndServices from './components/productsAndServices'
import CompanyProductLine from './components/companyProductLine'
import ProductionCapacity from './components/productionCapacity'
import CallRequest from './components/callRequest'
import EditCompany from './components/editCompany'
import CompanyFAQ from './components/faq'
import CompanyHeader from './components/companyHeader'
import Approvals from './components/approvals'
import BaseInfo from './components/baseInfo'
import Licenses from './components/license'
import Managers from './components/managers'
import CompanyBrands from './components/brands'
import CompanyCommunications from './components/communications'
import CompanyContact from './components/contact'
import Comment from './components/comment'
import Financial from './components/financial'
import Business from './components/business'
import History from './components/history'
import BourseInfo from './components/bourseInfo'
import Shareholders from './components/shareholders'
import Signature from './components/signature'
import Inspector from './components/inspector'
import Parent from './components/parent'
import Ads from './components/ads'
import List from './components/list'
import FollowModal from 'components/followListModal'

import type { RootState } from 'libs/redux/store'
import styles from './company.module.scss'

const Company = () => {
  const dispatch = useDispatch()
  const { accessToken } = useSelector((state: RootState) => state.auth)

  const { query } = useRouter()

  const {
    data: details,
    error,
    refetch,
  } = useGetCompanyDetailsQuery({
    companyId: Number(query.id),
    title: query.index as string,
  })

  useEffect(() => {
    if (accessToken) refetch()
  }, [accessToken])

  if (error) {
    notify({
      type: 'warn',
      message: ((error as FetchBaseQueryError)?.data as any)?.Message as string,
    })
    // log error
    console.log(error)
  }
  const info = details?.companyInfoDetail

  const summary = details?.summary?.companySummary
  const companyName = summary?.title
  const { data: comments } = useGetCommentsQuery(
    { companyId: summary?.id },
    { skip: !summary?.id }
  )
  const { visible: visibleCompanyAuth } = useSelector(
    (state: RootState) => state.companyAuth
  )
  const { editMode, activeTab, isAuth } = useSelector(
    (state: RootState) => state.company
  )

  const closeModal = () => dispatch(setVisible(false))

  const memorizedContent = useMemo(() => {
    if (activeTab === 'about.company')
      return (
        <>
          <BlockingModal />

          {isAuth && info?.aboutCompany?.companySummary?.summary && (
            <AboutCompany />
          )}

          <BaseInfo />

          {/* <BourseInfo /> */}

          {!isAuth && details?.summary?.companySummary?.description ? (
            <History />
          ) : null}

          {!isAuth && <Ads className={styles['company__ads--c']} type='C' />}

          {!isAuth && (
            <Row className={styles['company__ads--a']}>
              <Ads type='A1' />
              <Ads type='A2' />
              <Ads type='A3' />
            </Row>
          )}

          <ProductsAndServices />

          <List />

          {!isAuth && (
            <Row
              className={styles['company__ads--b']}
              justify='center'
              gutter={16}
            >
              <Ads type='B1' />
              <Ads type='B2' />
            </Row>
          )}

          <Row direction='column' align='top' id='production'>
            <SectionTitle title='کارخانه و ظرفیت تولید' />

            {isAuth && <CompanyProductLine />}

            <ProductionCapacity />
          </Row>

          <Row direction='column' align='top' id='certificate'>
            <SectionTitle
              title={isAuth ? 'مجوزها و دستاوردها' : 'مجوزها و مالکیت‌ها'}
            />

            {isAuth && <Approvals />}

            <Licenses />

            <CompanyBrands />
          </Row>

          <Financial />

          <Business />

          <Advertisement
            news={details?.companyNews}
            id={summary?.id}
            mode='company'
          />

          <CompanyFAQ />

          <Comment comments={comments} companyId={summary?.id} />
        </>
      )
    if (activeTab === 'contact.company')
      return (
        <>
          <CompanyCommunications />
          {isAuth && <CompanyContact />}
        </>
      )

    return (
      <Row direction='column' align='top'>
        <SectionTitle title='اشخاص' />

        <Signature />
        <GraphCard details={details} id={summary?.id} mode='company' />
        <Managers />
        <Inspector />
        <Parent />
        <Shareholders />
        <Comment comments={comments} companyId={summary?.id} />
      </Row>
    )
  }, [activeTab, isAuth])

  useEffect(() => {
    dispatch(setCurrentStep(0))
    // dispatch(setVisible(true))
  }, [])

  return (
    <>
      <Head>
        <title>
          {isAuth ? '✅' : '🏢'} شرکت {companyName} - رسمیو | پلتفرم ارتباط و
          تحلیل کسب و کارها
        </title>
      </Head>
      <Container className={styles['company__container']}>
        <Modal
          visible={visibleCompanyAuth}
          onClose={closeModal}
          backdropDisable
        >
          <CompanyAuthentication />
        </Modal>

        <FollowModal entityId={summary?.id as number} type={1} />

        <SocialMediaModal id={summary?.id} name={companyName} mode='company' />

        <Row gutter={[{ lg: 0, xl: 24 }, 0]} wrap>
          {editMode ? (
            <>
              <Col xxs={24} xl={24}>
                <EditCompany />
              </Col>
              {isAuth && (
                <Col span={6}>
                  <CallRequest />
                </Col>
              )}
            </>
          ) : (
            <>
              <CompanyHeader />

              <Col xxs={24} xl={18}>
                {memorizedContent}
              </Col>

              {!isAuth && (
                <Col className={styles['company__ads--ab']} span={6}>
                  <Ads type='A1' />
                  <Ads type='A2' />
                  <Ads type='A3' />
                  <div
                    className={
                      styles[
                        activeTab === 'about.company'
                          ? 'company__ads--bWrapperSubTab'
                          : 'company__ads--bWrapper'
                      ]
                    }
                  >
                    <Ads type='B1' />
                    <Ads type='B2' />
                  </div>
                </Col>
              )}

              {isAuth && (
                <Col span={6}>
                  <CallRequest hasSubTab={activeTab === 'about.company'} />
                </Col>
              )}
            </>
          )}
        </Row>
      </Container>
    </>
  )
}

export default Company
