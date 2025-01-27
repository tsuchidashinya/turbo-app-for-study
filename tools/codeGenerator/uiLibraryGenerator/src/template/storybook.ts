const ARGS_TEMPLATE = `{$NAME}: {$DEFAULT}`;

const STORY_OBJECT_TEMPLATE = `export const {$ARG_CAMEL_NAME}: Story = {
  args: {
    {$ARG}: {$DEFAULT}
  },
}
`;

const STORYBOOK_TEMPLATE = `import { Meta, StoryObj } from '@storybook/react'
import { {$NAME} } from '.'

const meta = {
  title: '{$NAME}',
  component: {$NAME},
  tags: ['autodocs'],
  args: {
    {$ARGS}
  },
} satisfies Meta<typeof {$NAME}>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

{$STORY_OBJECT}
`;

export { ARGS_TEMPLATE, STORY_OBJECT_TEMPLATE, STORYBOOK_TEMPLATE };
