// @mui
import { styled } from '@mui/material/styles'
import {
  Box,
  Accordion,
  Typography,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material'
// components
import Iconify from 'components/iconify'
import type { Lesson, UserLessonViewMinute } from 'libs/redux/services/karnama'

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
    flexWrap: 'wrap',
    '&.Mui-expanded': { margin: theme.spacing(2, 0) },
  },
}))

// ----------------------------------------------------------------------

type LessonItemProps = {
  lesson: Lesson
  expanded: boolean
  selected: boolean
  canPlay: boolean
  graph: UserLessonViewMinute[]
  onOpen: VoidFunction
  onExpanded: (event: React.SyntheticEvent, isExpanded: boolean) => void
}

export default function ElearningCourseDetailsLessonItem({
  lesson,
  expanded,
  selected,
  onExpanded,
  onOpen,
  graph,
  canPlay,
}: LessonItemProps) {
  const { title, description } = lesson

  const handleOpen = () => {
    if (canPlay)
      if (lesson.isFree || lesson.isOpen) {
        onOpen()
      }
  }
  console.log(graph)
  const getLast = () => {
    return graph?.find(t => t?.minute as number + 1 > (lesson.duation as number) / 60)
  }
  const playIcon = selected ? 'carbon:pause-outline' : 'carbon:play'
  const isLocked = !lesson.isFree && !lesson.isOpen && canPlay
  return (
    <Box onClick={handleOpen} sx={{ position: 'relative' }}>
      <Iconify
        width={24}
        icon={isLocked ? 'carbon:locked' : playIcon}
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
          ...((isLocked) && {
            color: 'text.disabled',
          }),
        }}
      />

      <StyledAccordion
        expanded={expanded}
        disabled={isLocked}
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
            {/* {graph.length > 0 &&
              ((graph.length * 100 / ((lesson.duation as number) / 60)).toFixed())} */}
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
              ...(isLocked && { color: 'text.disabled' }),
            }}
          /><br />
          <div style={{ flexBasis: "100%" }}>
            {graph.map(({ minute, quantity }) =>
              (minute as number + 1) * 60 < (lesson.duation as number) &&
              (<span className={`graphPixel graphPixel-${Math.min(4, quantity as number)}`} style={{ right: `${(minute as number) * 6000 / (lesson?.duation as number)}%`, width: `${6000 / (lesson?.duation as number)}%` }}></span>))}
            {getLast() &&
              <span className={`graphPixel graphPixel-${Math.min(4, getLast()?.minute as number)}`} style={{ left: 0, width: `${6000 / (lesson?.duation as number)}%` }}></span>}
            <span className={`graphPixel `} style={{ left: 0, width: `100%`, borderInline: "1px solid black" }}></span>

          </div>
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
