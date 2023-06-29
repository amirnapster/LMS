interface IFaqProps{
  answer:string
  question:string
}

export interface FaqProps {
  title?: string
  data: IFaqProps[]
  className?: string
}
