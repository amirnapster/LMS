import { emptySplitApi as api } from './emptyApi'

export const addTagTypes = [
  'Account',
  'Categories',
  'Courses',
  'Payments',
  'Pricing',
  'Qualifications',
  'WeatherForecast',
] as const
export const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: (build) => ({
      signInByOtp: build.mutation<SignInByOtpApiResponse, SignInByOtpApiArg>({
        query: (queryArg) => ({
          url: `/Account/SignInByOTP`,
          method: 'POST',
          body: queryArg.signInByOtpCommand,
        }),
        invalidatesTags: ['Account'],
      }),
      info: build.mutation<InfoApiResponse, InfoApiArg>({
        query: () => ({ url: `/Account/Info`, method: 'POST' }),
        invalidatesTags: ['Account'],
      }),
      verfySignInByOtp: build.mutation<
        VerfySignInByOtpApiResponse,
        VerfySignInByOtpApiArg
      >({
        query: (queryArg) => ({
          url: `/Account/VerfySignInByOTP`,
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
          url: `/Account/SetUserPassword`,
          method: 'POST',
          body: queryArg.setPasswordCommand,
        }),
        invalidatesTags: ['Account'],
      }),
      signIn: build.mutation<SignInApiResponse, SignInApiArg>({
        query: (queryArg) => ({
          url: `/Account/SignIn`,
          method: 'POST',
          body: queryArg.userSignInForm,
        }),
        invalidatesTags: ['Account'],
      }),
      logout: build.mutation<LogoutApiResponse, LogoutApiArg>({
        query: () => ({ url: `/Account/Logout`, method: 'POST' }),
        invalidatesTags: ['Account'],
      }),
      forgetPassword: build.mutation<
        ForgetPasswordApiResponse,
        ForgetPasswordApiArg
      >({
        query: (queryArg) => ({
          url: `/Account/ForgetPassword`,
          method: 'POST',
          body: queryArg.forgotPasswordForm,
        }),
        invalidatesTags: ['Account'],
      }),
      resetPassword: build.mutation<
        ResetPasswordApiResponse,
        ResetPasswordApiArg
      >({
        query: (queryArg) => ({
          url: `/Account/ResetPassword`,
          method: 'POST',
          body: queryArg.resetPasswordForm,
        }),
        invalidatesTags: ['Account'],
      }),
      getApiCategories: build.query<
        GetApiCategoriesApiResponse,
        GetApiCategoriesApiArg
      >({
        query: () => ({ url: `/api/Categories` }),
        providesTags: ['Categories'],
      }),
      getApiCategoriesById: build.query<
        GetApiCategoriesByIdApiResponse,
        GetApiCategoriesByIdApiArg
      >({
        query: (queryArg) => ({ url: `/api/Categories/${queryArg.id}` }),
        providesTags: ['Categories'],
      }),
      getCourses: build.query<GetCoursesApiResponse, GetCoursesApiArg>({
        query: () => ({ url: `/api/Courses/GetCourses` }),
        providesTags: ['Courses'],
      }),
      getFeatured: build.query<GetFeaturedApiResponse, GetFeaturedApiArg>({
        query: () => ({ url: `/api/Courses/GetFeatured` }),
        providesTags: ['Courses'],
      }),
      searchCourse: build.query<SearchCourseApiResponse, SearchCourseApiArg>({
        query: (queryArg) => ({
          url: `/api/Courses/SearchCourse`,
          params: { term: queryArg.term },
        }),
        providesTags: ['Courses'],
      }),
      byCategory: build.query<ByCategoryApiResponse, ByCategoryApiArg>({
        query: (queryArg) => ({
          url: `/api/Courses/ByCategory`,
          params: { categoryId: queryArg.categoryId },
        }),
        providesTags: ['Courses'],
      }),
      getApiCoursesById: build.query<
        GetApiCoursesByIdApiResponse,
        GetApiCoursesByIdApiArg
      >({
        query: (queryArg) => ({ url: `/api/Courses/${queryArg.id}` }),
        providesTags: ['Courses'],
      }),
      myPayments: build.query<MyPaymentsApiResponse, MyPaymentsApiArg>({
        query: () => ({ url: `/api/Payments/MyPayments` }),
        providesTags: ['Payments'],
      }),
      receipt: build.query<ReceiptApiResponse, ReceiptApiArg>({
        query: (queryArg) => ({
          url: `/api/Payments/Receipt`,
          params: { id: queryArg.id },
        }),
        providesTags: ['Payments'],
      }),
      pricing: build.query<PricingApiResponse, PricingApiArg>({
        query: () => ({ url: `/api/Pricing/Pricing` }),
        providesTags: ['Pricing'],
      }),
      payment: build.query<PaymentApiResponse, PaymentApiArg>({
        query: (queryArg) => ({
          url: `/api/Pricing/Payment`,
          params: { duration: queryArg.duration, package: queryArg['package'] },
        }),
        providesTags: ['Pricing'],
      }),
      getApiQualifications: build.query<
        GetApiQualificationsApiResponse,
        GetApiQualificationsApiArg
      >({
        query: () => ({ url: `/api/Qualifications` }),
        providesTags: ['Qualifications'],
      }),
      getApiQualificationsById: build.query<
        GetApiQualificationsByIdApiResponse,
        GetApiQualificationsByIdApiArg
      >({
        query: (queryArg) => ({ url: `/api/Qualifications/${queryArg.id}` }),
        providesTags: ['Qualifications'],
      }),
      getWeatherForecast: build.query<
        GetWeatherForecastApiResponse,
        GetWeatherForecastApiArg
      >({
        query: () => ({ url: `/WeatherForecast` }),
        providesTags: ['WeatherForecast'],
      }),
    }),
    overrideExisting: false,
  })
export { injectedRtkApi as enhancedApi }
export type SignInByOtpApiResponse = unknown
export type SignInByOtpApiArg = {
  signInByOtpCommand: SignInByOtpCommand
}
export type InfoApiResponse = /** status 200 Success */ UserInfo
export type InfoApiArg = void
export type VerfySignInByOtpApiResponse = /** status 200 Success */ Token
export type VerfySignInByOtpApiArg = {
  verfySignInByOtpCommand: VerfySignInByOtpCommand
}
export type SetUserPasswordApiResponse = unknown
export type SetUserPasswordApiArg = {
  setPasswordCommand: SetPasswordCommand
}
export type SignInApiResponse = /** status 200 Success */ Token
export type SignInApiArg = {
  userSignInForm: UserSignInForm
}
export type LogoutApiResponse = unknown
export type LogoutApiArg = void
export type ForgetPasswordApiResponse = unknown
export type ForgetPasswordApiArg = {
  forgotPasswordForm: ForgotPasswordForm
}
export type ResetPasswordApiResponse = unknown
export type ResetPasswordApiArg = {
  resetPasswordForm: ResetPasswordForm
}
export type GetApiCategoriesApiResponse = /** status 200 Success */ Category[]
export type GetApiCategoriesApiArg = void
export type GetApiCategoriesByIdApiResponse = /** status 200 Success */ Category
export type GetApiCategoriesByIdApiArg = {
  id: number
}
export type GetCoursesApiResponse = /** status 200 Success */ Course[]
export type GetCoursesApiArg = void
export type GetFeaturedApiResponse = /** status 200 Success */ Course[]
export type GetFeaturedApiArg = void
export type SearchCourseApiResponse = /** status 200 Success */ Course[]
export type SearchCourseApiArg = {
  term?: string
}
export type ByCategoryApiResponse = /** status 200 Success */ Course[]
export type ByCategoryApiArg = {
  categoryId?: number
}
export type GetApiCoursesByIdApiResponse = /** status 200 Success */ Course
export type GetApiCoursesByIdApiArg = {
  id: number
}
export type MyPaymentsApiResponse = /** status 200 Success */ Payment[]
export type MyPaymentsApiArg = void
export type ReceiptApiResponse = /** status 200 Success */ Payment
export type ReceiptApiArg = {
  id?: number
}
export type PricingApiResponse = /** status 200 Success */ Pricing[]
export type PricingApiArg = void
export type PaymentApiResponse = /** status 200 Success */ string
export type PaymentApiArg = {
  duration?: number
  package?: number
}
export type GetApiQualificationsApiResponse =
  /** status 200 Success */ Qualification[]
export type GetApiQualificationsApiArg = void
export type GetApiQualificationsByIdApiResponse =
  /** status 200 Success */ Qualification
export type GetApiQualificationsByIdApiArg = {
  id: number
}
export type GetWeatherForecastApiResponse =
  /** status 200 Success */ WeatherForecast[]
export type GetWeatherForecastApiArg = void
export type SignInByOtpCommand = {
  userName?: string | null
}
export type AspNetUserClaim = {
  id?: number
  userId?: number
  claimType?: string | null
  claimValue?: string | null
  user?: AspNetUser
}
export type AspNetUserLogin = {
  loginProvider?: string | null
  providerKey?: string | null
  providerDisplayName?: string | null
  userId?: number
  user?: AspNetUser
}
export type AspNetUserToken = {
  userId?: number
  loginProvider?: string | null
  name?: string | null
  value?: string | null
  user?: AspNetUser
}
export type Payment = {
  id?: number
  userId?: number
  amount?: number
  tax?: number
  token?: string | null
  rrn?: string | null
  paid?: boolean
  gateway?: string | null
  package?: number
  duration?: number
  card?: string | null
  insertDate?: string
  user?: AspNetUser
}
export type CourseQualification = {
  id?: number
  courseId?: number
  qualitficationId?: number
  isMandatory?: number
  course?: Course
  qualitfication?: Qualification
}
export type Qualification = {
  id?: number
  title?: string | null
  categoryId?: number
  titleEn?: string | null
  description?: string | null
  category?: Category
  courseQualifications?: CourseQualification[] | null
}
export type Category = {
  id?: number
  title?: string | null
  courses?: Course[] | null
  qualifications?: Qualification[] | null
}
export type Comment = {
  id?: number
  text?: string | null
  courseId?: number
  lessonId?: number | null
  userId?: number
  insertDate?: string
  approved?: boolean
  replyId?: number | null
  course?: Course
  lesson?: Lesson
}
export type Enroll = {
  id?: number
  userId?: number
  courseId?: number
  insertDate?: string
  progress?: number
  course?: Course
}
export type Course = {
  id?: number
  title?: string | null
  titleFa?: string | null
  totalDuration?: number | null
  imageUrl?: string | null
  categoryId?: number
  description?: string | null
  shortDescription?: string | null
  category?: Category
  comments?: Comment[] | null
  courseQualifications?: CourseQualification[] | null
  enrolls?: Enroll[] | null
  sections?: Section[] | null
}
export type Section = {
  id?: number
  courseId?: number
  title?: string | null
  weekNumber?: number
  description?: string | null
  priority?: number
  course?: Course
  lessons?: Lesson[] | null
}
export type Attachment = {
  id?: number
  title?: string | null
  url?: string | null
  lessonId?: number
  lesson?: Lesson
}
export type UserLessonCompleted = {
  id?: number
  userId?: number
  lessonId?: number
  insertDate?: string
  lesson?: Lesson
  user?: AspNetUser
}
export type Lesson = {
  id?: number
  title?: string | null
  description?: string | null
  sectionId?: number
  duation?: number
  videoUrl?: string | null
  isQuiz?: boolean
  priority?: number
  isFree?: boolean
  isOpen?: boolean
  section?: Section
  attachments?: Attachment[] | null
  comments?: Comment[] | null
  playLogs?: PlayLog[] | null
  userLessonCompleteds?: UserLessonCompleted[] | null
}
export type PlayLog = {
  id?: number
  userId?: number
  action?: string | null
  insertDate?: string
  lessonId?: number
  time?: number
  ip?: string | null
  speed?: number
  lesson?: Lesson
  user?: AspNetUser
}
export type AspNetRoleClaim = {
  id?: number
  roleId?: number
  claimType?: string | null
  claimValue?: string | null
  role?: AspNetRole
}
export type AspNetRole = {
  id?: number
  name?: string | null
  normalizedName?: string | null
  concurrencyStamp?: string | null
  aspNetRoleClaims?: AspNetRoleClaim[] | null
  users?: AspNetUser[] | null
}
export type AspNetUser = {
  id?: number
  userName?: string | null
  normalizedUserName?: string | null
  email?: string | null
  normalizedEmail?: string | null
  emailConfirmed?: boolean
  passwordHash?: string | null
  securityStamp?: string | null
  concurrencyStamp?: string | null
  phoneNumber?: string | null
  phoneNumberConfirmed?: boolean
  twoFactorEnabled?: boolean
  lockoutEnd?: string | null
  lockoutEnabled?: boolean
  accessFailedCount?: number
  fullname?: string | null
  aspNetUserClaims?: AspNetUserClaim[] | null
  aspNetUserLogins?: AspNetUserLogin[] | null
  aspNetUserTokens?: AspNetUserToken[] | null
  payments?: Payment[] | null
  playLogs?: PlayLog[] | null
  premia?: Premium[] | null
  userLessonCompleteds?: UserLessonCompleted[] | null
  roles?: AspNetRole[] | null
}
export type Premium = {
  id?: number
  userId?: number
  package?: number
  insertDate?: string
  untilDate?: string
  user?: AspNetUser
}
export type UserInfo = {
  id?: number
  fullname?: string | null
  premium?: Premium
}
export type ApiError = {
  message?: string | null
  isWarning?: boolean
}
export type Token = {
  accessToken?: string | null
  accessTokenExpirationTime?: string
  refreshToken?: string | null
  refreshTokenExpirationTime?: string
  isNewUser?: boolean
  completedProfile?: boolean
  packageType?: number
}
export type VerfySignInByOtpCommand = {
  userName?: string | null
  code?: string | null
}
export type SetPasswordCommand = {
  newPassword: string
  confirmPassword?: string | null
  userName: string
}
export type UserSignInForm = {
  userName?: string | null
  password?: string | null
}
export type ForgotPasswordForm = {
  userName: string
}
export type ResetPasswordForm = {
  code?: string | null
  userName?: string | null
  newPassword?: string | null
}
export type CampaignPrice = {
  id?: number
  startDate?: string
  endDate?: string
  duration?: number
  amount?: number
  description?: string | null
  package?: number
}
export type Pricing = {
  duration?: number
  amount?: number
  package?: number
  campaign?: CampaignPrice
}
export type WeatherForecast = {
  date?: string
  temperatureC?: number
  temperatureF?: number
  summary?: string | null
  isAuthenticated?: boolean
  kkk?: string | null
}
export const {
  useSignInByOtpMutation,
  useInfoMutation,
  useVerfySignInByOtpMutation,
  useSetUserPasswordMutation,
  useSignInMutation,
  useLogoutMutation,
  useForgetPasswordMutation,
  useResetPasswordMutation,
  useGetApiCategoriesQuery,
  useLazyGetApiCategoriesQuery,
  useGetApiCategoriesByIdQuery,
  useLazyGetApiCategoriesByIdQuery,
  useGetCoursesQuery,
  useLazyGetCoursesQuery,
  useGetFeaturedQuery,
  useLazyGetFeaturedQuery,
  useSearchCourseQuery,
  useLazySearchCourseQuery,
  useByCategoryQuery,
  useLazyByCategoryQuery,
  useGetApiCoursesByIdQuery,
  useLazyGetApiCoursesByIdQuery,
  useMyPaymentsQuery,
  useLazyMyPaymentsQuery,
  useReceiptQuery,
  useLazyReceiptQuery,
  usePricingQuery,
  useLazyPricingQuery,
  usePaymentQuery,
  useLazyPaymentQuery,
  useGetApiQualificationsQuery,
  useLazyGetApiQualificationsQuery,
  useGetApiQualificationsByIdQuery,
  useLazyGetApiQualificationsByIdQuery,
  useGetWeatherForecastQuery,
  useLazyGetWeatherForecastQuery,
} = injectedRtkApi
