import { emptySplitApi as api } from './emptyApi'
export const addTagTypes = [
  'Account',
  'Companies',
  'List',
  'Person',
  'Pricing',
  'Profile',
  'Search',
] as const
export const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: (build) => ({
      signInByOtp: build.mutation<SignInByOtpApiResponse, SignInByOtpApiArg>({
        query: (queryArg) => ({
          url: `/v3/Account/SignInByOTP`,
          method: 'POST',
          body: queryArg.signInByOtpCommand,
        }),
        invalidatesTags: ['Account'],
      }),
      verfySignInByOtp: build.mutation<
        VerfySignInByOtpApiResponse,
        VerfySignInByOtpApiArg
      >({
        query: (queryArg) => ({
          url: `/v3/Account/VerfySignInByOTP`,
          method: 'POST',
          body: queryArg.verfySignInByOtpCommand,
        }),
        invalidatesTags: ['Account'],
      }),
      setUserPassword: build.mutation<
        SetUserPasswordApiResponse,
        SetUserPasswordApiArg
      >({
        query: (queryArg) => ({
          url: `/v3/Account/SetUserPassword`,
          method: 'POST',
          body: queryArg.setPasswordForm,
        }),
        invalidatesTags: ['Account'],
      }),
      getActiveSessionsByOtp: build.mutation<
        GetActiveSessionsByOtpApiResponse,
        GetActiveSessionsByOtpApiArg
      >({
        query: (queryArg) => ({
          url: `/v3/Account/GetActiveSessionsByOtp`,
          method: 'POST',
          body: queryArg.verfySignInByOtpCommand,
        }),
        invalidatesTags: ['Account'],
      }),
      terminateUserSessionByOtp: build.mutation<
        TerminateUserSessionByOtpApiResponse,
        TerminateUserSessionByOtpApiArg
      >({
        query: (queryArg) => ({
          url: `/v3/Account/TerminateUserSessionByOtp`,
          method: 'DELETE',
          body: queryArg.terminateSessionByUserInfoWithOtp,
        }),
        invalidatesTags: ['Account'],
      }),
      getV3CompaniesQwertyu: build.query<
        GetV3CompaniesQwertyuApiResponse,
        GetV3CompaniesQwertyuApiArg
      >({
        query: (queryArg) => ({
          url: `/v3/Companies/Qwertyu`,
          params: { companyId: queryArg.companyId },
        }),
        providesTags: ['Companies'],
      }),
      getGraph: build.query<GetGraphApiResponse, GetGraphApiArg>({
        query: (queryArg) => ({
          url: `/v3/Companies/GetGraph`,
          params: { companyId: queryArg.companyId },
        }),
        providesTags: ['Companies'],
      }),
      getSummary: build.query<GetSummaryApiResponse, GetSummaryApiArg>({
        query: (queryArg) => ({
          url: `/v3/Companies/GetSummary`,
          params: { companyId: queryArg.companyId, title: queryArg.title },
        }),
        providesTags: ['Companies'],
      }),
      getCompanyPeople: build.query<
        GetCompanyPeopleApiResponse,
        GetCompanyPeopleApiArg
      >({
        query: (queryArg) => ({
          url: `/v3/Companies/GetCompanyPeople`,
          params: { companyId: queryArg.companyId },
        }),
        providesTags: ['Companies'],
      }),
      getCertificatesAndTrademarks: build.query<
        GetCertificatesAndTrademarksApiResponse,
        GetCertificatesAndTrademarksApiArg
      >({
        query: (queryArg) => ({
          url: `/v3/Companies/GetCertificatesAndTrademarks`,
          params: { companyId: queryArg.companyId },
        }),
        providesTags: ['Companies'],
      }),
      getAllNews: build.query<GetAllNewsApiResponse, GetAllNewsApiArg>({
        query: (queryArg) => ({
          url: `/v3/Companies/GetAllNews`,
          params: { companyId: queryArg.companyId },
        }),
        providesTags: ['Companies'],
      }),
      createMessage: build.mutation<
        CreateMessageApiResponse,
        CreateMessageApiArg
      >({
        query: (queryArg) => ({
          url: `/v3/Companies/CreateMessage`,
          method: 'POST',
          body: queryArg.createMessageCommandDto,
        }),
        invalidatesTags: ['Companies'],
      }),
      getDetails: build.query<GetDetailsApiResponse, GetDetailsApiArg>({
        query: (queryArg) => ({
          url: `/v3/Companies/GetDetails`,
          params: { companyId: queryArg.companyId, title: queryArg.title },
        }),
        providesTags: ['Companies'],
      }),
      getFinancial: build.query<GetFinancialApiResponse, GetFinancialApiArg>({
        query: (queryArg) => ({
          url: `/v3/Companies/GetFinancial`,
          params: { companyId: queryArg.companyId },
        }),
        providesTags: ['Companies'],
      }),
      getProducts: build.query<GetProductsApiResponse, GetProductsApiArg>({
        query: (queryArg) => ({
          url: `/v3/Companies/GetProducts`,
          params: { companyId: queryArg.companyId },
        }),
        providesTags: ['Companies'],
      }),
      getTimeline: build.query<GetTimelineApiResponse, GetTimelineApiArg>({
        query: (queryArg) => ({
          url: `/v3/Companies/GetTimeline`,
          params: { companyId: queryArg.companyId },
        }),
        providesTags: ['Companies'],
      }),
      getComments: build.query<GetCommentsApiResponse, GetCommentsApiArg>({
        query: (queryArg) => ({
          url: `/v3/Companies/GetComments`,
          params: { companyId: queryArg.companyId },
        }),
        providesTags: ['Companies'],
      }),
      getV3CompaniesGetContact: build.query<
        GetV3CompaniesGetContactApiResponse,
        GetV3CompaniesGetContactApiArg
      >({
        query: (queryArg) => ({
          url: `/v3/Companies/GetContact`,
          params: {
            companyId: queryArg.companyId,
            contactType: queryArg.contactType,
          },
        }),
        providesTags: ['Companies'],
      }),
      getTrades: build.query<GetTradesApiResponse, GetTradesApiArg>({
        query: (queryArg) => ({
          url: `/v3/Companies/GetTrades`,
          params: { companyId: queryArg.companyId },
        }),
        providesTags: ['Companies'],
      }),
      getSignatureHolders: build.query<
        GetSignatureHoldersApiResponse,
        GetSignatureHoldersApiArg
      >({
        query: (queryArg) => ({
          url: `/v3/Companies/GetSignatureHolders`,
          params: { companyId: queryArg.companyId },
        }),
        providesTags: ['Companies'],
      }),
      getV3CompaniesGetExcelFile: build.query<
        GetV3CompaniesGetExcelFileApiResponse,
        GetV3CompaniesGetExcelFileApiArg
      >({
        query: (queryArg) => ({
          url: `/v3/Companies/GetExcelFile`,
          params: { companyId: queryArg.companyId },
        }),
        providesTags: ['Companies'],
      }),
      saveComment: build.mutation<SaveCommentApiResponse, SaveCommentApiArg>({
        query: (queryArg) => ({
          url: `/v3/Companies/SaveComment`,
          method: 'POST',
          body: queryArg.submitCommentForm,
        }),
        invalidatesTags: ['Companies'],
      }),
      getV3CompaniesDeleteCompanyCache: build.query<
        GetV3CompaniesDeleteCompanyCacheApiResponse,
        GetV3CompaniesDeleteCompanyCacheApiArg
      >({
        query: (queryArg) => ({
          url: `/v3/Companies/DeleteCompanyCache`,
          params: { companyId: queryArg.companyId },
        }),
        providesTags: ['Companies'],
      }),
      getV3CompaniesDeleteCompaniesCache: build.query<
        GetV3CompaniesDeleteCompaniesCacheApiResponse,
        GetV3CompaniesDeleteCompaniesCacheApiArg
      >({
        query: (queryArg) => ({
          url: `/v3/Companies/DeleteCompaniesCache`,
          body: queryArg.body,
        }),
        providesTags: ['Companies'],
      }),
      createList: build.mutation<CreateListApiResponse, CreateListApiArg>({
        query: (queryArg) => ({
          url: `/v3/List/CreateList`,
          method: 'POST',
          body: queryArg.createFavoriteListsDto,
        }),
        invalidatesTags: ['List'],
      }),
      getMyLists: build.query<GetMyListsApiResponse, GetMyListsApiArg>({
        query: (queryArg) => ({
          url: `/v3/List/GetMyLists`,
          params: { entityId: queryArg.entityId },
        }),
        providesTags: ['List'],
      }),
      addEntityToList: build.mutation<
        AddEntityToListApiResponse,
        AddEntityToListApiArg
      >({
        query: (queryArg) => ({
          url: `/v3/List/AddEntityToList`,
          method: 'POST',
          body: queryArg.addEntityToFavoriteListCommandDto,
        }),
        invalidatesTags: ['List'],
      }),
      removeEntitiesFromList: build.mutation<
        RemoveEntitiesFromListApiResponse,
        RemoveEntitiesFromListApiArg
      >({
        query: (queryArg) => ({
          url: `/v3/List/RemoveEntitiesFromList`,
          method: 'DELETE',
          body: queryArg.removeEntitiesFromFavoriteListCommandDto,
        }),
        invalidatesTags: ['List'],
      }),
      getV3PersonGetExcelFile: build.query<
        GetV3PersonGetExcelFileApiResponse,
        GetV3PersonGetExcelFileApiArg
      >({
        query: (queryArg) => ({
          url: `/v3/Person/GetExcelFile`,
          params: { personId: queryArg.personId },
        }),
        providesTags: ['Person'],
      }),
      getV3PersonGetSummary: build.query<
        GetV3PersonGetSummaryApiResponse,
        GetV3PersonGetSummaryApiArg
      >({
        query: (queryArg) => ({
          url: `/v3/Person/GetSummary`,
          params: { personHId: queryArg.personHId },
        }),
        providesTags: ['Person'],
      }),
      submitPersonSuggestion: build.mutation<
        SubmitPersonSuggestionApiResponse,
        SubmitPersonSuggestionApiArg
      >({
        query: (queryArg) => ({
          url: `/v3/Person/SubmitPersonSuggestion`,
          method: 'POST',
          body: queryArg.personSuggestion,
        }),
        invalidatesTags: ['Person'],
      }),
      postV3PricingPay: build.mutation<
        PostV3PricingPayApiResponse,
        PostV3PricingPayApiArg
      >({
        query: (queryArg) => ({
          url: `/v3/Pricing/Pay`,
          method: 'POST',
          params: {
            package: queryArg['package'],
            numberOfUser: queryArg.numberOfUser,
          },
        }),
        invalidatesTags: ['Pricing'],
      }),
      getV3Pricing: build.query<GetV3PricingApiResponse, GetV3PricingApiArg>({
        query: () => ({ url: `/v3/Pricing` }),
        providesTags: ['Pricing'],
      }),
      receipt: build.query<ReceiptApiResponse, ReceiptApiArg>({
        query: (queryArg) => ({
          url: `/v3/Pricing/Receipt`,
          params: { paymentId: queryArg.paymentId },
        }),
        providesTags: ['Pricing'],
      }),
      gotoIpg: build.query<GotoIpgApiResponse, GotoIpgApiArg>({
        query: (queryArg) => ({
          url: `/v3/Pricing/GotoIPG`,
          params: { paymentId: queryArg.paymentId },
        }),
        providesTags: ['Pricing'],
      }),
      applyDiscount: build.query<ApplyDiscountApiResponse, ApplyDiscountApiArg>(
        {
          query: (queryArg) => ({
            url: `/v3/Pricing/ApplyDiscount`,
            params: { code: queryArg.code, paymentId: queryArg.paymentId },
          }),
          providesTags: ['Pricing'],
        }
      ),
      postV3ProfileFollow: build.mutation<
        PostV3ProfileFollowApiResponse,
        PostV3ProfileFollowApiArg
      >({
        query: (queryArg) => ({
          url: `/v3/Profile/Follow`,
          method: 'POST',
          body: queryArg.followCompany,
        }),
        invalidatesTags: ['Profile'],
      }),
      setActivity: build.mutation<SetActivityApiResponse, SetActivityApiArg>({
        query: (queryArg) => ({
          url: `/v3/Profile/SetActivity`,
          method: 'PUT',
          body: queryArg.setActivityDto,
        }),
        invalidatesTags: ['Profile'],
      }),
      setInformation: build.mutation<
        SetInformationApiResponse,
        SetInformationApiArg
      >({
        query: (queryArg) => ({
          url: `/v3/Profile/SetInformation`,
          method: 'PUT',
          body: queryArg.setInformationDto,
        }),
        invalidatesTags: ['Profile'],
      }),
      setSocialNetwork: build.mutation<
        SetSocialNetworkApiResponse,
        SetSocialNetworkApiArg
      >({
        query: (queryArg) => ({
          url: `/v3/Profile/SetSocialNetwork`,
          method: 'PUT',
          body: queryArg.setSocialNetworkDto,
        }),
        invalidatesTags: ['Profile'],
      }),
      setPassword: build.mutation<SetPasswordApiResponse, SetPasswordApiArg>({
        query: (queryArg) => ({
          url: `/v3/Profile/SetPassword`,
          method: 'PUT',
          body: queryArg.setPasswordDto,
        }),
        invalidatesTags: ['Profile'],
      }),
      getUserProfileByUserId: build.mutation<
        GetUserProfileByUserIdApiResponse,
        GetUserProfileByUserIdApiArg
      >({
        query: () => ({
          url: `/v3/Profile/GetUserProfileByUserId`,
          method: 'PUT',
        }),
        invalidatesTags: ['Profile'],
      }),
      postV3ProfileFollowNationalCode: build.mutation<
        PostV3ProfileFollowNationalCodeApiResponse,
        PostV3ProfileFollowNationalCodeApiArg
      >({
        query: (queryArg) => ({
          url: `/v3/Profile/FollowNationalCode`,
          method: 'POST',
          body: queryArg.followNationalCode,
        }),
        invalidatesTags: ['Profile'],
      }),
      postV3ProfileFollowPostalCode: build.mutation<
        PostV3ProfileFollowPostalCodeApiResponse,
        PostV3ProfileFollowPostalCodeApiArg
      >({
        query: (queryArg) => ({
          url: `/v3/Profile/FollowPostalCode`,
          method: 'POST',
          body: queryArg.followPostalCode,
        }),
        invalidatesTags: ['Profile'],
      }),
      postV3ProfileFollowBrand: build.mutation<
        PostV3ProfileFollowBrandApiResponse,
        PostV3ProfileFollowBrandApiArg
      >({
        query: (queryArg) => ({
          url: `/v3/Profile/FollowBrand`,
          method: 'POST',
          body: queryArg.followBrand,
        }),
        invalidatesTags: ['Profile'],
      }),
      postV3ProfileUnFollow: build.mutation<
        PostV3ProfileUnFollowApiResponse,
        PostV3ProfileUnFollowApiArg
      >({
        query: (queryArg) => ({
          url: `/v3/Profile/UnFollow`,
          method: 'POST',
          body: queryArg.unFollowCompany,
        }),
        invalidatesTags: ['Profile'],
      }),
      postV3ProfileUnFollowByFollowId: build.mutation<
        PostV3ProfileUnFollowByFollowIdApiResponse,
        PostV3ProfileUnFollowByFollowIdApiArg
      >({
        query: (queryArg) => ({
          url: `/v3/Profile/UnFollowByFollowId`,
          method: 'POST',
          body: queryArg.unFollowByFollowId,
        }),
        invalidatesTags: ['Profile'],
      }),
      postV3ProfileGetFollowListByUserId: build.mutation<
        PostV3ProfileGetFollowListByUserIdApiResponse,
        PostV3ProfileGetFollowListByUserIdApiArg
      >({
        query: () => ({
          url: `/v3/Profile/GetFollowListByUserId`,
          method: 'POST',
        }),
        invalidatesTags: ['Profile'],
      }),
      getActiveSessions: build.query<
        GetActiveSessionsApiResponse,
        GetActiveSessionsApiArg
      >({
        query: () => ({ url: `/v3/Profile/GetActiveSessions` }),
        providesTags: ['Profile'],
      }),
      getActiveSessionsByUserInfo: build.mutation<
        GetActiveSessionsByUserInfoApiResponse,
        GetActiveSessionsByUserInfoApiArg
      >({
        query: (queryArg) => ({
          url: `/v3/Profile/GetActiveSessionsByUserInfo`,
          method: 'POST',
          body: queryArg.userSignInForm,
        }),
        invalidatesTags: ['Profile'],
      }),
      addToNewsLetter: build.mutation<
        AddToNewsLetterApiResponse,
        AddToNewsLetterApiArg
      >({
        query: (queryArg) => ({
          url: `/v3/Profile/AddToNewsLetter`,
          method: 'POST',
          body: queryArg.addToNewsLetter,
        }),
        invalidatesTags: ['Profile'],
      }),
      terminateSessions: build.mutation<
        TerminateSessionsApiResponse,
        TerminateSessionsApiArg
      >({
        query: (queryArg) => ({
          url: `/v3/Profile/TerminateSessions`,
          method: 'DELETE',
          body: queryArg.body,
        }),
        invalidatesTags: ['Profile'],
      }),
      terminateAllSessions: build.mutation<
        TerminateAllSessionsApiResponse,
        TerminateAllSessionsApiArg
      >({
        query: (queryArg) => ({
          url: `/v3/Profile/TerminateAllSessions`,
          method: 'DELETE',
          body: queryArg.body,
        }),
        invalidatesTags: ['Profile'],
      }),
      terminateUserSessionByUserInfo: build.mutation<
        TerminateUserSessionByUserInfoApiResponse,
        TerminateUserSessionByUserInfoApiArg
      >({
        query: (queryArg) => ({
          url: `/v3/Profile/TerminateUserSessionByUserInfo`,
          method: 'DELETE',
          body: queryArg.terminateSessionByUserInfo,
        }),
        invalidatesTags: ['Profile'],
      }),
      getSavedGraphList: build.query<
        GetSavedGraphListApiResponse,
        GetSavedGraphListApiArg
      >({
        query: (queryArg) => ({
          url: `/v3/Profile/GetSavedGraphList`,
          params: { entityId: queryArg.entityId },
        }),
        providesTags: ['Profile'],
      }),
      saveGraph: build.mutation<SaveGraphApiResponse, SaveGraphApiArg>({
        query: (queryArg) => ({
          url: `/v3/Profile/SaveGraph`,
          method: 'POST',
          body: queryArg.insertGraphHistoryDto,
        }),
        invalidatesTags: ['Profile'],
      }),
      deleteV3ProfileRemoveSavedGraph: build.mutation<
        DeleteV3ProfileRemoveSavedGraphApiResponse,
        DeleteV3ProfileRemoveSavedGraphApiArg
      >({
        query: (queryArg) => ({
          url: `/v3/Profile/RemoveSavedGraph`,
          method: 'DELETE',
          params: { id: queryArg.id },
        }),
        invalidatesTags: ['Profile'],
      }),
      getSavedSearchList: build.query<
        GetSavedSearchListApiResponse,
        GetSavedSearchListApiArg
      >({
        query: () => ({ url: `/v3/Profile/GetSavedSearchList` }),
        providesTags: ['Profile'],
      }),
      saveSearch: build.mutation<SaveSearchApiResponse, SaveSearchApiArg>({
        query: (queryArg) => ({
          url: `/v3/Profile/SaveSearch`,
          method: 'POST',
          body: queryArg.insertAdvancedSearchHistoryDto,
        }),
        invalidatesTags: ['Profile'],
      }),
      deleteV3ProfileRemoveSavedAdvancedSearch: build.mutation<
        DeleteV3ProfileRemoveSavedAdvancedSearchApiResponse,
        DeleteV3ProfileRemoveSavedAdvancedSearchApiArg
      >({
        query: (queryArg) => ({
          url: `/v3/Profile/RemoveSavedAdvancedSearch`,
          method: 'DELETE',
          params: { id: queryArg.id },
        }),
        invalidatesTags: ['Profile'],
      }),
      search: build.query<SearchApiResponse, SearchApiArg>({
        query: (queryArg) => ({
          url: `/v3/Search/Search`,
          params: {
            textSearch: queryArg.textSearch,
            type: queryArg['type'],
            page: queryArg.page,
            pageSize: queryArg.pageSize,
          },
        }),
        providesTags: ['Search'],
      }),
    }),
    overrideExisting: false,
  })
export { injectedRtkApi as enhancedApi }
export type SignInByOtpApiResponse = unknown
export type SignInByOtpApiArg = {
  signInByOtpCommand: SignInByOtpCommand
}
export type VerfySignInByOtpApiResponse = /** status 200 Success */ ApiResult
export type VerfySignInByOtpApiArg = {
  verfySignInByOtpCommand: VerfySignInByOtpCommand
}
export type SetUserPasswordApiResponse = unknown
export type SetUserPasswordApiArg = {
  setPasswordForm: SetPasswordForm
}
export type GetActiveSessionsByOtpApiResponse =
  /** status 200 Success */ ApiResult
export type GetActiveSessionsByOtpApiArg = {
  verfySignInByOtpCommand: VerfySignInByOtpCommand
}
export type TerminateUserSessionByOtpApiResponse =
  /** status 200 Success */ ApiResult
export type TerminateUserSessionByOtpApiArg = {
  terminateSessionByUserInfoWithOtp: TerminateSessionByUserInfoWithOtp
}
export type GetV3CompaniesQwertyuApiResponse = unknown
export type GetV3CompaniesQwertyuApiArg = {
  companyId?: number
}
export type GetGraphApiResponse = /** status 200 Success */ CompanyGraphDto
export type GetGraphApiArg = {
  /** شناسه شرکت */
  companyId?: number
}
export type GetSummaryApiResponse =
  /** status 200 Success */ GetCompanySummaryQueryResult
export type GetSummaryApiArg = {
  /** شناسه شرکت */
  companyId?: number
  title?: string
}
export type GetCompanyPeopleApiResponse =
  /** status 200 Success */ GetCompanyPeopleQueryResult
export type GetCompanyPeopleApiArg = {
  /** شناسه شرکت */
  companyId?: number
}
export type GetCertificatesAndTrademarksApiResponse =
  /** status 200 Success */ GetCompanyCertificateAndTrademarksQueryResult
export type GetCertificatesAndTrademarksApiArg = {
  /** شناسه شرکت */
  companyId?: number
}
export type GetAllNewsApiResponse =
  /** status 200 Success */ GetCompanyNewsQueryResult
export type GetAllNewsApiArg = {
  /** شناسه شرکت */
  companyId?: number
}
export type CreateMessageApiResponse = unknown
export type CreateMessageApiArg = {
  createMessageCommandDto: CreateMessageCommandDto
}
export type GetDetailsApiResponse =
  /** status 200 Success */ GetDetailsQueryResult
export type GetDetailsApiArg = {
  /** شناسه شرکت */
  companyId?: number
  title?: string
}
export type GetFinancialApiResponse =
  /** status 200 Success */ GetCompanyFinancialQueryResult
export type GetFinancialApiArg = {
  /** شناسه شرکت */
  companyId?: number
}
export type GetProductsApiResponse =
  /** status 200 Success */ GetProductAndServicesQueryResult
export type GetProductsApiArg = {
  /** شناسه شرکت */
  companyId?: number
}
export type GetTimelineApiResponse =
  /** status 200 Success */ GetCompanyTimelineQueryResult
export type GetTimelineApiArg = {
  /** شناسه شرکت */
  companyId?: number
}
export type GetCommentsApiResponse =
  /** status 200 Success */ GetCommentsCompaniesQueryResult
export type GetCommentsApiArg = {
  /** شناسه شرکت */
  companyId?: number
}
export type GetV3CompaniesGetContactApiResponse =
  /** status 200 Success */ GetCompanyContactsQueryResult
export type GetV3CompaniesGetContactApiArg = {
  /** شناسه شرکت */
  companyId?: number
  /** نوع راه ارتباطی */
  contactType?: CompanyContactType
}
export type GetTradesApiResponse =
  /** status 200 Success */ GetCompanyTradesQueryResult
export type GetTradesApiArg = {
  /** شناسه شرکت */
  companyId?: number
}
export type GetSignatureHoldersApiResponse =
  /** status 200 Success */ GetCompanySignatureHoldersQueryResult
export type GetSignatureHoldersApiArg = {
  /** شناسه شرکت */
  companyId?: number
}
export type GetV3CompaniesGetExcelFileApiResponse = unknown
export type GetV3CompaniesGetExcelFileApiArg = {
  /** شناسه شرکت */
  companyId?: number
}
export type SaveCommentApiResponse = unknown
export type SaveCommentApiArg = {
  submitCommentForm: SubmitCommentForm
}
export type GetV3CompaniesDeleteCompanyCacheApiResponse = unknown
export type GetV3CompaniesDeleteCompanyCacheApiArg = {
  companyId?: number
}
export type GetV3CompaniesDeleteCompaniesCacheApiResponse = unknown
export type GetV3CompaniesDeleteCompaniesCacheApiArg = {
  body: number[]
}
export type CreateListApiResponse =
  /** status 200 Success */ CreateFavoriteListCommandResult
export type CreateListApiArg = {
  createFavoriteListsDto: CreateFavoriteListsDto
}
export type GetMyListsApiResponse =
  /** status 200 Success */ GetAllFavoriteListByUserIdQueryResult
export type GetMyListsApiArg = {
  entityId?: number
}
export type AddEntityToListApiResponse =
  /** status 200 Success */ AddEntityToFavoriteListCommandResult
export type AddEntityToListApiArg = {
  addEntityToFavoriteListCommandDto: AddEntityToFavoriteListCommandDto
}
export type RemoveEntitiesFromListApiResponse =
  /** status 200 Success */ ApiResult
export type RemoveEntitiesFromListApiArg = {
  removeEntitiesFromFavoriteListCommandDto: RemoveEntitiesFromFavoriteListCommandDto
}
export type GetV3PersonGetExcelFileApiResponse = unknown
export type GetV3PersonGetExcelFileApiArg = {
  personId?: number
}
export type GetV3PersonGetSummaryApiResponse =
  /** status 200 Success */ GetPersonSummaryQueryResult
export type GetV3PersonGetSummaryApiArg = {
  personHId?: string
}
export type SubmitPersonSuggestionApiResponse = unknown
export type SubmitPersonSuggestionApiArg = {
  personSuggestion: PersonSuggestion
}
export type PostV3PricingPayApiResponse =
  /** status 200 Success */ PayPackageWithNumberOfUserCommandResult
export type PostV3PricingPayApiArg = {
  package?: number
  numberOfUser?: number
}
export type GetV3PricingApiResponse =
  /** status 200 Success */ GetUserPricingWithNumberOfUserQueryResult[]
export type GetV3PricingApiArg = void
export type ReceiptApiResponse = /** status 200 Success */ Payment
export type ReceiptApiArg = {
  paymentId?: number
}
export type GotoIpgApiResponse = /** status 200 Success */ SepResponseTokenDto
export type GotoIpgApiArg = {
  paymentId?: number
}
export type ApplyDiscountApiResponse =
  /** status 200 Success */ PaymentCalculatedDiscountDto
export type ApplyDiscountApiArg = {
  code?: string
  paymentId?: number
}
export type PostV3ProfileFollowApiResponse = /** status 200 Success */ ApiResult
export type PostV3ProfileFollowApiArg = {
  followCompany: FollowCompany
}
export type SetActivityApiResponse = /** status 200 Success */ ApiResult
export type SetActivityApiArg = {
  setActivityDto: SetActivityDto
}
export type SetInformationApiResponse = /** status 200 Success */ ApiResult
export type SetInformationApiArg = {
  setInformationDto: SetInformationDto
}
export type SetSocialNetworkApiResponse = /** status 200 Success */ ApiResult
export type SetSocialNetworkApiArg = {
  setSocialNetworkDto: SetSocialNetworkDto
}
export type SetPasswordApiResponse = /** status 200 Success */ ApiResult
export type SetPasswordApiArg = {
  setPasswordDto: SetPasswordDto
}
export type GetUserProfileByUserIdApiResponse =
  /** status 200 Success */ GetUserProfileByUserIdQueryResult
export type GetUserProfileByUserIdApiArg = void
export type PostV3ProfileFollowNationalCodeApiResponse =
  /** status 200 Success */ ApiResult
export type PostV3ProfileFollowNationalCodeApiArg = {
  followNationalCode: FollowNationalCode
}
export type PostV3ProfileFollowPostalCodeApiResponse =
  /** status 200 Success */ ApiResult
export type PostV3ProfileFollowPostalCodeApiArg = {
  followPostalCode: FollowPostalCode
}
export type PostV3ProfileFollowBrandApiResponse =
  /** status 200 Success */ ApiResult
export type PostV3ProfileFollowBrandApiArg = {
  followBrand: FollowBrand
}
export type PostV3ProfileUnFollowApiResponse =
  /** status 200 Success */ ApiResult
export type PostV3ProfileUnFollowApiArg = {
  unFollowCompany: UnFollowCompany
}
export type PostV3ProfileUnFollowByFollowIdApiResponse =
  /** status 200 Success */ ApiResult
export type PostV3ProfileUnFollowByFollowIdApiArg = {
  unFollowByFollowId: UnFollowByFollowId
}
export type PostV3ProfileGetFollowListByUserIdApiResponse =
  /** status 200 Success */ GetFollowListByUserIdQueryResultApiResult
export type PostV3ProfileGetFollowListByUserIdApiArg = void
export type GetActiveSessionsApiResponse =
  /** status 200 Success */ GetActiveSessionsQueryResultApiResult
export type GetActiveSessionsApiArg = void
export type GetActiveSessionsByUserInfoApiResponse =
  /** status 200 Success */ ApiResult
export type GetActiveSessionsByUserInfoApiArg = {
  userSignInForm: UserSignInForm
}
export type AddToNewsLetterApiResponse = /** status 200 Success */ ApiResult
export type AddToNewsLetterApiArg = {
  addToNewsLetter: AddToNewsLetter
}
export type TerminateSessionsApiResponse =
  /** status 200 Success */ TerminateSessionsCommandResultApiResult
export type TerminateSessionsApiArg = {
  body: string[]
}
export type TerminateAllSessionsApiResponse = unknown
export type TerminateAllSessionsApiArg = {
  body: string[]
}
export type TerminateUserSessionByUserInfoApiResponse =
  /** status 200 Success */ ApiResult
export type TerminateUserSessionByUserInfoApiArg = {
  terminateSessionByUserInfo: TerminateSessionByUserInfo
}
export type GetSavedGraphListApiResponse =
  /** status 200 Success */ GetSavedGraphListQueryResultApiResult
export type GetSavedGraphListApiArg = {
  entityId?: number
}
export type SaveGraphApiResponse =
  /** status 200 Success */ SaveGraphCommandResultApiResult
export type SaveGraphApiArg = {
  insertGraphHistoryDto: InsertGraphHistoryDto
}
export type DeleteV3ProfileRemoveSavedGraphApiResponse =
  /** status 200 Success */ RemoveSavedGraphCommandResultApiResult
export type DeleteV3ProfileRemoveSavedGraphApiArg = {
  id?: number
}
export type GetSavedSearchListApiResponse =
  /** status 200 Success */ GetSavedSearchListQueryResultApiResult
export type GetSavedSearchListApiArg = void
export type SaveSearchApiResponse =
  /** status 200 Success */ SaveSearchCommandResultApiResult
export type SaveSearchApiArg = {
  insertAdvancedSearchHistoryDto: InsertAdvancedSearchHistoryDto
}
export type DeleteV3ProfileRemoveSavedAdvancedSearchApiResponse =
  /** status 200 Success */ RemoveSavedAdvancedSearchCommandResultApiResult
export type DeleteV3ProfileRemoveSavedAdvancedSearchApiArg = {
  id?: number
}
export type SearchApiResponse =
  /** status 200 Success */ ElasticSearchAllModelQueryDto
export type SearchApiArg = {
  textSearch?: string
  type?: Type
  page?: number
  pageSize?: number
}
export type SignInByOtpCommand = {
  userName?: string | null
}
export type ApiResultStatusCode =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
export type ApiResult = {
  isSuccess?: boolean
  statusCode?: ApiResultStatusCode
  message?: string | null
}
export type VerfySignInByOtpCommand = {
  userName?: string | null
  code?: string | null
}
export type SetPasswordForm = {
  userName?: string | null
  password?: string | null
}
export type TerminateSessionByUserInfoWithOtp = {
  userName?: string | null
  code?: string | null
  sessionIds?: string[] | null
}
export type Summary = {
  registrationDate?: string | null
  status?: string | null
  registrationTypeTitle?: string | null
  lastCompanyNewsDate?: string | null
  registrationNo?: string | null
  taxNumber?: string | null
}
export type SocialMedia = {
  linkTitle?: string | null
  linkUrl?: string | null
  icon?: string | null
}
export type Communication = {
  lat?: number | null
  lng?: number | null
  address?: string | null
  postalCode?: string | null
  tel?: string | null
  fax?: string | null
  mobile?: string | null
  webSite?: string | null
  email?: string | null
  socialMedias?: SocialMedia[] | null
}
export type LatestNews = {
  id?: number
  title?: string | null
  newspaperDate?: string | null
  newsLetterDate?: string | null
  newsPaperCity?: string | null
}
export type PersonSummary = {
  id?: number
  title?: string | null
  pictureUrl?: string | null
  positionWorth?: number
}
export type ParentCompany = {
  id?: number
  title?: string | null
  pictureUrl?: string | null
}
export type ChildCompany = {
  id?: number
  title?: string | null
  pictureUrl?: string | null
}
export type PeopleSummary = {
  peopleCount?: number
  parentCompaniesCount?: number
  childCompaniesCount?: number
  ceo?: PersonSummary
  people?: PersonSummary[] | null
  parentCompanies?: ParentCompany[] | null
  childCompanies?: ChildCompany[] | null
}
export type FinancialSummary = {
  capital?: number
  centralBankCurrency?: number
  sumOfSetadPurchase?: number | null
}
export type ProductInfoSummary = {
  id?: number
  title?: string | null
  count?: number
}
export type ProductSummary = {
  totalProductsCount?: number
  productCategorySummary?: ProductInfoSummary[] | null
}
export type CertificateSummary = {
  title?: string | null
  iconUrl?: string | null
}
export type CertificateAndOwnerShip = {
  trademarkCount?: number
  companyCertificates?: CertificateSummary[] | null
}
export type CompanySummary = {
  id?: number
  title?: string | null
  description?: string | null
  pictureUrl?: string | null
  dofollow?: boolean | null
  taxCredit?: boolean
  summary?: Summary
  communications?: Communication
  latestNews?: LatestNews[] | null
  peopleSummary?: PeopleSummary
  financialSummary?: FinancialSummary
  productsSummary?: ProductSummary
  companyCertificateAndOwnershipSummary?: CertificateAndOwnerShip
  confirmAboutCompany?: boolean
}
export type CompanyStockEntity = {
  id?: number
  companyId?: number | null
  shareHolderTitle?: string | null
  stock?: string | null
  share?: number
  closingPrice?: number
  stockShareQuantity?: number
}
export type CompanyShareHolder = {
  companyId?: number
  title?: string | null
  stock?: string | null
  quantity?: number
  share?: number
  value?: number | null
}
export type OtherPosition = {
  positionTitle?: string | null
  firstRole?: string | null
  secondRole?: string | null
  startDate?: string | null
  endDate?: string | null
  byNewsId?: number
  representingTitle?: string | null
  representingId?: number | null
}
export type CompanyPersonPosition = {
  id?: number
  personId?: number
  personPicture?: string | null
  pictureUrl?: string | null
  personTitle?: string | null
  positionId?: number
  title?: string | null
  firstRole?: string | null
  secondRole?: string | null
  companyPersonId?: number
  dateForSort?: string | null
  startDate?: string
  endDate?: string | null
  repId?: number
  representingTitle?: string | null
  representingPicture?: string | null
  byNewsId?: number
  otherPositions?: OtherPosition[] | null
}
export type OtherRepresentive = {
  byNewsId?: number
  personId?: number
  personTitle?: string | null
  startDate?: string
  endDate?: string | null
}
export type ParentCompanyInfo = {
  others?: OtherRepresentive[] | null
  companyId?: number
  companyTitle?: string | null
  personId?: number
  byNewsId?: number
  personTitle?: string | null
  isParent?: boolean
  startDate?: string
  endDate?: string | null
  personPictureUrl?: string | null
  pictureUrl?: string | null
}
export type CompanyPeople = {
  companyId?: number
  stocks?: CompanyStockEntity[] | null
  companyStockShareHolders?: CompanyShareHolder[] | null
  companyCEOs?: CompanyPersonPosition[] | null
  companyDirectors?: CompanyPersonPosition[] | null
  companyInspectors?: CompanyPersonPosition[] | null
  parentCompanies?: ParentCompanyInfo[] | null
  childCompanies?: ParentCompanyInfo[] | null
}
export type CompanyGraphDto = {
  companySummary?: CompanySummary
  companyPeople?: CompanyPeople
}
export type CompanyAds = {
  image?: string | null
  alt?: string | null
  link?: string | null
  position?: string | null
}
export type GetCompanySummaryQueryResult = {
  isFollowing?: boolean
  signatureHolder?: string | null
  companySummary?: CompanySummary
  advertisements?: CompanyAds[] | null
  isDirect?: boolean
}
export type GetCompanyPeopleQueryResult = {
  companyPeople?: CompanyPeople
}
export type CompanyCertificate = {
  category?: string | null
  issueDate?: string | null
  expireDate?: string | null
  webSite?: string | null
  issuserDivisionTitle?: string | null
  certificateIssuerTitle?: string | null
  certificateTypeTitle?: string | null
  certificateTypeIcon?: string | null
}
export type CompanyTrademark = {
  id?: number
  picture?: string | null
  titleEn?: string | null
  titleFa?: string | null
  registrationDate?: string
  pictureUrl?: string | null
}
export type GetCompanyCertificateAndTrademarksQueryResult = {
  certificates?: CompanyCertificate[] | null
  trademarks?: CompanyTrademark[] | null
}
export type NewsType = 1 | 2
export type CompanyNews = {
  id?: number
  title?: string | null
  description?: string | null
  newsLetterDate?: string | null
  newsPaperDate?: string | null
  type?: NewsType
}
export type GetCompanyNewsQueryResult = {
  news?: CompanyNews[] | null
  signatureHolder?: string | null
}
export type MessageType = 1 | 2 | 3
export type CreateMessageCommandDto = {
  companyId?: number
  productId?: number | null
  fullName?: string | null
  phoneNumber?: string | null
  text?: string | null
  messageType?: MessageType
}
export type CompanyTimelines = {
  id?: number
  title?: string | null
  newsletterDate?: string | null
  json?: string | null
}
export type CompanySamtCapacity = {
  samtProductId?: number
  samtProductName?: string | null
  samtCategoryName?: string | null
  capacity?: number
  unit?: string | null
}
export type CompanySamtInfo = {
  samtInfoId?: number
  licenseDate?: string | null
  factoryAddress?: string | null
  factoryTel?: string | null
  personel?: number
  samtCapacities?: CompanySamtCapacity[] | null
}
export type CompanyProduct = {
  id?: number
  titleFa?: string | null
}
export type CompanyProductCategory = {
  id?: number
  title?: string | null
  products?: CompanyProduct[] | null
}
export type CompanyTrustedWebSite = {
  id?: number
  title?: string | null
  logo?: string | null
  supportTel?: string | null
  url?: string | null
}
export type CompanyProductAndService = {
  companyId?: number
  samtInfoCount?: number
  trustedWebSitesCount?: number
  totalProductsCount?: number
  importsCount?: number
  samtInfoList?: CompanySamtInfo[] | null
  productCategories?: CompanyProductCategory[] | null
  trustedWebSites?: CompanyTrustedWebSite[] | null
}
export type GetProductAndServicesQueryResult = {
  companyProductAndService?: CompanyProductAndService
}
export type CompanyCapitalChange = {
  id?: number
  capitalTo?: number | null
  newspaperDate?: string | null
}
export type CompanyContract = {
  id?: number
  companyId?: number
  price?: number | null
  title?: string | null
  executor?: string | null
  organizations?: string | null
  link?: string | null
  contractType?: string | null
  json?: string | null
  startDate?: string | null
  endDate?: string | null
}
export type CompanyCentralBankCurrency = {
  id?: number
  orderRegistrationNumber?: number
  amount?: number
  currency?: string | null
  rate?: number
  inEuro?: number
  entityId?: number | null
  governmentalChar?: boolean
}
export type CompanyFinancial = {
  companyId?: number
  sumOfCentralBankCurrencies?: number
  capitalChanges?: CompanyCapitalChange[] | null
  contracts?: CompanyContract[] | null
  centralBankCurrencies?: CompanyCentralBankCurrency[] | null
}
export type Imports = {
  id?: number
  v?: number
  hs?: string | null
  titleFa?: string | null
}
export type CompanyHeaderDto = {
  logo?: string | null
  companyBrand?: string | null
  defineInHeader?: string | null
  activityCategories?: string[] | null
}
export type CompanySummaryDto = {
  summary?: string | null
  personalCount?: string | null
  activityType?: string[] | null
}
export type ImageType = 1 | 2
export type CompanyImageDefineDto = {
  picture?: string | null
  videoLink?: string | null
  imageType?: ImageType
}
export type CompanyBaseInfoDto = {
  activity?: string | null
  postalCodeStore?: string | null
  postalCodeExhibition?: string | null
}
export type AboutCompanyDto = {
  companyId?: number
  companyHeader?: CompanyHeaderDto
  companySummary?: CompanySummaryDto
  companyImageDefine?: CompanyImageDefineDto
  companyBaseInfo?: CompanyBaseInfoDto
  registrationDate?: string
}
export type GetAllCompanyImageDto = {
  id?: number
  title?: string | null
  imageType?: number
  videoLink?: string | null
  picture?: string | null
}
export type GetAllCompanyCertificateDto = {
  id?: number
  companyId?: number
  title?: string | null
  picture?: string | null
  registrationDate?: string
  expireDate?: string | null
}
export type GetAllCompanyCommendationDto = {
  id?: number
  companyId?: number
  title?: string | null
  description?: string | null
  commendationType?: string | null
  picture?: string | null
}
export type CommunicationWaysDto = {
  id?: number
  title?: string | null
  postalCode?: string | null
  tel?: string | null
  phoneNumber?: string | null
  fax?: string | null
  webSite?: string | null
  email?: string | null
  address?: string | null
}
export type GetCompanyInfoDetailByCompanyIdQuery = {
  aboutCompany?: AboutCompanyDto
  companyProductionLineImage?: GetAllCompanyImageDto[] | null
  companyWorkplaceImage?: GetAllCompanyImageDto[] | null
  companyCertificate?: GetAllCompanyCertificateDto[] | null
  companyCommendation?: GetAllCompanyCommendationDto[] | null
  communicationWays?: CommunicationWaysDto[] | null
}
export type DataConsistencyType =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
export type FavoriteListDto = {
  title?: string | null
  userId?: number
  id?: number
  views?: number
  subtitle?: string | null
  description?: string | null
  detailsCache?: string | null
  dataConsistencyType?: DataConsistencyType
  insertDate?: string
  cacheDate?: string
  isPublic?: boolean
}
export type GetDetailsQueryResult = {
  companyNews?: CompanyNews[] | null
  timeline?: CompanyTimelines[] | null
  products?: GetProductAndServicesQueryResult
  financial?: CompanyFinancial
  trades?: Imports[] | null
  companyPeople?: CompanyPeople
  certificatesAndTrademarks?: GetCompanyCertificateAndTrademarksQueryResult
  summary?: GetCompanySummaryQueryResult
  companyInfoDetail?: GetCompanyInfoDetailByCompanyIdQuery
  lists?: FavoriteListDto[] | null
}
export type GetCompanyFinancialQueryResult = {
  financial?: CompanyFinancial
}
export type GetCompanyTimelineQueryResult = {
  timeline?: CompanyTimelines[] | null
}
export type ComentsCompanies = {
  id?: number
  author?: string | null
  comment?: string | null
  insertDate?: string
}
export type GetCommentsCompaniesQueryResult = {
  comentsCompanies?: ComentsCompanies[] | null
}
export type GetCompanyContactsQueryResult = {
  contactValue?: string | null
}
export type CompanyContactType = 1 | 2 | 3 | 4
export type GetCompanyTradesQueryResult = {
  imports?: Imports[] | null
}
export type GetCompanySignatureHoldersQueryResult = {
  description?: string | null
}
export type SubmitCommentForm = {
  commentText?: string | null
  fullName?: string | null
  entityId?: number
}
export type CreateFavoriteListCommandResult = {
  followOperationSucceed?: boolean
  message?: string | null
}
export type CreateFavoriteListsDto = {
  title?: string | null
  description?: string | null
  entityId?: number
  dataConsistencyType?: DataConsistencyType
}
export type IDomainEvent = object
export type FavoriteListEntities = {
  id?: number
  events?: IDomainEvent[] | null
  entityId?: number
  favoriteListId?: number
  priority?: number
}
export type FavoriteList = {
  id?: number
  events?: IDomainEvent[] | null
  title?: string | null
  userId?: number
  views?: number
  subtitle?: string | null
  description?: string | null
  detailsCache?: string | null
  dataConsistencyType?: DataConsistencyType
  insertDate?: string
  cacheDate?: string
  isPublic?: boolean
  favoriteListEntities?: FavoriteListEntities[] | null
  existsInThis?: boolean
}
export type GetAllFavoriteListByUserIdQueryResult = {
  favoriteLists?: FavoriteList[] | null
}
export type AddEntityToFavoriteListCommandResult = {
  followOperationSucceed?: boolean
  message?: string | null
}
export type AddEntityToFavoriteListCommandDto = {
  favoriteListId?: number
  dataConsistencyType?: DataConsistencyType
  entityId?: number
}
export type RemoveEntitiesFromFavoriteListCommandDto = {
  favoriteListId?: number
  entityId?: number[] | null
}
export type PersonSocialMedia = {
  linkTitle?: string | null
  linkUrl?: string | null
  icon?: string | null
}
export type PersonCommunication = {
  tel?: string | null
  mobile?: string | null
  webSite?: string | null
  email?: string | null
  socialMedia?: PersonSocialMedia[] | null
}
export type PersonBiography = {
  nationalId?: string | null
  description?: string | null
  city?: string | null
  gender?: boolean | null
  communication?: PersonCommunication
}
export type PersonCompanySummary = {
  companyId?: number
  companyTitle?: string | null
  companyPicture?: string | null
  positionTitle?: string | null
  firstRole?: string | null
  secondRole?: string | null
  representingTitle?: string | null
  representingId?: number | null
  startDate?: string | null
  endDate?: string | null
  otherPositions?: OtherPosition[] | null
  byNewsId?: number
}
export type PersonRelatedCompanies = {
  companiesCount?: number
  ceOs?: PersonCompanySummary[] | null
  directors?: PersonCompanySummary[] | null
  inspectorsAndOthers?: PersonCompanySummary[] | null
}
export type PersonNews = {
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
export type Person = {
  id?: number
  title?: string | null
  pictureUrl?: string | null
  isVerified?: boolean
  dofollow?: boolean | null
  biography?: PersonBiography
  relatedCompanies?: PersonRelatedCompanies
  news?: PersonNews[] | null
  isValidNationalCode?: boolean | null
}
export type GetPersonSummaryQueryResult = {
  person?: Person
  isFollowed?: boolean
  redirect?: boolean
  advertisements?: CompanyAds[] | null
}
export type PersonSuggestion = {
  id?: number
  events?: IDomainEvent[] | null
  personId?: number
  title?: string | null
  gender?: boolean | null
  tagline?: string | null
  picture?: string | null
  address?: string | null
  postalCode?: string | null
  lat?: number | null
  lng?: number | null
  tel?: string | null
  fax?: string | null
  mobile?: string | null
  email?: string | null
  description?: string | null
  note?: string | null
  statusID?: number
  suggestionCheckDate?: string | null
  suggestingUser?: number | null
  adminChecker?: number | null
}
export type PricingDto = {
  package?: number | null
  numberOfUser?: number | null
  upgrade?: boolean
  validUntil?: string
  originalPrice?: number
  discountedPrice?: number
}
export type PayPackageWithNumberOfUserCommandResult = {
  paymentId?: number
  pricing?: PricingDto
  amount?: number
}
export type PriceNumberOfUser = {
  price?: number
  originalPrice?: number
  numberOfUser?: number
}
export type GetUserPricingWithNumberOfUserQueryResult = {
  id?: number
  title?: string | null
  pricing?: PriceNumberOfUser[] | null
  isEnabled?: boolean
  isUpgrade?: boolean
  isExtend?: boolean
  validUntil?: string
}
export type Discount = {
  id?: number
  events?: IDomainEvent[] | null
  campaignTitle?: string | null
  fromDate?: string
  toDate?: string
  discountPercent?: number | null
  discountAmount?: number | null
  code?: string | null
  userId?: number | null
  maxUse?: number
  used?: number
  minPrice?: number
  maxPrice?: number
  payment?: Payment[] | null
}
export type PhysicalInvoiceRequest = {
  id?: number
  events?: IDomainEvent[] | null
  paymentId?: number
  userId?: number
  date?: string
  isSent?: boolean
  payment?: Payment
}
export type RealPerson = {
  id?: number
  events?: IDomainEvent[] | null
  userId?: number
  fullName?: string | null
  address?: string | null
  province?: string | null
  city?: string | null
  mobile?: string | null
  postalCode?: string | null
  nationalCode?: string | null
  insertDate?: string
}
export type LegalPerson = {
  id?: number
  events?: IDomainEvent[] | null
  userId?: number
  companyTitle?: string | null
  companyId?: number
  registrationNo?: string | null
  factorAddress?: string | null
  economicCode?: string | null
  phoneNumber?: string | null
  mobileNumber?: string | null
  province?: string | null
  city?: string | null
  postalCode?: string | null
  insertDate?: string
}
export type Payment = {
  id?: number
  events?: IDomainEvent[] | null
  userId?: number
  originalAmount?: number | null
  amount?: number
  token?: string | null
  response?: string | null
  reason?: string | null
  parameter?: string | null
  cardNumber?: string | null
  paid?: boolean
  insertDate?: string
  discountId?: number | null
  amountBeforeDiscount?: number | null
  factorId?: number | null
  isForExtend?: boolean
  realPersonId?: number | null
  legalPersonId?: number | null
  discount?: Discount
  physicalInvoiceRequest?: PhysicalInvoiceRequest
  realPerson?: RealPerson
  legalPerson?: LegalPerson
}
export type SepResponseTokenDto = {
  message?: string | null
  token?: string | null
}
export type PaymentCalculatedDiscountDto = {
  message?: string | null
  reason?: string | null
  amountBeforeDiscount?: number
  amount?: number
  amountPay?: number
  discountPercent?: number | null
  discountAmount?: number | null
  tax?: number | null
}
export type FollowCompany = {
  companyId?: number
}
export type SetActivityDto = {
  currentCompany?: string | null
  categoryWork?: string | null
  identificationMethod?: string | null
  countCompanyPersonnel?: number | null
}
export type Gender = 1 | 2
export type SetInformationDto = {
  education?: string | null
  gender?: Gender
  brithDate?: string | null
}
export type SetSocialNetworkDto = {
  linkdein?: string | null
  twitter?: string | null
  instagram?: string | null
}
export type SetPasswordDto = {
  password?: string | null
}
export type Profile = {
  id?: number
  events?: IDomainEvent[] | null
  userId?: number
  brithDate?: string | null
  gender?: Gender
  education?: string | null
  currentCompany?: string | null
  categoryWork?: string | null
  identificationMethod?: string | null
  countCompanyPersonnel?: number | null
  instagram?: string | null
  linkdein?: string | null
  twitter?: string | null
  password?: string | null
}
export type GetUserProfileByUserIdQueryResult = {
  data?: Profile
}
export type FollowNationalCode = {
  nationalCode?: number
}
export type FollowPostalCode = {
  postalCode?: number
}
export type FollowBrand = {
  entityText?: string | null
}
export type UnFollowCompany = {
  companyId?: number
}
export type UnFollowByFollowId = {
  followId?: number
}
export type Follow = {
  id?: number
  events?: IDomainEvent[] | null
  userId?: number
  entityId?: number
  insertDate?: string
  entityTypeId?: number
  entityText?: string | null
}
export type GetFollowListByUserIdQueryResult = {
  followList?: Follow[] | null
}
export type GetFollowListByUserIdQueryResultApiResult = {
  isSuccess?: boolean
  statusCode?: ApiResultStatusCode
  message?: string | null
  data?: GetFollowListByUserIdQueryResult
}
export type SessionDevice = {
  family?: string | null
  model?: string | null
  brand?: string | null
  isSpider?: boolean
}
export type SessionOperatingSystem = {
  family?: string | null
  major?: string | null
  minor?: string | null
  patch?: string | null
  patchMinor?: string | null
}
export type SessionInfoSummary = {
  id?: string | null
  userAgent?: string | null
  ip?: string | null
  loginDate?: string
  device?: SessionDevice
  operatingSystem?: SessionOperatingSystem
  isActive?: boolean
}
export type GetActiveSessionsQueryResult = {
  currentSession?: SessionInfoSummary
  otherSessions?: SessionInfoSummary[] | null
}
export type GetActiveSessionsQueryResultApiResult = {
  isSuccess?: boolean
  statusCode?: ApiResultStatusCode
  message?: string | null
  data?: GetActiveSessionsQueryResult
}
export type UserSignInForm = {
  userName: string
  password: string
}
export type AddToNewsLetter = {
  email?: string | null
}
export type TerminateSessionsCommandResult = {
  sessionsTerminated?: boolean
}
export type TerminateSessionsCommandResultApiResult = {
  isSuccess?: boolean
  statusCode?: ApiResultStatusCode
  message?: string | null
  data?: TerminateSessionsCommandResult
}
export type TerminateSessionByUserInfo = {
  userName?: string | null
  password?: string | null
  sessionIds?: string[] | null
}
export type UserSavedGraphSummary = {
  id?: number
  name?: string | null
  json?: string | null
  category?: string | null
  submitDate?: string
}
export type GetSavedGraphListQueryResult = {
  userSavedGraphSummary?: UserSavedGraphSummary[] | null
}
export type GetSavedGraphListQueryResultApiResult = {
  isSuccess?: boolean
  statusCode?: ApiResultStatusCode
  message?: string | null
  data?: GetSavedGraphListQueryResult
}
export type SaveGraphCommandResult = {
  isSuccedded?: boolean
  message?: string | null
}
export type SaveGraphCommandResultApiResult = {
  isSuccess?: boolean
  statusCode?: ApiResultStatusCode
  message?: string | null
  data?: SaveGraphCommandResult
}
export type InsertGraphHistoryDto = {
  name?: string | null
  json?: string | null
  entityId?: number
  category?: string | null
}
export type RemoveSavedGraphCommandResult = {
  message?: string | null
  isSuccedded?: boolean
}
export type RemoveSavedGraphCommandResultApiResult = {
  isSuccess?: boolean
  statusCode?: ApiResultStatusCode
  message?: string | null
  data?: RemoveSavedGraphCommandResult
}
export type UserSavedSearchSummary = {
  id?: number
  name?: string | null
  url?: string | null
  filters?: string[] | null
  category?: string | null
  submitDate?: string
}
export type GetSavedSearchListQueryResult = {
  userSavedSearchSummary?: UserSavedSearchSummary[] | null
}
export type GetSavedSearchListQueryResultApiResult = {
  isSuccess?: boolean
  statusCode?: ApiResultStatusCode
  message?: string | null
  data?: GetSavedSearchListQueryResult
}
export type SaveSearchCommandResult = {
  isSuccedded?: boolean
  message?: string | null
}
export type SaveSearchCommandResultApiResult = {
  isSuccess?: boolean
  statusCode?: ApiResultStatusCode
  message?: string | null
  data?: SaveSearchCommandResult
}
export type InsertAdvancedSearchHistoryDto = {
  searchHistoryName?: string | null
  url?: string | null
}
export type RemoveSavedAdvancedSearchCommandResult = {
  message?: string | null
  isSuccedded?: boolean
}
export type RemoveSavedAdvancedSearchCommandResultApiResult = {
  isSuccess?: boolean
  statusCode?: ApiResultStatusCode
  message?: string | null
  data?: RemoveSavedAdvancedSearchCommandResult
}
export type GeoLocation = {
  lat?: number
  lon?: number
}
export type Type = 1 | 2 | 3 | 4 | 6 | 15
export type ElasticSearchAllModel = {
  entityId?: number
  id?: string | null
  titleFa?: string | null
  titleEn?: string | null
  keywords?: string | null
  similarity?: string | null
  subtitle?: string | null
  pictureUrl?: string | null
  registrationDate?: string | null
  date?: string | null
  ceo?: string | null
  ceoLink?: string | null
  description?: string | null
  tagline?: string | null
  placeOfIssue?: string | null
  owner?: string | null
  ownerLink?: string | null
  views?: number
  companyCount?: number
  link?: string | null
  favoriteListEntityCount?: number
  location?: GeoLocation
  entityType?: Type
}
export type ElasticSearchAllModelTuple = {
  data?: ElasticSearchAllModel[] | null
  count?: number
}
export type ElasticSearchAllModelQueryDto = {
  companies?: ElasticSearchAllModelTuple
  people?: ElasticSearchAllModelTuple
  news?: ElasticSearchAllModelTuple
  iPs?: ElasticSearchAllModelTuple
  products?: ElasticSearchAllModelTuple
  lists?: ElasticSearchAllModelTuple
}
export const {
  useSignInByOtpMutation,
  useVerfySignInByOtpMutation,
  useSetUserPasswordMutation,
  useGetActiveSessionsByOtpMutation,
  useTerminateUserSessionByOtpMutation,
  useGetV3CompaniesQwertyuQuery,
  useLazyGetV3CompaniesQwertyuQuery,
  useGetGraphQuery,
  useLazyGetGraphQuery,
  useGetSummaryQuery,
  useLazyGetSummaryQuery,
  useGetCompanyPeopleQuery,
  useLazyGetCompanyPeopleQuery,
  useGetCertificatesAndTrademarksQuery,
  useLazyGetCertificatesAndTrademarksQuery,
  useGetAllNewsQuery,
  useLazyGetAllNewsQuery,
  useCreateMessageMutation,
  useGetDetailsQuery,
  useLazyGetDetailsQuery,
  useGetFinancialQuery,
  useLazyGetFinancialQuery,
  useGetProductsQuery,
  useLazyGetProductsQuery,
  useGetTimelineQuery,
  useLazyGetTimelineQuery,
  useGetCommentsQuery,
  useLazyGetCommentsQuery,
  useGetV3CompaniesGetContactQuery,
  useLazyGetV3CompaniesGetContactQuery,
  useGetTradesQuery,
  useLazyGetTradesQuery,
  useGetSignatureHoldersQuery,
  useLazyGetSignatureHoldersQuery,
  useGetV3CompaniesGetExcelFileQuery,
  useLazyGetV3CompaniesGetExcelFileQuery,
  useSaveCommentMutation,
  useGetV3CompaniesDeleteCompanyCacheQuery,
  useLazyGetV3CompaniesDeleteCompanyCacheQuery,
  useGetV3CompaniesDeleteCompaniesCacheQuery,
  useLazyGetV3CompaniesDeleteCompaniesCacheQuery,
  useCreateListMutation,
  useGetMyListsQuery,
  useLazyGetMyListsQuery,
  useAddEntityToListMutation,
  useRemoveEntitiesFromListMutation,
  useGetV3PersonGetExcelFileQuery,
  useLazyGetV3PersonGetExcelFileQuery,
  useGetV3PersonGetSummaryQuery,
  useLazyGetV3PersonGetSummaryQuery,
  useSubmitPersonSuggestionMutation,
  usePostV3PricingPayMutation,
  useGetV3PricingQuery,
  useLazyGetV3PricingQuery,
  useReceiptQuery,
  useLazyReceiptQuery,
  useGotoIpgQuery,
  useLazyGotoIpgQuery,
  useApplyDiscountQuery,
  useLazyApplyDiscountQuery,
  usePostV3ProfileFollowMutation,
  useSetActivityMutation,
  useSetInformationMutation,
  useSetSocialNetworkMutation,
  useSetPasswordMutation,
  useGetUserProfileByUserIdMutation,
  usePostV3ProfileFollowNationalCodeMutation,
  usePostV3ProfileFollowPostalCodeMutation,
  usePostV3ProfileFollowBrandMutation,
  usePostV3ProfileUnFollowMutation,
  usePostV3ProfileUnFollowByFollowIdMutation,
  usePostV3ProfileGetFollowListByUserIdMutation,
  useGetActiveSessionsQuery,
  useLazyGetActiveSessionsQuery,
  useGetActiveSessionsByUserInfoMutation,
  useAddToNewsLetterMutation,
  useTerminateSessionsMutation,
  useTerminateAllSessionsMutation,
  useTerminateUserSessionByUserInfoMutation,
  useGetSavedGraphListQuery,
  useLazyGetSavedGraphListQuery,
  useSaveGraphMutation,
  useDeleteV3ProfileRemoveSavedGraphMutation,
  useGetSavedSearchListQuery,
  useLazyGetSavedSearchListQuery,
  useSaveSearchMutation,
  useDeleteV3ProfileRemoveSavedAdvancedSearchMutation,
  useSearchQuery,
  useLazySearchQuery,
} = injectedRtkApi
