import type { components } from 'types/V2Account'
import type { components as V2Profile } from 'types/V2Profile'
import type { components as V1Component } from 'types/V1Account'

export type Auth_Payload = components['schemas']['UserSignInForm']

export type Package_Type = components['schemas']['PackageEnum']

export type Forget_Password_Payload =
  V1Component['schemas']['ForgotPasswordForm']

export interface Token {
  accessToken: string
  refreshToken: string
}

export type GetActiveSessionsByUserInfo_Response =
  V2Profile['schemas']['GetActiveSessionsQueryResultApiResult']

export type TerminateSession_Payload =
  V2Profile['schemas']['TerminateSessionByUserInfo']

export type TerminateSession_Response =
  V2Profile['schemas']['TerminateSessionsCommandResultApiResult']

export type AddToNewseltter_Payload = V2Profile['schemas']['AddToNewsLetter']

export interface TotalCredits {
  CompanyContact: number
  Follow: number
  Network: number
  Portfolio: number
  Board: number
  SignatureHolders: number
  ParentAndChildren: number
  IP: number
  Contract: number
  ProductCategories: number
  SamtCapacity: number
  NationalCode: number
  LinkToGazzete: number
  ImportPower: number
  Industry: number
  worldHS: number
  iranHS: number
  companiesHS: number
  goodsHS: number
  Tariff: number
  companySearch: number
  personSearch: number
  Trademarks: number
  SetadPurchase: number
  CompanyPerson: number
  CentralBankCurrency: number
  importSearch: number
  companyAdvancedSearch: number
  personAdvancedSearch: number
  productAdvancedSearch: number
  productSearch: number
  trademarkSearch: number
  newsSearch: number
  allSearch: number
  ExcelExport: number
}

export interface UsedCredits {
  CompanyContact: number
  Follow: number
  Network: number
  Portfolio: number
  Board: number
  SignatureHolders: number
  ParentAndChildren: number
  IP: number
  Contract: number
  ProductCategories: number
  SamtCapacity: number
  NationalCode: number
  LinkToGazzete: number
  ImportPower: number
  Industry: number
  worldHS: number
  iranHS: number
  companiesHS: number
  goodsHS: number
  Tariff: number
  companySearch: number
  personSearch: number
  Trademarks: number
  SetadPurchase: number
  CompanyPerson: number
  CentralBankCurrency: number
  importSearch: number
  companyAdvancedSearch: number
  personAdvancedSearch: number
  productAdvancedSearch: number
  IntellectualPropertiesAdvancedSearch: number
  productSearch: number
  trademarkSearch: number
  newsSearch: number
  allSearch: number
  ExcelExport: number
}

export interface Credits {
  userId: number
  package?: Package_Type
  permissionType?: components['schemas']['PermissionType']
  expirationDateTime?: string | null
  totalCredits: TotalCredits
  usedCredits: UsedCredits
}

export interface AuthDataType {
  token: Token
  credits: Credits
  isNewUser: boolean
  completedProfile: boolean
}

export interface V2Response {
  data: AuthDataType
  isSuccess: boolean
  statusCode: number
  message: string
}

export type Logout_Response =
  components['schemas']['LogoutAccountCommandResultApiResult']
