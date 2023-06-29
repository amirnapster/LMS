import { ElearningLandingView } from 'sections/_e-learning/view'
import MainLayout from 'layout/main/MainLayout'
import Head from 'next/head'

// ----------------------------------------------------------------------

HomePage.getLayout = (page: React.ReactElement) => (
  <MainLayout>{page}</MainLayout>
)

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <>
      <Head>
        <title>نماتک پرو</title>
      </Head>

      <ElearningLandingView />
    </>
  )
}
