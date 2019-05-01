import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Recommender from '../../../../lib/recommender';
import * as actions from '../../../../actions/GetStarted';

const styles = theme => ({
  targetContainer: {
    flexGrow: 1,
    margin: '50px 0',
  },
  descriptionContainer: {
    alignSelf: 'flex-start',
    margin: '30px 0 50px 0',
  },
  nextContainer: {
    alignSelf: 'center',
    marginBottom: '15px',
    textAlign: 'center',
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'left',
    color: '#111',
  },
  btn: {
    margin: theme.spacing.unit,
  },
});

const titleize = s => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

class targetStep extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chosenTargets: [],
    };
  }

  handleCheck = name => ({ target: { checked } }) => {
    this.setState(({ chosenTargets }) => ({
      chosenTargets: checked
        ? chosenTargets.concat([name])
        : chosenTargets.filter(d => d !== name),
    }));
  }

  handleNext = () => {
    const { dispatch } = this.props;
    dispatch(actions.registerTargets(this.state.chosenTargets));
  }

  render() {
    const { classes } = this.props;
    const { chosenTargets } = this.state;

    return (
      <Step {...this.props.ownProps}>
        <StepLabel>Select who will use the framework</StepLabel>
        <StepContent>
          <Typography>
            Who will work on the gamification design in your project?
          </Typography>
          <Typography variation="caption">
            <i>
              Tip: Think of skills rather than profession. If none of the below describe the person, choose 'General' or the closest option.
              <br />
              Multiple options can be chosen.
            </i>
          </Typography>
          <div className={classes.targetContainer}>
            <Grid container spacing={24}>
              {Recommender.availableTargets().map(target => (
                <Grid item xs={12} sm={6} key={target}>
                  <Paper className={classes.paper}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={chosenTargets.includes(target)}
                          onChange={this.handleCheck(target)}
                          value={target}
                          color="primary"
                        />
                      }
                      label={titleize(target)}
                    />
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </div>
          <div className={classes.nextContainer}>
            <Button
              variant="contained"
              size="medium"
              color="primary"
              className={classes.btn}
              onClick={() => this.handleNext()}
            >
              Next
            </Button>
          </div>
        </StepContent>
      </Step>
    );
  }
}

const mapStateToProps = (_, ownProps) => ({ ownProps });

targetStep.propTypes = {
  ownProps: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(targetStep));
