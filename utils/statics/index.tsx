import {
  ArrowSideIcon,
  DownloadIcon,
  HomeAdsIcon,
  HomeApiIcon,
  HomeCompanyIcon,
  HomeGraphIcon,
  HomeIndustryIcon,
  HomePersonIcon,
  HomeSearchIcon,
  HomeSpecialIcon,
  StaticPageAdsSvg,
  StaticPageApiSvg,
  StaticPageCompaniesSvg,
  StaticPageGraphSvg,
  StaticPageIndustrySvg,
  StaticPagePersonsSvg,
  StaticPageSearchSvg,
  WebServiceCompaniesIcon,
  WebServiceCompanyIcon,
  WebServiceCompanySubsetIcon,
  WebServiceContactIcon,
  WebServiceKnowledgeIcon,
  WebServiceLicenseIcon,
  WebServiceMoneyIcon,
  WebServiceNewsIcon,
  WebServicePersonsIcon,
  WebServiceSignIcon,
} from 'assets/icons'

import { WEB } from './routes/web'
import type {
  CodeSampleItems,
  DescriptionDataType,
  StaticPageWebServiceItemsType,
  StaticsContactUsDataType,
  StaticsCustomersDataType,
  StaticsGuidesDataType,
  StaticsHeaderDataType,
  StaticsOtherServiceDataType,
  StaticsSubscriptionPlansBodyType,
  StaticsSubscriptionPlansHeaderType,
} from './interface'

export const staticsHeaderData: StaticsHeaderDataType = {
  graph: {
    title: 'شبکه ارتباطات',
    className: 'graph-background',
    icon: <img src={HomeGraphIcon} alt='graph' />,
    subtitle: (
      <>
        کشف
        <span className='color-primary'> روابط </span>
        بین شرکت‌ها و اشخاص
      </>
    ),
  },
  'advanced-search': {
    title: 'جستجوی پیشرفته',
    className: 'advanced-search-background',
    icon: <img src={HomeSearchIcon} alt='search' />,
    subtitle: (
      <>
        جستجو در بزرگترین
        <span className='color-primary'> بانک اطلاعاتی کسب‌وکار </span>
      </>
    ),
  },

  ads: {
    title: 'تبلیغات در نماتک',
    className: 'ads-background',
    icon: <img src={HomeAdsIcon} alt='ads' />,
    subtitle: (
      <>
        <span className='color-primary'> تبلیغات </span>
        در رسانه‌ی مخصوص کسب‌وکارها
      </>
    ),
  },

  persons: {
    title: 'پروفایل اشخاص در شرکت ها',
    className: 'persons-background',
    icon: <img src={HomePersonIcon} alt='person' />,
    subtitle: (
      <>
        تاریخچه
        <span className='color-primary'> ارتباط </span>
        بین افراد و شرکت‌ها
      </>
    ),
  },

  companies: {
    title: 'پروفایل شرکت ها',
    className: 'companies-background',
    icon: <img src={HomeCompanyIcon} alt='company' />,
    subtitle: (
      <>
        <span className='color-primary'> شناسنامه جامع </span>
        فعالیت هر شرکت
      </>
    ),
  },

  industry: {
    title: 'تحلیل صنعت',
    className: 'industry-background',
    icon: <img src={HomeIndustryIcon} alt='industry' />,
    subtitle: (
      <>
        برای تصمیم‌گیری بهتر در
        <span className='color-primary'> تجارت محصولات </span>
      </>
    ),
  },

  api: {
    title: 'API',
    className: 'api-background',
    icon: <img src={HomeApiIcon} alt='api' />,
    subtitle: (
      <>
        <span className='color-primary'> وب‌سرویس </span>
        اطلاعات شرکت‌های ایران
      </>
    ),
  },
}

export const staticsGuidesData: StaticsGuidesDataType = {
  graph: {
    description:
      'شبکه ارتباطات به شما کمک می‌کند روابط مدیریتی شرکت‌ها و افراد را با هم شناسایی کنید. به کمک این ابزار می‌توانید ارتباط بین شرکت‌ها و قراردادهای خود را احراز هویت کنید و در زمان مزایده‌ها و مناقصه‌ها، بدانید واقعا با چه کسانی قرارداد می‌بندید!',
    note: 'برای استفاده از این سرویس می‌بایست از یک اشتراک شرکتی یا سازمانی بهره‌مند باشید.',
    features: [
      'نمایش شرکت‌های مادر یک شرکت',
      'نمایش شرکت‌های زیر مجموعه یک شرکت',
      'امکان کم و اضافه کردن شرط‌های نمایش مانند حذف ارتباطات خاص',
      'نمایش اعضای هیات مدیره هر شرکت',
      'امکان ذخیره نمودارها و گرفتن خروجی قابل پرینت',
    ],
    video: '/svg/staticPage/tv.png',
    link: {
      url: '/pricing',
      text: 'مشاهده اشتراک‌ها',
    },
    image: <img src={StaticPageGraphSvg} alt='graph' />,
    btn: 'navbar.pricing',
    download: {
      text: 'دانلود نمونه خروجی',
      url: 'https://s3.rasm.io/RasmioGraph.pdf',
    },
  },
  'advanced-search': {
    description:
      'اطلاعات زیادی در نماتک گردآوری شده است از اطلاعات ثبتی شرکت‌ها گرفته تا اطلاعات سامانه قراردادهای شهرداری برخی از شهرها. با استفاده از سرویس جستجوی پیشرفته می‌توانید در دسته‌های مختلف مانند شرکت‌ها، اشخاص، محصولات، آگهی‌های رسمی و… با فیلترهای متعدد اقدام به جستجو کنید. با این ابزار می‌توانید تحقیقات بازاریابی، یافتن مشتریان و یافتن فرصت‌های سرمایه‌گذاری را انجام دهید.',
    note: 'برای استفاده از تمام امکانات این سرویس می‌بایست از یک اشتراک شرکتی یا سازمانی بهره‌مند باشید.',
    features: [
      'انتخاب زمینه جستجو بین شش دسته اصلی شرکت، شخص، صنعت، محصول، آگهی رسمی، مالکیت فکری',
      'امکان اعمال فیلترهای متعدد در هر زمینه',
      'امکان ذخیره کردن جستجو برای ادامه فرآیند در آینده',
      'امکان دریافت خروجی اکسل از نتایج جستجو',
    ],
    video: '/svg/staticPage/tv.png',
    link: {
      url: '/pricing',
      text: 'مشاهده اشتراک‌ها',
    },
    image: <img src={StaticPageSearchSvg} alt='search' />,
    btn: 'navbar.pricing',
    download: {
      text: 'دانلود نمونه خروجی',
      url: 'https://s3.rasm.io/RasmioAdvancedSearch.xlsx',
    },
  },

  ads: {
    description:
      'شما می‌توانید با معرفی شرکت‌، محصولات یا خدمات خودبا  در سایت نماتک، از ظرفیت  بیش از ده‌ها هزار بازدید کننده روزانه سامانه نماتک بهره‌مند شوید. بازدیدکنندگان نماتک ،فعالان در عرصه تجارت و کسب‌وکار هستند از این رو می‌دانید که شانس دیده شدن تبلیغ توسط فرد درست به بالاترین میزان خود می‌‌رسد.',
    note: 'برای استفاده از این سرویس یا دریافت اطلاعات در خصوص هزینه‌ها و جایگاه‌های تبلیغاتی، توضیحات بیشتر را ببینید.',
    features: [
      'جامعه هدفمند مخاطبان',
      'ظرفیت محدود و جایگاه نمایش مناسب',
      'اثرگذاری در زمینه برندسازی B2B',
      'مدت زمان دلخواه در تمدید قرارداد',
      'تفاوت بین تبلیغات موبایل و دسکتاپ',
    ],
    video: '/svg/staticPage/tv.png',
    link: {
      url: '',
      text: '',
    },
    image: <img src={StaticPageAdsSvg} alt='ads' />,
    btn: 'request.consultant',
    download: {
      text: 'دانلود کاتالوگ معرفی نماتک',
      url: 'https://s3.rasm.io/RasmioCatalogue.pdf',
    },
  },

  persons: {
    description:
      'شرکت‌ها را افراد اداره می‌کنند. با انتشار روزنامه رسمی هر شرکت تعدادی از افراد به جامعه کسب‌وکار معرفی می‌شوند تا فعالان اقتصادی بدانند به صورت قانونی با چه اشخاصی طرف هستند. تاریخچه عضویت افراد در شرکت‌ها و سمت‌های آن‌ها برای شما لیست شده است تا بتوانید در زمان عقد قرارداد، با آنها آشنا شده و احراز هویت کنید.',
    note: 'برای استفاده از این سرویس می‌بایست از یکی از اشتراک‌های نماتک بهره‌مند باشید.',
    features: [
      'مشاهده اطلاعات بیوگرافی افراد در شرکت‌ها',
      'مشاهده شرکت های مرتبط با یک شخص',
      'مشاهده آگهی های روزنامه‌ رسمی ذکرشده نام شخص در آن',
    ],
    video: '/svg/staticPage/tv.png',
    link: {
      url: '/pricing',
      text: 'مشاهده اشتراک‌ها',
    },
    image: <img src={StaticPagePersonsSvg} alt='person' />,
    btn: 'request.consultant',
    download: {
      text: 'مشاهده اشتراک‌ها',
      url: '/pricing',
    },
  },

  companies: {
    description:
      'هر شرکتی که در ایران ثبت می‌شود مجموعه‌ای از اطلاعات ثبتی و حاکمیتی خود را منتشر می‌کند. پروفایل شرکت‌ ابزاری است که همه این اطلاعات بعلاوه دیگر داده‌های مربوط به شرکت را در یک جا جمع کرده است. پروفایل شرکت‌ها ابزاری کارآمد است که به‌وسیله‌ی آن می‌توانید تاریخچه‌ی فعالیت یک شرکت را مشاهده کنید.',
    note: 'برای استفاده از این سرویس می‌بایست از یکی از اشتراک‌های نماتک بهره‌مند باشید.',
    features: [
      'نمایش اطلاعات ثبتی',
      'نمایش راه‌های ارتباطی با شرکت',
      'گرد‌آوری روزنامه‌های رسمی منتشر شده از یک شرکت',
      'نمایش شرکت‌های مادر یک شرکت',
      'نمایش شرکت‌های زیر مجموعه یک شرکت',
      'نمایش پروفایل افراد در شرکت شامل مدیران و بازرسان',
    ],
    video: '/svg/staticPage/tv.png',
    link: {
      url: '/pricing',
      text: 'مشاهده اشتراک‌ها',
    },
    image: <img src={StaticPageCompaniesSvg} alt='company' />,
    btn: 'request.consultant',
    download: {
      text: 'مشاهده اشتراک‌ها',
      url: '/pricing',
    },
  },

  industry: {
    description:
      'تحلیل صنعت به شما کمک می‌کند تجارت ایران و جهان را در یک نگاه بررسی کنید، شرکت‌های واردکننده یا صادرکننده را پیدا کنید، بر اساس HS کد، صنعت‌های مختلف را تحلیل کنید، امتیاز شرکت‌های مختلف را در زمینه واردات و صادرات تخمین بزنید و حجم صادرات و واردات محصولات مختلف را بسنجید.',
    note: 'برای استفاده از این سرویس می‌بایست از یک اشتراک شرکتی یا سازمانی بهره‌مند باشید.',
    features: [
      'دسته‌بندی صنایع بر حسب HS کد',
      'امکان فیلتر کردن صنایع و شرکت‌های وارد و صادر کننده',
      'نمایش حجم واردات و صادرات',
      'نمایش تغییرات بازار و تراز تجاری',
      'نمایش آمار تجارت ایران',
      'نمایش شرکت‌های تولید و واردکننده در ایران',
      'نمایش کالاهای مربوط به یک HS کد',
    ],
    video: '/svg/staticPage/tv.png',
    link: {
      url: '/pricing',
      text: 'مشاهده اشتراک‌ها',
    },
    image: <img src={StaticPageIndustrySvg} alt='industry' />,
    btn: 'request.consultant',
    download: {
      text: 'مشاهده اشتراک‌ها',
      url: '/pricing',
    },
  },

  api: {
    description:
      'امکانات نماتک را بی واسطه در سایت‌ یا نرم‌افزارهای خود استفاده کنید. تنها ارائه دهنده این سرویس در کشور نماتک است. این امکانات به شما این قابلیت را می‌دهد که صاحبین امضا را شناسایی کنید، در زمان صدور فاکتورها اطلاعات کمتری وارد کنید، دیتابیس‌های خود را بروز کنید و از چندین سرویس دیگر بهره‌مند شوید.',
    note: 'برای استفاده از این سرویس، درخواست خود را ثبت کنید تا ضمن دریافت راهنمایی، خدمات مورد نیاز دیگر را نیز دریافت کنید.',
    features: [
      'وب سرویس بر مبنای Rest API',
      'ارایه مستندات کامل',
      'دارای دوره تست طولانی مدت',
      'طرح‌های فروش متنوع و جذاب',
      'مناسب استارت‌آپ‌های کوچک و شرکت‌های بزرگ',
    ],
    video: '/svg/staticPage/tv.png',
    link: {
      url: '',
      text: 'ثبت درخواست API',
    },
    image: <img src={StaticPageApiSvg} alt='api' />,
    btn: 'request.consultant',
    download: {
      text: 'دانلود نمونه مستندات',
      url: '',
    },
  },
}

export const staticPageData: Record<string, string> = {
  'static.statistics.page.count.show.ads': '+ 5 میلیون',
  'static.statistics.daily.view.ads': ' + 80 هزار',
  'static.statistics.dwell.time': '3,5 دقیقه',
}

export const staticPageContactUsData: StaticsContactUsDataType = {
  graph: {
    description:
      'به سادگی می‌توانید از سرویس شبکه ارتباطات استفاده کنید. با این حال ما همیشه اینجاییم تا پاسخگوی شما باشیم.',
    icon: <ArrowSideIcon />,
    action: {
      title: 'خرید اشتراک',
      url: '/pricing',
    },
  },
  'advanced-search': {
    description:
      'به سادگی می‌توانید از سرویس جستجوی پیشرفته استفاده کنید. با این حال ما همیشه اینجاییم تا پاسخگوی شما باشیم.',
    icon: <ArrowSideIcon />,
    action: {
      title: 'خرید اشتراک',
      url: '/pricing',
    },
  },
  ads: {
    description:
      'با ما تماس بگیرید تا هر آنچه نیاز دارید را در اختیار شما بگذاریم.',
    icon: <DownloadIcon />,
    action: {
      title: 'دانلود کاتالوگ معرفی نماتک',
      url: 'https://s3.rasm.io/RasmioCatalogue.pdf',
    },
  },
  persons: {
    description:
      'به سادگی می‌توانید از سرویس پروفایل اشخاص در شرکت‌ها استفاده کنید. با این حال ما همیشه اینجاییم تا پاسخگوی شما باشیم.',
    icon: <ArrowSideIcon />,
    action: {
      title: 'خرید اشتراک',
      url: '/pricing',
    },
  },
  companies: {
    description:
      'به سادگی می‌توانید از سرویس پروفایل شرکت‌ها استفاده کنید. با این حال ما همیشه اینجاییم تا پاسخگوی شما باشیم.',
    icon: <ArrowSideIcon />,
    action: {
      title: 'خرید اشتراک',
      url: '/pricing',
    },
  },
  industry: {
    description:
      'به سادگی می‌توانید از سرویس تحلیل صنعت استفاده کنید. با این حال ما همیشه اینجاییم تا پاسخگوی شما باشیم.',
    icon: <ArrowSideIcon />,
    action: {
      title: 'خرید اشتراک',
      url: '/pricing',
    },
  },
  api: {
    description:
      'به سادگی می‌توانید از سرویس API استفاده کنید. با این حال ما همیشه اینجاییم تا پاسخگوی شما باشیم.',
    icon: <DownloadIcon />,
    action: {
      title: 'دانلود نمونه مستندات',
      url: '',
    },
  },
}
export const staticCustomersData: StaticsCustomersDataType = {
  graph: [
    {
      src: '/svg/staticPage/pgpic.png',
      alt: 'pgpic',
    },
    { src: '/svg/staticPage/foolad-mobarake.png', alt: 'foolad-mobarake' },
    { src: '/svg/staticPage/sina.png', alt: 'sina' },
    {
      src: '/svg/staticPage/petroshimi-booshehr.png',
      alt: 'petroshimi-booshehr',
    },
  ],
  'advanced-search': [
    { src: '/svg/staticPage/mellat-bank.png', alt: 'mellat-bank' },
    { src: '/svg/staticPage/saderat-bank.png', alt: 'saderat-bank' },
    { src: '/svg/staticPage/petropars.png', alt: 'petropars' },
    { src: '/svg/staticPage/aac.png', alt: 'aac' },
    { src: '/svg/staticPage/persia.png', alt: 'persia' },
    { src: '/svg/staticPage/kayson.png', alt: 'kayson' },
    { src: '/svg/staticPage/jahanpars.png', alt: 'jahanpars' },
  ],
  ads: [{ src: '', alt: '' }],
  persons: [
    { src: '/svg/staticPage/sooreh.png', alt: 'sooreh' },
    { src: '/svg/staticPage/kambiz.png', alt: 'kambiz' },
    { src: '/svg/staticPage/fateh.png', alt: 'fateh' },
    { src: '/svg/staticPage/fannavari.png', alt: 'fannavari' },
    { src: '/svg/staticPage/tejarat-bank.png', alt: 'tejarat-bank' },
  ],
  companies: [
    { src: '/svg/staticPage/polimer.png', alt: 'polimer' },
    { src: '/svg/staticPage/pasargad-bank.png', alt: 'pasargad-bank' },
    { src: '/svg/staticPage/ati.png', alt: 'ati' },
    { src: '/svg/staticPage/boors.png', alt: 'boors' },
    { src: '/svg/staticPage/petropars.png', alt: 'petropars' },
    { src: '/svg/staticPage/mehr.png', alt: 'mehr' },
  ],
  industry: [
    { src: '/svg/staticPage/kotra.png', alt: 'kotra' },
    { src: '/svg/staticPage/bis.png', alt: 'bis' },
    { src: '/svg/staticPage/industry-persia.png', alt: 'industry-persia' },
    { src: '/svg/staticPage/pooya.png', alt: 'pooya' },
    { src: '/svg/staticPage/nici.png', alt: 'nici' },
    { src: '/svg/staticPage/barekat.png', alt: 'barekat' },
    { src: '/svg/staticPage/pooiesh.png', alt: 'pooiesh' },
    { src: '/svg/staticPage/polimer.png', alt: 'polimer' },
    { src: '/svg/staticPage/jomhoori.png', alt: 'jomhoori' },
  ],
  api: [
    { src: '/svg/staticPage/shahrdari.png', alt: 'shahrdari' },
    { src: '/svg/staticPage/dadman.png', alt: 'dadman' },
    { src: '/svg/staticPage/faraboom.png', alt: 'faraboom' },
    { src: '/svg/staticPage/mofid.png', alt: 'mofid' },
    { src: '/svg/staticPage/irancell.png', alt: 'irancell' },
    { src: '/svg/staticPage/finotech.png', alt: 'finotech' },
    { src: '/svg/staticPage/noavari.png', alt: 'noavari' },
  ],
}

export const staticsSubscriptionPlansHeader: StaticsSubscriptionPlansHeaderType =
  [
    { title: 'نام جایگاه', description: '' },
    { title: 'اندازه بنر', description: '' },
    { title: 'قیمت', description: '(ماهیانه/میلیون تومان)' },
  ]

export const staticsSubscriptionPlansBody: StaticsSubscriptionPlansBodyType = {
  A: {
    A1: [
      { title: 'A1', description: '' },
      { title: '208*303', description: '' },
      { title: '8', description: '' },
    ],
    A2: [
      { title: 'A2', description: '' },
      { title: '208*303', description: '' },
      { title: '5', description: '' },
    ],
    A3: [
      { title: 'A3', description: '' },
      { title: '208*303', description: '' },
      { title: '5', description: '' },
    ],
  },
  B: {
    B1: [
      { title: 'B1', description: '' },
      { title: '303*303', description: '' },
      { title: '8', description: '' },
    ],
    B2: [
      { title: 'B2', description: '' },
      { title: '303*303', description: '' },
      { title: '8', description: '' },
    ],
  },
  C: {
    C: [
      { title: 'C', description: '' },
      { title: '208*916', description: '' },
      { title: '8', description: '' },
    ],
  },
  M: {
    M: [
      { title: 'M', description: '(فقط در موبایل)' },
      { title: '60*468', description: '' },
      { title: '10', description: '' },
    ],
  },
}

export const descriptionData: DescriptionDataType = {
  'advanced-search': {
    title: 'استخراج اطلاعات مورد نیاز شما از دریای اطلاعات موجود',
    subtitle:
      'ما توسط دریای عظیمی از اطلاعات احاطه شده و به همین دلیل در انجام کارهای تجاری خود نیز سوال‌های بیشتری در ذهنمان شکل می‌گیرد.',
    list: {
      title: 'مثلا...',
      items: [
        'کدام شرکت‌ها محصول مورد نظر ما را تولید می‌کنند؟',
        'کدام شرکت‌ها مجوز تولید فلان کالا را دارند و ظرفیت تولید آن‌ها چه میزان است؟',
        'چه تعداد شرکت در دوسال گذشته به ثبت رسیده‌اند؟',
        'آمار واردات یک کالای خاص در ایران چقدر است؟',
      ],
    },
    answers: {
      title:
        'جواب این سوال‌ها فقط با ابزار جستجوی پیشرفته نماتک قابل جوابگویی است',
      item: (
        <div data-selector='answer'>
          این سوال‌ها و هزاران سوال دیگر در ذهن فعالان اقتصادی است و تنها ابراز
          برای پاسخگویی به این سوالات جستجوی پیشرفته نماتک است. استخراج این
          اطلاعات از سایت‌های حاکمیتی تقریبا کار غیر ممکنی است.
        </div>
      ),
    },
  },
  ads: {
    title: 'رسانه‌ای که روزانه هزاران فعال اقتصادی به آن سر می‌زنند',
    subtitle:
      'هر روز تبلیغات جدیدی می‌بینیم، در تلویزیون، در مجلات، گوشی تلفن‌همراهی که در دست داریم، سایت‌هایی که به آن‌ها سر می‌زنیم و هزاران جای دیگر. اگر تبلیغ در زمان و مکان درست به ما نرسد عملا با دورریختن پول فرقی ندارد. اگر به دنبال رسانه‌ای هستید که روزانه صد هزار از فعالان اقتصادی ایران به آن سر بزنند و شما دقیقا به هدف بزنید، نماتک دقیقا همین رسانه است.',
  },
  api: {},
  companies: {
    title: 'تاریخچه‌ای از فعالیت‌های یک شرکت در دستان شما',
    subtitle:
      'تنها ابزاری در ایران که همه اطلاعات رسمی منتشر شده درباره یک شرکت را یکجا جمع و قابل جستجو کرده، پروفایل شرکت‌ها در نماتک است.',
    list: {
      title: 'زمانی که...',
      items: [
        'نیاز دارید اطلاعات ثبتی یک شرکت را برای امور حسابداری یا حسابرسی بدانید',
        'می‌خواهید مزایده‌ها یا مناقصه‌ها را برگزار کنید یا در آن‌ها شرکت‌ کنید',
        'می‌خواهید با تولیدکنندگان در ارتباط باشید',
        'می‌خواهید کارهای تجاری بزرگ انجام دهید',
        'می‌خواهید بدانید هر شرکت چقدر ارز دولتی دریافت کرده است',
      ],
    },
  },
  graph: {
    title: 'تنها ابزار بررسی ارتباط اشخاص و شرکت‌ها با یکدیگر در ایران',
    list: {
      title: 'زمانی که...',
      items: [
        'می‌خواهید مزایده‌ها یا مناقصه‌ها را برگزار کنید یا در آن‌ها شرکت‌ کنید؛',
        'می‌خواهید با تولیدکنندگان در ارتباط باشید؛',
        'می‌خواهید کارهای تجاری بزرگ انجام دهید...',
      ],
    },
    questions: {
      title: 'درگیر این سوال‌ها هستید که:',
      items: [
        'آیا شرکت‌ها با یکدیگر ارتباط مدیریتی دارند؟',
        'آیا شرکت‌ها زیرمجموعه یکدیگر هستند؟',
        'آیا شخصی وجود دارد که در دو شرکت سمت مدیریت داشته باشد؟',
      ],
    },
    answers: {
      title:
        'جواب این سوال‌ها فقط با ابزار شبکه ارتباطی نماتک قابل جوابگویی است',
      item: (
        <div data-selector='answer'>
          تنها ابزاری در ایران که قابلیت بررسی ارتباط افراد و شرکت‌ها با یکدیگر
          را به سادگی با یک جستجو فراهم می‌کند. استخراج این اطلاعات از سایت‌هایی
          مانند روزنامه رسمی کاری تقریبا غیر ممکن است. اما ابزار شبکه ارتباطات
          این کار را مانند آب خوردن ساده کرده است.
        </div>
      ),
    },
  },
  industry: {
    title: 'ابزاری برای تصمیم‌گیری بهتر در تجارت محصولات',
    list: {
      title: 'زمانی که...',
      items: [
        'برای کارهای تحلیلی خود نیاز به دانستن آمار صادرات و واردات دارید',
        'نیاز دارید بدانید چه شرکت‌هایی در ایران، کالاها را در هر صنعتی وارد می‌کنند',
      ],
    },
    answers: {
      title:
        'می‌توانید پاسخ این سوالات و بسیاری از سوالات دیگر را با سرویس تحلیل صنعت بدهید',
      item: (
        <div data-selector='answer'>
          این ابزار تنها ابزاری است که در ایران HS کدهای مختلف در صنایع گوناگون
          را با چند کلیک به شرکت‌های وارد یا تولید کننده آن متصل می‌کند.
        </div>
      ),
    },
  },
  persons: {
    title: 'جایی که ارتباط بین افراد و شرکت‌ها برای شما معنی‌دار می‌شود',
    list: {
      title: 'زمانی که...',
      items: [
        'نیاز دارید مدیران واقعی یک شرکت را شناسایی کنید',
        'می‌خواهید بدانید دارندگان حق امضای یک شرکت چه کسانی هستند',
        'نیاز است بدانید دو شرکت مجزا چه رابطه‌ای می‌توانند با هم داشته باشند',
        'باید از اصالت اطلاعات هویتی صاحبین یک شرکت اطلاع دقیق داشته باشید...',
      ],
    },
    questions: {
      title: 'این سرویس می‌تواند:',
      items: [
        'تاریخچه عضویت یک شخص در یک یا چند شرکت همراه با سمت‌های فعلی و گذشته را نمایش دهد.',
        'مشخص کند که یک شخص در طول فعالیت کاری خود در چه شرکت‌هایی حضور داشته است.',
      ],
    },
    answers: {
      title:
        'جواب این سوالات را می‌توانید از سرویس پروفایل افراد در شرکت‌های نماتک دریافت کنید.',
      item: (
        <div data-selector='answer'>
          <div>
            استخراج این اطلاعات از سایت‌هایی مانند روزنامه رسمی کاری تقریبا غیر
            ممکن است. اما پروفایل افراد در شرکت‌ها این کار را مانند آب خوردن
            ساده کرده است.
          </div>
          <div data-selector='answer-2nd'>
            از طرفی اگر بخواهید می‌توانید پروفایل خود در سایت نماتک را کامل کنید
            تا افراد بیشتری به سوابق و اطلاعات شما دسترسی داشته باشند.
          </div>
        </div>
      ),
    },
  },
}

export const staticPageWebServiceItems: StaticPageWebServiceItemsType = [
  { title: 'اطلاعات پایه شرکت‌ها', icon: WebServiceCompaniesIcon },
  { title: 'هیئت مدیره شرکت‌ها', icon: WebServicePersonsIcon },
  { title: 'آگهی‌های روزنامه رسمی', icon: WebServiceNewsIcon },
  { title: 'دارندگان حق امضای شرکت‌ها', icon: WebServiceSignIcon },
  { title: 'سرمایه ثبتی شرکت‌ها', icon: WebServiceMoneyIcon },
  { title: 'شرکت‌های زیرمجموعه', icon: WebServiceCompanySubsetIcon },
  { title: 'استعلام دانش‌بنیان', icon: WebServiceKnowledgeIcon },
  { title: 'شرکت‌های یک فرد', icon: WebServiceCompanyIcon },
  { title: 'اطلاعات تماش شرکت‌ها', icon: WebServiceContactIcon },
  { title: 'مجوزهای صنفی', icon: WebServiceLicenseIcon },
]
export const staticsOtherServiceData: StaticsOtherServiceDataType = [
  {
    service: 'special-company',
    title: 'پروفایل اختصاصی شرکت',
    icon: <img src={HomeSpecialIcon} alt='special-company' />,
    link: WEB.ABOUT_COMPANY_MANAGEMENT,
  },
  {
    service: 'companies',
    title: 'پروفایل شرکت ها',
    icon: <img src={HomeCompanyIcon} alt='company' />,
    link: WEB.ABOUT_COMPANIES,
  },
  {
    service: 'persons',
    title: 'پروفایل اشخاص در شرکت ها',
    icon: <img src={HomePersonIcon} alt='person' />,
    link: WEB.ABOUT_PERSONS,
  },
  {
    service: 'industry',
    title: 'تحلیل صنعت',
    icon: <img src={HomeIndustryIcon} alt='industry' />,
    link: WEB.ABOUT_INDUSTRY,
  },
  {
    service: 'graph',
    title: 'شبکه ارتباطات',
    icon: <img src={HomeGraphIcon} alt='graph' />,
    link: WEB.ABOUT_GRAPH,
  },
  {
    service: 'api',
    title: 'وب‌سرویس API',
    icon: <img src={HomeApiIcon} alt='api' />,
    link: WEB.ABOUT_API,
  },
  {
    service: 'ads',
    title: 'تبلیغات در نماتک',
    icon: <img src={HomeAdsIcon} alt='ads' />,
    link: WEB.ADS,
  },
  {
    service: 'advanced-search',
    title: 'جستجوی پیشرفته',
    icon: <img src={HomeSearchIcon} alt='search' />,
    link: WEB.ABOUT_ADVANCE_SEARCH,
  },
]

export const codeSampleItems: CodeSampleItems = {
  php: {
    code: 'some php shit code idk about',
  },
  python: {
    code: 'some good python code',
  },
  'c#': {
    code: 'wtf even is this?',
  },
  go: {
    code: "meh, don't care really",
  },
}
