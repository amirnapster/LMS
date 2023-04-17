export interface UsageItems {
  [index: string]: {
    title: JSX.Element
    icon: JSX.Element
    items: { cardTitle: string; desc?: string }[]
    btn: boolean
  }
}
export interface WhatToDoItem {
  [index: string]: {
    icon: JSX.Element
    title: string
    description: string
  }[]
}

export type WhatToDoItems = WhatToDoItem
