// next
import Category from 'containers/categories/components/category'
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

      <Category />
    </>
  )
}
