import { createMuiTheme } from '@material-ui/core/styles';

// rgb(99,137,258)

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#6389ff",
    },
    secondary: {
      main: "#d5d9e6",
    },
  },

  background: {
    paper: "#fff",
    default: "#f4f6f9",
  }
});

export default theme;
