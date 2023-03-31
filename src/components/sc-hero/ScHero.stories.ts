import type { Meta, Story } from '@storybook/web-components';
import './ScHero.ts';
import { ScHero } from './ScHero';

export default {
  title: 'Components/sc-hero',
  component: 'sc-hero',
  tags: ['autodocs'],
  argTypes: {
    count: { control: { type: 'number' } },
    docsHint: { control: { type: 'text' } },
  },
} as Meta;

const Template: Story<typeof ScHero> = (args) => {
  const element = document.createElement('sc-hero') as ScHero;
  element.count = args.count;
  element.docsHint = args.docsHint;
  return element;
};

export const Default = Template.bind({});
Default.args = {
  count: 0,
  docsHint: 'Click on the logo to learn more',
};

export const Custom = Template.bind({});
Custom.args = {
  count: 5,
  docsHint: 'Custom hint: Click on the logo to learn more',
};
