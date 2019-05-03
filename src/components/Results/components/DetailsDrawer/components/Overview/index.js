import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Attribute from './components/Attribute';

const styles = {
  overview: {
    borderRight: '1px solid #ccc',
    flex: '0 1 25%',
    minWidth: '200px',
    padding: '20px',
  },
};

const Overview = ({ classes, framework }) => (
  <div
    id="overview"
    className={classes.overview}
  >
    <Typography variant="subtitle1" gutterBottom>
      Overview
    </Typography>
    <dl>
      <Attribute
        name="Title"
        value={framework.displayName}
      />
      <Attribute
        name="Authors"
        value={framework.displayAuthor}
      />
      <Attribute
        name="Year"
        value={framework.year}
      />
      <Attribute
        name="Application area"
        collection
        value={Array.from(framework.domains)}
      />
      <Attribute
        name="Target"
        collection
        value={Array.from(framework.targets)}
      />
    </dl>
  </div>
);

Overview.propTypes = {
  classes: PropTypes.object.isRequired,
  framework: PropTypes.shape({
    displayName: PropTypes.string,
    displayAuthor: PropTypes.string,
    year: PropTypes.number,
    domains: PropTypes.instanceOf(Set),
    targets: PropTypes.instanceOf(Set),
  }).isRequired,
};

export default withStyles(styles)(Overview);
