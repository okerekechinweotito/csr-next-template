import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        overflowX: 'hidden',
        backgroundColor: 'neutral.white',
        color: 'neutral.mateBlack !important',
      },
    },
  },

  fonts: {
    heading: 'Wulkan Display',
    body: 'Franklin Gothic Book',
  },

  fontSizes: {
    sm: '14px',
    md: '16px',
    lg: '20px',
    xl: '24px',
  },
  colors: {
    brand: {
      primary: '#ECECE3',
      secondary: '#CF5C36',
      tertiary: '#F0F0F0',
    },
    accent: {
      turquoise: '#3F7CAC',
      skyblue: '#285943',
      tangerine: '#F24236',
      heliotrope: '#162B3C',
      footer: '#FEBE1E',
    },
    neutral: {
      black: '#17181C',
      mateBlack: '#333',
      bodyText: '#747A8B',
      border: '#C7CAD1',
      inactive: '#EBECEF',
      white: '#FFFF',
    },
  },
});

export default theme;
