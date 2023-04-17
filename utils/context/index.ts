import { createContext } from 'react'

interface InitialValues {
  isMobile?: boolean
  campaign: boolean
}

const initialValues: InitialValues = { isMobile: undefined, campaign: false }

const MyContext = createContext(initialValues)

export default MyContext
