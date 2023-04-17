import MuiTooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip'
import { styled } from '@mui/material/styles'

const CopyTooltip = styled(({ className, ...props }: TooltipProps) => (
  <MuiTooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    padding: '2px 8px 4px',
    borderRadius: '8px',
    fontWeight: '400',
    fontSize: '14px',
    backgroundColor: '#121212',
    color: '#FFFFFF',
    marginBlockEnd: '0.25rem !important',
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: '#121212',
  },
}))

export default CopyTooltip
