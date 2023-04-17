import { useState } from 'react'
import { ClickAwayListener } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import {
  ShareIcon,
  PenIcon,
  ExcelIcon,
  PrintIcon,
  AddCompanyIcon,
  LockSvg,
} from 'assets/icons'
import { useLazyGetV3CompaniesGetExcelFileQuery } from 'libs/redux/services/allv3'
import {
  setEditMode,
  setSocialModalVisibility,
} from 'libs/redux/slices/company'
import { notify } from 'utils/notification'
import { LimitTooltip } from 'components/ui/Tooltip/helper'
import Menu from 'components/ui/Menu'
import LimitTooltipContent from 'components/limitTooltip'
import Button from 'components/ui/Button'

import { RootState } from 'libs/redux/store'
import { WEB } from 'utils/statics/routes/web'
import type { IHeaderMenu } from './interface'

export const HeaderMenu = ({
  companyId,
  closeMenu,
  anchorEl,
  open,
  isAuth,
}: IHeaderMenu) => {
  const dispatch = useDispatch()
  const [getExcel] = useLazyGetV3CompaniesGetExcelFileQuery()
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

  const handleExportFileCompany = () => {
    closeMenu()
    getExcel({ companyId })
      .unwrap()
      .then((res: any) => {
        // in 'libs/redux/services/allv3' =>  type GetV3CompaniesGetExcelFileApiResponse = unknown i have to use any
        const url = window.URL.createObjectURL(new Blob([res.data]))
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', 'Rasmio ExcelFileCompany.xlsx')
        document.body.appendChild(link)
        link.click()
        link.remove()
      })
      .catch((err) => notify({ message: err?.data?.Message, type: 'error' }))
  }

  const handleEditCompany = () => {
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
      {!isAuth && (
        <Button
          btnType='ghost'
          color='black'
          data-selector='menu-company-btn'
          href={WEB.ABOUT_COMPANY_MANAGEMENT}
        >
          <AddCompanyIcon />
          مدیریت صفحه شرکت
        </Button>
      )}
      <Button
        btnType='ghost'
        color='black'
        data-selector='menu-btn'
        onClick={openSocialModal}
      >
        <ShareIcon />
        اشتراک‌گذاری
      </Button>
      {!isAuth && (
        <Button
          btnType='ghost'
          color='black'
          data-selector='menu-btn'
          onClick={handleEditCompany}
        >
          <PenIcon />
          پیشنهاد ویرایش
        </Button>
      )}
      <ClickAwayListener onClickAway={handleExcelTooltipClose}>
        {packageType && packageType > 11 ? (
          <Button
            btnType='ghost'
            color='black'
            data-selector='menu-btn'
            onClick={handleExportFileCompany}
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
      <Button btnType='ghost' color='black' data-selector='menu-btn'>
        <PrintIcon />
        چاپ
      </Button>
    </Menu>
  )
}
