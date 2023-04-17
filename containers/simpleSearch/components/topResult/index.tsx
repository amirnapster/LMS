import { useSelector } from 'react-redux'
// import { useGetHomeDataQuery } from 'libs/redux/services/home'
import type { RootState } from 'libs/redux/store'
import { LastSeen, MostViewed } from './helper'

const TopResult = () => {
  const { accessToken } = useSelector((state: RootState) => state.auth)
  // const { data } = useGetHomeDataQuery(null)
  return <span>top results</span>
  // return accessToken ? (
  //   <LastSeen />
  // ) : (
  //   <>
  //     <MostViewed type='companies' data={data?.value?.trendingCompanies} />
  //     <MostViewed type='persons' data={data?.value?.trendingPeople} />
  //   </>
  // )
}

export default TopResult
