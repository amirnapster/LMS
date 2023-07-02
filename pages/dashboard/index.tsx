import Head from 'next/head'
import MainLayout from 'layout/main'
import { EcommerceAccountLayout } from 'sections/_e-commerce/layout'

DashboardPage.getLayout = (page: React.ReactElement) => (
  <MainLayout>{page}</MainLayout>
)

function DashboardPage() {
  return (
    <>
      <Head>
        <title>داشبورد</title>
      </Head>

      <EcommerceAccountLayout>
        <span>dashboard page</span>
      </EcommerceAccountLayout>
    </>
  )
}

export default DashboardPage
