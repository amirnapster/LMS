import {
  _courses,
  _members,
  _blogCoursePosts,
  _brandsColor,
  _testimonials,
  CATEGORY_NAMES,
} from '_mock'
import {
  ElearningLandingHero,
  ElearningLandingIntroduce,
  ElearningLandingCategories,
  ElearningLandingFeaturedCourses,
} from '../landing'
import { Course, useGetFeaturedQuery } from 'libs/redux/services/karnama'

import Faq from 'components/faq'
import { useIntl } from 'react-intl'
import ElearningCourseView from './ElearningCourseView'

const faqData = [
  { question: "نماتک پرو چیست؟", answer: "نماتک پرو یک پلتفرم آموزشی آنلاین و خدمت جدیدی از مجموعه نماتک است که آموزش‌های ویدئویی را با استادان معروف و برجسته در زمینه‌های مختلف مانند توسعه فردی، فناوری اطلاعات، مدیریت، فنی مهندسی و غیره ارائه می‌دهد." },
  { question: "هزینه آموزش های نماتک پرو چقدر است؟", answer: "شما می توانید با پرداخت هزینه اشتراک ماهیانه به تمام آموزش های ویدیویی دسترسی داشته باشید. برای دیدن هر آموزش نیاز به پرداخت هزینه جداگانه نمی باشد." },
  { question: " مدت زمان آموزش‌های نماتک پرو چقدر است؟", answer: "طول آموزش‌ها بسته به موضوع و استاد متفاوت است، اما بیشتر آموزش‌ها شامل حدود چهار درس ویدیویی با طول نیم ساعت هستند." },
  { question: " آیا می‌توانم آموزش نماتک پرو را روی تلفن همراه یا تبلت خود ببینم؟", answer: "بله، نماتک پرو بر روی دستگاه‌های همراه نیز قابل دسترسی است." },
  { question: " آیا برای مشاهده آموزش های نماتک پرو پیش نیازی وجود دارد؟", answer: "نه، برای شرکت در آموزش‌های نماتک پرو پیش نیازی وجود ندارد. آموزش‌ها برای هر کسی با علاقه به موضوع قابل دسترسی هستند." },
  { question: " آیا محدودیتی برای تعداد آموزش‌هایی که می‌توانم در نماتک پرو بگذرانم وجود دارد؟", answer: "نه، اگر هر کدام از اشتراک های موجود را تهیه نمایید، محدودیتی برای تعداد آموزش‌های نماتک پرو وجود ندارد." },
  { question: "آیا می‌توانم ویدیوها را از نماتک پرو دانلود کنم؟", answer: "خیر، نمی‌توانید ویدیوها را از نماتک پرو دانلود کنید. با این حال، می‌توانید آنها را آنلاین دسترسی داشته باشید تا زمانی که اشتراک شما فعال باشد." },
  { question: "نماتک پرو مناسب چه کسانی است؟", answer: "در هر سطح از مهارت که باشید، در نماتک پرو برای شما آموزش های مفیدی وجود دارد که باعث ارتقای سطح مهارت شما خواهد شد. با این حال اگر قصد یادگیری تخصص ویژه ای را دارید می توانید از آموزش های سایت نماتک استفاده نمایید." },
]

export default function ElearningLandingView() {
  const intl = useIntl()
  if (intl.formatMessage({ id: 'lang' }) == 'en-US')
    return (<ElearningCourseView />)
  const { data } = useGetFeaturedQuery()

  return (
    <>
      <ElearningLandingHero />

      {/* <OurClientsElearning brands={_brandsColor} /> */}

      {/* <ElearningLandingIntroduce /> */}
      <ElearningLandingCategories categories={CATEGORY_NAMES} />

      <ElearningLandingFeaturedCourses data={data as Course[]} />


      <Faq data={faqData} />


      {/* <TeamElearning members={_members.slice(0, 4)} /> */}

      {/* <TestimonialElearning testimonials={_testimonials} /> */}

      {/* <BlogElearningLatestPosts posts={_blogCoursePosts.slice(0, 4)} />

      <DownloadAppElearning /> 

      <NewsletterElearning />*/}
    </>
  )
}
