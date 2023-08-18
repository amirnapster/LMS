import { emptySplitApi as api } from './emptyApi'
export const addTagTypes = [
  'Account',
  'Categories',
  'Comment',
  'Company',
  'Courses',
  'Gift',
  'Mentor',
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
      addSubUser: build.mutation<AddSubUserApiResponse, AddSubUserApiArg>({
        query: (queryArg) => ({
          url: `/Account/AddSubUser`,
          method: 'POST',
          body: queryArg.addSubUserForm,
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
          body: queryArg.commentDto,
        }),
        invalidatesTags: ['Comment'],
      }),
      companySegments: build.query<
        CompanySegmentsApiResponse,
        CompanySegmentsApiArg
      >({
        query: () => ({ url: `/api/Company/CompanySegments` }),
        providesTags: ['Company'],
      }),
      companyAdminCredits: build.query<
        CompanyAdminCreditsApiResponse,
        CompanyAdminCreditsApiArg
      >({
        query: (queryArg) => ({
          url: `/api/Company/CompanyAdminCredits`,
          params: { id: queryArg.id },
        }),
        providesTags: ['Company'],
      }),
      addCompanyAdminCredit: build.mutation<
        AddCompanyAdminCreditApiResponse,
        AddCompanyAdminCreditApiArg
      >({
        query: (queryArg) => ({
          url: `/api/Company/AddCompanyAdminCredit`,
          method: 'POST',
          params: {
            id: queryArg.id,
            courseId: queryArg.courseId,
            credit: queryArg.credit,
          },
        }),
        invalidatesTags: ['Company'],
      }),
      requestCredit: build.mutation<
        RequestCreditApiResponse,
        RequestCreditApiArg
      >({
        query: (queryArg) => ({
          url: `/api/Company/RequestCredit`,
          method: 'POST',
          params: { courseId: queryArg.courseId },
        }),
        invalidatesTags: ['Company'],
      }),
      companyUser: build.query<CompanyUserApiResponse, CompanyUserApiArg>({
        query: (queryArg) => ({
          url: `/api/Company/CompanyUser`,
          params: { id: queryArg.id },
        }),
        providesTags: ['Company'],
      }),
      setUserSegmentValue: build.mutation<
        SetUserSegmentValueApiResponse,
        SetUserSegmentValueApiArg
      >({
        query: (queryArg) => ({
          url: `/api/Company/SetUserSegmentValue`,
          method: 'POST',
          params: {
            id: queryArg.id,
            segmentId: queryArg.segmentId,
            segmentValueId: queryArg.segmentValueId,
          },
        }),
        invalidatesTags: ['Company'],
      }),
      companyUsers: build.query<CompanyUsersApiResponse, CompanyUsersApiArg>({
        query: () => ({ url: `/api/Company/CompanyUsers` }),
        providesTags: ['Company'],
      }),
      setActivation: build.mutation<
        SetActivationApiResponse,
        SetActivationApiArg
      >({
        query: (queryArg) => ({
          url: `/api/Company/SetActivation`,
          method: 'POST',
          params: { id: queryArg.id, active: queryArg.active },
        }),
        invalidatesTags: ['Company'],
      }),
      setCreditActivation: build.mutation<
        SetCreditActivationApiResponse,
        SetCreditActivationApiArg
      >({
        query: (queryArg) => ({
          url: `/api/Company/SetCreditActivation`,
          method: 'POST',
          params: { id: queryArg.id, active: queryArg.active },
        }),
        invalidatesTags: ['Company'],
      }),
      changeCredit: build.mutation<ChangeCreditApiResponse, ChangeCreditApiArg>(
        {
          query: (queryArg) => ({
            url: `/api/Company/ChangeCredit`,
            method: 'POST',
            params: { id: queryArg.id, credit: queryArg.credit },
          }),
          invalidatesTags: ['Company'],
        }
      ),
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
      superPremiumCourses: build.query<
        SuperPremiumCoursesApiResponse,
        SuperPremiumCoursesApiArg
      >({
        query: () => ({ url: `/api/Courses/SuperPremiumCourses` }),
        providesTags: ['Courses'],
      }),
      my: build.query<MyApiResponse, MyApiArg>({
        query: () => ({ url: `/api/Courses/My` }),
        providesTags: ['Courses'],
      }),
      others: build.query<OthersApiResponse, OthersApiArg>({
        query: (queryArg) => ({
          url: `/api/Courses/Others`,
          params: { id: queryArg.id },
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
      getGift: build.query<GetGiftApiResponse, GetGiftApiArg>({
        query: (queryArg) => ({
          url: `/api/Gift/GetGift`,
          params: { code: queryArg.code },
        }),
        providesTags: ['Gift'],
      }),
      getSubUsersCredit: build.query<
        GetSubUsersCreditApiResponse,
        GetSubUsersCreditApiArg
      >({
        query: () => ({ url: `/Mentor/GetSubUsersCredit` }),
        providesTags: ['Mentor'],
      }),
      addSubUsersCredit: build.mutation<
        AddSubUsersCreditApiResponse,
        AddSubUsersCreditApiArg
      >({
        query: (queryArg) => ({
          url: `/Mentor/AddSubUsersCredit`,
          method: 'POST',
          body: queryArg.addCompanyAdminCreditDto,
        }),
        invalidatesTags: ['Mentor'],
      }),
      getMentorshipUserLogs: build.mutation<
        GetMentorshipUserLogsApiResponse,
        GetMentorshipUserLogsApiArg
      >({
        query: () => ({ url: `/Mentor/GetMentorshipUserLogs`, method: 'POST' }),
        invalidatesTags: ['Mentor'],
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
export type AddSubUserApiResponse = unknown
export type AddSubUserApiArg = {
  addSubUserForm: AddSubUserForm
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
  commentDto: CommentDto
}
export type CompanySegmentsApiResponse =
  /** status 200 Success */ CompanyUserDto[]
export type CompanySegmentsApiArg = void
export type CompanyAdminCreditsApiResponse =
  /** status 200 Success */ CompanyUserDto[]
export type CompanyAdminCreditsApiArg = {
  id?: number
}
export type AddCompanyAdminCreditApiResponse =
  /** status 200 Success */ CompanyUserDto[]
export type AddCompanyAdminCreditApiArg = {
  id?: number
  courseId?: number
  credit?: number
}
export type RequestCreditApiResponse = unknown
export type RequestCreditApiArg = {
  courseId?: number
}
export type CompanyUserApiResponse = /** status 200 Success */ CompanyUser
export type CompanyUserApiArg = {
  id?: number
}
export type SetUserSegmentValueApiResponse =
  /** status 200 Success */ CompanyUserDto[]
export type SetUserSegmentValueApiArg = {
  id?: number
  segmentId?: number
  segmentValueId?: number
}
export type CompanyUsersApiResponse = /** status 200 Success */ CompanyUserDto[]
export type CompanyUsersApiArg = void
export type SetActivationApiResponse =
  /** status 200 Success */ CompanyUserDto[]
export type SetActivationApiArg = {
  id?: number
  active?: boolean
}
export type SetCreditActivationApiResponse = unknown
export type SetCreditActivationApiArg = {
  id?: number
  active?: boolean
}
export type ChangeCreditApiResponse = unknown
export type ChangeCreditApiArg = {
  id?: number
  credit?: number
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
export type SuperPremiumCoursesApiResponse = /** status 200 Success */ Course[]
export type SuperPremiumCoursesApiArg = void
export type MyApiResponse = /** status 200 Success */ Course[]
export type MyApiArg = void
export type OthersApiResponse = /** status 200 Success */ Course[]
export type OthersApiArg = {
  id?: number
}
export type GetApiCoursesByIdApiResponse = /** status 200 Success */ Course
export type GetApiCoursesByIdApiArg = {
  id: number
}
export type GetGiftApiResponse = unknown
export type GetGiftApiArg = {
  code?: string
}
export type GetSubUsersCreditApiResponse =
  /** status 200 Success */ CompanyAdminCreditDto[]
export type GetSubUsersCreditApiArg = void
export type AddSubUsersCreditApiResponse =
  /** status 200 Success */ CompanyAdminCredit
export type AddSubUsersCreditApiArg = {
  addCompanyAdminCreditDto: AddCompanyAdminCreditDto
}
export type GetMentorshipUserLogsApiResponse =
  /** status 200 Success */ MentorUserLog[]
export type GetMentorshipUserLogsApiArg = void
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
export type CompanyAdmin = {
  id?: number
  companyId?: number
  adminId?: number
  insertDate?: string
  isActive?: boolean | null
  admin?: AspNetUser
  company?: Company
}
export type CompanyCredit = {
  id?: number
  companyId?: number
  usedCredit?: number
  totalCredit?: number
  totalPrice?: number
  insertDate?: string
  company?: Company
}
export type CompanyIpRange = {
  id?: number
  ipFrom?: number
  ipTo?: number
  companyId?: number
  insertDate?: string
  company?: Company
}
export type CompanySegment = {
  id?: number
  companyId?: number
  title?: string | null
  company?: Company
  companySegmentValues?: CompanySegmentValue[] | null
}
export type CompanyUserSegment = {
  id?: number
  userId?: number
  segmentValueId?: number
  segmentId?: number
  segmentValue?: CompanySegmentValue
  user?: AspNetUser
}
export type CompanySegmentValue = {
  id?: number
  companySegmentId?: number
  title?: string | null
  companySegment?: CompanySegment
  companyMentorAccesses?: CompanyMentorAccess[] | null
  companyUserSegments?: CompanyUserSegment[] | null
}
export type CompanyMentorAccess = {
  id?: number
  companyId?: number
  mentorId?: number
  segmentValueId?: number
  company?: Company
  mentor?: AspNetUser
  segmentValue?: CompanySegmentValue
}
export type CompanyUser = {
  id?: number
  companyId?: number
  userId?: number
  isActive?: boolean
  insertDate?: string
  company?: Company
  user?: AspNetUser
}
export type Company = {
  id?: number
  title?: string | null
  insertDate?: string
  logo?: string | null
  primaryColor?: string | null
  secondaryColor?: string | null
  companyAdminCredits?: CompanyAdminCredit[] | null
  companyAdmins?: CompanyAdmin[] | null
  companyCredits?: CompanyCredit[] | null
  companyIpRanges?: CompanyIpRange[] | null
  companyMentorAccesses?: CompanyMentorAccess[] | null
  companySegments?: CompanySegment[] | null
  companyUsers?: CompanyUser[] | null
}
export type CourseQualification = {
  id?: number
  courseId?: number
  qualitficationId?: number
  isMandatory?: number
  course?: Course
  qualitfication?: Qualification
}
export type QualificationAdmin = {
  id?: number
  adminId?: string | null
  qualificationId?: number
  qualification?: Qualification
}
export type Question = {
  id?: number
  question1?: string | null
  answer1?: string | null
  answer2?: string | null
  answer3?: string | null
  answer4?: string | null
  difficulty?: number | null
  adminDesc?: string | null
  revesionOf?: number | null
  isPublished?: boolean
  insertDate?: string
  qualificationId?: number
  inreYear?: number | null
  authorId?: string | null
  correctAnswer?: number
  updateDate?: string | null
  qualification?: Qualification
}
export type Qualification = {
  id?: number
  title?: string | null
  categoryId?: number
  titleEn?: string | null
  description?: string | null
  bookletCode?: string | null
  category?: Category
  courseQualifications?: CourseQualification[] | null
  qualificationAdmins?: QualificationAdmin[] | null
  questions?: Question[] | null
}
export type Category = {
  id?: number
  title?: string | null
  courses?: Course[] | null
  qualifications?: Qualification[] | null
}
export type ContentProvider = {
  id?: number
  title?: string | null
  bio?: string | null
  avatar?: string | null
  link?: string | null
  courses?: Course[] | null
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
  isPublished?: boolean | null
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
export type Teacher = {
  id?: number
  title?: string | null
  profession?: string | null
  bio?: string | null
  avatar?: string | null
  courseTeachers?: CourseTeacher[] | null
}
export type CourseTeacher = {
  id?: number
  courseId?: number
  teacherId?: number
  course?: Course
  teacher?: Teacher
}
export type Enroll = {
  id?: number
  userId?: number
  courseId?: number
  insertDate?: string
  progress?: number
  course?: Course
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
export type UserMentorCredit = {
  id?: number
  mentorId?: number
  userId?: number
  courseId?: number
  usedCredit?: number
  totalCredit?: number
  insertDate?: string
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
  providerId?: number
  priority?: number | null
  superPremium?: boolean
  category?: Category
  provider?: ContentProvider
  comments?: Comment[] | null
  companyAdminCredits?: CompanyAdminCredit[] | null
  courseQualifications?: CourseQualification[] | null
  courseTags?: CourseTag[] | null
  courseTeachers?: CourseTeacher[] | null
  enrolls?: Enroll[] | null
  exams?: Exam[] | null
  sections?: Section[] | null
  userMentorCredits?: UserMentorCredit[] | null
}
export type CompanyAdminCredit = {
  id?: number
  adminId?: number | null
  userId?: number
  courseId?: number
  totalCredit?: number
  usedCredit?: number
  insertDate?: string
  companyId?: number
  isActive?: boolean | null
  admin?: AspNetUser
  company?: Company
  course?: Course
  user?: AspNetUser
}
export type Gift = {
  id?: number
  title?: string | null
  duration?: number
  giftUsages?: GiftUsage[] | null
}
export type GiftUsage = {
  id?: number
  userId?: number
  giftId?: number
  insertDate?: string
  gift?: Gift
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
  insertDate?: string | null
  user?: AspNetUser
}
export type Session = {
  id?: number
  userId?: number
  token?: string | null
  insertDate?: string
  expireDate?: string
  isActive?: boolean
  userAgent?: string | null
  ip?: number | null
  user?: AspNetUser
}
export type Suggestion = {
  id?: number
  userId?: number | null
  text?: string | null
  insertDate?: string
  user?: AspNetUser
}
export type UserMentor = {
  id?: number
  mentorId?: number
  userId?: number
  description?: string | null
  mentor?: AspNetUser
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
  lockoutEnd?: string | null
  lockoutEnabled?: boolean
  accessFailedCount?: number
  fullname?: string | null
  companyName?: string | null
  jobTitle?: string | null
  joinDate?: string
  aspNetUserClaims?: AspNetUserClaim[] | null
  aspNetUserLogins?: AspNetUserLogin[] | null
  aspNetUserTokens?: AspNetUserToken[] | null
  companyAdminCreditAdmins?: CompanyAdminCredit[] | null
  companyAdminCreditUsers?: CompanyAdminCredit[] | null
  companyAdmins?: CompanyAdmin[] | null
  companyMentorAccesses?: CompanyMentorAccess[] | null
  companyUserSegments?: CompanyUserSegment[] | null
  companyUsers?: CompanyUser[] | null
  exams?: Exam[] | null
  giftUsages?: GiftUsage[] | null
  payments?: Payment[] | null
  playLogs?: PlayLog[] | null
  premia?: Premium[] | null
  sessions?: Session[] | null
  suggestions?: Suggestion[] | null
  userAnswers?: UserAnswer[] | null
  userLessonCompleteds?: UserLessonCompleted[] | null
  userMentorMentors?: UserMentor[] | null
  userMentorUsers?: UserMentor[] | null
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
export type SubUser = {
  id?: number
  username?: string | null
}
export type UserInfo = {
  id?: number
  isMentor?: boolean
  fullname?: string | null
  premium?: Premium
  companyName?: string | null
  jobTitle?: string | null
  username?: string | null
  subUsers?: SubUser[] | null
  totalCredit?: number | null
  usedCredit?: number | null
  parentUser?: UserMentor
  isCompanyAdmin?: boolean
  logo?: string | null
  isInCompany?: boolean
  credits?: CompanyAdminCredit[] | null
  inCompanyTitle?: string | null
  inCompanyPrimaryColor?: string | null
  inCompanySecondaryColor?: string | null
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
export type SessionDto = {
  id?: number
  userAgent?: string | null
  insertDate?: string
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
export type AddSubUserForm = {
  userName?: string | null
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
export type CommentDto = {
  text?: string | null
  courseId?: number
  lessonId?: number | null
  rate?: number
}
export type CompanyUserDto = {
  id?: number
  isActive?: boolean
  userId?: number
  username?: string | null
  fullname?: string | null
  col1?: string | null
  colName1?: string | null
  colName2?: string | null
  col2?: string | null
  insertDate?: string
  usedCredit?: number
}
export type PlayLogDto = {
  action?: string | null
  lessonId?: number
  time?: number
  speed?: number
}
export type CompanyAdminCreditDto = {
  id?: number
  adminId?: number
  userId?: number
  courseId?: number
  usedCredit?: number
  totalCredit?: number
  subUser?: SubUser
  course?: Course
}
export type AddCompanyAdminCreditDto = {
  userId?: number
  courseId?: number
  totalCredit?: number
}
export type MentorUserLog = {
  mentorId?: number
  userId?: number
  fullname?: string | null
  username?: string | null
  totalView?: number | null
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
export const {
  useSignInByOtpMutation,
  useInfoMutation,
  useSetInfoMutation,
  useVerfySignInByOtpMutation,
  useFromInreMutation,
  useSetUserPasswordMutation,
  useAddSubUserMutation,
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
  useCompanySegmentsQuery,
  useLazyCompanySegmentsQuery,
  useCompanyAdminCreditsQuery,
  useLazyCompanyAdminCreditsQuery,
  useAddCompanyAdminCreditMutation,
  useRequestCreditMutation,
  useCompanyUserQuery,
  useLazyCompanyUserQuery,
  useSetUserSegmentValueMutation,
  useCompanyUsersQuery,
  useLazyCompanyUsersQuery,
  useSetActivationMutation,
  useSetCreditActivationMutation,
  useChangeCreditMutation,
  useGetCoursesQuery,
  useLazyGetCoursesQuery,
  useGetFeaturedQuery,
  useLazyGetFeaturedQuery,
  useSearchCourseQuery,
  useLazySearchCourseQuery,
  useByCategoryQuery,
  useLazyByCategoryQuery,
  useLogMutation,
  useSuperPremiumCoursesQuery,
  useLazySuperPremiumCoursesQuery,
  useMyQuery,
  useLazyMyQuery,
  useOthersQuery,
  useLazyOthersQuery,
  useGetApiCoursesByIdQuery,
  useLazyGetApiCoursesByIdQuery,
  useGetGiftQuery,
  useLazyGetGiftQuery,
  useGetSubUsersCreditQuery,
  useLazyGetSubUsersCreditQuery,
  useAddSubUsersCreditMutation,
  useGetMentorshipUserLogsMutation,
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
