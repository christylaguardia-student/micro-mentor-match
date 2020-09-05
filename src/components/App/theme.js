import { createMuiTheme } from '@material-ui/core/styles';

/**
 * Color Palete Theme:
 * https://material.io/resources/color/#!/?view.left=0&view.right=1&primary.color=00BCD4&secondary.color=DCEDC8
 *
 * Colors: Panatone Snorkel
 * https://www.pantone.com/color-intelligence/color-of-the-year/color-of-the-year-2020-palette-exploration
 *
 * Cashmere Blue #a5b8d0
 * Pink Tint #dbcbbd
 * Classic Blue #34548a
 * Coralessence #f46f60
 * Coconut Milk #f0ece3
 * Pirate Black #3a3e3f
 * LimePunch #b6cb3e
 */

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#a5b8d0",
      light: "#d7eaff",
      dark: "#76889f",
      contrastText: "#3a3e3f",
    },
    secondary: {
      main: "#dbcbbd",
      light: "#ffa08e",
      dark: "#bc3e36",
      contrastText: "#3a3e3f",
    },
    error: {
      main: "#f46f60",
      light: "#ebfe70",
      dark: "#839a00",
      contrastText: "#3a3e3f",
    },
    success: {
      main: "#b6cb3e",
      light: "#ebfe70",
      dark: "#839a00",
      contrastText: "#3a3e3f",
    }
  },
  background: {
    paper: "#fff",
    default: "#f0ece3",
  },
});

export default theme;
