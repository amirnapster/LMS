import Head from 'next/head'
import Layout from 'layout'
import Home from 'containers/home'

import type { ReactElement } from 'react'
import type { NextPageWithLayout } from 'utils/interfaces'

const HomePage: NextPageWithLayout = () => <Home />

HomePage.getLayout = function getLayout(page: ReactElement) {
  // const { device } = page.props

  return (
    <>
      <Head>
        <title>Rasmio | رسمیو</title>
      </Head>
      <Layout> {page} </Layout>
    </>
  )
}

export default HomePage
