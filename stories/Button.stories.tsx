import type { Meta, StoryObj } from '@storybook/react'

import Button from 'components/ui/Button'
import Col from 'components/ui/Col'
import Row from 'components/ui/Row'
// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: 'Rasmio/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    btnType: {
      options: ['primary', 'secondary', 'ghost', 'link'],
      control: { type: 'radio' },
    },
    bgColor: {
      options: [
        'white-blue-gradient',
        'white-red-gradient',
        'white-gold-gradient',
        'green-gradient',
      ],
      control: { type: 'radio' },
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>
type RowStory = StoryObj<typeof Row>

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    btnType: 'primary',
    children: 'Button',
    bgColor: 'white-blue-gradient',
  },
}
export const AllTypes: RowStory = {
  args: {
    children: (
      <Row gap={1}>
        <Button btnType='primary'>Primary</Button>
        <Button btnType='secondary'>Secondary</Button>
        <Button btnType='ghost'>Ghost</Button>
        <Button btnType='link'>Link</Button>
      </Row>
    ),
  },
}
export const AllSizes: RowStory = {
  args: {
    children: (
      <Row gap={1}>
        <Button btnType='primary' size='large'>
          Large
        </Button>
        <Button btnType='primary' size='medium'>
          Medium
        </Button>
        <Button btnType='primary' size='small'>
          Small
        </Button>
      </Row>
    ),
  },
}
