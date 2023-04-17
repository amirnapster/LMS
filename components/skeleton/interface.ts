import { SkeletonProps } from '@mui/material'

export interface ISkeletonProps extends SkeletonProps {
  data: any
  width?: string
  height?: string
  children: JSX.Element
  className?: string
}
