import {
  WhatIsPersonIcon,
  WhatIsDollarIcon,
  WhatIsBookIcon,
  WhatIsSpeakerIcon,
  WhatIsEyeIcon,
  WhatIsProductsIcon,
  UselessIcon,
  UsableIcon,
} from 'assets/icons'
import Tag from 'components/ui/Tag'

import type { WhatToDoItems, UsageItems } from './interface'

export const usageItems: UsageItems = {
  usable: {
    title: (
      <div data-selector='title'>
        رسمیو برای چه کسانی <Tag data-selector='usable-tag'> مناسب است؟</Tag>
      </div>
    ),
    icon: <img src={UsableIcon} alt='whatis-good' />,
    items: [
      { cardTitle: 'شرکت‌های بازرگانی', desc: 'برای تحلیل شرکتها و افراد' },
      {
        cardTitle: 'متخصصان مالی',
        desc: 'برای حسابداری، حسابرسی و بازرسی شرکت‌ها',
      },
      { cardTitle: 'شرکت‌های حقوقی', desc: 'برای یافتن و استعلام افراد' },
      {
        cardTitle: 'شرکت‌های سرمایه‌گذاری',
        desc: 'برای بررسی ارتباط بین شرکت‌ها و افراد',
      },
      {
        cardTitle: 'شرکت‌های خدماتی',
        desc: 'برای بررسی شرکت‌ها و موسسات طرف همکاری',
      },
      { cardTitle: 'نهادهای دولتی و حاکمیتی', desc: 'برای فعالیت‌های نظارتی' },
      {
        cardTitle: 'نهادهای مالی و پولی',
        desc: 'برای بررسی رسمیت شرکت‌ها و اعضا',
      },
    ],
    btn: true,
  },
  useless: {
    title: (
      <div data-selector='title'>
        رسمیو برای شما{'  '}
        <Tag data-selector='useless-tag'> مناسب نیست</Tag> اگر:
      </div>
    ),
    icon: <img src={UselessIcon} alt='whatis-bad' />,
    items: [
      { cardTitle: 'به دنبال اطلاعات خصوصی افراد باشید!' },
      { cardTitle: 'وقت و حوصله کلنجار با سایت‌های دولتی را دارید!' },
      {
        cardTitle: 'به دنبال یافتن نسبت افراد به جای اطلاعات ثبتی آنها هستید!',
      },
      { cardTitle: 'به اطلاعات غیر رسمی کسب‌وکارها نیاز دارید!' },
    ],
    btn: false,
  },
}

export const whatToDoItems: WhatToDoItems = {
  right: [
    {
      icon: <img src={WhatIsPersonIcon} alt='whatis-person' />,
      title: 'احراز هویت افراد و شرکت‌ها',
      description:
        'شرکت‌ها و افراد در شرکت‌ها را بشناسید و در زمان قراردادها با خیال راحت قدم بردارید',
    },
    {
      icon: <img src={WhatIsDollarIcon} alt='whatis-dollar' />,
      title: 'فرصت‌های سرمایه‌گذاری',
      description:
        'ارتباط بین شرکت‌ها و افراد را با هم بیابید. آمار سالیانه تجارت ایران و جهان و شرکت‌های دست‌اندارکار در ایران را مشاهده کنید.',
    },
  ],
  middle: [
    {
      icon: <img src={WhatIsBookIcon} alt='whatis-book' />,
      title: 'تحقیقات بازاریابی',
      description:
        'تصمیم‌گیری برای مبنای داده، شناسایی فضاهای تولید و واردات با استفاده از سرویس‌های رسمیو قابل دسترسی است.',
    },
    {
      icon: <img src={WhatIsSpeakerIcon} alt='whatis-speaker' />,
      title: 'معرفی شرکت خود',
      description:
        'بدون دردسر راه‌اندازی سایت اطلاعات شرکت، محصولات و راه‌های ارتباطی خود را به میلیون‌ها بازدید کننده رسمیو برسانید.',
    },
  ],
  left: [
    {
      icon: <img src={WhatIsEyeIcon} alt='whatis-eye' />,
      title: 'یافتن مشتریان',
      description:
        'با انواع سرویس‌های مختلف می‌توانید مشتریان خود را بیابید و راه ارتباطی مناسب ارتباطی با آن‌ها را پیدا کنید',
    },
    {
      icon: <img src={WhatIsProductsIcon} alt='whatis-product' />,
      title: 'توسعه محصولات',
      description: 'با استفاده از وب‌سرویس رسمیو محصولات خود را توسعه بدهید',
    },
  ],
}
