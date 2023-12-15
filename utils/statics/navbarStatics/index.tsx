import {
  AdsIcon,
  BlogIcon,
  BookIcon,
  CompanyDataIcon,
  DataIcon,
  DollarIcon,
  EyesIcon,
  GraphIcon,
  GuideIcon,
  IndustryCompanyIcon,
  IntroCompanyIcon,
  LayoutIcon,
  MessageIcon,
  PersonAuthIcon,
  PersonDataIcon,
  PersonSvgIcon,
  ProductDevelopmentIcon,
  NamatekLogoSvg,
  SearchIcon,
  WebServiceIcon,
} from 'assets/icons'
import   BusinessOutlined from '@mui/icons-material/BusinessOutlined'
import   PersonOutlineOutlined from '@mui/icons-material/PersonOutlineOutlined'
import   ViewInArOutlined from '@mui/icons-material/ViewInArOutlined'
import   FactoryOutlined from '@mui/icons-material/FactoryOutlined'
import   EmojiObjectsOutlined from '@mui/icons-material/EmojiObjectsOutlined'
import   FeedOutlined from '@mui/icons-material/FeedOutlined'
import type {
  NavItemsType,
  NavItemType,
  ProfileNavItemsType,
} from './interface'

export const navItemsData: NavItemsType = {
  solutions: {
    isSimple: false,
    content: [
      {
        title: 'احراز هویت شرکت‌ها و افراد',
        description: 'آگاهی از اطلاعات ثبتی شرکت‌ها و افراد',
        icon: <PersonAuthIcon />,
        route: '/authentication',
      },
      {
        title: 'تحقیقات بازاریابی',
        description: 'راهی برای یافتن شرکت‌ها و راه‌های ارتباطی با آنها',
        icon: <BookIcon />,
        route: '/marketing-research',
      },
      {
        title: 'یافتن مشتریان',
        description: 'جستجوی شرکت‌ها و افراد در دسته‌های مختلف',
        icon: <EyesIcon />,
        route: '/find-customers',
      },
      {
        title: 'فرصت‌های سرمایه‌گذاری',
        description: 'دسته‌بندی شرکت‌ها بر مبنای اطلاعات منتشر شده از آنها',
        icon: <DollarIcon />,
        route: '/investment-opportunities',
      },
      {
        title: 'معرفی شرکت خود',
        description: 'تکمیل پروفایل و پیداشدن توسط مشتریان',
        icon: <IntroCompanyIcon />,
        route: '/company-management',
      },
      // {
      //   title: 'توسعه محصولات',
      //   description: 'دریافت API برای تکمیل محصولات شما',
      //   icon: <ProductDevelopmentIcon />,
      //   route: '/product-development',
      // },
    ],
  },
  services: {
    isSimple: false,
    content: [
      {
        title: 'پروفایل شرکت‌ها',
        description: 'اطلاعات ثبتی و تماس شرکت‌ها',
        icon: <CompanyDataIcon />,
        route: '/about-companies',
      },
      {
        title: 'پروفایل افراد در شرکت‌ها',
        description: 'اطلاعات افراد حاضر در شرکت‌ها',
        icon: <PersonDataIcon />,
        route: '/about-persons',
      },
      {
        title: 'تحلیل صنعت',
        description: 'دسته‌بندی صنایع بر مبنای کد HS',
        icon: <IndustryCompanyIcon />,
        route: '/about-industry',
      },
      {
        title: 'جستجو پیشرفته',
        description: 'فیلتر پیشرفته برای رسیدن به هدف',
        icon: <SearchIcon />,
        route: '/about-advanced-search',
      },
      {
        title: 'شبکه ارتباطات',
        description: 'کشف روابط بین شرکت‌ها و افراد',
        icon: <GraphIcon />,
        route: '/about-graph',
      },
      // {
      //   title: 'اعلان دعوت به مجمع',
      //   description: 'دنبال کردن اعلان‌ها و اطلاع از مجامع',
      //   icon: <NotificationIcon />,
      //   route: '',
      // },
      {
        title: 'وب‌سرویس API',
        description: 'روشی برای هوشمندکردن نرم‌افزارها',
        icon: <WebServiceIcon />,
        route: '/about-api',
      },
      {
        title: 'تبلیغات در نماتک',
        description: 'افزایش فروش و شناخته‌شدن بیشتر',
        icon: <AdsIcon />,
        route: '/about-ads',
      },
    ],
  },

  industry: {
    route: '/industry',
    isSimple: false,
    content: undefined,
  },

  about: {
    isSimple: true,
    content: [
      { title: 'درباره ما', icon: <NamatekLogoSvg />, route: '/about-us' },
      { title: 'منابع داده', icon: <DataIcon />, route: '/sources' },
      {
        title: 'راهنمای نماتک',
        icon: <GuideIcon />,
        route:
          '/blog/%d9%be%d8%a7%db%8c%da%af%d8%a7%d9%87-%d8%af%d8%a7%d9%86%d8%b4/',
      },
      { title: 'بلاگ', icon: <BlogIcon />, route: '/blog/index.php' },
    ],
  },
}

export const advancedItem: NavItemType = {
  isSimple: true,
  content: [
    {
      title: 'شرکت‌ها',
      icon: <BusinessOutlined />,
      route: '/advancedSearch/company',
    },
    {
      title: 'اشخاص',
      icon: <PersonOutlineOutlined />,
      route: '/advancedSearch/person',
    },
    {
      title: 'محصولات',
      icon: <ViewInArOutlined />,
      route: '/advancedSearch/products',
    },
    {
      title: 'صنعت',
      icon: <FactoryOutlined />,
      route: '/advancedSearch/industry',
    },
    {
      title: 'مالکیت فکری',
      icon: <EmojiObjectsOutlined />,
      route: '/advancedSearch/ownership',
    },
    {
      title: 'آگهی رسمی',
      icon: <FeedOutlined />,
      route: '/advancedSearch/news',
    },
    // { title: 'لیست‌ها', icon: <ViewListOutlined />, route: '' },
  ],
}

export const profileNavItems: ProfileNavItemsType = {
  home: {
    title: 'navbar.profile.dashboard',
    icon: <LayoutIcon viewBox='0 0 24 24 ' />,
    route: '/dashboard/mycourses/',
  },
  profile: {
    title: 'navbar.profile.profile',
    icon: <PersonSvgIcon viewBox='0 0 24 24 ' />,
    route: '/dashboard/profile/',
  },
}
