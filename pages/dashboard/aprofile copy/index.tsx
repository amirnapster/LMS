import Head from 'next/head'
import MainLayout from 'layout/main/MainLayout'
import AProfileView from 'sections/_e-commerce/view/AProfile'

DashboardProfilePage.getLayout = (page: React.ReactElement) => (
  <MainLayout>{page}</MainLayout>
)

function DashboardProfilePage() {
  return (
    <>
      <Head>
        <title>پروفایل کاربر - نماتک</title>
      </Head>

      <AProfileView />
    </>
  )
}

export default DashboardProfilePage
