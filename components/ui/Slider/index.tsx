import { Slider as MuiSlider } from '@mui/material'
import { styled } from '@mui/material/styles'

const Slider = styled(MuiSlider)(() => ({
  height: 8,
  '& .MuiSlider-thumb': {
    height: 32,
    width: 32,
    backgroundImage:
      ' url("/svg/swap-icon.svg"), linear-gradient(277.31deg, #0065F2 0%, #7298FF 100%)',
    backgroundRepeat: 'no-repeat',
    backgroundPositionX: 'center',
    backgroundPositionY: 'center',
    padding: '.5rem',
    '&:focus, &:hover, &.Mui-active': {
      boxShadow: ' 0px 0px 8px rgba(13, 114, 255, 0.5)',
    },
    transform: 'translate(17px, -50%)',
  },

  '& .MuiSlider-track': {
    border: 'none',
    background: ' linear-gradient(277.31deg, #0065F2 0%, #7298FF 100%);',
  },
  '& .MuiSlider-rail': {
    opacity: 0.5,
    backgroundColor: '#E4E9FF',
    '&:focus, &:hover, &.Mui-active': {
      boxShadow: ' 0px 0px 8px rgba(13, 114, 255, 0.5)',
    },
  },
  '& .MuiSlider-mark': {
    backgroundColor: 'unset',
  },
}))

export default Slider
