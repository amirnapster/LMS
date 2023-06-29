import {  useState } from 'react'
import {  PlusIcon, QuestionSvg } from 'assets/icons'
import { AccordionDetails, AccordionSummary } from '@mui/material'
import cn from 'classnames'
import Row from 'components/ui/Row'
import Col from 'components/ui/Col'
import Container from 'components/container'

import Accordion from './muiFaq'
import Unnecessary from './helper'

import type { FaqProps } from './interface'
import styles from './faq.module.scss'

const Faq = ({ title, className, data }: FaqProps) => {
  const [expanded, setExpanded] = useState<number | null>(null)

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
                src={QuestionSvg}
                alt='question'
              />
            </div>
          </div>
        </Col>
        <Col lg={16} xl={17} flex='auto'>
          {data.map(({ answer, question }, index) => (
            <Accordion
              key={question}
              expanded={expanded === index}
              onChange={() => handleChange(index)}
            >
              <AccordionSummary expandIcon={<PlusIcon data-selector='icon' />}>
                <span data-selector='title'>{question}</span>
              </AccordionSummary>
              <AccordionDetails>{answer}</AccordionDetails>
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
