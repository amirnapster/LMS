import { type KeyboardEvent, type MouseEvent, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { playDrawer } from 'libs/redux/slices/navbar'
import { useGetApiCoursesByIdQuery } from 'libs/redux/services/karnama'
import { Box, Drawer, Button, Divider } from '@mui/material'
import { MenuOutlined } from '@mui/icons-material/'
import VideoJS from 'components/videoPlayer'
import ButtonComponent from 'components/ui/Button'
import Row from 'components/ui/Row'
import videojs from 'video.js'
import 'videojs-hotkeys'

import type { Lesson } from 'libs/redux/services/karnama'
import type { RootState } from 'libs/redux/store'
import styles from './play.module.scss'

function PlayComponent() {
  const playerRef = useRef()
  const dispatch = useDispatch()
  const { query } = useRouter()
  const [selectedLesson, setSelectedLesson] = useState<Lesson>({})
  const { playDrawerStatus } = useSelector((state: RootState) => state.navbar)
  const { data } = useGetApiCoursesByIdQuery({ id: Number(query.slug?.[0]) })

  const sectionsData = data?.sections

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
      <Button onClick={toggleDrawer(true)}>
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
    </Row>
  )
}

export default PlayComponent
