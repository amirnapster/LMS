// next
import Pricing from 'containers/pricing'
import MainLayout from 'layout/main/MainLayout'
import Head from 'next/head'

// ----------------------------------------------------------------------

Courses.getLayout = (page: React.ReactElement) => (
  <MainLayout>{page}</MainLayout>
)

// ----------------------------------------------------------------------

export default function Courses() {
  return (
    <>
      <Head>
        <title>courses</title>
      </Head>

      <Pricing />
    </>
  )
}
