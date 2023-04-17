import type { components } from 'types/Search'

export interface SearchResultItemsProps {
  data: components['schemas']['ElasticSearchAllModelQueryDto']
}

export type ResultTypes = {
  companiesData: components['schemas']['ElasticSearchAllModelTuple']
  personsData: components['schemas']['ElasticSearchAllModelTuple']
  productsData: components['schemas']['ElasticSearchAllModelTuple']
  newsData: components['schemas']['ElasticSearchAllModelTuple']
  ownershipsData: components['schemas']['ElasticSearchAllModelTuple']
  // listsData: components['schemas']['ElasticSearchAllModelTuple'][]
}

export type SimpleSearchResultItemsType = {
  companiesData: {
    icon: JSX.Element
    title: string
    link: string
  }
  personsData: {
    icon: JSX.Element
    title: string
    link: string
  }
  productsData: {
    icon: JSX.Element
    title: string
    link: string
  }
  newsData: {
    icon: JSX.Element
    title: string
    link: string
  }
  ownershipsData: {
    icon: JSX.Element
    title: string
    link: string
  }
  // listsData: {
  //   icon: JSX.Element
  //   title: string
  //   link: string
  // }
}

export type DynamicData = components['schemas']['ElasticSearchAllModel']
