import styles from './titleBox.module.scss'

const TitleBox = ({ children }: { children: JSX.Element | string }) => (
  <div className={styles['titleBox']}>
    <span className={styles['titleBox--title']}>{children}</span>
  </div>
)

export default TitleBox
