import { Meta, Story } from '@storybook/react';
import Main from '.';

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'React Avançado',
    description: 'Crie aplicações reais com NextJS, Strapi, GraphQL e mais!',
    illustrationSrc:
      'https://d33wubrfki0l68.cloudfront.net/cf9dfe86983925690340feb07037ee260f872e34/74dff/img/hero-illustration.svg'
  }
} as Meta;

export const Basic: Story = (args) => <Main {...args} />;
