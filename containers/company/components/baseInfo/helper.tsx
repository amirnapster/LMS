import dayjs from 'dayjs'
import jalaliday from 'jalaliday'

import MillionRialComponent from 'components/millionRial'
import type { BaseInfoDataBuilderType, BaseInfoSchemaType } from './interface'

dayjs.extend(jalaliday)

export const baseInfoDataBuilder = (
  data: BaseInfoDataBuilderType
): BaseInfoSchemaType => [
  {
    title: 'تاریخ تاسیس:',
    text: dayjs(data?.summary?.registrationDate)
      .calendar('jalali')
      .format('YYYY/MM/DD'),

    size: {
      sm: 14,
      md: 6,
      lg: 6,
    },
    copyable: false,
  },
  {
    title: 'وضعیت شرکت:',
    text: data?.summary?.status,
    size: {
      sm: 10,
      md: 6,
      lg: 7,
    },
    copyable: false,
  },
  {
    title: 'نوع شرکت:',
    text: data?.summary?.registrationTypeTitle,
    size: {
      sm: 14,
      md: 6,
      lg: 6,
    },
    copyable: false,
  },
  {
    title: 'آخرین آگهی رونامه رسمی:',
    text: dayjs(data?.summary?.lastCompanyNewsDate)
      .calendar('jalali')
      .format('YYYY/MM/DD'),
    size: {
      sm: 10,
      md: 6,
      lg: 5,
    },
    copyable: false,
  },
  {
    title: 'شماره ثبت:',
    text: data?.summary?.registrationNo,
    size: {
      sm: 14,
      md: 6,
      lg: 6,
    },
    copyable: true,
  },
  {
    title: 'کد اقتصادی:',
    text: data?.summary?.taxNumber,
    size: {
      sm: 10,
      md: 6,
      lg: 7,
    },
    copyable: true,
  },
  {
    title: 'شناسه ملی:',
    text: data?.id,
    size: {
      sm: 14,
      md: 6,
      lg: 6,
    },
    copyable: true,
  },
  {
    title: 'آخرین سرمایه ثبتی:',
    text: (
      <>
        <MillionRialComponent
          price={data?.financialSummary?.capital as number}
        />
        {'\u00A0'}
        میلیون ریال
      </>
    ),
    size: {
      sm: 10,
      md: 6,
      lg: 5,
    },
    copyable: false,
  },
  {
    title: 'آدرس شرکت:',
    text: data?.communications?.address,
    size: {
      sm: 14,
      md: 16,
      lg: 16,
    },
    copyable: true,
  },
  {
    title: 'کد پستی:',
    text: data?.communications?.postalCode,
    size: {
      sm: 10,
      md: 6,
      lg: 5,
    },
    copyable: true,
  },
]
