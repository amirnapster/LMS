import Button from 'components/ui/Button'

import type {
  BourseInfoDataBuilderType,
  BourseInfoSchemaType,
} from './interface'

export const bourseInfoDataBuilder = (
  data: BourseInfoDataBuilderType
): BourseInfoSchemaType => [
  {
    title: 'نماد بورسی:',
    text: 'خودرو',
    size: {
      sm: 14,
      md: 6,
      lg: 6,
    },
    copyable: false,
  },
  {
    title: 'مشاهده در :',
    text: (
      <Button
        href='http://www.tsetmc.com/Loader.aspx?ParTree=15'
        data-selector='link'
        btnType='link'
      >
        Tsetmc
      </Button>
    ),
    size: {
      sm: 10,
      md: 6,
      lg: 7,
    },
    copyable: false,
  },
  {
    title: 'مشاهده در:',
    text: (
      <Button href='https://www.codal.ir/' data-selector='link' btnType='link'>
        کدال
      </Button>
    ),
    size: {
      sm: 14,
      md: 6,
      lg: 7,
    },
    copyable: false,
  },
  {
    title: 'تلفن امور سهام:',
    text: '021565989658',
    size: {
      sm: 10,
      md: 6,
      lg: 4,
    },
    copyable: false,
  },

  {
    title: 'آدرس امور سهام:',
    text: 'تهران بزرگراه شهید لشگری کیلومتر 14 جاده مخصوص تهران کرج بلوار کیلومتر 14 جاده مخصوص',
    size: {
      sm: 14,
      md: 16,
      lg: 16,
    },
    copyable: true,
  },
  {
    title: 'کد پستی امور سهام:',
    text: '456356895445',
    size: {
      sm: 10,
      md: 6,
      lg: 4,
    },
    copyable: true,
  },
]
