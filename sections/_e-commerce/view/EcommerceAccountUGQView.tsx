import { EcommerceAccountLayout } from '../layout'
import { useSelector } from 'react-redux'
import { RootState } from 'libs/redux/store'
import { useRouter } from 'next/router'

function UGQView() {
  const { uuid } = useSelector((state: RootState) => state.auth)
  const { query } = useRouter()
  const lessonId = Number(query.id)
  const timeOfVideo = Math.floor(Number(query.tov))
  return (
    <EcommerceAccountLayout>
      <iframe src={`https://company.namatek.com/app/application/home-65da1bea844d5d5fc1f153d9?embed=true&environment=production&id=${uuid}&lessonId=${lessonId}&timeOfVideo=${timeOfVideo}`}
        width={"100%"}
        style={{ border: "0", height: '75vh' }}
      />
    </EcommerceAccountLayout>
  )
}

export default UGQView
