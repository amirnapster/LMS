import { DataGrid } from '@mui/x-data-grid'
import { styled } from '@mui/material/styles'

const Table = styled(DataGrid)(() => ({
  '& .MuiDataGrid-virtualScroller': {
    minWidth: 'fit-content !important',
  },
  '& .MuiDataGrid-renderingZone': {
    width: 'auto ',
    maxHeight: 'none !important',
  },
  '& .MuiDataGrid-cell': {
    lineHeight: 'unset !important',
    maxHeight: 'none !important',
    whiteSpace: 'normal',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontSize: '.87rem',
    border: 'none',

    '& > span , div': {
      fontSize: '.87rem',
    },

    '&:focus': {
      outline: 'none !important',
    },
  },

  '& .MuiDataGrid-main': {
    overflowX: 'auto',
  },
  '& .MuiDataGrid-columnHeaderWrapper': {
    minWidth: 'auto ',
  },
  '& .MuiDataGrid-columnHeaders': {
    minWidth: 'fit-content',
    borderBottom: '2px solid #E4E9FF',
    maxHeight: '48px !important',
    minHeight: '48px !important',
  },
  '& .MuiDataGrid-window': {
    overflow: 'inherit !important',
  },
  '& .MuiDataGrid-columnHeaderTitle': {
    fontSize: '.87rem',
    fontWeight: '700',
    color: '#101822',
    minHeight: '48px',
    maxHeight: '48px',
  },

  '& .MuiDataGrid-footer': {
    borderTop: '1px solid #ebebff',
  },

  '& .MuiDataGrid-autoHeight': {
    overflow: 'hidden',
  },
  '& .MuiDataGrid-viewport': {
    minWidth: '100% !important',
  },

  '& .MuiDataGrid-cellLeft': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  '& .MuiDataGrid-root': {
    border: 'unset',
    borderRadius: 0,
  },
  '& .MuiDataGrid-columnSeparator': {
    opacity: '0 !important',
  },
  '& .MuiDataGrid-columnsContainer': {
    backgroundColor: '#F2F8FF !important',
    maxHeight: '2.5rem !important',
    minHeight: '2.5rem !important',
    width: 'fit-content ',
    borderRadius: '4px',
  },
  '& .MuiDataGrid-row.Mui-selected': {
    backgroundColor: 'rgba(0, 0, 0, 0.04) !important',
    color: '#000 !important',
  },
  '& .MuiCheckbox-colorPrimary.Mui-checked': {
    color: 'black !important',
  },
  '& .MuiDataGrid-columnHeaderTitleContainer': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  '& .MuiDataGrid-row': {
    borderBottom: '1px solid #ebebff',
    maxHeight: '88px !important',
    minHeight: '88px !important',
    borderRadius: '4px',

    '&:hover': {
      background: '#f9f9f9',
    },

    '&.Mui-selected': {
      backgroundColor: '#0074ff',
      color: '#ffffff',
      '& .MuiCheckbox-root': {
        color: '#ffffff',
      },
    },
    '&.Mui-selected:hover': {
      backgroundColor: '#0074ff',
      color: '#ffffff',
      opacity: '.75',
    },
    '&.Mui-selected .currencyIcon': {
      color: '#151617d7',
    },
  },
  '& .MuiDataGrid-sortIcon': {
    color: '#151617d7',
  },
  '& .MuiTablePagination-selectLabel': {
    order: 2,
    display: 'none !important',
  },
  '& .MuiInputBase-root': {
    order: 3,
  },
  '& .MuiIconButton-colorInherit': {
    margin: '0 4px',
  },
  '& .MuiDataGrid-footerContainer': {
    padding: '2rem 0 1.5rem',
    border: 'unset',
  },
  '& .MuiDataGrid-columnHeaderCheckbox': {
    display: 'none',
  },
  '& .currency-header': {
    paddingInlineStart: '4rem',
  },
}))

export default Table
