import { ProgressBar } from "@components/ui/progressbar/ProgressBar";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ProgressBar> = {
  title: "components/ui/ProgressBar",
  component: ProgressBar,
  argTypes: {
    currentTab: {
      defaultValue: 1,
      description: '프로그래스바 진행 단계'
    },
    maxCount: {
      defaultValue: 60,
      description: '프로그래스바 최대'
    }
  }
};

export default meta;
type Stroy = StoryObj<typeof ProgressBar>;

export const Progress: Stroy = {};
