import Head from 'next/head'
import MainLayout from 'layout/main/MainLayout'
// import { EcommerceAccountCompanyUsers } from 'sections/_e-commerce/view'
import ATeacher from 'sections/_e-commerce/view/ATeacher'

DashboardProfilePage.getLayout = (page: React.ReactElement) => (
  <MainLayout>{page}</MainLayout>
)

function DashboardProfilePage() {
  return (
    <>
      <Head>
        <title>داشبورد  مدرس</title>
      </Head>

      <ATeacher />
    </>
  )
}

export default DashboardProfilePage
