// next
import Layout from 'layout'
import MainLayout from 'layout/main/MainLayout'
import Head from 'next/head'
import { ElearningCourseView } from 'sections/_e-learning/view'

// ----------------------------------------------------------------------

Course.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>

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
