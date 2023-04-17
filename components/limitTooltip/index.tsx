import { useDispatch } from 'react-redux'
import { ArrowSideIcon } from 'assets/icons'
import { setVisible } from 'libs/redux/slices/auth'
import Button from 'components/ui/Button'

import { WEB } from 'utils/statics/routes/web'

import type { LimitTooltipType } from './interface'

const LimitTooltip = ({ isLogin }: LimitTooltipType) => {
  const dispatch = useDispatch()
  const openLoginModal = () =>
    dispatch(setVisible({ visible: true, mode: 'signUp' }))

  return (
    <div data-selector={isLogin ? 'tooltip-logedout' : 'tooltip-logedin'}>
      {isLogin ? (
        <h2>
          این سرویس/قابلیت برای اشتراک شرکتی و سازمانی فعال است. جهت دسترسی لطفا
          اشتراک خود را ارتقا دهید
        </h2>
      ) : (
        <h2>
          شما به این سرویس/قابلیت دسترسی ندارید. جهت دسترسی لطفا ثبت نام کنید یا
          وارد شوید
        </h2>
      )}
      <div data-selector='button-box'>
        <Button
          btnType='ghost'
          href='https://rasm.io/blog/%d8%a7%d8%b4%d8%aa%d8%b1%d8%a7%da%a9%d9%87%d8%a7%db%8c-%d8%b1%d8%b3%d9%85%db%8c%d9%88/'
          target='_blank'
        >
          اطلاعات بیشتر
        </Button>
        {isLogin ? (
          <Button
            btnType='primary'
            bgColor='white-blue-gradient'
            href={WEB.PRICING}
          >
            ارتقا اشتراک
            <ArrowSideIcon />
          </Button>
        ) : (
          <Button
            onClick={openLoginModal}
            btnType='primary'
            bgColor='white-blue-gradient'
          >
            رایگان ثبت نام کنید
            <ArrowSideIcon />
          </Button>
        )}
      </div>
    </div>
  )
}
export default LimitTooltip
