import { createContext, type Context } from 'react'

export interface CollapseContextState {
  accordion?: boolean
}

const CollapseContext: Context<CollapseContextState> = createContext({})

export default CollapseContext
