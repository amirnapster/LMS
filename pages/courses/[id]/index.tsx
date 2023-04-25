// next
import Layout from 'layout'
import Head from 'next/head'
import { ElearningCourseView } from 'sections/_e-learning/view'

// ----------------------------------------------------------------------

Course.getLayout = (page: React.ReactElement) => <Layout>{page}</Layout>

// ----------------------------------------------------------------------

export default function Course() {
  return (
    <>
      <Head>
        <title>course</title>
      </Head>

      <ElearningCourseView />
    </>
  )
}
