import { useSelector } from 'react-redux'
import type { RootState } from 'libs/redux/store'

interface AuthHocProps {
  children: JSX.Element
  shouldHaveAccess?: boolean
}

const AuthHoc = ({
  children,
  shouldHaveAccess,
}: AuthHocProps): JSX.Element | null => {
  const { accessToken } = useSelector((state: RootState) => state.auth)

  if (shouldHaveAccess && !accessToken) return children
  if (shouldHaveAccess && accessToken) return null
  if (accessToken) return children

  return null
}

AuthHoc.defaultProps = {
  shouldHaveAccess: false,
}

export default AuthHoc
