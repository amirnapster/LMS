import cn from 'classnames'
import type * as types from 'utils/interface'
import styles from './description.module.scss'

export type Props = types.AboutUsDescription & types.StackbitFieldPath

const AboutDescription = (props: Props) => {
  const {
    reverse,
    title,
    subtitle,
    description,
    image,
    'data-sb-field-path': fieldPath,
  } = props
  return (
    <div
      className={cn(
        styles['description'],
        reverse ? styles['description--reverse'] : ''
      )}
      data-sb-field-path={fieldPath}
    >
      <div className={styles['description__main']}>
        <span
          className={styles['description__main--title']}
          data-sb-field-path='.title'
        >
          {title}
        </span>
        <span
          className={styles['description__main--subtitle']}
          data-sb-field-path='.subtitle'
        >
          {subtitle}
        </span>
        <span
          className={styles['description__main--des']}
          data-sb-field-path='.description'
        >
          {description}
        </span>
      </div>
      <div className={styles['description__logo']} data-sb-field-path='.image'>
        <img alt={title} src={image} />
      </div>
    </div>
  )
}

export default AboutDescription
