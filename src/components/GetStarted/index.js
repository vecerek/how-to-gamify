import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import * as actions from '../../actions/GetStarted';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import FeatureStep from './components/FeatureStep';
import DomainStep from './components/DomainStep';
import TargetStep from './components/TargetStep';
import Sidebar from './components/Sidebar';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  container: {
    display: 'flex',
    height: '100vh',
    justifyContent: 'space-between',
  },
  stepperContainer: {
    margin: '0 auto',
    maxWidth: '920px',
    overflow: 'auto',
    padding: '50px',
    width: '100%',
  },
  reviewContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
  },
  btn: {
    margin: theme.spacing.unit,
  },
})

class GetStarted extends React.Component {
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(actions.loadData());
  }

  handleFinish = () => {
    const { dispatch } = this.props;
    dispatch(push('/results'));
  }

  render() {
    const { classes, activeStep, setupFinished } = this.props;

    const showStepper = !setupFinished;
    const showReview = setupFinished;

    return (
      <div className={classes.container}>
        {showStepper && (
          <div className={classes.stepperContainer}>
            <Stepper activeStep={activeStep} orientation="vertical">
              <FeatureStep />
              <DomainStep />
              <TargetStep />
            </Stepper>
          </div>
        )}
        {showReview && (
          <div className={classes.reviewContainer}>
            <Typography variant="subtitle1">Please, review you configuration in the sidebar and hit 'Finish' when done.</Typography>
            <Button
              className={classes.btn}
              variant="contained"
              size="medium"
              color="primary"
              onClick={() => this.handleFinish()}
            >
              Finish
            </Button>
          </div>
        )}
        <Sidebar />
      </div>
    );
  }
}

const mapStateToProps = ({ getStarted: state }) => ({
  activeStep: state.activeStep,
  setupFinished: state.activeStep === 3,
});

GetStarted.propTypes = {
  activeStep: PropTypes.number.isRequired,
  setupFinished: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(GetStarted));
