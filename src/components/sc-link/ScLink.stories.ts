import type { Meta, StoryFn } from '@storybook/web-components';
import './ScLink.ts';
import { ScLink } from './ScLink';

type ScLinkStoryArgs = Partial<ScLink> & { slotContent: string };

export default {
  title: 'Components/sc-link',
  component: 'sc-link',
  tags: ['autodocs'],
  argTypes: {
    template: {
      control: { type: 'select' },
      options: ['plain', 'thumb', 'feature'],
    },
  },
} as Meta;

const Template: StoryFn<ScLinkStoryArgs> = (args) => {
  const { slotContent, ...otherArgs } = args;
  const link = document.createElement('sc-link') as ScLink;
  Object.assign(link, otherArgs);

  const slotContentNode = document.createTextNode(slotContent);
  link.appendChild(slotContentNode);

  return link;
};


export const Plain = Template.bind({});
Plain.args = {
  template: 'plain',
  slotContent: 'Default Slot Content',
};

export const Thumb = Template.bind({});
Thumb.args = {
  template: 'thumb',
  slotContent: 'Thumbnail Slot Content',
};

export const Feature = Template.bind({});
Feature.args = {
  template: 'feature',
  slotContent: 'Featured Slot Content',
};