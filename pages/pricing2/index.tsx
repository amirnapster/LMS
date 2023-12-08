// next
import Pricing from 'containers/pricing'
import Head from 'next/head'

// ----------------------------------------------------------------------

Courses.getLayout = (page: React.ReactElement) => (
  page
)

// ----------------------------------------------------------------------

export default function Courses() {
  return (
    <>
      <Head>
        <title>تعرفه اشتراک‌ها</title>
      </Head>


      <Pricing />
    </>
  )
}
