import {Meta, StoryObj} from '@storybook/react';
import {Typography} from '@components/common/typography/Typography';

const meta: Meta<typeof Typography> = {
  title: 'components/common/Typography',
  component: Typography,
  argTypes: {
    variant: {
      defaultValue: 'body1',
      description: '폰트 태그 타입',
    },
    color: {
      defaultValue: 'black100',
      description: '글자 색상',
    },
    weight: {
      defaultValue: 'regular',
      description: '글자 굵기',
    },
    as: {
      description: 'heading, p 태그 이외 span 태그로 지정',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const FontBlack: Story = {
  render: () => {
    return (
      <>
        <Typography variant={'h1'} weight={'thin'}>
          h1 - thin - 22px
        </Typography>
        <Typography variant={'h2'} weight={'light'}>
          h2 - light - 20px
        </Typography>
        <Typography variant={'h3'} weight={'regular'}>
          h3 - regular - 18px
        </Typography>
        <Typography variant={'h4'} weight={'bold'}>
          h4 - bold - 16px
        </Typography>
        <Typography variant={'h5'}>h5 - default - 14px</Typography>
        <Typography variant={'body1'}>body1 - p - default - 18px</Typography>
        <Typography variant={'body2'}>body2 - p - default - 16px</Typography>
        <Typography variant={'caption'}>caption - p - default - 12x</Typography>
      </>
    );
  },
};
