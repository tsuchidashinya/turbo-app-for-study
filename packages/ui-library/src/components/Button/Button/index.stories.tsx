import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '.'

const meta = {
  title: 'Button/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    size: 'large',
    children: 'Button',
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Color: Story = {
  args: {
    color: 'red',
  },
}

export const Size: Story = {
  args: {
    size: 'small',
  },
}
