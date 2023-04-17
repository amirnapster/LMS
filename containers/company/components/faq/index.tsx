import { useSelector } from 'react-redux'
import Head from 'next/head'
import Row from 'components/ui/Row'
import Col from 'components/ui/Col'
import Card from 'components/card'
import SectionTitle from 'components/sectionTitle'
import dayjs from 'dayjs'
import jalaliday from 'jalaliday'

import type { RootState } from 'libs/redux/store'
import styles from './companyFaq.module.scss'

dayjs.extend(jalaliday)

const CompanyFAQ = () => {
  const { details } = useSelector((state: RootState) => state.company)
  const data = details?.summary?.companySummary

  const faqSchema = [
    [
      {
        question: ` نشانی ${data?.title} کجاست؟`,
        answer: data?.communications?.address,
      },
      {
        question: ` ${data?.title} در چه زمانی تأسیس شده است؟`,
        answer: `این شرکت در تاریخ ${dayjs(data?.summary?.registrationDate)
          .calendar('jalali')
          .format('YYYY/MM/DD')} تأسیس شده است`,
      },
      {
        question: ` ${data?.title} چه نوعی است؟`,
        answer: `از نوع ${data?.summary?.registrationTypeTitle} به ثبت رسیده است.`,
      },
    ],
    [
      {
        question: ` نشانی ${data?.title} کجاست؟`,
        answer: data?.communications?.address,
      },
      {
        question: ` ${data?.title} چند ساله است؟`,
        answer: `این شرکت تقریبا ${
          new Date().getFullYear() -
          new Date(data?.summary?.registrationDate as string).getFullYear()
        } ساله است`,
      },
      {
        question: ' مدیرعامل شرکت کیست؟',
        answer: data?.peopleSummary?.ceo?.title,
      },
    ],
    [
      {
        question: ` نشانی ${data?.title} کجاست؟`,
        answer: data?.communications?.address,
      },
      {
        question: ` مدیران ${data?.title} چه کسانی هستند؟`,
        answer: `آخرین مدیران : ${data?.peopleSummary?.people?.map(
          (person, index) => {
            const arrLength = data?.peopleSummary?.people?.length
            const lastItem = index === (arrLength ? arrLength - 1 : 0)

            return lastItem ? ` ${person.title} ` : ` ${person.title} `
          }
        )}`,
      },
      {
        question: `. وضعیت ${data?.title} چیست؟`,
        answer: `این شرکت ${data?.summary?.status} است.`,
      },
    ],
  ]

  const faqSchemaJSONArray = faqSchema[
    data?.id ? data.id % faqSchema.length : 0
  ].map((faqArray) => ({
    '@type': 'Question',
    name: faqArray.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faqArray.answer,
    },
  }))

  const faqSchemaJSON = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqSchemaJSONArray,
  }

  return (
    <>
      <Head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchemaJSON),
          }}
        />
      </Head>
      <div className={styles['faq']}>
        <SectionTitle title='سوالات متداول' />
        <Card hasSource={false}>
          {data?.id &&
            faqSchema[data?.id ? data.id % faqSchema.length : 0].map(
              ({ question, answer }) => (
                <Row className={styles['faq__row']} key={answer} wrap>
                  <Col className={styles['faq__row--question']} span={24}>
                    <span />
                    {question}
                  </Col>
                  <Col className={styles['faq__row--answer']} span={24}>
                    {answer}
                  </Col>
                </Row>
              )
            )}
        </Card>
      </div>
    </>
  )
}

export default CompanyFAQ
