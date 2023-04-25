// next
import Layout from 'layout'
import Head from 'next/head'
import { ElearningLandingView } from 'sections/_e-learning/view'

// ----------------------------------------------------------------------

Courses.getLayout = (page: React.ReactElement) => <Layout>{page}</Layout>

// ----------------------------------------------------------------------

export default function Courses() {
  return (
    <>
      <Head>
        <title>courses</title>
      </Head>

      <ElearningLandingView />
    </>
  )
}
