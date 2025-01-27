import { Meta, StoryObj } from '@storybook/react'
import { ActionButton } from '.'

const meta = {
  title: 'ActionButton',
  component: ActionButton,
  tags: ['autodocs'],
  args: {
    children: undefined,
    icon: undefined,
    iconPosition: undefined,
    hasBorder: true,
    disabled: undefined,
    size: undefined,
    style: undefined,
    className: undefined,
    onClick: () => console.log('click'),
  },
} satisfies Meta<typeof ActionButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const Children: Story = {
  args: {
    children: 'dddd',
  },
}

export const Icon: Story = {
  args: {
    icon: 'borderColor',
  },
}

export const IconPosition: Story = {
  args: {
    iconPosition: undefined,
  },
}

export const HasBorder: Story = {
  args: {
    hasBorder: undefined,
  },
}

export const Disabled: Story = {
  args: {
    disabled: undefined,
  },
}

export const SizeLarge: Story = {
  args: {
    size: 'large',
  },
}

export const SizeMedium: Story = {
  args: {
    size: 'medium',
  },
}

export const SizeSmall: Story = {
  args: {
    size: 'small',
  },
}

export const OnClick: Story = {
  args: {
    onClick: undefined,
  },
}
