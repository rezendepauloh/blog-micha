export const theme = {
  colors: {
    primary: '#0A1128',
    secondary: '#dc143c',
    secondaryTwo: '#f93213',
    white: '#f5f5f6',
    whiteTwo: '#ffffff',
    mediumGray: '#2d2d2d',
  },
  font: {
    family: {
      default: "'Josefin Sans', 'Open Sans', sans-serif",
      secondary: "'Montserrat', sans-serif",
    },
    sizes: {
      xsmall: '0.8rem',
      small: '1.6rem',
      medium: '2.4rem',
      large: '3.2rem',
      xlarge: '4.0rem',
      xxlarge: '4.8rem',
      huge: '5.6rem',
      xhuge: '6.4rem',
    },
  },
  media: {
    xsmall: '(max-width: 575.98px)',
    small: '(max-width: 767.98px)',
    lteMedium: '(max-width: 768px)',
    medium: '(max-width: 991.98px)',
    large: '(max-width: 1199.98px)',
  },
  spacings: {
    xsmall: '0.8rem',
    small: '1.6rem',
    medium: '2.4rem',
    large: '3.2rem',
    xlarge: '4.0rem',
    xxlarge: '4.8rem',
    huge: '5.6rem',
    xhuge: '6.4rem',
  },
} as const;
