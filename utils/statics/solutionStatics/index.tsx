import {
  BookIcon,
  CheckIcon,
  DollarIcon,
  EyesIcon,
  HomeApiIcon,
  HomeCompanyIcon,
  HomeGraphIcon,
  HomeIndustryIcon,
  HomePersonIcon,
  HomeSearchIcon,
  IntroCompanyIcon,
  PersonAuthIcon,
  SolutionApiImg,
  SolutionCompanyCategoryImg,
  SolutionCompanyDataImg,
  SolutionCompanyGoogleImg,
  SolutionCompanyManagementImg,
  SolutionCompanyMarketingImg,
  SolutionCompanyProfileImg,
  SolutionCompanySearchImg,
  SolutionCompetitorImg,
  SolutionGraphImg,
  SolutionHsImg,
  SolutionIndustryCategoryImg,
  SolutionLicenseImg,
  SolutionSignatureImg,
} from 'assets/icons'
import { WEB } from '../routes/web'

import type {
  SolutionCompanyComparisonBodyType,
  SolutionCompanyComparisonHeaderType,
  SolutionCompanyDescriptionItemsDataType,
  SolutionCompanyManagementItemsType,
  solutionDescriptionItemsDataType,
  solutionFeatureItemsDataType,
  solutionGuideItemsDataType,
  solutionHeaderItemsDataType,
} from './interface'

export const solutionFeatureItemsData: solutionFeatureItemsDataType = {
  authentication: {
    title:
      'سرویس‌های رسمیو که به شما کمک می‌کند تا اشخاص و شرکت ها را احراز هویت کنید',
    content: [
      {
        title: 'پروفایل شرکت‌ها',
        icon: <img src={HomeCompanyIcon} alt='company' />,
        link: WEB.ABOUT_COMPANIES,
      },
      {
        title: 'پروفایل اشخاص در شرکت‌ها',
        icon: <img src={HomePersonIcon} alt='person' />,
        link: WEB.ABOUT_PERSONS,
      },
      {
        title: 'شبکه ارتباطات',
        icon: <img src={HomeGraphIcon} alt='graph' />,
        link: WEB.ABOUT_GRAPH,
      },
    ],
  },

  'marketing-research': {
    title:
      'سرویس‌های رسمیو که به شما کمک می‌کند تا تحقیقات بازاریابی خود را کامل کنید',
    content: [
      {
        title: 'جستجوی پیشرفته',
        icon: <img src={HomeSearchIcon} alt='search-selected' />,
        link: WEB.ABOUT_ADVANCE_SEARCH,
      },
      {
        title: 'شبکه ارتباطات',
        icon: <img src={HomeGraphIcon} alt='graph-selected' />,
        link: WEB.ABOUT_GRAPH,
      },
      {
        title: 'تحلیل صنعت',
        icon: <img src={HomeIndustryIcon} alt='industry-selected' />,
        link: WEB.ABOUT_INDUSTRY,
      },
    ],
  },

  'find-customers': {
    title: 'سرویس‌های رسمیو که به شما کمک می‌کند تا مشتریان خود را پیدا کنید',
    content: [
      {
        title: 'جستجوی پیشرفته',
        icon: <img src={HomeSearchIcon} alt='search-selected' />,
        link: WEB.ABOUT_ADVANCE_SEARCH,
      },
      {
        title: 'تحلیل صنعت',
        icon: <img src={HomeIndustryIcon} alt='search-selected' />,
        link: WEB.ABOUT_INDUSTRY,
      },
    ],
  },

  'product-development': {
    title: 'سرویس‌ رسمیو که به شما کمک می‌کند محصولات خود را توسعه دهید',
    content: [
      {
        title: 'وب‌سرویس API',
        icon: <img src={HomeApiIcon} alt='search-selected' />,
        link: WEB.ABOUT_API,
      },
    ],
  },

  'investment-opportunities': {
    title:
      'سرویس‌های رسیمو که  به شما کمک می‌کند  فرصت‌های سرمایه‌گذاری را پیدا کنید',
    content: [
      {
        title: 'جستجوی پیشرفته',
        icon: <img src={HomeSearchIcon} alt='search-selected' />,
        link: WEB.ABOUT_ADVANCE_SEARCH,
      },
      {
        title: 'شبکه ارتباطات',
        icon: <img src={HomeGraphIcon} alt='search-selected' />,
        link: WEB.ABOUT_GRAPH,
      },
      {
        title: 'تحلیل صنعت',
        icon: <img src={HomeIndustryIcon} alt='search-selected' />,
        link: WEB.ABOUT_INDUSTRY,
      },
    ],
  },
}

export const solutionHeaderItemsData: solutionHeaderItemsDataType = {
  authentication: {
    icon: <PersonAuthIcon viewbox='0 0 40 40' />,
    subTitle: 'احراز هویت افراد و شرکت‌ها',
    title: 'سریع‌ترین راه دستیابی به اطلاعات رسمی شرکت‌ها و افراد در شرکت‌ها',
  },
  'marketing-research': {
    icon: <BookIcon />,
    subTitle: 'تحقیقات بازاریابی',
    title: 'قدرتمندترین ابزار دستیابی به اطلاعات هدفمند بازاریابی',
  },
  'find-customers': {
    icon: <EyesIcon />,
    subTitle: 'یافتن مشتریان',
    title: 'ابزاری برای یافتن مشتریان خود در میان ۲ میلیون شرکت ایرانی',
  },
  'product-development': {
    icon: <DollarIcon />,
    subTitle: 'توسعه محصولات',
    title: 'ارتقای محصولات دیجیتال شما با وب‌سرویس‌های ما',
  },
  'investment-opportunities': {
    icon: <IntroCompanyIcon />,
    subTitle: 'فرصت‌های سرمایه‌گذاری',
    title: 'ابزاری در دست شرکت‌های سرمایه‌گذاری برای تحلیل بازار',
  },
}

export const solutionGuideItemsData: solutionGuideItemsDataType = {
  authentication: {
    title: 'دستیابی سریع به اطلاعات رسمی شرکت‌ها و افراد',
    content:
      'داده‌هایی همچون اطلاعات ثبتی شرکت‌ها و افراد، که برای عقد قراردادها و همکاری نیاز دارید در رسمیو پیدا کنید.',
  },
  'marketing-research': {
    title: 'اطلاعات لازم تحقیقات بازاریابی شرکت‌ها را یکجا در دست دارید',
    content:
      'داده‌هایی همچون شرکت‌هایی در حوزه‌های مختلف جغرافیایی، ارتباط شرکت‌ها و افراد با یکدیگر، محصولات، مجوزها، ظرفیت‌های تولید، آمار تجارت جهانی،  و همچنین قابلیت فیلتر کردن اطلاعات را در رسمیو بدست ‌آورید.',
  },
  'find-customers': {
    title: 'در میان شرکت‌های ایرانی مشتریان خود را بیابید',
    content:
      'داده‌هایی مثل مجوزهای فعالیت، اطلاعات ثبتی شرکت‌ها، ارتباط شرکت‌ها و افراد با یکدیگر، محصولات، مجوزها، ظرفیت‌های تولید، آمار تجارت جهانی، شرکت‌هایی در حوزه‌های مختلف جغرافیایی و همچنین قابلیت فیلتر کردن اطلاعات را در رسمیو بدست ‌آورید.',
  },
  'product-development': {
    title: 'وب سرویس اطلاعات شرکت‌ها و افراد در شرکت‌ها را در دست دارید',
    content:
      'داده‌هایی مثل اطلاعات ثبتی شرکت‌ها، ارتباط شرکت‌ها و افراد با یکدیگر، محصولات و غیره را از طریق وب‌سرویس به‌دست ‌آورید و محصولات دیجیتال خود را غنی‌تر کنید. کاربردپذیری محصولات را افزایش دهید و تجربه‌ی خوبی از کار با محصولات در اختیار مشتری قرار دهید.',
  },
  'investment-opportunities': {
    title:
      'اطلاعات لازم برای تصمیم‌گیری‌های بزرگ در کسب‌وکارهای ایرانی در دست شماست',
    content:
      'ارتباط لایه‌های مدیریتی را شناسایی کنید، میزان دریافت ارزهای دولتی را مشاهده کنید، شرکت‌ها را بر اساس مجوزهای تولید مشاهده کنید و تصمیم‌های سرمایه‌گذاری خود را بر مبنای دیتا بگیرید.',
  },
}

export const solutionDescriptionItemsData: solutionDescriptionItemsDataType = {
  authentication: [
    {
      title: 'هر شرکت رسمی، یک پروفایل در رسمیو',
      content:
        'حسابدارها، حسابرس‌ها، مسئولان قرارداد، مدیران و تصمیم‌گیران شرکت‌ها به‌وسیله‌ی پروفایل شرکت‌ها در رسمیو به سرعت به اطلاعات ثبتی و قانونی افراد و شرکت‌ها دست پیدا می‌کنند.',
      img: SolutionCompanyProfileImg,
    },

    {
      title: 'رقبای خود را زیر نظر بگیرید',
      content:
        'می‌توانید افراد و شرکت‌ها را دنبال کنید تا قبل از دیگران از تغییرات آن‌ها باخبر شوید و از آن بهره ببرید.',
      img: SolutionCompetitorImg,
    },

    {
      title: 'صاحبان امضای واقعی را بشناسید',
      content:
        'برای بستن قرارداد باید بدانید با چه کسی در ارتباط باشید و افراد اثرگذار در شرکت‌ها را بشناسید.',
      img: SolutionSignatureImg,
    },
  ],

  'marketing-research': [
    {
      title: 'جستجوی اطلاعات مربوط به شرکت‌ها و فیلتر در دسته‌های مختلف',
      content:
        'محققان، صاحبان کسب‌وکار، بازاریابان، متخصصان کسب‌وکار و دانشمندان داده می‌تواند اطلاعات مورد نظر خود را جستجو کنند، آن را فیلتر کنند و از آن خروجی بگیرند. این جستجوها را برای آینده ذخیره کنند.',
      img: SolutionCompanySearchImg,
    },
    {
      title: 'ارتباط افراد و شرکت‌ها را به شکل معنی‌داری ببینید',
      content:
        'برای بررسی دقیق بازار می‌توانید ارتباط شرکت‌ها و افراد را در قالب یک گراف شبکه‌ای ارتباطی مشاهده کنید.',
      img: SolutionGraphImg,
    },
    {
      title: 'از دسته‌بندی صنایع و اطلاعات کالاها به شرکت‌ها برسید',
      content:
        'گاهی لازم است بدانید چه شرکت‌هایی با چه فعالیت‌هایی کدام دسته از خدمات و محصولات را ارائه می‌دهند. این یکی از مهم‌ترین ویژگی‌های رسمیو است.',
      img: SolutionHsImg,
    },
  ],

  'find-customers': [
    {
      title: 'شرکت‌ها را بر مبنای مجوزهایشان دسته‌بندی کنید',
      content:
        'صاحبان کسب‌وکار و بازاریابان می‌توانند اطلاعات تماس شرکت‌های یکسان را هم از طریق سایت به صورت مستقیم دریافت کنند و هم به صورت اختصاصی از آنها خروجی اکسل بگیرند.',
      img: SolutionLicenseImg,
    },

    {
      title: 'شرکت‌های یک شهر یا استان خاص را دسته‌بندی کنید',
      content:
        'برنامه‌های بازاریابی خود را بر مبنای شرکت‌های یک شهر یا استان تنظیم کنید.',
      img: SolutionCompanyCategoryImg,
    },
    {
      title: 'از دسته‌بندی صنایع و اطلاعات کالاها به شرکت‌ها برسید',
      content:
        'آمار صادرات و واردات محصولات را در رسمیو بر مبنای HS کد ببینید و شرکت‌های تولیدو وارد کننده‌ی هر HS کد را مشاهده کنید.',
      img: SolutionIndustryCategoryImg,
    },
  ],

  'product-development': [
    {
      title: 'تجربه کاربری بهتر برای کاربران شما',
      content: '',
      img: SolutionApiImg,
    },
    {
      title: 'تعرفه‌های متنوع و وب‌سرویس‌هایی با دسترسی‌های مختلف',
      content: 'مدیریت هزینه‌ها با استفاده از وب‌سرویس‌هایی با دسترسی محدودتر',
      img: SolutionApiImg,
    },
  ],

  'investment-opportunities': [
    {
      title: 'ارتباط مدیریتی شرکت‌ها را بیابید',
      content:
        'اگر نیاز دارید ارتباط مدیریتی شرکت‌ها را با یکدیگر بدانید و از لایه‌های تصمیم‌ساز شرکت‌ها و ارتباط اشخاص و شرکت‌ها با همدیگر اطلاعات پیدا کنید رسمیو این امکان را در اختیار شما قرار می‌دهد.',
      img: SolutionCompanyManagementImg,
    },
    {
      title: 'ارتباط افراد و شرکت‌ها را به شکل معنی‌داری ببینید',
      content:
        'برای بررسی دقیق بازار می‌توانید ارتباط شرکت‌ها و افراد را در قالب یک گراف (نمودار) شبکه‌ای ارتباطی مشاهده کنید.',
      img: SolutionGraphImg,
    },
    {
      title: 'تحلیلی از تجارت محصولات که نیاز دارید بدانید',
      content:
        'آمار تجارت جهانی محصولات شامل کشورهای صادرکننده و واردکننده، تاریخچه بازار و تراز تجاری کشورها بر مبنای اطلاعات گمرک و سازمان ملل، آمار تجارت ایران و کشورهای صادر و وارد کننده، نوع و برند کالاهای وارداتی، همچنین شرکت‌های تولید و واردکننده را مشاهده نمایید.',
      img: SolutionIndustryCategoryImg,
    },
  ],
}

export const SolutionCompanyServiceItemsData: string[] = [
  'شرکت  و حوزه فعالیت تان را بیشتر و کامل‌تر توضیح و معرفی نمایید.',
  'راه‌های تماس و ارتباط با مجموعه خود را به‌روزرسانی و ویرایش کنید',
  'احراز هویت شده و تیک آبی بگیرید',
  'اطلاعات فروش و بازاریابی، محصولات و کاتالوگ‌های خود را به اشتراک بگذارید',
  'بدون چالش‌های فنی سایت، در فضای اینترنت حضور موثرتر داشته باشید.',
  'با مخاطبانتان در ارتباط باشید و پیام های آنها را دریافت نمایید.',
  'در مورد حوزه فعالیت شرکت و محیط آن عکس و فیلم بگذارید.',
]

export const SolutionCompanyManagementItemsData: SolutionCompanyManagementItemsType =
  {
    'start-authentication': 'شروع احراز هویت',
    'company-national-id': 'تایید شناسه ملی شرکت',
    'ceo-authentication': 'احرازهویت مدیرعامل',
  }

export const SolutionCompanyDescriptionItemsData: SolutionCompanyDescriptionItemsDataType =
  [
    {
      title: 'به راحتی در گوگل دیده شوید',
      content:
        'برای شرکت‌ها فعال دیده شدن در اینترنت یکی از مهم‌ترین دغدغه‌هاست. هزینه‌های بالای راه‌اندازی، نگه‌داری و سئو کردن سایت‌ها را کنار بگذارید و با ساده‌ترین ابزار سایت خود را راه‌اندازی کنید.',
      img: SolutionCompanyGoogleImg,
    },

    {
      title: 'مسیر جدید برای بازاریابی دیجیتال',
      content:
        'رسمیو یکی از پربازدیدترین سایت‌های ایرانی است و کاربران آن همگی از فعالان اقتصادی هستند. به راحتی پروفایل اختصاصی شرکت خود را در کنترل بگیرید و مسیر جدیدی برای فروش و بازاریابی دیجیتال ایجاد کنید.',
      img: SolutionCompanyMarketingImg,
    },
    {
      title: 'مدیریت ساده اطلاعات رسمی شرکت',
      content:
        'پروفایل اختصاصی فقط در اختیار شرکت‌های ثبت شده‌ی رسمی قرار می‌گیرد و کسب‌وکارهای غیر رسمی قادر به دریافت آن نیستند از این رو اعتبار بالایی برای کسب‌وکار شما دارد.',
      img: SolutionCompanyDataImg,
    },
  ]

export const SolutionCompanyComparisonHeader: SolutionCompanyComparisonHeaderType =
  [{ title: 'ویژگی' }, { title: 'عادی' }, { title: 'اختصاصی' }]

export const SolutionCompanyComparisonBody: SolutionCompanyComparisonBodyType =
  [
    ['اطلاعات ثبتی و رسمی', true, true],
    ['مشاهده لوگوی شرکت', false, true],

    ['توضیحات کوتاه اختصاصی', false, true],

    ['شماره تماس فروش', false, true],

    ['آدرس شبکه‌های اجتماعی', false, true],

    ['معرفی محصولات و کاتالوگ', false, true],

    ['تصاویر و ویدیو تبلیغاتی', false, true],
  ]
