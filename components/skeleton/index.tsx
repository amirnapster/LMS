import { Skeleton } from '@mui/material'
import type { ISkeletonProps } from './interface'

const SkeletonComponent = ({
  data,
  width,
  height,
  children,
  className,
  ...restProps
}: ISkeletonProps): JSX.Element =>
  data ? (
    children
  ) : (
    <Skeleton
      className={className}
      width={width}
      height={height}
      {...restProps}
    />
  )

SkeletonComponent.defaultProps = {
  width: '',
  height: '',
  className: '',
}

export default SkeletonComponent
