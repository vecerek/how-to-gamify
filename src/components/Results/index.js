import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { withStyles } from '@material-ui/core/styles';
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
    height: '100vh',
    justifyContent: 'space-between',
  },
  resultsContainer: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'auto',
    padding: '50px',
    paddingTop: '15px',
  },
  switch: {
    alignSelf: 'flex-end',
    marginBottom: '35px',
  }
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
            <FormControlLabel
              className={classes.switch}
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
            <Grid container spacing={24}>
              {recommendations.map(recommendation =>
                <Grid item xs={12} sm={4} key={recommendation.other.id}>
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
