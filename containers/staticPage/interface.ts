import type { ServiceType } from 'utils/statics/interface'

export interface StaticComponentsProps {
  service: ServiceType
}

export interface StaticPageHeaderProps extends StaticComponentsProps {
  className?: string
}
