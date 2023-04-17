import {
  InstagramIcon,
  LinkedInIcon,
  TelegramIcon,
  TwitterIcon,
} from 'assets/icons'
import { WEB } from '../routes/web'
import type {
  IFooterInfo,
  IFooterLinks,
  IFooterSigns,
  IFooterSocials,
} from './interface'

export const footerItems: IFooterLinks = {
  contactUs: [
    {
      text: 'footer.withRasmio',
      route: '',
    },
    {
      text: 'footer.aboutUs',
      route: WEB.ABOUT_US,
    },
    {
      text: 'footer.contactUs',
      route: WEB.CONTACT_US,
    },
    {
      text: 'footer.magazine',
      route: WEB.BLOG,
    },
    {
      text: 'footer.jobOp',
      route: WEB.JOB_OP,
      target: '_blank',
    },
    {
      text: 'footer.oldVersion',
      route: WEB.OLD_WEBSITE,
    },
  ],
  services: [
    {
      text: 'footer.services',
      route: '',
    },
    {
      text: 'footer.companiesProfiles',
      route: WEB.FEATURE_COMPANY,
    },
    {
      text: 'footer.personProfiles',
      route: WEB.FEATURE_PERSON,
    },
    {
      text: 'footer.specialProfiles',
      tag: 'new',
      route: WEB.ABOUT_COMPANY_MANAGEMENT,
    },
    {
      text: 'footer.industryAnalyze',
      route: WEB.FEATURE_INDUSTRY,
    },

    {
      text: 'footer.advancedSearch',
      route: WEB.FEATURE_ADVANCED_SEARCH,
    },
    {
      text: 'footer.graphInfo',
      route: WEB.FEATURE_GRAPH,
    },
    {
      text: 'footer.commercial',
      route: WEB.ADS,
    },
    {
      text: 'footer.webApi',
      route: WEB.ABOUT_API,
    },
  ],
  news: [
    {
      text: 'footer.guide',
      route: '',
    },
    {
      text: 'footer.subscriptions',
      route: WEB.PRICING,
    },
    {
      text: 'footer.faq',
      route: WEB.FAQ,
    },
    {
      text: 'footer.conditions',
      route: WEB.TERMS,
    },
    {
      text: 'footer.privacy',
      route: WEB.PRIVACY,
    },
    {
      text: 'footer.disclaimer',
      route: WEB.DISCLAIMER,
    },
    {
      text: 'footer.dataSource',
      route: WEB.SOURCES,
    },
    // {
    //   text: 'footer.recommendations',
    //   route: WEB.SOURCES,
    // },
  ],
}

export const footerSignItems: IFooterSigns[] = [
  {
    imgSource: '/svg/about/nasr.svg',
    link: {
      url: 'https://tehran.irannsr.org/fa/trade_unit/2376501/swd_id/104366/%D8%A7%D8%B9%D8%B6%D8%A7%DB%8C-%D8%AD%D9%82%D9%88%D9%82%DB%8C-%D9%BE%DB%8C%D8%B4%DA%AF%D8%A7%D9%85%D8%A7%D9%86-%D8%B1%D8%B3%D9%85%DB%8C-%D9%BE%D8%B1%D8%AF%D8%A7%D8%B2%D8%B4-%D8%AF%D8%A7%D9%86%D8%A7.html',
      type: 'Popup',
      options:
        'toolbar=no, scrollbars=no, location=no, statusbar=no, menubar=no, resizable=0, width=450, height=630, top=30',
    },
  },
  {
    imgSource: '/svg/about/daneshbonyan.svg',
    link: undefined,
  },
  {
    imgSource: '/svg/about/namad.svg',
    link: {
      url: 'https://trustseal.enamad.ir/?id=179736&code=RN41jMl5Q99SLGoRhOzt',
      type: 'Popup',
      options:
        'toolbar=no, scrollbars=no, location=no, statusbar=no, menubar=no, resizable=0, width=450, height=630, top=30',
    },
  },
  {
    imgSource: '/svg/about/sabt.svg',
    link: {
      url: 'https://logo.samandehi.ir/Verify.aspx?id=209191&p=uiwkobpdpfvlrfthpfvlrfth',
      type: 'Popup',
      options:
        'toolbar=no, scrollbars=no, location=no, statusbar=no, menubar=no, resizable=0, width=450, height=630, top=30',
    },
  },
  {
    imgSource: '/svg/about/etehadie.svg',
    link: {
      url: 'https://ecunion.ir/verify/rasm.io?token=2862725602a5eff44df8',
      type: 'Popup',
      options:
        'toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=580, height=600, top=30',
    },
  },
]

export const footerSocialItems: IFooterSocials[] = [
  {
    icon: <img src={TwitterIcon} alt='twitter-icon' />,
    label: 'توییتر رسمیو',
    link: 'https://twitter.com/rasm_io',
  },
  {
    icon: <img src={LinkedInIcon} alt='linkedin-icon' />,
    label: 'لینکدین رسمیو',
    link: 'https://linkedin.com/company/rasmio',
  },
  {
    icon: <img src={TelegramIcon} alt='telegram-icon' />,
    label: 'تلگرام رسمیو',
    link: 'https://t.me/rasm_io',
  },
  {
    icon: <img src={InstagramIcon} alt='instagram-icon' />,
    label: 'اینستاگرام رسمیو',
    link: 'https://instagram.com/rasm_io',
  },
]

export const footerInfoItems: IFooterInfo[] = [
  {
    key: '1st-section',
    text: [
      'بسیاری از سازمان ها برای بهبود مسیر تجاری و بازاریابی خود نیازمند اطلاعاتی هستند که به‌طور پراکنده و غیر منسجم به وسیله روزنامه رسمی، سازمان ثبت، اداره مالیات و دیگر سازمان‌های دولتی منتشر می‌شود. رسمیو به عنوان اولین پلتفرم تحلیل و ارتباط کسب‌وکارها، با ارائه مواردی نظیر شماره ثبت، کد‌اقتصادی، اسامی مدیران شرکت و غیره، اطلاعات مورد نیاز افراد را بطور دقیق و شفاف در اختیار مخاطبین خود قرار می‌دهد.',
    ],
  },
  {
    key: '2nd-section',
    title: 'رسمیو چیست؟',
    text: [
      'رسمیو به عنوان اولین بستر تحلیل و ارتباط کسب و کارها در ایران، از سال 1397 با هدف تسهیل فرآیندهای تجاری سازمان‌ها شروع به فعالیت کرده است. رسمیو با کنار هم قرار دادن اطلاعات ثبتی و رسمی هر کسب و کار توانسته گام بزرگی در جهت بهبود فضای تجاری کشور بردارد. ارائه آمارهای مربوط به صادرات و واردات، شرکت های مادر و زیرمجموعه ها و غیره از جمله خدماتی است که نظر بسیاری از افراد را به رسمیو جلب کرده است.',
    ],
  },
  {
    key: '3rd-section',
    title: 'رسمیو برای چه کسانی مناسب است؟',
    text: [
      'برای شرکت‌های بازرگانی برای تحلیل شرکتها و افراد',
      'متخصصان مالی برای حسابداری، حسابرسی و بازرسی شرکت ها',
      'شرکت های حقوقی برای یافتن و استعلام افراد مرتبط',
      'شرکت های تولیدی برای دقت در تنظیم قرارداد با شخصیت های حقوقی از لحاظ تعیین دارندگان حق امضاء',
      'شرکت های سرمایه‌گذاری و سهامداری برای بررسی ارتباط شرکت ها و افراد با یکدیگر',
      'شرکت‌های خدماتی (مانند فروشگاه‌های اینترنتی، ارائه خدمات رایانه‌ای و ...) برای بررسی شركتها و موسسات طرف همکاری',
      'نهادهای دولتی و حاکمیتی برای فعالیت های نظارتی',
      'نهادهای مالی و پولی بررسی بررسی رسمیت شرکت‌ها و اعضای آن ها',
    ],
  },
  {
    key: '4th-section',
    title: 'رسمیو برای چه کسانی مناسب نیست؟',
    text: [
      'کسانی که به دنبال اطلاعات خصوصی افراد و شرکت‌ها هستند.',
      'کسانی که وقت و حوصله کلنجار با سایت های دولتی را دارند.',
      'کسانی که به دنبال یافتن نسبت افراد به جای رابطه ثبتی می‌گردند.',
      'کسانی که به اطلاعات داخلی کسب‌وکارها نیاز دارند.',
    ],
  },
]
