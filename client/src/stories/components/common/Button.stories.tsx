import {Button} from "@components/common/Button/Button";
import {Meta, StoryObj} from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: 'components/common/Button',
  component: Button,
  argTypes: {
    variant: {
      defaultValue: 'primary',
      description: '버튼 유형 프로퍼티'
    },
    type: {
      defaultValue: 'button',
      description: '버튼 타입 프로퍼티'
    },
    icon: {
      description: '아이콘을 사용할 경우 JSX'
    }
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const PrimaryButton: Story = {
  args: {
    variant: 'primary',
  },
};

export const PrimaryOutlineButton: Story = {
  args: {
    variant: 'primary-outline',
  },
};

export const PrimaryRoundedButton: Story = {
  args: {
    variant: 'primary-rounded',
  },
};

export const SecondaryButton: Story = {
  args: {
    variant: 'secondary',
  },
};

export const IconButton: Story = {
  args: {
    variant: 'icon',
    icon: <span>ICON</span>,
  },
};
