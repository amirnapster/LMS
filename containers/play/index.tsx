import { type KeyboardEvent, type MouseEvent, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { playDrawer } from 'libs/redux/slices/navbar'
import { useGetApiCoursesByIdQuery } from 'libs/redux/services/karnama'
import { Box, Drawer, Button, Divider } from '@mui/material'
import { MenuOutlined } from '@mui/icons-material/'
import VideoJS from 'components/videoPlayer'
import ButtonComponent from 'components/ui/Button'
import Row from 'components/ui/Row'
import 'videojs-hotkeys'

import type { Lesson } from 'libs/redux/services/karnama'
import type { RootState } from 'libs/redux/store'
import styles from './play.module.scss'

function PlayComponent() {
  const dispatch = useDispatch()
  const { query } = useRouter()
  const [selectedLesson, setSelectedLesson] = useState<Lesson>({})
  const { playDrawerStatus } = useSelector((state: RootState) => state.navbar)
  const { data } = useGetApiCoursesByIdQuery({ id: Number(query.slug?.[0]) })

  const sectionsData = data?.sections

  const findLessonHandler = () => {
    data?.sections?.forEach((section) => {
      section?.lessons?.forEach((lesson) => {
        if (lesson.id === Number(query.slug?.[1])) setSelectedLesson(lesson)
      })
    })
  }

  console.log({ course: data, lesson: selectedLesson })

  useEffect(() => {
    if (data) findLessonHandler()
  }, [data])

  const selectCourseHandler = (lesson: Lesson) => {
    setSelectedLesson(lesson)
  }

  const toggleDrawer =
    (open: boolean) => (event: KeyboardEvent | MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as KeyboardEvent).key === 'Tab' ||
          (event as KeyboardEvent).key === 'Shift')
      ) {
        return
      }

      dispatch(playDrawer(open))
    }

  const list = () => (
    <Box
      sx={{ width: 350 }}
      role='presentation'
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      {sectionsData?.map((section) => (
        <Row
          className='mx-1 my-2'
          gap={1}
          direction='column'
          justify='space-between'
        >
          <span className={styles['play__lesson--title']}>{section.title}</span>

          {section?.lessons?.map((lesson) => (
            <ButtonComponent
              className={styles['play__lesson']}
              onClick={() => selectCourseHandler(lesson)}
            >
              <span className={styles['play--titleSection']}>
                {lesson.title}
              </span>
              <span className={styles['play--duration']}>
                {`${((lesson.duation as number) / 60).toFixed(0)} دقیقه`}
              </span>
            </ButtonComponent>
          ))}

          <Divider />
        </Row>
      ))}
    </Box>
  )

  return (
    <Row className='w-100 my-1' direction='column' align='top'>
      <Button
        className={styles['play--drawerBtn']}
        onClick={toggleDrawer(true)}
      >
        <MenuOutlined />
      </Button>
      <Drawer
        anchor={'left'}
        open={playDrawerStatus}
        onClose={toggleDrawer(false)}
      >
        {list()}
      </Drawer>
      <Row className={styles['play__videoWrapper']}>
        <VideoJS src={selectedLesson.videoUrl} />
      </Row>

      <Row className={styles['play__row']} direction='column' gap={2}>
        <h1>{data?.titleFa}</h1>
        <h2>{selectedLesson.title}</h2>
        <p>{data?.description}</p>
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
      </Row>
    </Row>
  )
}

export default PlayComponent
