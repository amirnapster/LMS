import AppHead from 'components/appHead'
import handleSprite from 'utils/helpers/sprite'
import setUserVisitLog from 'utils/helpers/visitLog'
import { useEffect, useMemo } from 'react'
import { useRouter } from 'next/router'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from 'libs/redux/store'
import { IntlProvider } from 'react-intl'
import { ToastContainer } from 'react-toastify'
import { gtm } from 'utils/helpers/tagManager'
import { changeBodyDir, setTheme } from 'utils/helpers/global'
import type { AppContext } from 'next/app'
import type { AppPropsWithLayout } from 'utils/interfaces'
import fa from 'assets/locales/fa-IR.json'
import en from 'assets/locales/en-US.json'
import 'react-toastify/dist/ReactToastify.css'
import '../styles/globals.scss'
import CustomTheme from 'customTheme'
import MyContext from 'utils/context'
import { ThemeSettings } from 'components/settings'
import ProgressBar from 'components/progress-bar/ProgressBar'
import { MotionLazyContainer } from 'components/animate'

// scroll bar
import 'simplebar-react/dist/simplebar.min.css'

// lightbox
import 'yet-another-react-lightbox/styles.css'
import 'yet-another-react-lightbox/plugins/captions.css'
import 'yet-another-react-lightbox/plugins/thumbnails.css'

// slick-carousel
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// lazy image
import 'react-lazy-load-image-component/src/effects/blur.css'

gtm()

const MyApp = ({
  Component,
  pageProps,
  theme,
  campaign,
}: AppPropsWithLayout) => {
  const { locale, asPath, query } = useRouter()
  const getLayout = Component.getLayout ?? ((page) => page)

  const messages = useMemo(() => {
    if (locale === 'en-US') return en
    return fa
  }, [locale])

  useEffect(() => {
    changeBodyDir(locale)
  }, [locale])

  useEffect(() => {
    setUserVisitLog(asPath, query?.id)
  }, [asPath])

  useEffect(() => {
    handleSprite()
    if (theme && theme !== 'default') setTheme(theme)
  }, [])

  const myContextValue = useMemo(
    () => ({
      campaign,
    }),
    [campaign]
  )

  return (
    <>
      <AppHead />
      <Provider store={store}>
        <IntlProvider
          locale={locale as string}
          messages={messages}
          onError={() => null}
        >
          <CustomTheme>
            <ThemeSettings>
              <PersistGate persistor={persistor}>
                <MyContext.Provider value={myContextValue}>
                  <MotionLazyContainer>
                    <ProgressBar />
                    {getLayout(<Component {...pageProps} />)}
                  </MotionLazyContainer>
                </MyContext.Provider>
                <ToastContainer enableMultiContainer limit={1} />
              </PersistGate>
            </ThemeSettings>
          </CustomTheme>
        </IntlProvider>
      </Provider>
    </>
  )
}

MyApp.getInitialProps = async ({ ctx }: AppContext) => {
  const { req } = ctx
  const themeIndex = req?.headers.cookie?.search('theme')
  const theme = req?.headers.cookie?.slice(themeIndex)?.split('theme=')?.[1]
  const fromDateCampaign = process.env.NEXT_PUBLIC_CAMPAIGN_FROM
  const toDateCampaign = process.env.NEXT_PUBLIC_CAMPAIGN_TO

  const campaign =
    new Date().getTime() > new Date(fromDateCampaign as string).getTime() &&
    new Date().getTime() < new Date(toDateCampaign as string).getTime()

  return { theme, campaign }
}

export default MyApp
