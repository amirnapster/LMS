import Head from 'next/head'
import { useRouter } from 'next/router'

const AppHead = () => {
  const { locales, asPath } = useRouter()

  return (
    <Head>
      <title>نماتک</title>
      ------------ CLEAR CACHE -------------------------------
      <meta httpEquiv='cache-control' content='no-cache' />
      <meta httpEquiv='expires' content='0' />
      <meta httpEquiv='pragma' content='no-cache' />
      --------------------------------------------------------
      <link
        rel='search'
        type='application/opensearchdescription+xml'
        href='https://rasm.io/opensearch.xml'
        title='جستجو در نماتک'
      />
      <meta
        name='viewport'
        content='minimum-scale=1, initial-scale=1, width=device-width'
      />
      {/* <link rel="manifest" href="/manifest.json" /> */}
      <link
        rel='apple-touch-icon'
        sizes='57x57'
        href='/icons/apple-icon-57x57.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='60x60'
        href='/icons/apple-icon-60x60.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='72x72'
        href='/icons/apple-icon-72x72.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='76x76'
        href='/icons/apple-icon-76x76.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='114x114'
        href='/icons/apple-icon-114x114.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='120x120'
        href='/icons/apple-icon-120x120.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='144x144'
        href='/icons/apple-icon-144x144.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='152x152'
        href='/icons/apple-icon-152x152.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/icons/apple-icon-180x180.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='192x192'
        href='/icons/android-icon-192x192.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/icons/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='96x96'
        href='/icons/favicon-96x96.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/icons/favicon-16x16.png'
      />
      <link rel='icon' sizes='192x192' href='/svg/layout/navbar-logo.svg' />
      <link
        rel='alternate'
        href={`https://rasm.io${asPath}`}
        hrefLang='x-default'
      />
      {locales?.map((item) => (
        <link
          key={item}
          rel='alternate'
          hrefLang={item}
          href={`https://rasm.io/${item}${asPath}`}
        />
      ))}
      <meta name='msapplication-TileColor' content='#ffffff' />
      <meta
        name='msapplication-TileImage'
        content='/icons/ms-icon-144x144.png'
      />
      <meta name='theme-color' content='#ffffff' />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, viewport-fit=cover'
      />
      <meta name='apple-mobile-web-app-capable' content='yes' />
      <meta name='apple-mobile-web-app-status-bar-style' content='black' />
      <meta name="yn-tag" id="966daff1-55eb-45a6-bfa6-94c505c36f32"/>
      <link rel='prefetch' href='/svg/lock.png' />
      <link rel='prefetch' href='/svg/SVG.svg' />
    </Head>
  )
}

export default AppHead
