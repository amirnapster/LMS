import Head from 'next/head'
import MainLayout from 'layout/main/MainLayout'
import AExamView from 'sections/_e-commerce/view/AExam'

DashboardProfilePage.getLayout = (page: React.ReactElement) => (
  <MainLayout>{page}</MainLayout>
)

function DashboardProfilePage() {
  return (
    <>
      <Head>
        <title>آزمون و مدرک - نماتک</title>
      </Head>

      <AExamView />
    </>
  )
}

export default DashboardProfilePage
