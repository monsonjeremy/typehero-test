import type { Meta } from '@storybook/react';
import Component from './rendition/Preview';

const meta: Meta<typeof Component> = {
  component: Component,
};

export default meta;

export const Preview = {
  render: () => <Component />,
};
