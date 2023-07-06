import { emptySplitApi as api } from './emptyApi'
export const addTagTypes = [
  'Account',
  'Categories',
  'Comment',
  'Courses',
  'Payments',
  'Pricing',
  'Qualifications',
  'Suggestion',
  'Tags',
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
      setInfo: build.mutation<SetInfoApiResponse, SetInfoApiArg>({
        query: (queryArg) => ({
          url: `/Account/SetInfo`,
          method: 'POST',
          body: queryArg.setInfoModel,
        }),
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
      fromInre: build.mutation<FromInreApiResponse, FromInreApiArg>({
        query: (queryArg) => ({
          url: `/Account/FromInre`,
          method: 'POST',
          body: queryArg.user,
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
      getApiCategoriesCounts: build.query<
        GetApiCategoriesCountsApiResponse,
        GetApiCategoriesCountsApiArg
      >({
        query: () => ({ url: `/api/Categories/Counts` }),
        providesTags: ['Categories'],
      }),
      getApiCategoriesById: build.query<
        GetApiCategoriesByIdApiResponse,
        GetApiCategoriesByIdApiArg
      >({
        query: (queryArg) => ({ url: `/api/Categories/${queryArg.id}` }),
        providesTags: ['Categories'],
      }),
      comment: build.mutation<CommentApiResponse, CommentApiArg>({
        query: (queryArg) => ({
          url: `/api/Comment/Comment`,
          method: 'POST',
          body: queryArg.comment,
        }),
        invalidatesTags: ['Comment'],
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
      log: build.mutation<LogApiResponse, LogApiArg>({
        query: (queryArg) => ({
          url: `/api/Courses/Log`,
          method: 'POST',
          body: queryArg.playLogDto,
        }),
        invalidatesTags: ['Courses'],
      }),
      my: build.query<MyApiResponse, MyApiArg>({
        query: () => ({ url: `/api/Courses/My` }),
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
      suggest: build.mutation<SuggestApiResponse, SuggestApiArg>({
        query: (queryArg) => ({
          url: `/api/Suggestion/Suggest`,
          method: 'POST',
          body: queryArg.suggestion,
        }),
        invalidatesTags: ['Suggestion'],
      }),
      getApiTags: build.query<GetApiTagsApiResponse, GetApiTagsApiArg>({
        query: () => ({ url: `/api/Tags` }),
        providesTags: ['Tags'],
      }),
      getApiTagsById: build.query<
        GetApiTagsByIdApiResponse,
        GetApiTagsByIdApiArg
      >({
        query: (queryArg) => ({ url: `/api/Tags/${queryArg.id}` }),
        providesTags: ['Tags'],
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
export type SetInfoApiResponse = /** status 200 Success */ UserInfo
export type SetInfoApiArg = {
  setInfoModel: SetInfoModel
}
export type VerfySignInByOtpApiResponse = /** status 200 Success */ Token
export type VerfySignInByOtpApiArg = {
  verfySignInByOtpCommand: VerfySignInByOtpCommand
}
export type FromInreApiResponse = /** status 200 Success */ Token
export type FromInreApiArg = {
  user: User
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
export type GetApiCategoriesCountsApiResponse =
  /** status 200 Success */ CategoryCount[]
export type GetApiCategoriesCountsApiArg = void
export type GetApiCategoriesByIdApiResponse = /** status 200 Success */ Category
export type GetApiCategoriesByIdApiArg = {
  id: number
}
export type CommentApiResponse = unknown
export type CommentApiArg = {
  comment: Comment
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
export type LogApiResponse = unknown
export type LogApiArg = {
  playLogDto: PlayLogDto
}
export type MyApiResponse = /** status 200 Success */ Course[]
export type MyApiArg = void
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
export type SuggestApiResponse = unknown
export type SuggestApiArg = {
  suggestion: Suggestion
}
export type GetApiTagsApiResponse = /** status 200 Success */ Tag[]
export type GetApiTagsApiArg = void
export type GetApiTagsByIdApiResponse = /** status 200 Success */ Tag
export type GetApiTagsByIdApiArg = {
  id: number
}
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
export type SectionQuestion = {
  id?: number
  title?: string | null
  sectionId?: number
  lessonId?: number | null
  imageUrl?: string | null
  answer1?: string | null
  answerImage1?: string | null
  answer2?: string | null
  answerImage2?: string | null
  answer3?: string | null
  answerImage3?: string | null
  answer4?: string | null
  answerImage4?: string | null
  section?: Section
}
export type Section = {
  id?: number
  courseId?: number
  title?: string | null
  titleEn?: string | null
  weekNumber?: number
  description?: string | null
  priority?: number
  course?: Course
  lessons?: Lesson[] | null
  sectionQuestions?: SectionQuestion[] | null
}
export type Attachment = {
  id?: number
  title?: string | null
  url?: string | null
  lessonId?: number
  lesson?: Lesson
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
export type UserLessonCompleted = {
  id?: number
  userId?: number
  lessonId?: number
  insertDate?: string
  timeOfVideo?: number
  finished?: boolean
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
  hasSubtitle?: boolean | null
  section?: Section
  attachments?: Attachment[] | null
  comments?: Comment[] | null
  playLogs?: PlayLog[] | null
  userLessonCompleteds?: UserLessonCompleted[] | null
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
  rate?: number
  course?: Course
  lesson?: Lesson
}
export type Tag = {
  id?: number
  title?: string | null
  courseTags?: CourseTag[] | null
}
export type CourseTag = {
  id?: number
  courseId?: number
  tagId?: number
  course?: Course
  tag?: Tag
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
  slug?: string | null
  isPublished?: boolean
  isFeatured?: boolean
  category?: Category
  comments?: Comment[] | null
  courseQualifications?: CourseQualification[] | null
  courseTags?: CourseTag[] | null
  enrolls?: Enroll[] | null
  exams?: Exam[] | null
  sections?: Section[] | null
}
export type UserAnswer = {
  id?: number
  userId?: number
  questionId?: number
  correct?: boolean
  answerIndex?: number | null
  insertDated?: string
  examId?: number | null
  userStarted?: string | null
  exam?: Exam
  question?: ExamQuestion
  user?: AspNetUser
}
export type ExamQuestion = {
  id?: number
  title?: string | null
  examId?: number
  imageUrl?: string | null
  answer1?: string | null
  answerImage1?: string | null
  answer2?: string | null
  answerImage2?: string | null
  answer3?: string | null
  answerImage3?: string | null
  answer4?: string | null
  answerImage4?: string | null
  correctAnswer?: number
  exam?: Exam
  userAnswers?: UserAnswer[] | null
}
export type Exam = {
  id?: number
  userId?: number
  courseId?: number
  startTime?: string
  endTime?: string
  score?: number
  maxScore?: number
  certificate?: string | null
  code?: string | null
  serialNumber?: number | null
  course?: Course
  user?: AspNetUser
  examQuestions?: ExamQuestion[] | null
  userAnswers?: UserAnswer[] | null
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
  insertDate?: string | null
  user?: AspNetUser
}
export type UserVerification = {
  id?: number
  firstName?: string | null
  lastName?: string | null
  nationalCard?: string | null
  insertDate?: string
  isAccepted?: boolean
  isRejected?: boolean
  userId?: number
  nationalCode?: string | null
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
  joinDate?: string
  lockoutEnd?: string | null
  lockoutEnabled?: boolean
  accessFailedCount?: number
  fullname?: string | null
  companyName?: string | null
  jobTitle?: string | null
  aspNetUserClaims?: AspNetUserClaim[] | null
  aspNetUserLogins?: AspNetUserLogin[] | null
  aspNetUserTokens?: AspNetUserToken[] | null
  exams?: Exam[] | null
  payments?: Payment[] | null
  playLogs?: PlayLog[] | null
  premia?: Premium[] | null
  userAnswers?: UserAnswer[] | null
  userLessonCompleteds?: UserLessonCompleted[] | null
  userVerifications?: UserVerification[] | null
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
  companyName?: string | null
  jobTitle?: string | null
  username?: string | null
}
export type ApiError = {
  message?: string | null
  isWarning?: boolean
}
export type SetInfoModel = {
  fullname?: string | null
  companyName?: string | null
  jobTitle?: string | null
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
export type User = {
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
  companyName?: string | null
  jobTitle?: string | null
  joinDate?: string
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
export type CategoryCount = {
  id?: number
  title?: string | null
  count?: number
}
export type PlayLogDto = {
  action?: string | null
  lessonId?: number
  time?: number
  speed?: number
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
  title?: string | null
  badge?: string | null
}
export type Suggestion = {
  id?: number
  userId?: number | null
  text?: string | null
  insertDate?: string
}
export const {
  useSignInByOtpMutation,
  useInfoMutation,
  useSetInfoMutation,
  useVerfySignInByOtpMutation,
  useFromInreMutation,
  useSetUserPasswordMutation,
  useSignInMutation,
  useLogoutMutation,
  useForgetPasswordMutation,
  useResetPasswordMutation,
  useGetApiCategoriesQuery,
  useLazyGetApiCategoriesQuery,
  useGetApiCategoriesCountsQuery,
  useLazyGetApiCategoriesCountsQuery,
  useGetApiCategoriesByIdQuery,
  useLazyGetApiCategoriesByIdQuery,
  useCommentMutation,
  useGetCoursesQuery,
  useLazyGetCoursesQuery,
  useGetFeaturedQuery,
  useLazyGetFeaturedQuery,
  useSearchCourseQuery,
  useLazySearchCourseQuery,
  useByCategoryQuery,
  useLazyByCategoryQuery,
  useLogMutation,
  useMyQuery,
  useLazyMyQuery,
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
  useSuggestMutation,
  useGetApiTagsQuery,
  useLazyGetApiTagsQuery,
  useGetApiTagsByIdQuery,
  useLazyGetApiTagsByIdQuery,
} = injectedRtkApi
