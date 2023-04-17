import { useState } from 'react'
import { useIntl } from 'react-intl'
import { Done, Remove, InfoOutlined } from '@mui/icons-material'
import Row from 'components/ui/Row'
import Tooltip from 'components/ui/Tooltip/helper'

import {
  featuresData,
  featuresSimpleData,
  pricingFeaturesItems,
} from 'utils/statics/pricingStatics'
import type { FeatureComponentProps } from 'containers/pricing/interface'
import styles from './features.module.scss'

export const FeatureHeader = ({ isMobile }: FeatureComponentProps) => {
  const intl = useIntl()
  return (
    <Row
      align='middle'
      justify='end'
      className={styles['featureBox--header']}
      data-selector={isMobile && 'headerMobile'}
    >
      {pricingFeaturesItems.map((id) => (
        <h2 key={id}>{intl.formatMessage({ id })}</h2>
      ))}
    </Row>
  )
}

export const FeatureBody = ({ isMobile }: FeatureComponentProps) => {
  const intl = useIntl()
  const [openTooltip, setOpenTooltip] = useState<string>('')

  const dynamicContent = (content?: string | boolean): string | JSX.Element => {
    if (typeof content === 'string') return content
    if (typeof content === 'boolean' && content)
      return <Done htmlColor='#00ab66' />
    return <Remove />
  }

  const handleTooltipClose = () => {
    setOpenTooltip('')
  }
  const handleTooltipOpen = (title: string) => {
    setOpenTooltip(title)
  }

  return (
    <>
      <div
        className={styles['featureBox__body--simple']}
        data-selector={isMobile && 'simpleMobile'}
      >
        {featuresSimpleData.map(({ title, data }) => (
          <div className={styles['featureBox__body--items']} key={title.text}>
            <Row
              className={styles['featureBox__body--items--title']}
              gap={0}
              align='middle'
            >
              <span>{title.text}</span>
              {title.content && (
                <Tooltip
                  title={title.content}
                  placement='top'
                  PopperProps={{
                    disablePortal: true,
                  }}
                  onClose={handleTooltipClose}
                  open={openTooltip === title.text}
                  disableTouchListener
                >
                  <InfoOutlined
                    onClick={() => handleTooltipOpen(title.text)}
                    onMouseEnter={() => handleTooltipOpen(title.text)}
                  />
                </Tooltip>
              )}
            </Row>
            {data.map(({ simpleDataId, text, status, content }) => (
              <Row
                align='middle'
                justify='center'
                key={simpleDataId}
                data-selector={status ? 'colorize' : 'free'}
                gap={0}
              >
                <span>{text}</span>
                {content && (
                  <Tooltip
                    title={content}
                    placement='top'
                    PopperProps={{
                      disablePortal: true,
                    }}
                    onClose={handleTooltipClose}
                    open={openTooltip === content}
                    disableTouchListener
                  >
                    <InfoOutlined
                      onClick={() => handleTooltipOpen(content)}
                      onMouseEnter={() => handleTooltipOpen(content)}
                    />
                  </Tooltip>
                )}
              </Row>
            ))}
          </div>
        ))}
      </div>
      {featuresData.map(({ title, data }) => (
        <div
          className={styles['featureBox__body--advanced']}
          key={title}
          data-selector={isMobile && 'advancedMobile'}
        >
          <h2>{intl.formatMessage({ id: title })}</h2>
          {data.map((item) => (
            <div key={item.title} className={styles['featureBox__body--items']}>
              <Row
                className={styles['featureBox__body--items--title']}
                align='middle'
                gap={0}
              >
                {intl.formatMessage({ id: item.title })}

                {item.info && (
                  <Tooltip
                    title={item.info}
                    placement='top'
                    PopperProps={{
                      disablePortal: true,
                    }}
                    onClose={handleTooltipClose}
                    open={openTooltip === item.title}
                    disableTouchListener
                  >
                    <InfoOutlined
                      onClick={() => handleTooltipOpen(item.title)}
                      onMouseEnter={() => handleTooltipOpen(item.title)}
                    />
                  </Tooltip>
                )}
              </Row>
              <Row justify='center' data-selector='free' align='middle'>
                {dynamicContent(item.free)}
              </Row>
              <Row
                justify='center'
                data-selector={
                  typeof item === 'boolean' && item ? 'company' : 'personal'
                }
                align='middle'
              >
                {dynamicContent(item.personal)}
              </Row>
              <Row justify='center' data-selector='company' align='middle'>
                {dynamicContent(item.company)}
              </Row>
              <Row justify='center' data-selector='organization' align='middle'>
                {dynamicContent(item.organization)}
              </Row>
            </div>
          ))}
        </div>
      ))}
    </>
  )
}
