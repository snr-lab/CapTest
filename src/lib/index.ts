
import { registerPlugin } from '@capacitor/core';

import type { AppPluginsType } from './definitions';

const AppPlugins = registerPlugin<AppPluginsType>(
  'AppPlugins',
);

export * from './definitions';
export { AppPlugins };