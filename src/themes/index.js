import { createTheme } from '@mui/material/styles'

export function theme(customization) {

  return createTheme({
    palette: {
      background: {
        white: '#ffffff',
        primary: '#1482D2',
        secondary: '#F5AB0C',
        black: 'rgb(0,0,0)',
        auto: '#FFDFD2',
        life: '#D4E5FB',
        travel: '#FDEDC9',
        health: '#FFDAED'
      },
      primary: {
        main: '#1482D2' // blue
      },
      secondary: {
        main: '#F5AB0C' // yellow
      },
      tertiary: {
        main: '#F85276',  // pink
        light: '#FFE9EE'
      },
      text: {
        primary: '#000000',
        secondary: '#707070',
        disabled: '#CECECE',
        nav: "#2A2B40"
      },
      error: {
        main: '#EF392E'
      },
      success: {
        main: '#57BC3C'
      }
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920
      }
    },
    typography: {
      button: {
        textTransform: "normal",
      },
      h1: {
        fontWeight: 600,
      },
      h2: {
        fontWeight: 600
      },
      h3: {
        fontWeight: 600,
        fontSize: 24
      },
      h4: {
        fontWeight: 600,
        fontSize: 20
      },
      h5: {
        fontWeight: 600,
        fontSize: 16
      },
      h6: {
        fontWeight: 600,
        fontSize: 14
      },
      subtitle1: {
        fontWeight: 400
      },
      subtitle2: {
        fontWeight: 400
      },
      caption: {
        fontWeight: 400
      },
      body1: {
        fontWeight: 500,
        fontSize: 16
      },
      body2: {
        fontWeight: 500,
        fontSize: 14
      }
    },
    components: {
      MuiInputBase: {
        styleOverrides: {
          root: {
            boxShadow: "0px 4px 8px #2c27380a",
            border: "1px solid #dbe2ea",
            borderRadius: "6px",
          },
        }
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            border: "none",
          },
          notchedOutline: {
            borderColor: "#dbe2ea",
          }
        }
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            fontFamily: "Poppins"
          }
        }
      },
      MuiAutocomplete: {
        input: {
          padding: "28px"
        }
      }
    }
  })
}