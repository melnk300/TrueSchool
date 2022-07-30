import { Story, Meta } from '@storybook/react/types-6-0'
import ProfileCard, { IProfileCardProps } from '.'

export default {
  title: 'ProfileCard',
  component: ProfileCard,
  args: {
    title: '290Р',
    description: 'Спишутся 27 апреля!'
  }
} as Meta

export const Basic: Story = (args: IProfileCardProps) => (
  <ProfileCard {...args} />
)
Basic.args = {
  title: '290Р',
  description: 'Спишутся 27 апреля!'
}

export const Default: Story = (args: IProfileCardProps) => (
  <ProfileCard {...args} />
)
