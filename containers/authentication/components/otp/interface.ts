import type { AuthCallBack } from 'containers/authentication/interface'

export interface IConfirmOtpProps {
  changeMode: AuthCallBack
  data: string
  setStep: (state: 1 | 2) => void
}
