import MuiAccordion, { type AccordionProps } from '@mui/material/Accordion'
import { accordionSummaryClasses } from '@mui/material/AccordionSummary'
import { accordionDetailsClasses } from '@mui/material/AccordionDetails'
import { styled } from '@mui/material/styles'

const Accordion = styled(({ className, ...props }: AccordionProps) => (
  <MuiAccordion {...props} className={className} />
))(() => ({
  backgroundColor: '#f4f4f4',
  marginBlock: '1rem',
  borderRadius: '1rem !important',
  boxShadow: 'unset',
  '&::before': {
    display: 'none',
  },
  '&:hover': {
    backgroundColor: '#e4e9ff',
  },
  '&:active': {
    backgroundColor: '#c5d2ff',
  },
  '&.Mui-expanded': {
    '&:hover,&:active': {
      backgroundColor: '#f4f4f4',
    },

    [`& .${accordionSummaryClasses.expandIconWrapper}`]: {
      rotate: '-45deg',
    },
  },
  '[data-selector="title"]': {
    fontWeight: '800',
    fontSize: '20px',
    color: '#000915',
  },
  [`& .${accordionSummaryClasses.root}`]: {
    padding: '1.5rem',
  },
  [`& .${accordionDetailsClasses.root}`]: {
    padding: '0 1.5rem 1.5rem',
  },
  [`& .${accordionSummaryClasses.content}`]: {
    margin: '0',
  },
  '@media screen and (max-width: 992px) and (min-width: 768px)': {
    [`& .${accordionDetailsClasses.root}`]: {
      fontSize: '0.875rem',
    },
    '[data-selector="title"]': {
      fontSize: '1rem',
    },
  },
  '@media screen and (max-width: 768px)': {
    [`& .${accordionDetailsClasses.root}`]: {
      fontSize: '0.75rem',
    },
    '[data-selector="title"]': {
      fontSize: '0.875rem',
    },
  },
}))

export default Accordion
