import { ReactElement, useEffect } from 'react'
import styles from './steps.module.scss'

interface Props {
  children: ReactElement<number>[]
  current: number
  onChange?: () => void
}

const Steps = ({ children, onChange, current }: Props) => {
  useEffect(() => {
    onChange?.()
  }, [current])

  return <div className={styles['steps']}>{children}</div>
}

Steps.defaultProps = {
  onChange: undefined,
}

export default Steps
