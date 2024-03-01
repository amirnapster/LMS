import { EcommerceAccountLayout } from '../layout'
import { useSelector } from 'react-redux'
import { RootState } from 'libs/redux/store'
import { useRouter } from 'next/router'

function ExamView() {
  const { uuid } = useSelector((state: RootState) => state.auth)
  const { query } = useRouter()
  const id = Number(query.id)
  return (
    <EcommerceAccountLayout>
      <iframe src={`https://company.namatek.com/app/takeexam/takeexam-65db1a54ce6bd11b02530773?embed=true&environment=production&uuid=${uuid}&id=${id}`}
        width={"100%"}
        style={{ border: "0", height: '75vh' }}
      />
    </EcommerceAccountLayout>
  )
}

export default ExamView
