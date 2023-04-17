import type {
  CommunicationWaysDto,
  GetCommentsApiResponse,
} from 'libs/redux/services/allv3'
import type { SendCode_Payload } from 'libs/redux/services/verification/interface'
import type { SendCodeResponse } from 'libs/redux/slices/company/interface'

export interface ResendCode_Payload extends SendCodeResponse {
  ceoTitle: string
  companyId: number
  companyTitle: string
  mobile: string
  name: string
  nationalCode: number
  position: string
  registerNo: string
}

export interface CompanyAuthProps {
  closeModal: () => void
}

export interface CompanyCodeForm {
  companyCode: string
}

export interface ConfirmCompanyState {
  toggleInfo: (toggle: boolean) => void
}

export interface CEOPhoneNumberFormProps {
  onSubmit: (data: Record<string, string>) => void
  payload?: SendCode_Payload
  isLoading?: boolean
}

export interface ConfirmPhoneNumbeProps {
  payload?: ResendCode_Payload
}

export interface CompanyIdFormProps {
  onSubmit: (data: { companyCode: string }) => void
  isError: boolean
  isLoading: boolean
}

export interface IContactCompany {
  fullName?: string
  phoneNumber?: string
  text?: string
}

export interface ICompanyComment {
  FullName: string
  commentText: string
}

export interface CreateNewCommentProps {
  companyId?: number
}

export interface CommentPaginationProps {
  totalPage: number
  handlePage: (pageSize: number) => void
  currentPage: number
}

export interface CommentProps {
  comments?: GetCommentsApiResponse
  companyId?: number
}

export interface CommunicationWaysProps extends CommunicationWaysDto {
  index: number
  lastItem?: boolean
  isAuth?: boolean
}

type News = {
  id?: number
  title?: string | null
  description?: string | null
  newsLetterDate?: string | null
  newsPaperDate?: string | null
  type?: string | null
  companyPictureUrl?: string | null
  companyTitle?: string | null
  companyId?: number
}

export type CompanyAdsType = Record<string, News[]> | null

export type AdsSortOrderType = 'new' | 'old'

export interface AdContentProps {
  ads: CompanyAdsType
  order: AdsSortOrderType
  mode: 'person' | 'company'
}

export interface AdHeaderProps {
  companyId?: number
  setOrder: (order: AdsSortOrderType) => void
  mode: 'person' | 'company'
}
