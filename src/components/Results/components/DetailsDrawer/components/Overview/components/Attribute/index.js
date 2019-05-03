import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = {
  inline: {
    display: 'inline-block',
  },
};

const Attribute = ({ classes, name, children }) => (
  <React.Fragment>
    <dt className={classes.inline}>
      <Typography variant="subtitle2" gutterBottom>
        {name}:
      </Typography>
    </dt>
    {children}
  </React.Fragment>
);

Attribute.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default withStyles(styles)(Attribute);
