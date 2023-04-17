import {
  AboutUsDescription,
  CompanySvg,
  CompanyUserSvg,
  IndustrySvg,
  NetworkSvg,
  UserSvg,
} from 'assets/icons'

export const historyData = [
  {
    description: 'اختصاص یک صفحه رسمی به بیش از ۲ میلیون شرکت موجود در ایران',
    svg: <img src={CompanySvg} alt='company-svg' />,
  },
  {
    description:
      'تحلیل بیش از ۳ میلیون فرد موجود در جایگاه‌های مدیریتی شرکت‌های ایران',
    svg: <img src={CompanyUserSvg} alt='company-user-svg' />,
  },
  {
    description: 'بیش از ۲۰۰ هزار کاربر',
    svg: <img src={UserSvg} alt='user-svg' />,
  },
  {
    description:
      'تصویر کردن ارتباط بین شرکت‌ها و افراد برای اولین بار در ایران',
    svg: <img src={NetworkSvg} alt='network-svg' />,
  },
  {
    description: 'دسته‌بندی کالاها، صنایع، واردات و صادرات در ایران',
    svg: <img src={IndustrySvg} alt='industry-svg' />,
  },
]
