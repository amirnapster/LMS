import { useState } from 'react'
import { ClickAwayListener } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { ShareIcon, PenIcon, ExcelIcon, PrintIcon, LockSvg } from 'assets/icons'
import { setEditMode, setSocialModalVisibility } from 'libs/redux/slices/person'
import { notify } from 'utils/notification'
import { LimitTooltip } from 'components/ui/Tooltip/helper'
import { useLazyGetV3PersonGetExcelFileQuery } from 'libs/redux/services/v3'
import Menu from 'components/ui/Menu'
import LimitTooltipContent from 'components/limitTooltip'
import Button from 'components/ui/Button'

import { RootState } from 'libs/redux/store'
import type { IHeaderMenu } from './interface'

export const HeaderMenu = ({
  personId,
  closeMenu,
  anchorEl,
  open,
}: IHeaderMenu) => {
  const dispatch = useDispatch()
  const [getExcel] = useLazyGetV3PersonGetExcelFileQuery()

  const { packageType, accessToken } = useSelector(
    (state: RootState) => state.auth
  )
  const [openExcelTooltip, setOpenExcelTooltip] = useState<boolean | undefined>(
    false
  )

  const openSocialModal = () => {
    closeMenu()
    dispatch(setSocialModalVisibility(true))
  }

  const handleExportFilePerson = () => {
    closeMenu()
    getExcel({ personId })
      .unwrap()
      .then((res: any) => {
        const url = window.URL.createObjectURL(new Blob([res.data]))
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', 'Rasmio ExcelFilePerson.xlsx')
        document.body.appendChild(link)
        link.click()
        link.remove()
      })
      .catch((err) => notify({ message: err?.data?.Message, type: 'error' }))
  }

  const handleEditPerson = () => {
    closeMenu()
    dispatch(setEditMode(true))
  }

  const handleExcelTooltipClose = () => {
    setOpenExcelTooltip(false)
  }
  const handleExcelTooltipOpen = () => {
    setOpenExcelTooltip(true)
  }

  return (
    <Menu
      id='demo-positioned-menu'
      aria-labelledby='demo-positioned-button'
      anchorEl={anchorEl}
      open={open}
      onClose={closeMenu}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
    >
      <Button
        btnType='ghost'
        color='black'
        data-selector='menu-btn'
        onClick={openSocialModal}
      >
        <ShareIcon />
        اشتراک‌گذاری
      </Button>
      <Button
        btnType='ghost'
        color='black'
        data-selector='menu-btn'
        onClick={handleEditPerson}
      >
        <PenIcon />
        پیشنهاد ویرایش
      </Button>
      <ClickAwayListener onClickAway={handleExcelTooltipClose}>
        {packageType && packageType > 11 ? (
          <Button
            btnType='ghost'
            color='black'
            data-selector='menu-btn'
            onClick={handleExportFilePerson}
          >
            <ExcelIcon />
            خروجی اکسل
          </Button>
        ) : (
          <LimitTooltip
            placement='bottom-end'
            title={<LimitTooltipContent isLogin={accessToken} />}
            arrow
            onClose={handleExcelTooltipClose}
            open={openExcelTooltip}
            disableFocusListener
            disableTouchListener
          >
            <Button
              btnType='ghost'
              data-selector='lock-btn'
              onClick={handleExcelTooltipOpen}
              onMouseEnter={handleExcelTooltipOpen}
            >
              <div>
                <ExcelIcon />
                خروجی اکسل
              </div>
              <img src={LockSvg} alt='' />
            </Button>
          </LimitTooltip>
        )}
      </ClickAwayListener>
      {/* <Button btnType='ghost' color='black' data-selector='menu-btn'>
        <PrintIcon />
        چاپ
      </Button> */}
    </Menu>
  )
}
