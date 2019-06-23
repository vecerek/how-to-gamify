import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';
import grey from '@material-ui/core/colors/grey';
import red from '@material-ui/core/colors/red';

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
  feature: {
    important: {
      primary: green[500],
      secondary: green[50],
    },
    notImportant: {
      primary: grey[700],
      secondary: grey[200],
    },
  },
});
