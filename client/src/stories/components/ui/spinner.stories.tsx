import { LoadingSpinner } from "@components/ui/spinner/LoadingSpinner";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof LoadingSpinner> = {
  title: "components/ui/LoadingSpinner",
  component: LoadingSpinner,
};

export default meta;
type Stroy = StoryObj<typeof LoadingSpinner>;

export const Spinner: Stroy = {};
