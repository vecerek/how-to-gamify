import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import green from '@material-ui/core/colors/green';
import { titleize } from '../../../../lib/formatting';
import * as actions from '../../../../actions/GetStarted';

const styles = theme => ({
  container: {
    backgroundColor: '#f8f8f8',
    flex: '1 1 100%',
    height: '100%',
    order: '1',
    padding: '50px',
    [theme.breakpoints.up('md')]: {
      flex: '0 1 450px',
      height: 'calc(100vh - 2 * 50px)',
      overflow: 'auto',
    },
  },
  chip: {
    margin: theme.spacing.unit,
  },
  divider: {
    marginBottom: theme.spacing.unit,
    marginTop: theme.spacing.unit,
  },
  checked: {
    color: green[500],
    '&$checked': {
      color: green[500],
    },
  },
});

class Sidebar extends React.Component {
  handleCheck = (feature, currentValue) => () => {
    const { dispatch } = this.props;
    const values = ['U', 'I', 'E'];
    const currentIndex = values.indexOf(currentValue);
    const nextIndex = values.length === currentIndex + 1
      ? 0
      : currentIndex + 1;
    const nextValue = values[nextIndex];

    dispatch(actions.updateFeature(feature, nextValue));
  }

  handleDeleteDomain = (d) => () => {
    const { dispatch } = this.props;
    dispatch(actions.removeDomain(d));
  }

  handleDeleteTarget = (t) => () => {
    const { dispatch } = this.props;
    dispatch(actions.removeTarget(t));
  }

  render() {
    const { classes, framework, locked } = this.props;

    return (
      <div className={classes.container}>
        <Typography variant="h6" gutterBottom>
          Requirements
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Features:
        </Typography>
        {framework.features.map(({ id, value }) => (
          <FormControlLabel
            key={id}
            control={
              <Checkbox
                checked={value !== 'U'}
                onChange={this.handleCheck(id, value)}
                value={id}
                disabled={!!locked}
                indeterminate={value === 'I' ? true : null}
                className={classnames({
                  [classes.checked]: value === 'E' && !locked,
                })}
                color="primary"
              />
            }
            label={titleize(id)}
          />
        ))}
        <Divider className={classes.divider} />
        <Typography variant="subtitle1" gutterBottom>
          Domains:
        </Typography>
        {framework.domains.map(d => (
          <Chip
            key={d}
            label={titleize(d)}
            onDelete={locked ? null : this.handleDeleteDomain(d)}
            className={classes.chip}
          />
        ))}
        <Divider className={classes.divider} />
        <Typography variant="subtitle1" gutterBottom>
          Targets:
        </Typography>
        {framework.targets.map(t => (
          <Chip
            key={t}
            label={titleize(t)}
            onDelete={locked ? null : this.handleDeleteTarget(t)}
            className={classes.chip}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ getStarted: state }) => ({
  framework: state.userDefinedFramework,
});

Sidebar.propTypes = {
  locked: PropTypes.bool,
  framework: PropTypes.shape({
    features: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        value: PropTypes.string,
      }),
    ),
    domains: PropTypes.arrayOf(PropTypes.string),
    targets: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(Sidebar));

