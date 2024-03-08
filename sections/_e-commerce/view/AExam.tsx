// url:namatek.com/dashboard/aexam
import { RootState } from 'libs/redux/store'
import { EcommerceAccountLayout } from '../layout' 
import { useSelector } from 'react-redux'
function AExamView() {
  const { uuid } = useSelector((state: RootState) => state.auth)

  // useEffect(() => {
  //   if (!accessToken) {
  //     push('/')
  //     return
  //   }
  // }, [accessToken])

  return (
    <EcommerceAccountLayout>
      <iframe src={`https://company.namatek.com/app/takeexam/makeexam-65e9c73f0c0e3445c4c68e4d?embed=true&environment=production&uuid=${uuid}`}
        width={"100%"}
        
        style={{border:"0",height:'75vh'}}
      />
    </EcommerceAccountLayout >
  )
}

export default AExamView