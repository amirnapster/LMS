// url:namatek.com/dashboard/aprofile
import React, { useState, useEffect } from 'react';
import { RootState } from 'libs/redux/store'
import { EcommerceAccountLayout } from '../layout'
import { useSelector } from 'react-redux'
import { currentCompanyPage } from 'sections/_e-commerce/layout/account/EcommerceAccountMenu'
import { useRouter } from 'next/router'
import LoadingScreen from 'components/loading-screen/LoadingScreen';

function ACompany() {
  const { uuid } = useSelector((state: RootState) => state.auth)
  const { asPath } = useRouter()
  const page = currentCompanyPage(asPath)
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
      <iframe src={`https://company.namatek.com/app/application/load-65c4ec34844d5d5fc1f0daa3?to=${page?.apath}&embed=true&environment=production&uuid=${uuid}`}
        width={"100%"}

        style={{ border: "0", height: '75vh', display: isLoading ? "none" : "block" }}
      />
    </EcommerceAccountLayout >
  )
}

export default ACompany
