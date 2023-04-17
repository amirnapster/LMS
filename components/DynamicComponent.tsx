import dynamic from 'next/dynamic'
import type { ComponentType, FC } from 'react'
import type { Props as HeaderSectionProps } from './staticPage/headerSection'

export type Props = HeaderSectionProps

type ComponentsMap = {
  [P in Props as P['type']]: ComponentType<P>
}

const componentsMap: ComponentsMap = {
  // sections
  HeaderSection: dynamic(() =>
    namedComponent(import('./staticPage/headerSection'), 'HeaderSection')
  ),
}

export const DynamicComponent: FC<Props> = (props) => {
  const { type } = props
  if (!type) {
    throw new Error(
      `Object does not have the 'type' property required to select a component: ${JSON.stringify(
        props,
        null,
        2
      )}`
    )
  }
  const Component = componentsMap[type] as ComponentType<Props>
  if (!Component) {
    throw new Error(
      `No component match object with type: '${type}'\nMake sure DynamicComponent.tsx file has an entry for '${type}' in 'componentsMap'`
    )
  }
  return <Component {...props} />
}

const namedComponent = async <T, N extends keyof T>(
  modPromise: Promise<T>,
  exportName: N
) => {
  const mod = await modPromise
  return mod[exportName]
}
