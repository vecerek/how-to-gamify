import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = {
  overview: {
    borderRight: '1px solid #ccc',
    flex: '0 1 25%',
    minWidth: '200px',
    padding: '20px',
  },
  inline: {
    display: 'inline-block',
  },
  dd: {
    marginInlineStart: '10px',
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
      <dt className={classes.inline}>
        <Typography variant="subtitle2" gutterBottom>Title:</Typography>
      </dt>
      <dd className={classnames(classes.inline, classes.dd)}>
        <Typography variant="body2" gutterBottom>
          {framework.displayName}
        </Typography>
      </dd>
      <br />
      <dt className={classes.inline}>
        <Typography variant="subtitle2" gutterBottom>Authors:</Typography>
      </dt>
      <dd className={classnames(classes.inline, classes.dd)}>
        <Typography variant="body2" gutterBottom>
          {framework.displayAuthor}
        </Typography>
      </dd>
      <br />
      <dt className={classes.inline}>
        <Typography variant="subtitle2" gutterBottom>Year:</Typography>
      </dt>
      <dd className={classnames(classes.inline, classes.dd)}>
        <Typography variant="body2" gutterBottom>
          {framework.year}
        </Typography>
      </dd>
      <br />
      <dt className={classes.inline}>
        <Typography variant="subtitle2" gutterBottom>Application area:</Typography>
      </dt>
      <dd className={classnames(classes.inline, classes.dd)}>
        <Typography variant="body2" gutterBottom>
          {Array.from(framework.domains).join(', ')}
        </Typography>
      </dd>
      <br />
      <dt className={classes.inline}>
        <Typography variant="subtitle2" gutterBottom>Target:</Typography>
      </dt>
      <dd className={classnames(classes.inline, classes.dd)}>
        <Typography variant="body2" gutterBottom>
          {Array.from(framework.targets).join(', ')}
        </Typography>
      </dd>
      <br />
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
