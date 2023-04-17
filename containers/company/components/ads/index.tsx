import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Close } from '@mui/icons-material'
import Button from 'components/ui/Button'
import cn from 'classnames'

import type { RootState } from 'libs/redux/store'
import type { ICompanyAdsProps } from './interface'
import styles from './ads.module.scss'

const CompanyAds = ({ type, className }: ICompanyAdsProps) => {
  const { details } = useSelector((state: RootState) => state.company)
  const [closeAd, setCloseAd] = useState<boolean>(false)
  const adsData = details?.summary?.advertisements
  const adData = adsData?.find((ad) => ad.position === type)

  const closeAdHandler = () => setCloseAd(true)

  return adData?.link ? (
    <Button
      className={cn(
        styles['ads'],
        className,
        closeAd && type === 'M' && styles['ads--close']
      )}
      href={adData?.link as string}
    >
      {type === 'M' && (
        <Button onClick={closeAdHandler} data-selector='close'>
          <Close />
        </Button>
      )}

      <img
        className='w-100'
        src={adData?.image as string}
        alt={adData?.alt as string}
      />
    </Button>
  ) : null
}

CompanyAds.defaultProps = {
  className: '',
}

export default CompanyAds
