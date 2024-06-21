import * as variables from '@skand/variables';
import { Preset } from 'unocss';

export const theme = {
  colors: {
    alert: {
      100: variables.colorAlert100,
      200: variables.colorAlert200,
      300: variables.colorAlert300,
      400: variables.colorAlert400,
    },
    info: {
      100: variables.colorInfo100,
      200: variables.colorInfo200,
      300: variables.colorInfo300,
      400: variables.colorInfo400,
    },
    neutral: {
      100: variables.colorNeutral100,
      200: variables.colorNeutral200,
      300: variables.colorNeutral300,
      400: variables.colorNeutral400,
      500: variables.colorNeutral500,
      600: variables.colorNeutral600,
      700: variables.colorNeutral700,
      800: variables.colorNeutral800,
    },
    primary: {
      100: variables.colorPrimary100,
      200: variables.colorPrimary200,
      300: variables.colorPrimary300,
      400: variables.colorPrimary400,
      500: variables.colorPrimary500,
    },
    skandI: {
      100: variables.colorSkandv1100,
      200: variables.colorSkandv1200,
      300: variables.colorSkandv1300,
      400: variables.colorSkandv1400,
      500: variables.colorSkandv1500,
    },
    success: {
      100: variables.colorSuccess100,
      200: variables.colorSuccess200,
      300: variables.colorSuccess300,
      400: variables.colorSuccess400,
    },
    warning: {
      100: variables.colorWarning100,
      200: variables.colorWarning200,
      300: variables.colorWarning300,
      400: variables.colorWarning400,
    },
  },
  spacing: {
    1: variables.spacing1x,
    2: variables.spacing2x,
    3: variables.spacing3x,
    4: variables.spacing4x,
    5: variables.spacing5x,
    6: variables.spacing6x,
    7: variables.spacing7x,
    8: variables.spacing8x,
  },
  borderRadius: {
    1: variables.borderRadius1x,
    2: variables.borderRadius2x,
    3: variables.borderRadius3x,
    4: variables.borderRadius4x,
  },
};

export interface PresetOptions {
  includeReset?: boolean;
}

export const presetSkandBase = ({ includeReset }: PresetOptions = {}): Preset => {
  return {
    name: 'presetSkandBase',
    preflights: [
      {
        getCSS: () => {
          return includeReset
            ? `*, *:before, *:after { box-sizing: border-box; margin: 0; padding: 0; }`
            : undefined;
        },
      },
    ],
    theme,
    rules: [
      ['typo-button-xs', { font: variables.typographyTextXsButton }],
      ['typo-heading-1', { font: variables.typographyHeadingOne }],
      ['typo-heading-2', { font: variables.typographyHeadingTwo }],
      ['typo-heading-3', { font: variables.typographyHeadingThree }],
      ['typo-heading-4', { font: variables.typographyHeadingFour }],
      ['typo-link-m', { font: variables.typographyLinkMedium }],
      ['typo-link-s', { font: variables.typographyLinkSmall }],
      ['typo-link-xs', { font: variables.typographyLinkXs }],
      ['typo-link-xxs', { font: variables.typographyLinkXxs }],
      ['typo-text-l', { font: variables.typographyTextLarge }],
      ['typo-text-m-em', { font: variables.typographyTextMediumEmphasis }],
      ['typo-text-m', { font: variables.typographyTextMedium }],
      ['typo-text-s-em', { font: variables.typographyTextSmallEmphasis }],
      ['typo-text-s', { font: variables.typographyTextSmall }],
      ['typo-text-xs-em', { font: variables.typographyTextXsEmphasis }],
      ['typo-text-xs', { font: variables.typographyTextXs }],
      ['typo-text-xxs-em', { font: variables.typographyTextXxsEmphasis }],
      ['typo-text-xxs', { font: variables.typographyTextXxs }],

      ['typo-link-medium', { font: variables.typographyLinkMedium }],
      ['typo-link-small', { font: variables.typographyLinkSmall }],
      ['typo-text-large', { font: variables.typographyTextLarge }],
      ['typo-text-medium-em', { font: variables.typographyTextMediumEmphasis }],
      ['typo-text-medium', { font: variables.typographyTextMedium }],
      ['typo-text-small-em', { font: variables.typographyTextSmallEmphasis }],
      ['typo-text-small', { font: variables.typographyTextSmall }],

      ['inborder-transparent', { '--skand-inborder-color': 'transparent' }],
      [
        /^inborder-(\d+)$/,
        match => {
          const [, width] = match;
          return {
            '--skand-inborder-width': `${width}px`,
          };
        },
      ],
      [
        /^inborder-([A-Za-z]+)-(\d+)$/,
        match => {
          const [, color, shade] = match;
          return {
            '--skand-inborder-color': (theme.colors as Record<string, Record<string, string>>)[
              color
            ][shade],
          };
        },
      ],

      ['outborder-transparent', { '--skand-outborder-color': 'transparent' }],
      [
        /^outborder-(\d+)$/,
        match => {
          const [, width] = match;
          return {
            '--skand-outborder-width': `${width}px`,
          };
        },
      ],
      [
        /^outborder-([A-Za-z]+)-(\d+)$/,
        match => {
          const [, color, shade] = match;
          return {
            '--skand-outborder-color': (theme.colors as Record<string, Record<string, string>>)[
              color
            ][shade],
          };
        },
      ],
      [
        'dual-border',
        {
          'box-shadow':
            'inset 0 0 0 var(--skand-inborder-width) var(--skand-inborder-color), 0 0 0 var(--skand-outborder-width) var(--skand-outborder-color)',
        },
      ],
    ],
  };
};
