import * as icons from '@skand/icons';
import { Preset, presetIcons } from 'unocss';

export const presetSkandIcons = (): Preset => {
  return {
    name: 'presetSkandIcons',

    presets: [
      presetIcons({
        collections: {
          skand: icons,
        },
      }),
    ],
  };
};
