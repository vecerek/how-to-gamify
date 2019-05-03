import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Overview from './components/Overview';
import Features from './components/Features';
import * as actions from '../../../../actions/Results';

const styles = {
  container: {
    display: 'flex',
    height: '355px',
    overflow: 'auto',
  },
  featuresContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    height: 'calc(100% - 2*20px)',
    overflow: 'auto',
  },
};

class DetailsDrawer extends React.Component {
  toggleDrawer = open => () => {
    const { dispatch } = this.props;
    dispatch(actions.toggleDetails(open));
  }

  render() {
    const { classes, open, result } = this.props;

    if (!result) return null;

    const featureCount = Object.keys(result.features).length;

    return (
      <SwipeableDrawer
        anchor="bottom"
        open={open}
        onClose={this.toggleDrawer(false)}
        onOpen={this.toggleDrawer(true)}
      >
        <div
          className={classes.container}
          tabIndex={0}
          role="button"
        >
          <Overview result={result} />
          <div className={classes.featuresContainer}>
            <Features
              variant="match"
              features={result.matchedFeatures}
              count={featureCount}
            />
            <Features
              variant="partial"
              features={result.partiallyMatchedFeatures}
              count={featureCount}
            />
            <Features
              variant="mismatch"
              features={result.missingFeatures}
              count={featureCount}
            />
            <Features
              variant="extra"
              features={result.extraFeatures}
              count={featureCount}
            />
          </div>
        </div>
      </SwipeableDrawer>
    );
  }
}

const mapStateToProps = state => ({
  open: state.results.details.open,
  result: state.results.details.result,
});

DetailsDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(DetailsDrawer));
