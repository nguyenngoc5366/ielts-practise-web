import { LineWeightOutlined } from '@mui/icons-material';
import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
import { indigo, cyan, teal, green } from '@mui/material/colors'
const EASE_IN_OUT = 'cubic-bezier(0.4, 0, 0.2, 1)'

// Create a theme instance.
const theme = extendTheme({
  appCustom:{
    bgMainLight: '#F1FFEF',
    bgBaseLight: '#FFDCCC',
    bgBaseDark: '#2c2624',
    bgMainDark: '#282c28'
  },
  spacing: (factor) => `${0.25 * factor}rem`,
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(',')
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#164C7E'
        },
        secondary: {
          main: '#43a047'
        },
        text: {
          primary: '#2C333A'
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: '#81b7e9'
        },
        secondary: {
          main: '#5dbb62'
        },
        text: {
          primary: 'white'
        },
      }
    }
  },
  // colorSchemes: {
  //   light: {
  //     palette: {
  //       primary: indigo,
  //       secondary: green,
  //       text: '#2C333A',
  //     },
  //   },
  //   dark: {
  //     palette: {
  //       primary: cyan,
  //       secondary: teal,
  //       text: 'white'
  //     }
  //   }
  // },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '*::-webkit-scrollbar': {
            width: '6px',
            height: '6px'
          },
          // '*::-webkit-scrollbar-track': {
          //   backgroundColor: '#ecf0f1'
          // },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#ced0da',
            borderRadius: '8px'
          },
          '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#bfc2cf',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '6px'
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          '&.MuiTypography-body1': { fontSize: '18px', lineHeight: '24px' },
          '&.MuiTypography-body2': { fontSize: '14px' }
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: '0.875rem'
        }
      }
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          transition: 'all',
          transitionTimingFunction: EASE_IN_OUT,
          transitionDuration: '.3s',
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({theme}) => ({
          borderRadius: 6,
          '&:hover fieldset': {
            borderWidth: '1px !important'
          },
          '&.Mui-focused fieldset': {
            borderWidth: '1px !important'
          },
          '& fieldset': {
            transition: 'all',
            transitionTimingFunction: 'linear',
            transitionDuration: '.2s',
            borderWidth: '.5px !important'
          },
        }),
        input: {
          padding: '8px 8px 8px 12px',
          fontSize: '16px',
          color: (theme) => theme.palette.mode == 'dark' ? 'white' : '#2C333A'
        }
      }
    }
  }
});

export default theme