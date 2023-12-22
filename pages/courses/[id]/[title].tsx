// next
import { ElearningCourseView } from 'sections/_e-learning/view'
import MainLayout from 'layout/main/MainLayout'
import Head from 'next/head'

// ----------------------------------------------------------------------

Course.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>

// ----------------------------------------------------------------------

export default function Course() {
  return (
    <>
      <Head>
        <title>دوره</title>
      </Head>

      <ElearningCourseView />
    </>
  )
}
