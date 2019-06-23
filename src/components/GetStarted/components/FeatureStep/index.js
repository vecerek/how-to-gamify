import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import green from '@material-ui/core/colors/green';
import * as actions from '../../../../actions/GetStarted';

const styles = theme => ({
  featureContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  descriptionContainer: {
    alignSelf: 'flex-start',
    margin: '30px 0 50px 0',
    minHeight: '145px',
  },
  answerContainer: {
    alignSelf: 'center',
    marginBottom: '15px',
    textAlign: 'center',
  },
  featureName: {
    fontSize: '3rem',
    fontWeight: '100',
    marginBottom: '15px',
  },
  btn: {
    margin: theme.spacing.unit,
  },
  btnImportant: {
    color: green[500],
    borderColor: green[500],
    '&:hover': {
      backgroundColor: '#4caf5014',
      borderColor: green[500],
    },
  },
  btnNotImportant: {
    color: '#0000008a',
    borderColor: '#0000008a',
    '&:hover': {
      backgroundColor: '#00000014',
      borderColor: '#0000008a',
    },
  },
});

const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

const titleize = feature => capitalize(feature).replace('_', ' ');

class FeatureStep extends React.Component {
  constructor(props) {
    super(props);

    this.handleAnswer = this.handleAnswer.bind(this);
  }

  handleAnswer(feature, answer) {
    const { dispatch } = this.props;
    dispatch(actions.registerFeature(feature, answer));
  }

  render() {
    const {
      classes,
      isLoading,
      currentFeature,
      currentFeatureNumber,
      totalFeatures
    } = this.props;

    const showContent = !isLoading && currentFeatureNumber <= totalFeatures;

    return (
      <Step {...this.props.ownProps}>
        <StepLabel>Select the features you need</StepLabel>
        <StepContent>
          <Typography>
            In this step, you will be presented with numerous features a gamification design framework might incorporate in its methodologies. Based on your project requirements, select how much in detail should the framework tackle the particular feature.
          </Typography>
          {showContent && (
            <React.Fragment>
              <div className={classes.featureContainer} >
                <div className={classes.descriptionContainer}>
                  <Typography
                    variant="h5"
                    className={classes.featureName}
                  >
                    {titleize(currentFeature.id)}
                  </Typography>
                  <Typography
                  >
                    Description: {currentFeature.description}
                  </Typography>
                </div>
                <div className={classes.answerContainer}>
                  <Button
                    variant="outlined"
                    size="large"
                    color="primary"
                    className={classnames(classes.btn, classes.btnNotImportant)}
                    onClick={() => this.handleAnswer(currentFeature, 'U')}
                  >
                    Not important
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    color="primary"
                    className={classes.btn}
                    onClick={() => this.handleAnswer(currentFeature, 'I')}
                  >
                    Might come in handy
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    color="primary"
                    className={classnames(classes.btn, classes.btnImportant)}
                    onClick={() => this.handleAnswer(currentFeature, 'E')}
                  >
                    Very important
                  </Button>
                </div>
              </div>
              <Typography align="center" variant="caption">
                Feature: {currentFeatureNumber} of {totalFeatures}
              </Typography>
            </React.Fragment>
          )}
        </StepContent>
      </Step>
    );
  }
}

const mapStateToProps = ({ getStarted: state }, ownProps) => ({
  isLoading: state.isLoading,
  currentFeature: state.features[state.currentFeatureIndex],
  currentFeatureNumber: state.currentFeatureIndex + 1,
  totalFeatures: state.features.length,
  ownProps
});

FeatureStep.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  currentFeature: PropTypes.shape({
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
  currentFeatureNumber: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(FeatureStep));
