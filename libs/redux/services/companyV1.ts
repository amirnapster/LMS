import { emptySplitApi as api } from './emptyApi'
export const addTagTypes = ['Companies'] as const
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: (build) => ({
      getCompanyTimeLine: build.query<
        GetCompanyTimeLineApiResponse,
        GetCompanyTimeLineApiArg
      >({
        query: (queryArg) => ({
          url: `/v1/Companies/GetCompanyTimeLine`,
          params: { CompanyId: queryArg.companyId },
        }),
        providesTags: ['Companies'],
      }),
      getCompanyAsync: build.query<
        GetCompanyAsyncApiResponse,
        GetCompanyAsyncApiArg
      >({
        query: (queryArg) => ({
          url: `/v1/Companies/GetCompanyAsync`,
          params: { id: queryArg.id },
        }),
        providesTags: ['Companies'],
      }),
      getCompanyNews: build.query<
        GetCompanyNewsApiResponse,
        GetCompanyNewsApiArg
      >({
        query: (queryArg) => ({
          url: `/v1/Companies/GetCompanyNews`,
          params: {
            companyId: queryArg.companyId,
            page: queryArg.page,
            pageSize: queryArg.pageSize,
          },
        }),
        providesTags: ['Companies'],
      }),
      getCompanyForEdit: build.query<
        GetCompanyForEditApiResponse,
        GetCompanyForEditApiArg
      >({
        query: (queryArg) => ({
          url: `/v1/Companies/GetCompanyForEdit`,
          params: { companyId: queryArg.companyId },
        }),
        providesTags: ['Companies'],
      }),
      printCompany: build.query<PrintCompanyApiResponse, PrintCompanyApiArg>({
        query: (queryArg) => ({
          url: `/v1/Companies/PrintCompany`,
          params: { companyId: queryArg.companyId },
        }),
        providesTags: ['Companies'],
      }),
      uploadCompanyFile: build.mutation<
        UploadCompanyFileApiResponse,
        UploadCompanyFileApiArg
      >({
        query: (queryArg) => ({
          url: `/v1/Companies/UploadCompanyFile`,
          method: 'POST',
          body: queryArg.body,
        }),
        invalidatesTags: ['Companies'],
      }),
      submitCompanySuggestion: build.mutation<
        SubmitCompanySuggestionApiResponse,
        SubmitCompanySuggestionApiArg
      >({
        query: (queryArg) => ({
          url: `/v1/Companies/SubmitCompanySuggestion`,
          method: 'POST',
          body: queryArg.companySuggestion,
        }),
        invalidatesTags: ['Companies'],
      }),
      followCompany: build.query<FollowCompanyApiResponse, FollowCompanyApiArg>(
        {
          query: (queryArg) => ({
            url: `/v1/Companies/FollowCompany`,
            params: { companyId: queryArg.companyId },
          }),
          providesTags: ['Companies'],
        }
      ),
      unfollowCompany: build.query<
        UnfollowCompanyApiResponse,
        UnfollowCompanyApiArg
      >({
        query: (queryArg) => ({
          url: `/v1/Companies/UnfollowCompany`,
          params: { companyId: queryArg.companyId },
        }),
        providesTags: ['Companies'],
      }),
      saveComment: build.mutation<SaveCommentApiResponse, SaveCommentApiArg>({
        query: (queryArg) => ({
          url: `/v1/Companies/SaveComment`,
          method: 'POST',
          body: queryArg.insertCommentDto,
        }),
        invalidatesTags: ['Companies'],
      }),
      categoryDetails: build.query<
        CategoryDetailsApiResponse,
        CategoryDetailsApiArg
      >({
        query: (queryArg) => ({
          url: `/v1/Companies/CategoryDetails`,
          params: {
            companyId: queryArg.companyId,
            categoryId: queryArg.categoryId,
          },
        }),
        providesTags: ['Companies'],
      }),
      certificates: build.query<CertificatesApiResponse, CertificatesApiArg>({
        query: (queryArg) => ({
          url: `/v1/Companies/Certificates`,
          params: { companyId: queryArg.companyId },
        }),
        providesTags: ['Companies'],
      }),
      signatureHolders: build.query<
        SignatureHoldersApiResponse,
        SignatureHoldersApiArg
      >({
        query: (queryArg) => ({
          url: `/v1/Companies/SignatureHolders`,
          body: queryArg.getCompanyTimeline,
        }),
        providesTags: ['Companies'],
      }),
      getCategoryProductPagination: build.query<
        GetCategoryProductPaginationApiResponse,
        GetCategoryProductPaginationApiArg
      >({
        query: (queryArg) => ({
          url: `/v1/Companies/GetCategoryProductPagination`,
          params: {
            companyId: queryArg.companyId,
            categoryId: queryArg.categoryId,
            pageNumber: queryArg.pageNumber,
            pageSize: queryArg.pageSize,
          },
        }),
        providesTags: ['Companies'],
      }),
      likeComment: build.query<LikeCommentApiResponse, LikeCommentApiArg>({
        query: (queryArg) => ({
          url: `/v1/Companies/LikeComment`,
          params: { commentId: queryArg.commentId },
        }),
        providesTags: ['Companies'],
      }),
      disLikeComment: build.query<
        DisLikeCommentApiResponse,
        DisLikeCommentApiArg
      >({
        query: (queryArg) => ({
          url: `/v1/Companies/DisLikeComment`,
          params: { commentId: queryArg.commentId },
        }),
        providesTags: ['Companies'],
      }),
      uploadCompanyImage: build.mutation<
        UploadCompanyImageApiResponse,
        UploadCompanyImageApiArg
      >({
        query: (queryArg) => ({
          url: `/v1/Companies/UploadCompanyImage`,
          method: 'POST',
          body: queryArg.body,
        }),
        invalidatesTags: ['Companies'],
      }),
    }),
    overrideExisting: false,
  })
export { injectedRtkApi as enhancedApi }
export type GetCompanyTimeLineApiResponse = unknown
export type GetCompanyTimeLineApiArg = {
  companyId?: number
}
export type GetCompanyAsyncApiResponse = unknown
export type GetCompanyAsyncApiArg = {
  id?: number
}
export type GetCompanyNewsApiResponse = unknown
export type GetCompanyNewsApiArg = {
  companyId?: number
  page?: number
  pageSize?: number
}
export type GetCompanyForEditApiResponse = unknown
export type GetCompanyForEditApiArg = {
  companyId?: number
}
export type PrintCompanyApiResponse = unknown
export type PrintCompanyApiArg = {
  companyId?: number
}
export type UploadCompanyFileApiResponse = unknown
export type UploadCompanyFileApiArg = {
  body: {
    file?: Blob
  }
}
export type SubmitCompanySuggestionApiResponse = unknown
export type SubmitCompanySuggestionApiArg = {
  companySuggestion: CompanySuggestion
}
export type FollowCompanyApiResponse = unknown
export type FollowCompanyApiArg = {
  companyId?: number
}
export type UnfollowCompanyApiResponse = unknown
export type UnfollowCompanyApiArg = {
  companyId?: number
}
export type SaveCommentApiResponse = unknown
export type SaveCommentApiArg = {
  insertCommentDto: InsertCommentDto
}
export type CategoryDetailsApiResponse = unknown
export type CategoryDetailsApiArg = {
  companyId?: number
  categoryId?: number
}
export type CertificatesApiResponse = unknown
export type CertificatesApiArg = {
  companyId?: number
}
export type SignatureHoldersApiResponse = unknown
export type SignatureHoldersApiArg = {
  getCompanyTimeline: GetCompanyTimeline
}
export type GetCategoryProductPaginationApiResponse = unknown
export type GetCategoryProductPaginationApiArg = {
  companyId?: number
  categoryId?: number
  pageNumber?: number
  pageSize?: number
}
export type LikeCommentApiResponse = unknown
export type LikeCommentApiArg = {
  commentId?: number
}
export type DisLikeCommentApiResponse = unknown
export type DisLikeCommentApiArg = {
  commentId?: number
}
export type UploadCompanyImageApiResponse = unknown
export type UploadCompanyImageApiArg = {
  body: {
    CompanyPicture?: Blob
    CompanyId?: number
  }
}
export type IDomainEvent = object
export type RegistrationType = {
  id?: number
  events?: IDomainEvent[] | null
  title?: string | null
  wordUsedToShow?: string | null
  company?: Company[] | null
}
export type News = {
  id?: number
  events?: IDomainEvent[] | null
  title?: string | null
  description?: string | null
  companyId?: number
  capitalTo?: number | null
  newspaperDate?: string | null
  newsLetterDate?: string | null
  newsPaperNumber?: string | null
  newsPaperCityType?: string | null
  pageNumber?: number | null
  indicatorNumber?: string | null
  newsType?: string | null
  company?: Company
  companyPerson?: CompanyPerson[] | null
}
export type Position = {
  id?: number
  events?: IDomainEvent[] | null
  title?: string | null
  firstRole?: string | null
  secondRole?: string | null
  worth?: number
  companyPerson?: CompanyPerson[] | null
}
export type CompanyPerson = {
  id?: number
  events?: IDomainEvent[] | null
  companyId?: number
  personId?: number
  positionId?: number
  startDate?: string
  endDate?: string | null
  byNewsId?: number
  duration?: string | null
  representingId?: number | null
  byNews?: News
  company?: Company
  representingCompany?: Company
  person?: Person
  position?: Position
}
export type NewsPerson = {
  id?: number
  events?: IDomainEvent[] | null
  newsId?: number
  personId?: number
  news?: News
  person?: Person
}
export type ProductCategory = {
  id?: number
  events?: IDomainEvent[] | null
  title?: string | null
  parentId?: number
  description?: string | null
  products?: Product[] | null
}
export type Product = {
  id?: number
  events?: IDomainEvent[] | null
  titleFa?: string | null
  titleEn?: string | null
  description?: string | null
  unit?: string | null
  picture?: string | null
  hs?: string | null
  isic?: string | null
  samt?: string | null
  iranCode?: string | null
  ntsw?: string | null
  brandTitle?: string | null
  producerCountry?: string | null
  iranCodeId?: string | null
  gS1Id?: string | null
  gtin?: string | null
  internalCode?: string | null
  fieldsJson?: string | null
  industryId?: string | null
  brandId?: number | null
  categoryId?: number | null
  ownerId?: number | null
  priceFrom?: number | null
  priceTo?: number | null
  verified?: boolean | null
  pictureUrl?: string | null
  productCategory?: ProductCategory
  productSuppliers?: ProductSupplier[] | null
}
export type ProductSupplier = {
  id?: number
  events?: IDomainEvent[] | null
  entityId?: number | null
  productId?: number
  priceFrom?: number | null
  priceTo?: number | null
  company?: Company
  person?: Person
  product?: Product
}
export type TrustCompanySizeEnum = 1 | 2 | 3 | 4 | 5 | 6 | 7
export type Trust = {
  id?: number
  events?: IDomainEvent[] | null
  level?: number
  title?: string | null
  supportTel?: string | null
  supportDuring?: string | null
  url?: string | null
  entityId?: number
  fromDate?: string
  toDate?: string
  logo?: string | null
  link?: string
  companySize?: TrustCompanySizeEnum
  address?: string | null
  addressValidated?: boolean
  isTrusted?: boolean
  company?: Company
  person?: Person
}
export type LinkType = {
  id?: number
  events?: IDomainEvent[] | null
  title?: string | null
  baseUrl?: string | null
  icon?: string | null
  links?: Link[] | null
}
export type Link = {
  id?: number
  events?: IDomainEvent[] | null
  url?: string | null
  entityId?: number
  linkTypeId?: number
  person?: Person
  linkType?: LinkType
}
export type Person = {
  id?: number
  events?: IDomainEvent[] | null
  views?: number | null
  title?: string | null
  gender?: boolean | null
  tagline?: string | null
  importance?: number | null
  picture?: string | null
  pictureUrl?: string | null
  address?: string | null
  postalCode?: string | null
  lat?: number | null
  lng?: number | null
  tel?: string | null
  fax?: string | null
  mobile?: string | null
  email?: string | null
  description?: string | null
  isValidNationalCode?: boolean | null
  dofollow?: boolean | null
  site?: string | null
  privateMobile?: string | null
  privateEmail?: string | null
  personCompanyManagements?: PersonCompanyManagement[] | null
  companyPerson?: CompanyPerson[] | null
  newsPeople?: NewsPerson[] | null
  productSuppliers?: ProductSupplier[] | null
  trusts?: Trust[] | null
  links?: Link[] | null
}
export type PersonCompanyManagement = {
  id?: number
  events?: IDomainEvent[] | null
  personId?: number
  companyId?: number
  verified?: boolean
  until?: string
  company?: Company
  person?: Person
}
export type CompanyNews = {
  id?: number
  events?: IDomainEvent[] | null
  title?: string | null
  text?: string | null
  authorId?: number
  tags?: string | null
  companyId?: number
  publishDate?: string
  company?: Company
}
export type Company = {
  id?: number
  events?: IDomainEvent[] | null
  registrationNo?: string | null
  title?: string | null
  address?: string | null
  picture?: string | null
  pictureUrl?: string | null
  canonicalUrl?: string | null
  relativeUrl?: string | null
  postalCode?: string | null
  taxNumber?: string | null
  status?: string | null
  lat?: number | null
  lng?: number | null
  tel?: string | null
  fax?: string | null
  mobile?: string | null
  email?: string | null
  description?: string | null
  registrationTypeId?: number
  registrationDate?: string | null
  views?: number
  messages?: number
  hasKeys?: string | null
  dofollow?: boolean | null
  stock?: string | null
  webSite?: string | null
  site?: string | null
  tagline?: string | null
  edareKol?: string | null
  vahedSabti?: string | null
  lastUpdate?: string | null
  capital?: number | null
  registrationType?: RegistrationType
  personCompanyManagements?: PersonCompanyManagement[] | null
  companyPerson?: CompanyPerson[] | null
  companyPersonRepresentings?: CompanyPerson[] | null
  companyNews?: CompanyNews[] | null
  news?: News[] | null
  productSuppliers?: ProductSupplier[] | null
  trusts?: Trust[] | null
}
export type CompanySuggestion = {
  id?: number
  events?: IDomainEvent[] | null
  companyId?: number
  picture?: string | null
  taxNumber?: string | null
  lat?: number | null
  lng?: number | null
  tel?: string | null
  fax?: string | null
  mobile?: string | null
  email?: string | null
  description?: string | null
  note?: string | null
  suggestingUser?: number | null
  webSite?: string | null
  adminChecker?: number | null
  suggestionCheckDate?: string | null
  statusID?: number
  company?: Company
}
export type InsertCommentDto = {
  commentText?: string | null
  entityId?: number
}
export type GetCompanyTimeline = {
  companyId?: number
}
export const {
  useGetCompanyTimeLineQuery,
  useLazyGetCompanyTimeLineQuery,
  useGetCompanyAsyncQuery,
  useLazyGetCompanyAsyncQuery,
  useGetCompanyNewsQuery,
  useLazyGetCompanyNewsQuery,
  useGetCompanyForEditQuery,
  useLazyGetCompanyForEditQuery,
  usePrintCompanyQuery,
  useLazyPrintCompanyQuery,
  useUploadCompanyFileMutation,
  useSubmitCompanySuggestionMutation,
  useFollowCompanyQuery,
  useLazyFollowCompanyQuery,
  useUnfollowCompanyQuery,
  useLazyUnfollowCompanyQuery,
  useSaveCommentMutation,
  useCategoryDetailsQuery,
  useLazyCategoryDetailsQuery,
  useCertificatesQuery,
  useLazyCertificatesQuery,
  useSignatureHoldersQuery,
  useLazySignatureHoldersQuery,
  useGetCategoryProductPaginationQuery,
  useLazyGetCategoryProductPaginationQuery,
  useLikeCommentQuery,
  useLazyLikeCommentQuery,
  useDisLikeCommentQuery,
  useLazyDisLikeCommentQuery,
  useUploadCompanyImageMutation,
} = injectedRtkApi
