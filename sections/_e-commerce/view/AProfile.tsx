// url:namatek.com/dashboard/aprofile
import { RootState } from 'libs/redux/store'
import { EcommerceAccountLayout } from '../layout' 
import { useSelector } from 'react-redux'
function APersonalView() {
  const { uuid } = useSelector((state: RootState) => state.auth)

  // useEffect(() => {
  //   if (!accessToken) {
  //     push('/')
  //     return
  //   }
  // }, [accessToken])

  return (
    <EcommerceAccountLayout>
      <iframe src={`https://company.namatek.com/app/pro/user-65c4c1ef844d5d5fc1f0d32a?embed=true&environment=production&id=${uuid}}`}
        width={"100%"}
        
        style={{border:"0",height:'75vh'}}
      />
    </EcommerceAccountLayout >
  )
}

export default APersonalView
