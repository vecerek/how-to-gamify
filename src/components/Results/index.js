import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import BackIcon from '@material-ui/icons/KeyboardArrowLeft';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Result from './components/Result';
import Sidebar from '../GetStarted/components/Sidebar';
import DetailsDrawer from './components/DetailsDrawer';
import * as actions from '../../actions/Results';

const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
  },
  resultsContainer: {
    display: 'flex',
    flex: '1 1 100%',
    flexDirection: 'column',
    maxWidth: '1180px',
    order: '2',
    overflow: 'auto',
    padding: '50px',
    paddingTop: '15px',
    [theme.breakpoints.up('md')]: {
      height: 'calc(100vh - 15px - 50px)',
    },
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '35px',
    width: '100%',
  },
  btn: {
    margin: theme.spacing.unit,
  },
});

class Results extends React.Component {
  state = {
    showConfiguration: false,
  }

  componentWillMount() {
    const { dispatch, isConfigured } = this.props;

    if (!isConfigured) {
      return dispatch(push('/get-started'));
    }

    dispatch(actions.recommendFrameworks());
  }

  switchConfiguration = () => () => {
    this.setState(prevState => ({
      showConfiguration: !prevState.showConfiguration
    }));
  };

  render() {
    const { classes, recommendations } = this.props;
    const { showConfiguration } = this.state;

    return (
      <React.Fragment>
        <div className={classes.container}>
          <div className={classes.resultsContainer}>
            <div className={classes.toolbar}>
              <Button
                size="small"
                className={classes.btn}
                href="/"
              >
                <BackIcon style={{ marginLeft: '5px' }} />
                Back to home
              </Button>
              <FormControlLabel
                control={
                  <Switch
                    checked={showConfiguration}
                    onChange={this.switchConfiguration()}
                    value="configurationVisibility"
                    color="primary"
                  />
                }
                label="Show requirements"
              />
            </div>
            <Grid container spacing={24}>
              {recommendations.map(recommendation =>
                <Grid item xs={12} sm={6} md={4} key={recommendation.other.id}>
                  <Result data={recommendation} />
                </Grid>
              )}
            </Grid>
          </div>
          {showConfiguration && <Sidebar locked />}
        </div>
        <DetailsDrawer />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  recommendations: state.results.recommendations,
  isConfigured: state.getStarted.userDefinedFramework.features.length !== 0,
});

Results.propTypes = {
  recommendations: PropTypes.array,
};

export default connect(mapStateToProps)(withStyles(styles)(Results));
