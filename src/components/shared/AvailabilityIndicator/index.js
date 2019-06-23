import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import WarningIcon from '@material-ui/icons/Warning';
import StarIcon from '@material-ui/icons/Star';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';

const styles = theme => ({
  icon: {
    fontSize: '18px',
    verticalAlign: 'top',
  },
  match: {
    color: theme.indicator.match,
  },
  mismatch: {
    color: theme.indicator.mismatch,
  },
  partial: {
    color: theme.indicator.partial,
  },
  extra: {
    color: theme.indicator.extra,
  }
});

const getIcon = variant => {
  switch(variant) {
    case 'match':
      return CheckIcon;
    case 'mismatch':
      return ClearIcon;
    case 'partial':
      return WarningIcon;
    case 'extra':
      return StarIcon;
    default:
      throw new Error('Not implemented');
  }
}

const AvailabilityIndicator = ({ classes, variant, position }) => {
  const Icon = getIcon(variant);
  const inlineStyle = position === 'left'
    ? { marginRight: '5px' }
    : { marginLeft: '5px' };

  return (
    <Icon
      className={classnames(classes.icon, classes[variant])}
      style={inlineStyle}
    />
  );
};

AvailabilityIndicator.propTypes = {
  classes: PropTypes.object.isRequired,
  variant: PropTypes.oneOf(['match', 'mismatch', 'partial', 'extra']).isRequired,
  position: PropTypes.oneOf(['left', 'right']),
};

AvailabilityIndicator.defaultProps = {
  position: 'left',
};

export default withStyles(styles)(AvailabilityIndicator);
