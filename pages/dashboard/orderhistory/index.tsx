import Head from 'next/head'
import MainLayout from 'layout/main/MainLayout'
import { EcommerceAccountOrderHistory } from 'sections/_e-commerce/view'

DashboardProfilePage.getLayout = (page: React.ReactElement) => (
  <MainLayout>{page}</MainLayout>
)

function DashboardProfilePage() {
  return (
    <>
      <Head>
        <title>پروفایل کاربر - نماتک</title>
      </Head>

      <EcommerceAccountOrderHistory />
    </>
  )
}

export default DashboardProfilePage
