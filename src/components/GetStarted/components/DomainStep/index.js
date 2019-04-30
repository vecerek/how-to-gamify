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
  domainContainer: {
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

class DomainStep extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chosenDomains: [],
    };
  }

  handleCheck = name => ({ target: { checked } }) => {
    this.setState(({ chosenDomains }) => ({
      chosenDomains: checked
        ? chosenDomains.concat([name])
        : chosenDomains.filter(d => d !== name),
    }));
  }

  handleNext = () => {
    const { dispatch } = this.props;
    dispatch(actions.registerDomains(this.state.chosenDomains));
  }

  render() {
    const { classes } = this.props;
    const { chosenDomains } = this.state;

    return (
      <Step {...this.props.ownProps}>
        <StepLabel>Select the framework's domain</StepLabel>
        <StepContent>
          <Typography>
            Which of the following domains are the closest to your project?
          </Typography>
          <Typography variation="caption">
            <i>Note: You may choose multiple domains.</i>
          </Typography>
          <div className={classes.domainContainer}>
            <Grid container spacing={24}>
              {Recommender.availableDomains().map(domain => (
                <Grid item xs={12} sm={6} key={domain}>
                  <Paper className={classes.paper}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={chosenDomains.includes(domain)}
                          onChange={this.handleCheck(domain)}
                          value={domain}
                          color="primary"
                        />
                      }
                      label={titleize(domain)}
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

DomainStep.propTypes = {
  ownProps: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(DomainStep));
