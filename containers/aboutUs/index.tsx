import { useEffect, useRef } from 'react'
import { SaveAltOutlined } from '@mui/icons-material'
import Button from 'components/ui/Button'
import cn from 'classnames'
import type * as types from 'utils/interface'
import { handleScroll } from './helper'
import Description from './description'
import History from './history'
import Cards from './cards'

import styles from './aboutUs.module.scss'

export type Props = types.AboutUs & types.StackbitFieldPath

export const AboutUs: React.FC<Props> = (props) => {
  const scrollRef = useRef(null)
  const containerRef = useRef(null)
  const {
    descriptions,
    employees,
    video,
    height,
    'data-sb-field-path': fieldPath,
  } = props

  useEffect(() => {
    handleScroll(scrollRef, containerRef)
  }, [])

  return (
    <div className={styles['about']} data-sb-field-path={fieldPath}>
      <div className={styles['about__header']}>
        <span className={styles['about__header--title']}>درباره‌ی رسمیو</span>

        <span className={styles['about__header--subTitle']}>
          رسمیو پلتفرم ارتباط و تحلیل کسب‌وکارهاست
        </span>
        <iframe
          className={styles['about__header--video']}
          src={video}
          frameBorder='0'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          title='about-us'
          //   webkitallowfullscreen='true'
          //   mozallowfullscreen='true'
        />
      </div>

      <div className={styles['about__description']}>
        {descriptions?.map((item, index) => (
          <Description
            key={item.title}
            {...item}
            data-sb-field-path={`.${index}`}
          />
        ))}
      </div>

      <div className={cn(styles['about__history'])}>
        <span className={styles['about__history--title']}>
          رسمیو در یک نگاه
        </span>

        <div className={cn(styles['about__history--data'])}>
          <History />
        </div>
      </div>
      <div
        className={styles['about__team']}
        ref={containerRef}
        style={{ height }}
      >
        <div className={styles['about__team--wrapper']}>
          <span className={styles['about__team--title']}>تیم رسمیو</span>

          <span className={styles['about__team--subTitle']}>
            قدیمی‌ها رسمیو را با عنوان لیلاک می‌شناسند. ایده‌ای که در سال ۹۷ و
            با تحلیل اولیه داده‌های روزنامه رسمی برای اولین بار در کشور آغاز شد
            و امروزه بیش از ۴۰ پایگاه اطلاعاتی را تحلیل و پردازش کرده و در
            اختیار بیش از ۲۰۰ هزار کاربر قرار می‌دهد. این اقدام ارزشمند حاصل
            زحمات افراد زیادی بوده است. رسمیو حاصل تلاش شبانه‌روزی افراد زیر
            است:
          </span>
          <div className={styles['about__team--wrapperCard']} />

          <div
            className={styles['about__team__cards']}
            style={{ position: 'relative' }}
            ref={scrollRef}
          >
            {employees?.map((item, index) => (
              <Cards
                key={item.name}
                {...item}
                data-sb-field-path={`.${index}`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={styles['about__catalog']}>
        <span className={styles['about__catalog--title']}>
          کاتالوگ معرفی رسمیو
        </span>

        <a
          target='_blank'
          href='https://s3.rasm.io/Rasm.io%20Catalogue.pdf'
          download
          rel='noreferrer'
        >
          <Button className={styles['about__catalog__button']} ripple>
            دانلود فایل pdf <SaveAltOutlined role='img' />
          </Button>
        </a>
      </div>
    </div>
  )
}
