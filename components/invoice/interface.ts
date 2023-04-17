export interface RealInvoiceData {
  fullName: string
  nationalCode: string
  mobile: string
  province: string
  city: string
  address: string
  postalCode: string
}

export interface LegalInvoiceData {
  checkRegistrationNumber: string
  economicCode: string
  phoneNumber: string
  mobileNumber: string
  companyTitle: string
  registrationNo: string
  factorAddress: string
  companyId: string
  province: string
  city: string
  postalCode: string
}

export type CompanyData = {
  companyTitle: string
  registrationNo: string
  companyId: string
  economicCode: string
}
