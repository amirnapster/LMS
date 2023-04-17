import {
  CompanyIcon,
  FeatureAdvancedSearchIcon,
  FeatureCompanyIcon,
  FeatureConventionIcon,
  FeatureGraphIcon,
  FeatureIndustryIcon,
  FeaturePersonIcon,
  HomeCompanyIcon,
  HomeSpecialIcon,
  HomeGraphIcon,
  HomeIndustryIcon,
  HomePersonIcon,
  HomeSearchIcon,
  IndustryIcon,
  PersonIcon,
  ProductIcon,
  HomeCompanySelectedIcon,
  HomePersonSelectedIcon,
  HomeIndustrySelectedIcon,
  HomeSearchSelectedIcon,
  HomeGraphSelectedIcon,
  HomeSpecialSelectedIcon,
} from 'assets/icons'
import { svgCreator } from 'components/svgCreator'
import type {
  HomeServiceType,
  IHomeContent,
} from 'libs/redux/slices/home/interface'
import type { RootObject } from 'libs/redux/services/home/interface'
import type { IHomeServiceItems } from './interface'
import { WEB } from '../routes/web'

const companyIcon =
  'M17 11V5c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h5c.55 0 1-.45 1-1v-3h2v3c0 .55.45 1 1 1h5c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2h-2zM7 19H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm4 4H9v-2h2v2zm0-4H9V9h2v2zm0-4H9V5h2v2zm4 8h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm4 12h-2v-2h2v2zm0-4h-2v-2h2v2z'
const personIcon =
  'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4z'
const industryIcon =
  'M22 10v12H2V10l7-3v2l5-2v3h8zm-4.8-1.5L18 2h3l.8 6.5h-4.6zM11 18h2v-4h-2v4zm-4 0h2v-4H7v4zm10-4h-2v4h2v-4z'
const productsIcon =
  'M2.91 6.545c.5 0 .908-.409.908-.909v-.909c0-.5.41-.909.91-.909h.908c.5 0 .91-.409.91-.909S6.135 2 5.635 2h-.909A2.724 2.724 0 0 0 2 4.727v.91c0 .5.41.908.91.908zM5.636 20.182h-.909c-.5 0-.909-.41-.909-.91v-.908c0-.5-.409-.91-.909-.91s-.909.41-.909.91v.909A2.724 2.724 0 0 0 4.727 22h.91c.5 0 .908-.409.908-.909s-.409-.91-.909-.91zM19.273 2h-.909c-.5 0-.909.41-.909.91s.41.908.91.908h.908c.5 0 .91.41.91.91v.908c0 .5.408.91.908.91s.91-.41.91-.91v-.909A2.724 2.724 0 0 0 19.272 2zM21.091 17.455c-.5 0-.909.409-.909.909v.909c0 .5-.409.909-.909.909h-.909c-.5 0-.909.409-.909.909s.41.909.91.909h.908A2.723 2.723 0 0 0 22 19.273v-.91c0-.5-.409-.908-.909-.908zM18.364 14.61V9.39a1.8 1.8 0 0 0-.91-1.573L12.91 5.2A1.796 1.796 0 0 0 12 4.955c-.318 0-.627.081-.909.245L6.546 7.81c-.564.326-.91.926-.91 1.581v5.218a1.8 1.8 0 0 0 .91 1.573L11.09 18.8c.282.164.591.245.91.245.318 0 .627-.081.908-.245l4.546-2.618a1.8 1.8 0 0 0 .909-1.573zm-7.273 2.09-3.636-2.09V10.4l3.636 2.118V16.7zm.91-5.755-3.6-2.1L12 6.773l3.6 2.072-3.6 2.1zm4.545 3.664L12.909 16.7v-4.182l3.637-2.118v4.21z'
const newsIcon =
  'M15.556 3H5.778C4.8 3 4 3.9 4 5v14c0 1.1.8 2 1.778 2h12.444C19.2 21 20 20.1 20 19V8l-4.444-5zM8.444 7h2.667C11.6 7 12 7.45 12 8s-.4 1-.889 1H8.444c-.488 0-.888-.45-.888-1s.4-1 .888-1zm7.112 10H8.444c-.488 0-.888-.45-.888-1s.4-1 .888-1h7.112c.488 0 .888.45.888 1s-.4 1-.888 1zm0-4H8.444c-.488 0-.888-.45-.888-1s.4-1 .888-1h7.112c.488 0 .888.45.888 1s-.4 1-.888 1zm-.89-5V5l3.556 4h-2.666c-.49 0-.89-.45-.89-1z'
const ownerShipIcon =
  'M12 3c-.46 0-.93.04-1.4.14-2.76.53-4.96 2.76-5.48 5.52-.48 2.61.48 5.01 2.22 6.56.43.38.66.91.66 1.47V19c0 1.1.9 2 2 2h.28a1.98 1.98 0 0 0 3.44 0H14c1.1 0 2-.9 2-2v-2.31c0-.55.22-1.09.64-1.46A6.956 6.956 0 0 0 19 10c0-3.87-3.13-7-7-7zm2 14h-4v-1h4v1zm-4 2v-1h4v1h-4zm5.31-5.26c-.09.08-.16.18-.24.26H8.92c-.08-.09-.15-.19-.24-.27-1.32-1.18-1.91-2.94-1.59-4.7.36-1.94 1.96-3.55 3.89-3.93.34-.07.68-.1 1.02-.1 2.76 0 5 2.24 5 5 0 1.43-.61 2.79-1.69 3.74z'

export const advancedSearchTitle = [
  {
    id: 1253,
    title: 'company',
    svgCreator,
    path: companyIcon,
    link: WEB.ADVANCED_SEARCH_COMPANY,
    active: true,
  },
  {
    id: 2857,
    title: 'person',
    svgCreator,
    path: personIcon,
    link: WEB.ADVANCED_SEARCH_PERSON,
    active: true,
  },
  {
    id: 2966,
    title: 'industry',
    svgCreator,
    path: industryIcon,
    link: WEB.ADVANCED_SEARCH_INDUSTRY,
    active: true,
  },
  {
    id: 3745,
    title: 'product',
    svgCreator,
    path: productsIcon,
    link: WEB.ADVANCED_SEARCH_PRODUCTS,
    active: true,
  },
  {
    id: 4005,
    title: 'official.news',
    svgCreator,
    path: newsIcon,
    link: WEB.ADVANCED_SEARCH_NEWS,
    active: true,
  },
  {
    id: 5550,
    title: 'ownership',
    svgCreator,
    path: ownerShipIcon,
    link: WEB.ADVANCED_SEARCH_OWNERSHIP,
    active: true,
  },
]

export const featureBoxItems = [
  {
    id: 121212,
    icon: <img src={FeatureCompanyIcon} alt='company-icon' />,
    title: 'featureBox.companies.info',
    link: WEB.FEATURE_COMPANY,
  },
  {
    id: 131313,
    icon: <img src={FeaturePersonIcon} alt='person-icon' />,
    title: 'featureBox.persons.info',
    link: WEB.FEATURE_PERSON,
  },
  {
    id: 141414,
    icon: <img src={FeatureIndustryIcon} alt='industry-icon' />,
    title: 'featureBox.industry.info',
    link: WEB.FEATURE_INDUSTRY,
  },
  {
    id: 151515,
    icon: <img src={FeatureAdvancedSearchIcon} alt='advance-search-icon' />,
    title: 'featureBox.advanceSearch.info',
    link: WEB.FEATURE_ADVANCED_SEARCH,
  },
  // {
  //   id: 161616,
  //   icon: <img src={FeatureConventionIcon} alt='convention-icon' />,
  //   title: 'featureBox.convention.info',
  //   link: WEB.FEATURE_CONVENTION,
  // },

  {
    id: 171717,
    icon: <img src={FeatureGraphIcon} alt='graph-icon' />,
    title: 'featureBox.graph.info',
    link: WEB.FEATURE_GRAPH,
  },
]

export const industryBoxItems: Record<string, string> = {
  farm: '(01-05)',
  food: '(16-24)',
  mine: '(25-27)',
  chemical: '(28-38)',
  thread: '(41-43)',
  wood: '(44-46)',
  building: '(68-70)',
  metals: '(71)',
  industry: '(84-85)',
  transport: '(86-89)',
  art: '(97)',
  other: '(98-99)',
}

export const facilitiesData = (data?: RootObject['value']) => [
  {
    icon: <img src={CompanyIcon} alt='company-icon' />,
    count: data?.companyCount || 1975608,
    title: 'company',
  },
  {
    icon: <img src={PersonIcon} alt='person-icon' />,
    count: data?.personCount || 3045857,
    title: 'person',
  },
  {
    icon: <img src={IndustryIcon} alt='industry-icon' />,
    count: data?.industry || 10318,
    title: 'industry',
  },
  {
    icon: <img src={ProductIcon} alt='product-icon' />,
    count: data?.products || 1378985,
    title: 'product',
  },
]

export const topExportData = [
  {
    id: 270900,
    title: '$50.8B - 270900 - نفت خام و روغن حاصل از مواد معدنی قیری',
  },
  { id: 271011, title: '$7.9B - 271011 - روغن های سبک و فرآورده ها' },
  {
    id: 390120,
    title: '$2B - 390120 - پلی اتیلن با وزن مخصوص (چگالی) 94% یا بیشتر',
  },
]
export const topImportData = [
  { id: 100590, title: '$2.1B - 100590 - ذرت / سایر' },
  {
    id: 100630,
    title: '$1.6B - 100630 - برنج نیمه سفیدشده  یا برنج کامل سفید شده',
  },
  { id: 120100, title: '$1.1B - 120100 - دانه سویا، حتی خرد شده' },
]

export const RasmioForData = [
  {
    link: WEB.FOR_INVESTORS,
    image: '/svg/campaign/for4.png',
    title: 'investors.and.shareholders',
  },
  {
    link: WEB.FOR_TRADERS,
    image: '/svg/campaign/for1.png',
    title: 'merchants.and.traders',
  },
  {
    link: WEB.FOR_FINANCIAL_INSTITUTIONS,
    image: '/svg/campaign/for2.png',
    title: 'financial.institutions',
  },
  {
    link: WEB.FOR_PRODUCERS,
    image: '/svg/campaign/for6.png',
    title: 'craftsmen.and.manufacturers',
  },
  {
    link: WEB.FOR_MARKETERS,
    image: '/svg/campaign/for3.png',
    title: 'marketers.and.sellers',
  },
  {
    link: WEB.FOR_RESEARCHERS,
    image: '/svg/campaign/for5.png',
    title: 'researchers.and.journalists',
  },
  {
    link: WEB.FOR_GOVERNMENTS,
    image: '/svg/campaign/for7.png',
    title: 'governing.and.supervisory.institutions',
  },
]

export const rasmioCustomer = [
  { src: '/svg/staticPage/noavari.png', alt: 'noavari' },
  { src: '/svg/staticPage/jomhoori.png', alt: 'jomhoori' },
  { src: '/svg/staticPage/boors.png', alt: 'boors' },
  { src: '/svg/home/customers/kish-card.png', alt: 'kish-card' },
  { src: '/svg/home/customers/digikala.png', alt: 'digikala' },
  { src: '/svg/home/customers/faraboom.png', alt: 'faraboom' },
  { src: '/svg/home/customers/amar-iran.png', alt: 'amar-iran' },
  { src: '/svg/home/customers/iran-khodro.png', alt: 'iran-khodro' },
  { src: '/svg/home/customers/kian.png', alt: 'kian' },
  { src: '/svg/home/customers/tejarat-amn.png', alt: 'tejarat-amn' },
  { src: '/svg/home/customers/donyaye-eghtesad.png', alt: 'donyaye-eghtesad' },
  { src: '/svg/staticPage/irancell.png', alt: 'irancell' },
  { src: '/svg/staticPage/ati.png', alt: 'ati' },
  { src: '/svg/staticPage/tejarat-bank.png', alt: 'tejarat-bank' },
  { src: '/svg/staticPage/shahrdari.png', alt: 'shahrdari' },
  { src: '/svg/staticPage/pasargad-bank.png', alt: 'pasargad-bank' },
  { src: '/svg/staticPage/mellat-bank.png', alt: 'mellat-bank' },
  { src: '/svg/staticPage/mofid.png', alt: 'mofid' },
  { src: '/svg/staticPage/saderat-bank.png', alt: 'saderat-bank' },
  { src: '/svg/staticPage/pooya.png', alt: 'pooya' },
  { src: '/svg/home/customers/asyatech.png', alt: 'asyatech' },
  { src: '/svg/home/customers/refah-bank.png', alt: 'refah-bank' },
  { src: '/svg/home/customers/tamin.png', alt: 'tamin' },
  { src: '/svg/home/customers/ali-baba.png', alt: 'ali-baba' },
  { src: '/svg/home/customers/mci.png', alt: 'mci' },
  { src: '/svg/home/customers/mapna.png', alt: 'mapna' },
]

export const entitySearchOptions = [
  { value: '{ "entityTitle": "all","entityValue": 0 }', label: 'all' },
  {
    value: '{ "entityTitle": "company","entityValue": 1 }',
    label: 'companies',
  },
  { value: '{ "entityTitle": "person","entityValue": 2 }', label: 'persons' },
  { value: '{ "entityTitle": "product","entityValue": 3 }', label: 'products' },
  {
    value: '{ "entityTitle": "industry","entityValue": 4 }',
    label: 'industries',
  },
  {
    value: '{ "entityTitle": "news","entityValue": 5 }',
    label: 'official.news',
  },
  {
    value: '{ "entityTitle": "ip","entityValue": 6 }',
    label: 'ownerships',
  },
]

export const testimonialItems: Record<string, string> = {
  company: '+ 2 میلیون',
  person: ' + 3 میلیون',
  'industryBox.industry': '+ 10 هزار',
  product: '+ 1 میلیون',
}
export const homeServicesItems: IHomeServiceItems[] = [
  {
    id: 'company',
    icon: <img src={HomeCompanyIcon} alt='home-company-icon' />,
  },
  {
    id: 'person',
    icon: <img src={HomePersonIcon} alt='home-person-icon' />,
  },
  {
    id: 'industry',
    icon: <img src={HomeIndustryIcon} alt='home-industry-icon' />,
  },
  {
    id: 'search',
    icon: <img src={HomeSearchIcon} alt='home-search-icon' />,
  },
  {
    id: 'graph',
    icon: <img src={HomeGraphIcon} alt='home-graph-icon' />,
  },
  {
    id: 'special',
    icon: <img src={HomeSpecialIcon} alt='home-special-icon' />,
  },
]

export const homeServiceContents: Record<HomeServiceType, IHomeContent> = {
  company: {
    title: 'پروفایل شرکت‌ها',
    description:
      'هر شرکتی که در ایران ثبت می‌شود مجموعه‌ای از اطلاعات ثبتی و حاکمیتی خود را منتشر می‌کند. از اینکه این شرکت در چه سالی ثبت شده است، شماره ملی آن چیست؟ آدرس شرکت کجاست؟ و... پروفایل شرکت‌ ابزاری است که همه این اطلاعات بعلاوه داده‌های دیگر مربوط به شرکت را در یک جا جمع کرده است.',
    image: <img src={HomeCompanySelectedIcon} alt='company-selected' />,
    href: WEB.ABOUT_COMPANIES,
  },
  person: {
    title: 'پروفایل اشخاص در شرکت‌ها',
    description:
      'شرکت‌ها را افراد اداره می‌کنند. با انتشار روزنامه رسمی هر شرکت تعدادی از افراد به جامعه کسب‌وکار معرفی می‌شوند تا فعالان اقتصادی بدانند به صورت قانونی با چه اشخاصی طرف هستند. در سرویس پروفایل اشخاص تاریخچه عضویت افراد در شرکت‌ها و سمت‌های آن‌ها نمایش داده می شود.',
    image: <img src={HomePersonSelectedIcon} alt='person-selected' />,
    href: WEB.ABOUT_PERSONS,
  },
  industry: {
    title: 'تحلیل صنعت',
    description:
      'تحلیل صنعت به شما کمک می‌کند تجارت ایران و جهان را در یک نگاه بررسی کنید. شرکت‌هایی که محصولات را وارد یا صادر می‌کنند را پیدا کنید. بر اساس HS کد صنعت‌های مختلف را تحلیل کنید.',
    image: <img src={HomeIndustrySelectedIcon} alt='industry-selected' />,
    href: WEB.ABOUT_INDUSTRY,
  },
  search: {
    title: 'جستجوی پیشرفته',
    description:
      'با استفاده از سرویس جستجوی پیشرفته می‌توانید در دسته‌های مختلف مانند شرکت‌ها، اشخاص، صنعت، محصول، آگهی های رسمی و… با فیلترهای متعدد اقدام به جستجو کنید.',
    image: <img src={HomeSearchSelectedIcon} alt='search-selected' />,
    href: WEB.ABOUT_ADVANCE_SEARCH,
  },
  graph: {
    title: 'شبکه ارتباطات',
    description:
      'شبکه ارتباطات به شما کمک می‌کند روابط مدیریتی شرکت‌ها و افراد را با هم شناسایی کنید. شبکه نموداریست که بوسیله‌ی آن می‌توانید ارتباط بین شرکت‌ها و قراردادهای خود را احراز هویت کنید.',
    image: <img src={HomeGraphSelectedIcon} alt='graph-selected' />,
    href: WEB.ABOUT_GRAPH,
  },
  special: {
    title: 'پروفایل اختصاصی شرکت‌ها',
    description:
      'از طریق پروفایل اختصاصی در رسمیو شرکت خود را معرفی کنید. راه‌های تماس و ارتباط با مجموعه خود را بروزرسانی و ویرایش کنید. احراز هویت شوید و تیک آبی بگیرید و اطلاعات فروش و بازاریابی، محصولات و کاتالوگ‌های خود را به اشتراک بگذارید.',
    image: <img src={HomeSpecialSelectedIcon} alt='special-selected' />,
    href: WEB.ABOUT_COMPANY_MANAGEMENT,
  },
}
