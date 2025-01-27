import { Meta, StoryObj } from '@storybook/react'
import { Icon } from '.'

const meta = {
  title: 'Icon',
  component: Icon,
  tags: ['autodocs'],
  args: {
    type: 'borderColor',
    size: '2rem',
    color: 'black',
    style: undefined,
    className: undefined,
  },
} satisfies Meta<typeof Icon>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const Type: Story = {
  args: {
    size: '2rem',
    type: undefined,
  },
}

export const Size: Story = {
  args: {
    size: '7rem',
  },
}

export const Color: Story = {
  args: {
    color: 'disabled',
  },
}

export const Style: Story = {
  args: {
    style: undefined,
  },
}

export const ClassName: Story = {
  args: {
    className: undefined,
  },
}
