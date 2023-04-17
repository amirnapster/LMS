import { Menu as MuiMenu } from '@mui/material'
import { styled } from '@mui/material/styles'

const Menu = styled(MuiMenu)(() => ({
  '& .MuiMenu-paper': {
    boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.12)',
    borderRadius: '8px',
    background: '#E4E9FF',
  },
  '& .MuiMenu-list': {
    width: '216px',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',

    "& [data-selector='menu-btn']": {
      minWidth: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: '8px 16px',
      '& svg': {
        marginLeft: '0.8rem',
      },
    },
    "& [data-selector='menu-company-btn']": {
      minWidth: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: '8px 16px',
      '& svg': {
        marginLeft: '0.5rem',
        '& path': {
          fill: '#0D72FF',
        },
      },
    },
    "& [data-selector='lock-btn']": {
      minWidth: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '8px 16px',
      color: '#808080 !important',
      div: {
        display: 'flex',
        alignItems: 'center',
        '& svg': {
          marginLeft: '0.8rem',
          path: {
            fill: '#808080',
          },
        },
      },
      img: {
        padding: '0.25rem',
        background: 'linear-gradient(315deg, #e13019 14.64%, #ec8078 85.36%)',
        boxShadow: '0px 0px 6px rgba(232, 66, 44, 0.8)',
        borderRadius: '50%',
      },
    },
  },
}))

export default Menu
