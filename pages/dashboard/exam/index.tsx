import Head from 'next/head'
import MainLayout from 'layout/main/MainLayout'
import { EcommerceAccountExam } from 'sections/_e-commerce/view'

DashboardProfilePage.getLayout = (page: React.ReactElement) => (
  <MainLayout>{page}</MainLayout>
)

function DashboardProfilePage() {
  return (
    <>
      <Head>
        <title>آزمون و مدرک - نماتک</title>
      </Head>

      <EcommerceAccountExam />
    </>
  )
}

export default DashboardProfilePage
