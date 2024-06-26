import { Preset } from 'unocss';
import { PresetOptions, presetSkandBase } from './presetSkandBase';
import { presetSkandFonts } from './presetSkandFonts';
import { presetSkandIcons } from './presetSkandIcons';

export const presetSkand = ({ includeReset }: PresetOptions = {}): Preset => {
  return {
    name: 'presetSkand',
    presets: [presetSkandFonts(), presetSkandIcons(), presetSkandBase({ includeReset })],
  };
};
