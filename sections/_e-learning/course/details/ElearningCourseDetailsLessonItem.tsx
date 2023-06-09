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
    if (lesson.isFree || lesson.isOpen) {
      onOpen()
    }
  }

  const playIcon = selected ? 'carbon:pause-outline' : 'carbon:play'

  return (
    <Box onClick={handleOpen} sx={{ position: 'relative' }}>
      <Iconify
        width={24}
        icon={!lesson.isFree && !lesson.isOpen ? 'carbon:locked' : playIcon}
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
          ...((!lesson.isFree && !lesson.isOpen) && {
            color: 'text.disabled',
          }),
        }}
      />

      <StyledAccordion
        expanded={expanded}
        // onChange={onExpanded}
        disabled={!lesson.isFree && !lesson.isOpen}
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
          {`${((lesson.duation as number) / 60).toFixed(0)} دقیقه`}
          </Typography>

          <Iconify
            icon={expanded ? 'carbon:chevron-down' : 'carbon:chevron-right'}
            //call onExpanded when users clicks this and prevent propagation
            onClick={(e) => {
              e.stopPropagation()
              onExpanded(e, !expanded)
            }}
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
