import { historyData } from 'utils/statics/aboutStatics'
import styles from './history.module.scss'

const History = () => (
  <>
    {historyData.map(({ description, svg }) => (
      <div key={description} className={styles['history']}>
        {svg}
        <span className={styles['history--description']}>{description}</span>
      </div>
    ))}
  </>
)

export default History
