import type { Meta, StoryFn } from '@storybook/web-components';
import './ScCard.ts';
import { ScCard } from './ScCard';

type ScCardStoryArgs = Partial<ScCard> & { slotContent: string };

export default {
  title: 'Components/sc-card',
  component: 'sc-card',
  tags: ['autodocs'],
  argTypes: {
    template: {
      control: { type: 'select' },
      options: ['plain', 'thumb', 'feature'],
    },
  },
} as Meta;

const Template: StoryFn<Partial<ScCard>> = (args) => {
  const card = document.createElement('sc-card') as ScCard;
  Object.assign(card, args);
  return card;
};

export const Plain = Template.bind({});
Plain.args = {
  template: 'plain',
  imageSrc: 'https://picsum.photos/seed/picsum/200/200',
  cardTitle: 'Lorem ipsum dolor sit amet',
  cardBody: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis tincidunt id aliquet risus. Nascetur ridiculus mus mauris vitae ultricies leo. Euismod elementum nisi quis eleifend quam adipiscing. Congue mauris rhoncus aenean vel elit scelerisque.',
};

export const Thumb = Template.bind({});
Thumb.args = {
  template: 'thumb',
  imageSrc: 'https://picsum.photos/seed/picsum/500/500',
  cardTitle: 'Lorem ipsum dolor sit amet',
  cardBody: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis tincidunt id aliquet risus. Nascetur ridiculus mus mauris vitae ultricies leo. Euismod elementum nisi quis eleifend quam adipiscing. Congue mauris rhoncus aenean vel elit scelerisque.',
};

export const Feature = Template.bind({});
Feature.args = {
  template: 'feature',
  imageSrc: 'https://picsum.photos/seed/picsum/1280/800',
  cardTitle: 'Lorem ipsum dolor sit amet',
  cardBody: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis tincidunt id aliquet risus. Nascetur ridiculus mus mauris vitae ultricies leo. Euismod elementum nisi quis eleifend quam adipiscing. Congue mauris rhoncus aenean vel elit scelerisque.',
};
