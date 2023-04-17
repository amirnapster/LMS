import { useContext, useState } from 'react'
import { CampaignFaq, PlusIcon, QuestionSvg } from 'assets/icons'
import { AccordionDetails, AccordionSummary } from '@mui/material'
import cn from 'classnames'
import Row from 'components/ui/Row'
import Col from 'components/ui/Col'
import Container from 'components/container'
import MyContext from 'utils/context'

import Accordion from './muiFaq'
import Unnecessary from './helper'

import type { FaqProps } from './interface'
import styles from './faq.module.scss'

const Faq = ({ title, service, className }: FaqProps) => {
  const [expanded, setExpanded] = useState<number | null>(null)
  const { campaign } = useContext(MyContext)

  const handleChange = (index: number) => {
    setExpanded((prev) => (prev !== index ? index : null))
  }

  return (
    <Container className={cn(styles['faq__container'], className)}>
      <Row justify='space-between' className={styles['faq']} wrap>
        <Col xxs={24} lg={7} xl={6} className={styles['faq__side']}>
          <div data-selector='wrapper'>
            <span data-selector='title'>{title}</span>
            <Unnecessary dataSelector='desktop' />
            <div data-selector='icon'>
              <img
                src={
                  service === 'pricing' && campaign ? CampaignFaq : QuestionSvg
                }
                alt='question'
              />
            </div>
          </div>
        </Col>
        <Col lg={16} xl={17} flex='auto'>
          {[].map(({ answer, question }, index) => (
            <Accordion
              key={answer}
              expanded={expanded === index}
              onChange={() => handleChange(index)}
            >
              <AccordionSummary expandIcon={<PlusIcon data-selector='icon' />}>
                <span data-selector='title'>{answer}</span>
              </AccordionSummary>
              <AccordionDetails>{question}</AccordionDetails>
            </Accordion>
          ))}
          <Unnecessary dataSelector='mobile' />
        </Col>
      </Row>
    </Container>
  )
}

Faq.defaultProps = {
  title: 'سوالات متداول',
  service: 'pricing',
  className: '',
}

export default Faq
