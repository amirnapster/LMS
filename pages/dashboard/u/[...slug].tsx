import Head from 'next/head'
import MainLayout from 'layout/main/MainLayout'
// import { EcommerceAccountCompanyUsers } from 'sections/_e-commerce/view'
import AUser from 'sections/_e-commerce/view/AUser'

DashboardProfilePage.getLayout = (page: React.ReactElement) => (
  <MainLayout>{page}</MainLayout>
)

function DashboardProfilePage() {
  return (
    <>
      <Head>
        <title>داشبورد  کاربر</title>
      </Head>

      <AUser />
    </>
  )
}

export default DashboardProfilePage
