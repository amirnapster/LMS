// @mui
import { styled } from '@mui/material/styles'
import {
  Box,
  Accordion,
  Typography,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material'
// types
import { ICourseLessonProp } from 'types/course'
// components
import Iconify from 'components/iconify'
import type { Lesson } from 'libs/redux/services/karnama'
import { useSelector } from 'react-redux'
import { RootState } from 'libs/redux/store'

// ----------------------------------------------------------------------

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  '&.Mui-expanded': {
    overflow: 'hidden',
    borderRadius: '8px !important',
    marginBottom: theme.spacing(2.5),
    boxShadow: theme.customShadows.z16,
  },
}))

const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  '&.Mui-expanded': {
    minHeight: 'auto',
    backgroundColor: theme.palette.action.selected,
  },
  '& .MuiAccordionSummary-content': {
    margin: theme.spacing(2, 0),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
    '&.Mui-expanded': { margin: theme.spacing(2, 0) },
  },
}))

// ----------------------------------------------------------------------

type LessonItemProps = {
  lesson: Lesson
  expanded: boolean
  selected: boolean
  onOpen: VoidFunction
  onExpanded: (event: React.SyntheticEvent, isExpanded: boolean) => void
}

export default function ElearningCourseDetailsLessonItem({
  lesson,
  expanded,
  selected,
  onExpanded,
  onOpen,
}: LessonItemProps) {
  const { title, description } = lesson

  const handleOpen = () => {
    if (lesson.isFree) {
      onOpen()
    }
  }

  const playIcon = selected ? 'carbon:pause-outline' : 'carbon:play'

  return (
    <Box sx={{ position: 'relative' }}>
      <Iconify
        width={24}
        icon={!lesson.isFree ? 'carbon:locked' : playIcon}
        onClick={handleOpen}
        sx={{
          mr: 2,
          top: 18,
          left: 8,
          zIndex: 9,
          cursor: 'pointer',
          position: 'absolute',
          ...(selected && {
            color: 'primary.main',
          }),
          ...(!lesson.isFree && {
            color: 'text.disabled',
          }),
        }}
      />

      <StyledAccordion
        expanded={expanded}
        onChange={onExpanded}
        disabled={!lesson.isFree}
      >
        <StyledAccordionSummary>
          <Typography
            variant='subtitle1'
            sx={{
              flexGrow: 1,
              pl: 3,
              ...(selected && {
                color: 'primary.main',
              }),
            }}
          >
            {title}
          </Typography>

          <Typography variant='body2' sx={{ mr: 2 }}>
            {lesson.duation} دقیقه
          </Typography>

          <Iconify
            icon={expanded ? 'carbon:chevron-down' : 'carbon:chevron-right'}
            sx={{
              color: 'text.secondary',
              ...(!lesson.isFree && { color: 'text.disabled' }),
            }}
          />
        </StyledAccordionSummary>

        <AccordionDetails sx={{ p: 2 }}>
          <Typography variant='body2' sx={{ color: 'text.secondary' }}>
            {description}
          </Typography>
        </AccordionDetails>
      </StyledAccordion>
    </Box>
  )
}
