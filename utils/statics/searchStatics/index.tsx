import {
  CompanySvgIcon,
  ListSvgIcon,
  NewsSvgIcon,
  OwnershipSvgIcon,
  PersonSvgIcon,
  ProductSvgIcon,
} from 'assets/icons'

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
const listsIcon =
  'M0.5 0.167969V11.8346H15.5V0.167969H0.5ZM3.83333 1.83464V3.5013H2.16667V1.83464H3.83333ZM2.16667 6.83464V5.16797H3.83333V6.83464H2.16667ZM2.16667 8.5013H3.83333V10.168H2.16667V8.5013ZM13.8333 10.168H5.5V8.5013H13.8333V10.168ZM13.8333 6.83464H5.5V5.16797H13.8333V6.83464ZM13.8333 3.5013H5.5V1.83464H13.8333V3.5013Z'

export const advancedSearchTitle = [
  {
    id: 1253,
    title: 'company',
    path: companyIcon,
    link: WEB.ADVANCED_SEARCH_COMPANY,
    active: true,
  },
  {
    id: 2857,
    title: 'person',
    path: personIcon,
    link: WEB.ADVANCED_SEARCH_PERSON,
    active: true,
  },
  {
    id: 2966,
    title: 'industryBox.industry',
    path: industryIcon,
    link: WEB.ADVANCED_SEARCH_INDUSTRY,
    active: true,
  },
  {
    id: 3745,
    title: 'product',
    path: productsIcon,
    link: WEB.ADVANCED_SEARCH_PRODUCTS,
    active: true,
  },
  {
    id: 4005,
    title: 'official.news',
    path: newsIcon,
    link: WEB.ADVANCED_SEARCH_NEWS,
    active: true,
  },
  {
    id: 5550,
    title: 'ownership',
    path: ownerShipIcon,
    link: WEB.ADVANCED_SEARCH_OWNERSHIP,
    active: true,
  },
  // {
  //   id: 6598,
  //   title: 'lists',
  //   width: 16,
  //   height: 12,
  //   path: listsIcon,
  //   link: WEB.ADVANCED_SEARCH_LISTS,
  //   active: true,
  // },
]

export const simpleSearchResultItems = {
  companiesData: {
    icon: <CompanySvgIcon />,
    title: 'companies',
    link: WEB.ADVANCED_SEARCH_COMPANY,
  },
  personsData: {
    icon: <PersonSvgIcon />,
    title: 'persons',
    link: WEB.ADVANCED_SEARCH_PERSON,
  },
  productsData: {
    icon: <ProductSvgIcon />,
    title: 'product',
    link: WEB.ADVANCED_SEARCH_PRODUCTS,
  },
  newsData: {
    icon: <NewsSvgIcon />,
    title: 'official.news',
    link: WEB.ADVANCED_SEARCH_NEWS,
  },
  ownershipsData: {
    icon: <OwnershipSvgIcon />,
    title: 'ownership',
    link: WEB.ADVANCED_SEARCH_OWNERSHIP,
  },
  // listsData: {
  //   icon: <ListSvgIcon />,
  //   title: 'lists',
  //   link: WEB.ADVANCED_SEARCH_LISTS,
  // },
}

export const searchCategoryItems = [
  'companies',
  'persons',
  'product',
  'official.news',
  'ownership',
  //  'lists',
]
