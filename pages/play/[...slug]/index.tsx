import PlayComponent from 'containers/play'
import MainLayout from 'layout/main/MainLayout'
import Head from 'next/head'

PlayPage.getLayout = (page: React.ReactElement) => (
  <MainLayout>{page}</MainLayout>
)

function PlayPage() {
  return (
    <>
      <Head>
        <title>ویدیوها</title>
      </Head>

      <PlayComponent />
    </>
  )
}

export default PlayPage
