// next
import Layout from 'layout'
import Head from 'next/head'
import { ElearningLandingView } from 'sections/_e-learning/view'

// ----------------------------------------------------------------------

HomePage.getLayout = (page: React.ReactElement) => <Layout>{page}</Layout>

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <>
      <Head>
        <title>The starting point for your next project | ZONE UI</title>
      </Head>

      <ElearningLandingView />
    </>
  )
}
