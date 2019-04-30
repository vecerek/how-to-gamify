import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions/GetStarted';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import FeatureStep from './components/FeatureStep';
import DomainStep from './components/DomainStep';
import TargetStep from './components/TargetStep';
import Sidebar from './components/Sidebar';

const styles = {
  container: {
    display: 'flex',
  },
  stepperContainer: {
    margin: '0 auto',
    maxWidth: '920px',
    padding: '50px',
    width: '100%',
  },
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
        <div className={classes.stepperContainer}>
          <Stepper activeStep={activeStep} orientation="vertical">
            <FeatureStep />
            <DomainStep />
            <TargetStep />
          </Stepper>
        </div>
        <Sidebar />
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
