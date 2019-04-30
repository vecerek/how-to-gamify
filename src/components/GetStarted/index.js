import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions/GetStarted';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import FeatureStep from './components/FeatureStep';

const styles = {
  container: {
    margin: '50px auto',
    maxWidth: '920px',
    width: '100%',
  }
}

class GetStarted extends React.Component {
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(actions.loadData());
  }

  render() {
    const { classes, activeStep } = this.props;

    return (
      <div className={classes.container}>
        <Stepper activeStep={activeStep} orientation="vertical">
          <FeatureStep />
          <FeatureStep />
          <FeatureStep />
        </Stepper>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  activeStep: state.getStarted.activeStep,
});

GetStarted.propTypes = {
  activeStep: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(GetStarted));
