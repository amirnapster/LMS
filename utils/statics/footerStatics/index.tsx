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
    imgSource: '/svg/about/namad.svg',
    link: {
      url: 'https://trustseal.enamad.ir/?id=139667&code=1HMGO60VJQaZyrQhqtNP',
      type: 'Popup',
      options:
        'toolbar=no, scrollbars=no, location=no, statusbar=no, menubar=no, resizable=0, width=450, height=630, top=30',
    },
  },
  {
    imgSource: '/svg/about/sabt.svg',
    link: {
      url: 'https://logo.samandehi.ir/Verify.aspx?id=161114&p=rfthgvkarfthrfthrfthaods',
      type: 'Popup',
      options:
        'toolbar=no, scrollbars=no, location=no, statusbar=no, menubar=no, resizable=0, width=450, height=630, top=30',
    },
  },
  {
    imgSource: '/svg/about/etehadie.svg',
    link: {
      url: 'https://ecunion.ir/verify/namatek.com?token=51524456076ae553b2fa',
      type: 'Popup',
      options:
        'toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=580, height=600, top=30',
    },
  },
]

export const footerSocialItems: IFooterSocials[] = [
  {
    icon: <img src={LinkedInIcon} alt='linkedin-icon' />,
    label: 'لینکدین نماتک',
    link: 'https://linkedin.com/company/namatek',
  },
  {
    icon: <img src={TelegramIcon} alt='telegram-icon' />,
    label: 'تلگرام نماتک',
    link: 'https://t.me/namatek_media',
  },
  {
    icon: <img src={InstagramIcon} alt='instagram-icon' />,
    label: 'اینستاگرام نماتک',
    link: 'https://instagram.com/namatekcom',
  },
]

export const footerInfoItems: IFooterInfo[] = [
  {
    key: '1st-section',
    text: [
      'بسیاری از سازمان ها برای بهبود مسیر تجاری و بازاریابی خود نیازمند اطلاعاتی هستند که به‌طور پراکنده و غیر منسجم به وسیله روزنامه رسمی، سازمان ثبت، اداره مالیات و دیگر سازمان‌های دولتی منتشر می‌شود. نماتک به عنوان اولین پلتفرم تحلیل و ارتباط کسب‌وکارها، با ارائه مواردی نظیر شماره ثبت، کد‌اقتصادی، اسامی مدیران شرکت و غیره، اطلاعات مورد نیاز افراد را بطور دقیق و شفاف در اختیار مخاطبین خود قرار می‌دهد.',
    ],
  },
  {
    key: '2nd-section',
    title: 'نماتک چیست؟',
    text: [
      'نماتک به عنوان اولین بستر تحلیل و ارتباط کسب و کارها در ایران، از سال 1397 با هدف تسهیل فرآیندهای تجاری سازمان‌ها شروع به فعالیت کرده است. نماتک با کنار هم قرار دادن اطلاعات ثبتی و رسمی هر کسب و کار توانسته گام بزرگی در جهت بهبود فضای تجاری کشور بردارد. ارائه آمارهای مربوط به صادرات و واردات، شرکت های مادر و زیرمجموعه ها و غیره از جمله خدماتی است که نظر بسیاری از افراد را به نماتک جلب کرده است.',
    ],
  },
  {
    key: '3rd-section',
    title: 'نماتک برای چه کسانی مناسب است؟',
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
    title: 'نماتک برای چه کسانی مناسب نیست؟',
    text: [
      'کسانی که به دنبال اطلاعات خصوصی افراد و شرکت‌ها هستند.',
      'کسانی که وقت و حوصله کلنجار با سایت های دولتی را دارند.',
      'کسانی که به دنبال یافتن نسبت افراد به جای رابطه ثبتی می‌گردند.',
      'کسانی که به اطلاعات داخلی کسب‌وکارها نیاز دارند.',
    ],
  },
]
