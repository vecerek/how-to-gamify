import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import classnames from 'classnames';
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
    height: '200vh',
    justifyContent: 'space-between',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      height: '100vh',
    },
  },
  stepperContainer: {
    flex: '1 1 100%',
    minWidth: '0',
    order: '0',
    [theme.breakpoints.up('md')]: {
      overflow: 'auto',
      padding: '50px',
    },
  },
  reviewContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    height: 'calc(100vh - 2*50px)',
    justifyContent: 'center',
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
          <div className={classnames(classes.stepperContainer, classes.reviewContainer)}>
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
