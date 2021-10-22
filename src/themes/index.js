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
        primary: '#056866',
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
  })
}