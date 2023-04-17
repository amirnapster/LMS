/* eslint no-use-before-define: 0 */
import { type ReactElement } from 'react'
import Head from 'next/head'
import { GetStaticPaths, GetStaticProps } from 'next'

import { DynamicComponent } from '../components/DynamicComponent'
import { pagesByType, siteConfig, urlToContent } from '../utils/content'
import Layout from '../layout'
import type * as types from '../utils/interface'

export type Props = { page: types.Page }
const Page = ({ page }: Props) => {
  // eslint-disable-next-line
  const StackbitPage = () => (
    <div data-sb-object-id={page._id}>
      {(page.sections ?? []).map((section, index) => (
        <DynamicComponent
          {...section}
          data-sb-field-path={`sections.${index}`}
        />
      ))}
    </div>
  )

  return <StackbitPage />
}
Page.getLayout = function getLayout(page: ReactElement) {
  if (!page.props.page) return <span>test</span>
  return (
    <>
      <Head>
        <title>
          {page.props.page.title} - رسمیو | پلتفرم ارتباط و تحلیل کسب و کارها
        </title>
        <link rel='icon' href='/rasmio_Icon.ico' />
      </Head>
      <Layout>{page}</Layout>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  const pages = pagesByType('Page')
  return {
    paths: Object.keys(pages),
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<any, { slug: string[] }> = ({
  params,
}) => {
  const url = `/${(params?.slug || []).join('/')}`
  // if (urlToFile(url) == null) {
  //   if (params?.slug[0].length == 11 && !isNaN(Number(params?.slug[0])))
  //     return {
  //       props: {},
  //       redirect: {
  //         destination: `/company${url}/Direct`,
  //       },
  //     }
  //   return {
  //     notFound: true,
  //   }
  // }
  const page = urlToContent(url) as types.Page
  return { props: { page, siteConfig: siteConfig() } }
}

export default Page
