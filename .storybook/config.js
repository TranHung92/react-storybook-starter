import {
  configure,
  addDecorator
} from "@storybook/react";
import {
  configureViewport
} from '@storybook/addon-viewport';
import {
  withKnobs,
} from "@storybook/addon-knobs/react";
addDecorator(withKnobs);

function loadStories() {
  require('../src/Stories/index.ts')
  // You can require as many stories as you need.
}

configure(loadStories, module);