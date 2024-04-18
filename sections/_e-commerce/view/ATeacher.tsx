// url:namatek.com/dashboard/t/
import React, { useState, useEffect } from 'react';
import { RootState } from 'libs/redux/store'
import { EcommerceAccountLayout } from '../layout'
import { useSelector } from 'react-redux'
import { currentTeacherPage } from 'sections/_e-commerce/layout/account/EcommerceAccountMenu'
import { useRouter } from 'next/router'
import LoadingScreen from 'components/loading-screen/LoadingScreen';

function ATeacher() {
  const { uuid } = useSelector((state: RootState) => state.auth)
  const { asPath } = useRouter()
  const page = currentTeacherPage(asPath)
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);  
    return () => clearTimeout(timer);

  }, [asPath]);  


  return (

    <EcommerceAccountLayout>
      {isLoading && <LoadingScreen />}
      <h2 style={{marginBottom:"1rem"}}>{page?.title}</h2>
      <iframe src={`https://company.namatek.com/app/application/load-6621335fc5daf87dcea46f61?to=${page?.apath}&embed=true&environment=production&uuid=${uuid}`}
        width={"100%"}

        style={{ border: "0", height: '75vh', display: isLoading ? "none" : "block" }}
      />
    </EcommerceAccountLayout >
  )
}

export default ATeacher
