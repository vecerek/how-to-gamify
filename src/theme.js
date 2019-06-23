import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';

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
  indicator: {
    match: green[500],
    partial: '#ffcc33',
    mismatch: red[500],
    extra: blue[500],
  },
});
