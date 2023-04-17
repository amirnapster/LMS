import MuiTooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip'
import { styled } from '@mui/material/styles'

const Tooltip = styled(({ className, ...props }: TooltipProps) => (
  <MuiTooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    padding: '16px',
    maxWidth: '327px',
    backgroundColor: '#202730',
    borderRadius: '8px',
    fontWeight: '400',
    fontSize: '12px',
    lineHeight: '180%',
    textAlign: 'right',
    color: '#FFFFFF',
    marginInlineStart: '0.75rem',
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: '#202730',
  },
}))

export default Tooltip

export const FinancialcTooltip = styled(
  ({ className, ...props }: TooltipProps) => (
    <MuiTooltip {...props} classes={{ popper: className }} />
  )
)(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#fff',
    padding: '16px',
    maxWidth: '330px',
    borderRadius: '8px',
    filter: 'drop-shadow(0px 16px 32px rgba(16, 24, 34, 0.4))',
    "[data-selector='financialc-tooltip']": {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      "[data-selector='financialc-info']": {
        fontWeight: '400',
        fontSize: '14px',
        lineHeight: '180%',
        color: '#000',
        span: {
          fontWeight: '400',
          fontSize: '14px',
          lineHeight: '180%',
          color: '#ed7161',
        },
      },
      button: {
        fontSize: '14px',
      },
    },
    marginInlineStart: '0.75rem',
    [`& .${tooltipClasses.arrow}`]: {
      color: '#fff !important',
    },
  },
}))

export const LimitTooltip = styled(({ className, ...props }: TooltipProps) => (
  <MuiTooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'unset',
    borderRadius: '20px',
    padding: '0',
    "[data-selector='tooltip-logedin'], [data-selector='tooltip-logedout']": {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      minWidth: '342px',
      minHeight: '148px',
      background: '#ffffff',
      borderRadius: '16px',
      padding: '1rem',
      filter: 'drop-shadow(0px 16px 32px rgba(16, 24, 34, 0.4))',
      h2: {
        fontWeight: '400',
        fontSize: '16px',
        lineHeight: '190%',
        color: '#000915',
      },
      "[data-selector='button-box']": {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        svg: {
          path: {
            fill: '#fff',
          },
        },
      },
    },
    "[data-selector='tooltip-logedout']": {
      minWidth: '291px',
      minHeight: '208px',
    },
    marginInlineStart: '0.75rem',
    [`& .${tooltipClasses.arrow}`]: {
      color: '#fff',
    },
  },
}))
