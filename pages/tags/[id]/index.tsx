// next
import Tag from 'containers/tags/components/tag'
import MainLayout from 'layout/main/MainLayout'
import Head from 'next/head'
// ----------------------------------------------------------------------

Categories.getLayout = (page: React.ReactElement) => (
  <MainLayout>{page}</MainLayout>
)

// ----------------------------------------------------------------------

export default function Categories() {
  return (
    <>
      <Head>
        <title>categories</title>
      </Head>

      <Tag />
    </>
  )
}
