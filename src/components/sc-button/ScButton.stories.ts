import type { Meta, Story } from '@storybook/web-components';
import './ScButton.ts';
import { ScButton } from './ScButton';

export default {
  title: 'Components/sc-button',
  component: 'sc-button',
  tags: ['autodocs'],
  argTypes: {
    primary: { control: 'boolean' },
    backgroundColor: { control: 'color' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
} as Meta;

const Template: Story<Partial<ScButton>> = (args) => {
  const button = document.createElement('sc-button') as ScButton;
  Object.assign(button, args);
  return button;
};

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'ScButton',
};

export const Secondary = Template.bind({});
Secondary.args = {
  primary: false,
  label: 'ScButton',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'ScButton',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'ScButton',
};