import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useGetApiCoursesByIdQuery } from 'libs/redux/services/karnama'
import VideoJS from 'components/videoPlayer'
import Row from 'components/ui/Row'
import 'videojs-hotkeys'

import type { Lesson } from 'libs/redux/services/karnama'
import styles from './seoLesson.module.scss'
import Head from 'next/head'

function PlayComponentForSeo() {
  const { query } = useRouter()
  const [selectedLesson, setSelectedLesson] = useState<Lesson>({})
  const { data } = useGetApiCoursesByIdQuery({ id: Number(query.courseId), lessonId: Number(query.lessonId) })

  const findLessonHandler = () => {
    data?.sections?.forEach((section) => {
      section?.lessons?.forEach((lesson) => {
        if (lesson.id === Number(query.lessonId)) setSelectedLesson(lesson)
      })
    })
  }

  useEffect(() => {
    if (data) findLessonHandler()
  }, [data, query])


  function formatDuration(totalSeconds: number): string {
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    return `PT${hours.toString().padStart(2, '0')}H${minutes.toString().padStart(2, '0')}M${seconds.toString().padStart(2, '0')}S`;
  }

  const videoSchema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    "@id": selectedLesson?.id?.toString() as string,
    "uploadDate": selectedLesson?.uploadDate + "Z",
    "name": selectedLesson?.title,
    "author": {
      "@type": "Person",
      "name": data?.courseTeachers?.[0]?.teacher?.title
    },
    "thumbnailUrl": selectedLesson?.poster,
    "contentUrl": selectedLesson?.videoUrl,
    "description": selectedLesson?.description,
    "duration": formatDuration(selectedLesson.duation as number)
  }


  return (
    <Row>
      <Head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(videoSchema),
          }}
        />
      </Head>

      <Row className={styles['play--content']} direction='column' align='top'>
        <div className={styles['play__videoWrapperWrapperWrapper']}>
          <div className={styles['play__videoWrapperWrapper']}>

            <video controls className={styles['play__video']} poster={selectedLesson.poster as string}>
              <source src={selectedLesson.videoUrl as string} type="application/x-mpegURL" />
            </video>

          </div>
        </div>
        <Row className={styles['play__row']} direction='column' gap={2}>
          <h1>{selectedLesson.title}</h1>

          <Row gap={0}>
            <span className={styles['play--header']}>دسته بندی:</span>
            <span>{data?.category?.title}</span>
          </Row>

          <Row gap={0}>
            <span className={styles['play--header']}>مدت دوره:</span>
            <span>{`${((data?.totalDuration as number) / 60).toFixed(
              0
            )} دقیقه`}</span>
          </Row>
          <p dangerouslySetInnerHTML={{ __html: selectedLesson?.description?.replace('\n', '<br/>') as string }} />
          <p dangerouslySetInnerHTML={{ __html: selectedLesson?.transcript?.replace('\n', '<br/>') as string }} />
        </Row>
      </Row>
    </Row>
  )
}

export default PlayComponentForSeo