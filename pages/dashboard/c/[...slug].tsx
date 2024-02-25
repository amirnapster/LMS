import Head from 'next/head'
import MainLayout from 'layout/main/MainLayout'
// import { EcommerceAccountCompanyUsers } from 'sections/_e-commerce/view'
import ACompany from 'sections/_e-commerce/view/ACompany'

DashboardProfilePage.getLayout = (page: React.ReactElement) => (
  <MainLayout>{page}</MainLayout>
)

function DashboardProfilePage() {
  return (
    <>
      <Head>
        <title>داشبورد  شرکت</title>
      </Head>

      <ACompany />
    </>
  )
}

export default DashboardProfilePage
