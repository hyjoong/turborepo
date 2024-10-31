import baseConfig from '@repo/ui/tailwind.config';
import type { Config } from 'tailwindcss';

const webConfig = {
  ...baseConfig,
  presets: [baseConfig],
  theme: {
    ...baseConfig.theme,
    extend: {
      ...(baseConfig.theme?.extend || {}),
      fontFamily: {
        pretendard: ['Pretendard'],
      },
      typography: {
        DEFAULT: {
          css: {
            blockquote: {
              borderLeftColor: '#3B82F6',
              backgroundColor: '#EDEDED',
              'h1, h2, h3, h4, p': {
                padding: '0.5rem 0.5rem 0.5rem 0',
              },
            },
          },
        },
        invert: {
          css: {
            blockquote: {
              backgroundColor: '#363636',
            },
          },
        },
      },
    },
  },
  plugins: [...(baseConfig.plugins || []), require('@tailwindcss/typography')],
} satisfies Config;

export default webConfig;
