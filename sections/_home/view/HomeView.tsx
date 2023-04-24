// components
import ScrollProgress from 'components/scroll-progress'
//
import PricingHome from '../../pricing/home'
import {
  HomeHero,
  HomeFAQs,
  HomeNewStart,
  HomeForDesigner,
  HomeCombination,
  HomeAdvertisement,
  HomeFeatureHighlights,
  HomeFlexibleComponents,
} from '../components'

// ----------------------------------------------------------------------

export default function HomeView() {
  return (
    <>
      <ScrollProgress />

      <HomeHero />

      <HomeNewStart />

      <HomeFlexibleComponents />

      <HomeFeatureHighlights />

      <HomeForDesigner />

      <PricingHome plans={[]} />

      <HomeFAQs />

      <HomeCombination />

      <HomeAdvertisement />
    </>
  )
}
