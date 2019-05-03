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

const Value = withStyles(styles)(
  ({ classes, value }) => (
    <React.Fragment>
      <dd className={classnames(classes.inline, classes.dd)}>
        <Typography variant="body2" gutterBottom>
          {titleize(value.toString())}
        </Typography>
      </dd>
      <br />
    </React.Fragment>
  )
);

const Attribute = ({ classes, name, value, collection }) => (
  <React.Fragment>
    <dt className={classes.inline}>
      <Typography variant="subtitle2" gutterBottom>
        {name}:
      </Typography>
    </dt>
    {collection
      ? value.map(val => <Value key={val} value={val} />)
      : <Value value={value} />
    }
  </React.Fragment>
);

Attribute.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
  ]).isRequired,
  collection: PropTypes.bool,
};

Attribute.defaultProps = {
  collection: false,
};

export default withStyles(styles)(Attribute);
