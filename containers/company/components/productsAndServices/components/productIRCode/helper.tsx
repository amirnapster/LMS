import { Close } from '@mui/icons-material'
import { EyeSvgIcon, ArrowRightIcon } from 'assets/icons'
import Link from 'next/link'
import Row from 'components/ui/Row'
import Col from 'components/ui/Col'
import Button from 'components/ui/Button'

import { WEB } from 'utils/statics/routes/web'
import type { GridColDef } from '@mui/x-data-grid'
import type { ProductIrCodeModalType } from './interface'
import styles from './productIRCode.module.scss'

export const columns: GridColDef[] = [
  {
    field: 'title',
    headerName: 'عنوان محصول',
    width: 500,
    disableColumnMenu: true,
    sortable: false,
    headerClassName: 'companyDetailDataGridHeader',
    renderCell: (params) => <span data-selector='title'>{params.value}</span>,
  },
  {
    field: 'type',
    headerName: 'تنوع',
    width: 100,
    sortable: true,
    disableColumnMenu: true,
    headerClassName: 'companyDetailDataGridHeader',
    renderCell: (params) => <span data-selector='type'>{params.value}</span>,
  },
  {
    field: 'details',
    headerName: 'جزییات',
    width: 100,
    sortable: false,
    disableColumnMenu: true,
    headerClassName: 'companyDetailDataGridHeader',
    renderCell: () => (
      <Button data-selector='eye-svg'>
        <EyeSvgIcon />
      </Button>
    ),
  },
]

export const ProductIrCodeModal = ({
  data,
  onClose,
}: ProductIrCodeModalType) => (
  <div className={styles['productModal']}>
    <Row className={styles['productModal__header']}>
      <Col xxs={1}>
        <Button onClick={onClose} data-selector='arrow-close'>
          <ArrowRightIcon />
        </Button>
      </Col>
      <p>جزییات دسته‌بندی ایران‌کد</p>

      <Col xxs={1}>
        <Button onClick={onClose} data-selector='close'>
          <Close />
        </Button>
      </Col>
    </Row>
    <div className={styles['productModal__body']}>
      <div data-selector='title-box'>
        <div>
          <h4>عنوان دسته‌بندی: </h4>
          <h2>{data?.title}</h2>
        </div>
        <div>
          <h4>تعداد: </h4>
          <h2>{data?.type} محصول</h2>
        </div>
      </div>
      <div data-selector='box'>
        <div data-selector='box-content'>
          <div data-selector='box-header'>لیست محصولات</div>
          {data?.products?.map(({ id, titleFa }) => (
            <Link href={`${WEB.PRODUCT}/${id}/${titleFa}`} key={id}>
              <a
                href={`${WEB.PRODUCT}/${id}/${titleFa}`}
                data-selector='box-item'
              >
                <Button btnType='ghost'>
                  <span> {titleFa}</span>
                  <ArrowRightIcon />
                </Button>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  </div>
)
