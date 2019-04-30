import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { titleize } from '../../../../lib/formatting';
import * as actions from '../../../../actions/GetStarted';

const styles = theme => ({
  container: {
    backgroundColor: '#f8f8f8',
    minWidth: '320px',
    padding: '20px',
    width: '20%',
  }
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

  render() {
    const { classes, framework } = this.props;

    return (
      <div className={classes.container}>
        <Typography variant="h6" gutterBottom>
          Framework under construction
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
                indeterminate={value === 'I' ? true : null}
                color="primary"
              />
            }
            label={titleize(id)}
          />
        ))}
        <Typography variant="subtitle1" gutterBottom>
          Domains:
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Targets:
        </Typography>
      </div>
    );
  }
}

const mapStateToProps = ({ getStarted: state }) => ({
  framework: state.userDefinedFramework,
});

Sidebar.propTypes = {
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

