import Head from 'next/head'
import Login from 'containers/login'

import { type NextPageWithLayout } from 'utils/interfaces'
import { type ReactElement } from 'react'

const LoginPage: NextPageWithLayout = () => <Login />

LoginPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Head>
        <title>ورود/ ثبت نام | نماتک</title>
      </Head>
      {page}
    </>
  )
}

export default LoginPage
