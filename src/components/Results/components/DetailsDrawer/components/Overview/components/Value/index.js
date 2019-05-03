import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { titleize } from '../../../../../../../../lib/formatting';

const styles = {
  inline: {
    display: 'inline-block',
  },
  dd: {
    marginInlineStart: '10px',
  },
};

const Value = ({ classes, children, indicator }) => (
  <React.Fragment>
    <dd className={classnames(classes.inline, classes.dd)}>
      <Typography variant="body2" gutterBottom>
        {titleize(children.toString())}
        {indicator}
      </Typography>
    </dd>
    <br />
  </React.Fragment>
);

Value.propTypes = {
  classes: PropTypes.object.isRequired,
  indicator: PropTypes.element,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

Value.defaultProps = {
  indicator: null,
};

export default withStyles(styles)(Value);
