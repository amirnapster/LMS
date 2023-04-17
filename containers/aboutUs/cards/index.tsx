import { LinkedInIcon } from 'assets/icons'
import Button from 'components/ui/Button'
import type * as types from 'utils/interface'

import styles from './cards.module.scss'

export type Props = types.AboutUsEmployee & types.StackbitFieldPath

export const Cards = (props: Props) => {
  const { name, src, role, url, 'data-sb-field-path': fieldPath } = props
  return (
    <div className={styles['card']} data-sb-field-path={fieldPath}>
      <span className={styles['card--title']} data-sb-field-path='.name'>
        {name}
      </span>
      <span className={styles['card--subTitle']} data-sb-field-path='.role'>
        {role}
      </span>
      {url && (
        <Button className={styles['card--linkedin']} href={url} target='_blank'>
          <img src={LinkedInIcon} alt='linkedin-icon' />
        </Button>
      )}
      <img src={src} alt='team-members' className={styles['card--img']} />
    </div>
  )
}
export default Cards
