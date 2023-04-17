import type {
  BaseInfoDataBuilderType,
  BaseInfoSchemaType,
  CommunicationInfoDataBuilderType,
} from './interface'

export const baseInfoDataBuilder = (
  data: BaseInfoDataBuilderType
): BaseInfoSchemaType => [
  {
    title: 'کد ملی:',
    text: data?.nationalId,
    size: {
      sm: 14,
      md: 6,
      lg: 6,
    },
    copyable: true,
  },
  {
    title: 'شهر محل صدور:',
    text: data?.city,
    size: {
      sm: 10,
      md: 6,
      lg: 7,
    },
    copyable: false,
  },
  {
    title: 'جنسیت:',
    text: data?.gender ? 'مرد' : 'زن',
    size: {
      sm: 14,
      md: 6,
      lg: 6,
    },
    copyable: false,
  },
  {
    title: 'آخرین آگهی رونامه رسمی:',
    text: 'ثبت نشده',
    size: {
      sm: 10,
      md: 6,
      lg: 5,
    },
    copyable: false,
  },
]

export const communicationInfoDataBuilder = (
  data: CommunicationInfoDataBuilderType
): BaseInfoSchemaType => [
  {
    title: 'شماره موبایل:',
    text: data?.mobile || 'ثبت نشده',
    size: {
      sm: 14,
      md: 6,
      lg: 6,
    },
    copyable: Boolean(data?.mobile),
  },
  {
    title: 'تلفن ثابت:',
    text: data?.tel || 'ثبت نشده',
    size: {
      sm: 10,
      md: 6,
      lg: 7,
    },
    copyable: Boolean(data?.tel),
  },
  {
    title: 'ایمیل:',
    text: data?.email || 'ثبت نشده',
    size: {
      sm: 14,
      md: 6,
      lg: 6,
    },
    copyable: Boolean(data?.email),
  },
  {
    title: 'وبسایت:',
    text: data?.webSite || 'ثبت نشده',
    size: {
      sm: 10,
      md: 6,
      lg: 5,
    },
    copyable: false,
  },
]
