import { Story, Meta } from '@storybook/react/types-6-0'
import DefaultButton, { IDefaultButtonProps } from '.'

export default {
  title: 'DefaultButton',
  component: DefaultButton,
  args: {
    value: 'Default button',
    handleClick: () => {
      console.log('OK')
    }
  }
} as Meta

export const ColoredButton: Story = (args: IDefaultButtonProps) => (
  <DefaultButton {...args} />
)
ColoredButton.args = {
  value: 'Colored button',
  handleClick: () => {
    console.log('OK')
  }
}

export const Default: Story = (args: IDefaultButtonProps) => (
  <DefaultButton {...args} />
)
