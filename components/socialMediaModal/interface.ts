export interface ISocialMedia {
  name?: string | null | undefined
  id?: number | undefined
  mode?: 'person' | 'company'
}

export type NavigateType = (
  pattern: string,
  name: string | null | undefined,
  id: number | undefined,
  textToShare: string,
  mode?: 'person' | 'company'
) => string
