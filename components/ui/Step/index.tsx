import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import cn from 'classnames'
import { RootState } from 'libs/redux/store'
import { Done } from '@mui/icons-material'

import styles from './step.module.scss'

interface Props {
  title?: string
  id: number
}

const Step = ({ title, id }: Props) => {
  const { currentStep } = useSelector((state: RootState) => state.companyAuth)

  const checkStatus = () => {
    if (id === currentStep) return styles['step--active']
    if (id < currentStep) return styles['step--finish']
    return ''
  }

  const step = useMemo(() => {
    if (currentStep > id) {
      return (
        <>
          <div
            className={cn(styles['step__item'], styles['step__item--doneItem'])}
          >
            <Done />
          </div>
          <div
            className={cn(
              styles['step__title'],
              styles['step__title--doneTitle']
            )}
          >
            {title}
          </div>
        </>
      )
    }

    return (
      <>
        <div className={styles['step__item']} />
        <div className={styles['step__title']}>{title}</div>
      </>
    )
  }, [currentStep])

  return <div className={cn(styles['step'], checkStatus())}>{step}</div>
}

Step.defaultProps = {
  title: '',
}

export default Step
