// next
import Receipt from 'containers/receipt'
import MainLayout from 'layout/main/MainLayout'
import Head from 'next/head'

// ----------------------------------------------------------------------

ReceiptPage.getLayout = (page: React.ReactElement) => (
  <MainLayout>{page}</MainLayout>
)

// ----------------------------------------------------------------------

export default function ReceiptPage() {
  return (
    <>
      <Head>
        <title>رسید</title>
      </Head>

      <Receipt />
    </>
  )
}
