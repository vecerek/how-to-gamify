import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      main: '#ffcc33',
      contrastText: '#fff',
    },
    secondary: {
      main: '#ffb347',
      contrastText: '#fff',
    },
  },
});
