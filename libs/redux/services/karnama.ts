import { emptySplitApi as api } from './emptyApi'
export const addTagTypes = [
  'Account',
  'Categories',
  'Courses',
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
      getApiCourses: build.query<GetApiCoursesApiResponse, GetApiCoursesApiArg>(
        {
          query: () => ({ url: `/api/Courses` }),
          providesTags: ['Courses'],
        }
      ),
      getApiCoursesById: build.query<
        GetApiCoursesByIdApiResponse,
        GetApiCoursesByIdApiArg
      >({
        query: (queryArg) => ({ url: `/api/Courses/${queryArg.id}` }),
        providesTags: ['Courses'],
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
export type GetApiCoursesApiResponse = /** status 200 Success */ Course[]
export type GetApiCoursesApiArg = void
export type GetApiCoursesByIdApiResponse = /** status 200 Success */ Course
export type GetApiCoursesByIdApiArg = {
  id: number
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
export type Token = {
  accessToken?: string | null
  accessTokenExpirationTime?: string
  refreshToken?: string | null
  refreshTokenExpirationTime?: string
  isNewUser?: boolean
  completedProfile?: boolean
  packageType?: number
}
export type ApiError = {
  message?: string | null
  isWarning?: boolean
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
}
export type UserLessonCompleted = {
  id?: number
  userId?: number
  lessonId?: number
  insertDate?: string
  lesson?: Lesson
}
export type Lesson = {
  id?: number
  title?: string | null
  description?: string | null
  sectionId?: number
  duation?: number
  videoUrl?: string | null
  isQuiz?: boolean
  isFree?: boolean
  priority?: number
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
  categoryId?: number
  title?: string | null
  description?: string | null
  titleFa?: string | null
  totalDuration?: number | null
  imageUrl?: string | null
  category?: Category
  comments?: Comment[] | null
  courseQualifications?: CourseQualification[] | null
  enrolls?: Enroll[] | null
  sections?: Section[] | null
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
  qualifications?: Qualification[] | null
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
  useGetApiCoursesQuery,
  useLazyGetApiCoursesQuery,
  useGetApiCoursesByIdQuery,
  useLazyGetApiCoursesByIdQuery,
  useGetApiQualificationsQuery,
  useLazyGetApiQualificationsQuery,
  useGetApiQualificationsByIdQuery,
  useLazyGetApiQualificationsByIdQuery,
  useGetWeatherForecastQuery,
  useLazyGetWeatherForecastQuery,
} = injectedRtkApi
