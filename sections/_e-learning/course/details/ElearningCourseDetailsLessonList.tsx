import { useState } from 'react'
import { useSelector } from 'react-redux'
// @mui
import { Typography } from '@mui/material'
import ElearningCourseDetailsLessonItem from './ElearningCourseDetailsLessonItem'
import ElearningCourseDetailsLessonsDialog from './ElearningCourseDetailsLessonsDialog'
import type { Lesson, Section, UserLessonViewMinute } from 'libs/redux/services/karnama'
import type { RootState } from 'libs/redux/store'

// ----------------------------------------------------------------------

type Props = {
  section: Section
  graph: UserLessonViewMinute[]
  canPlay: boolean
}

export default function ElearningCourseDetailsLessonList({ section,graph ,canPlay}: Props) {
  const [selectLesson, setSelectLesson] = useState<Lesson | null>(null)
  const { details } = useSelector((state: RootState) => state.course)

  const [open, setOpen] = useState(false)

  const [play, setPlay] = useState(false)

  const [expanded, setExpanded] = useState<string | false>(false)

  const handleSelectVideo = (lesson: Lesson) => {
    setSelectLesson(lesson)
    setPlay(true)
  }

  const handleOpen = (lesson: Lesson) => {
    setOpen(true)
    if (lesson) {
      handleSelectVideo(lesson)
    }
  }

  const handleClose = () => {
    setOpen(false)
    setPlay(false)
    setSelectLesson(null)
  }

  const handleVideoEnded = () => {
    setPlay(false)
  }

  const handleExpanded =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false)
    }

  return (
    <div>
      <Typography variant='h4' sx={{ mt: 3,mb:1 }}>
        {section.title}
      </Typography>

      {section?.lessons?.map((lesson) => (
        <ElearningCourseDetailsLessonItem
          key={lesson.id}
          lesson={lesson}
          selected={play && selectLesson?.id === lesson.id}
          expanded={expanded === String(lesson.id)}
          onExpanded={handleExpanded(String(lesson.id))}
          onOpen={() => handleOpen(lesson)}
          graph={graph.filter(t=>t.lessonId===lesson.id)}
          canPlay={canPlay}
        />
      ))}

      <ElearningCourseDetailsLessonsDialog
        selected={play}
        open={open}
        lessons={details.sections as Section[]}
        onClose={handleClose}
        selectLesson={selectLesson}
        onVideoEnded={handleVideoEnded}
        onSelectVideo={(lesson) => setSelectLesson(lesson)}
      />
    </div>
  )
}
