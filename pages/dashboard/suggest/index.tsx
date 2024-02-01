import Head from 'next/head'
import MainLayout from 'layout/main/MainLayout'
 import EcommerceAccountSuggestion from 'sections/_e-commerce/view/EcommerceAccountSuggestion'

DashboardProfilePage.getLayout = (page: React.ReactElement) => (
  <MainLayout>{page}</MainLayout>
)

function DashboardProfilePage() {
  return (
    <>
      <Head>
        <title>پیشنهاد یا گزارش خطا - نماتک</title>
      </Head>

      <EcommerceAccountSuggestion />
    </>
  )
}

export default DashboardProfilePage
