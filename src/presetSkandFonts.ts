import { Preset, presetWebFonts } from 'unocss';

export const presetSkandFonts = (): Preset => {
  return {
    name: 'presetSkandFonts',

    presets: [
      presetWebFonts({
        provider: 'google',
        fonts: {
          sans: ['Raleway', 'Roboto'],
        },
      }),
    ],
  };
};
