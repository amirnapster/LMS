import Head from 'next/head'
import MainLayout from 'layout/main/MainLayout'
import { EcommerceAccountLayout } from 'sections/_e-commerce/layout'
import DashboardComponent from 'containers/dashboard'

DashboardPage.getLayout = (page: React.ReactElement) => (
  <MainLayout>{page}</MainLayout>
)

function DashboardPage() {
  return (
    <>
      <Head>
        <title>آموزش‌های من</title>
      </Head>

      <EcommerceAccountLayout>
        <DashboardComponent />
      </EcommerceAccountLayout>
    </>
  )
}

export default DashboardPage
