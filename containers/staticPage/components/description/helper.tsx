import {
  DescriptionArrowIcon,
  DescriptionItemSvg,
  DescriptionQuestionSvg,
  DescriptionRedArrowIcon,
} from 'assets/icons'
import cn from 'classnames'

import type { StaticComponentsProps } from 'containers/staticPage/interface'
import { descriptionData } from 'utils/statics'
import styles from './description.module.scss'

export const DescriptionItems = ({ service }: StaticComponentsProps) => {
  const data = descriptionData[service]

  return (
    <div
      className={cn(
        styles['description__list'],
        styles[`description__list--${service}`]
      )}
    >
      <div data-selector='item-title'>{data.list?.title}</div>
      <div>
        {data.list?.items.map((item) => (
          <div data-selector='item' key={item}>
            <img src={DescriptionItemSvg} alt='desc-item' />
            <span>{item}</span>
          </div>
        ))}
      </div>
      {service !== 'graph' && service !== 'persons' && (
        <DescriptionArrowIcon
          viewBox='0 0 20 61'
          className={styles['description--arrow']}
        />
      )}
    </div>
  )
}

export const DescriptionQuestions = ({ service }: StaticComponentsProps) => {
  const data = descriptionData[service]

  return (
    <div
      className={cn(
        styles['description__question'],
        styles[`description__question--${service}`]
      )}
    >
      <div data-selector='question-title'>{data.questions?.title}</div>
      <div>
        {data.questions?.items.map((item) => (
          <div data-selector='question' key={item}>
            <img src={DescriptionQuestionSvg} alt='desc-question' />
            <span>{item}</span>
          </div>
        ))}
      </div>
      <DescriptionArrowIcon
        viewBox='0 0 20 61'
        className={styles['description--arrow']}
      />
    </div>
  )
}

export const DescriptionAnswers = ({ service }: StaticComponentsProps) => {
  const data = descriptionData[service]

  return (
    <>
      <div data-selector='answer-title'>
        <DescriptionRedArrowIcon />
        <span>{data?.answers?.title}</span>
      </div>
      {data?.answers?.item}
    </>
  )
}
