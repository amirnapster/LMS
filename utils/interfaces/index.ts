import type { Pricing_Response } from 'libs/redux/services/pricing/interface'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import type { ReactElement, ReactNode } from 'react'
import type { Themes } from 'utils/helpers/theme'

// Omit<Type, Keys> : omit the keys that are provided from a specific type or interface

// Pick<Type, Keys> : the opposite of Omit

// Required<Type> : make every keys in an interface required

// Partial<Type> : the opposite of Required

// Record<KeyType, Type> : instantiate an interface with specified key values

// Readonly<Type> : make every key in an interface readonly

// NonNullable<Type | null | undefined> : removes the null and undefined from a type

// ReturnType<Type> : return the type of the function

export type Device = 'Desktop' | 'Mobile'

export type NextPageWithLayout = NextPage<unknown, Record<string, never>> & {
  getLayout?: (page: ReactElement) => ReactNode
}

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
  theme?: Themes
  campaign: boolean
}

export interface IPlans {
  plans: Pricing_Response[]
}

export type CheckoutPageType = NextPage<IPlans> & {
  getLayout?: (page: ReactElement) => ReactNode
}

export type LinkTarget = '_self' | '_blank' | '_parent' | '_top'

export type PresetColorType =
  | 'bg-color'
  | 'black'
  | 'white'
  | 'simple-white'
  | 'dark-matter'
  | 'corn-silk'
  | 'quick-silver'
  | 'gray-matter'
  | 'platinum'
  | 'text-color-900'
  | 'text-color-800'
  | 'text-color-700'
  | 'text-color-600'
  | 'text-color'
  | 'text-color-400'
  | 'text-color-300'
  | 'text-color-200'
  | 'text-color-100'
  | 'gray-900'
  | 'gray-800'
  | 'gray-700'
  | 'gray-600'
  | 'gray'
  | 'gray-400'
  | 'gray-300'
  | 'gray-200'
  | 'gray-100'
  | 'secondary-900'
  | 'secondary-800'
  | 'secondary-700'
  | 'secondary-600'
  | 'secondary'
  | 'secondary-400'
  | 'secondary-300'
  | 'secondary-200'
  | 'secondary-100'
  | 'primary-900'
  | 'primary-800'
  | 'primary-700'
  | 'primary-600'
  | 'primary'
  | 'primary-400'
  | 'primary-300'
  | 'primary-200'
  | 'primary-100'
  | 'mari-gold-900'
  | 'mari-gold-800'
  | 'mari-gold-700'
  | 'mari-gold-600'
  | 'mari-gold'
  | 'mari-gold-400'
  | 'mari-gold-300'
  | 'mari-gold-200'
  | 'mari-gold-100'
  | 'amethyst-900'
  | 'amethyst-800'
  | 'amethyst-700'
  | 'amethyst-600'
  | 'amethyst'
  | 'amethyst-400'
  | 'amethyst-300'
  | 'amethyst-200'
  | 'amethyst-100'
  | 'jade-900'
  | 'jade-800'
  | 'jade-700'
  | 'jade-600'
  | 'jade'
  | 'jade-400'
  | 'jade-300'
  | 'jade-200'
  | 'jade-100'
  | 'coral-900'
  | 'coral-800'
  | 'coral-700'
  | 'coral-600'
  | 'coral'
  | 'coral-400'
  | 'coral-300'
  | 'coral-200'
  | 'coral-100'
  | 'bright-turquoise-900'
  | 'bright-turquoise-800'
  | 'bright-turquoise-700'
  | 'bright-turquoise-600'
  | 'bright-turquoise'
  | 'bright-turquoise-400'
  | 'bright-turquoise-300'
  | 'bright-turquoise-200'
  | 'bright-turquoise-100'
  | 'blue-purple-red-gradient'
  | 'white-blue-gradient'
  | 'white-red-gradient'
  | 'white-gold-gradient'
  | 'green-gradient'
  | 'transparent'
