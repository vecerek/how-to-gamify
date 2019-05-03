import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import WarningIcon from '@material-ui/icons/Warning';
import StarIcon from '@material-ui/icons/Star';
import CheckIcon from '@material-ui/icons/Check';
import red from '@material-ui/core/colors/red';
import yellow from '@material-ui/core/colors/yellow';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';
import { titleize } from '../../../../../../lib/formatting';

const styles = theme => ({
  col: {
    flex: '1 1 auto',
    padding: '10px 0 10px',
    '&:first-child': {
      paddingTop: '0',
    },
  },
  chip: {
    margin: theme.spacing.unit,
  },
  iconHeading: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    fontSize: '18px',
    marginRight: '5px',
  },
  match: {
    color: green[500],
  },
  missing: {
    color: red[500],
  },
  partial: {
    color: yellow[500],
  },
  extra: {
    color: blue[500],
  }
});

const getHeading = variant => {
  switch(variant) {
    case 'match':
      return 'Matching features';
    case 'missing':
      return 'Missing features';
    case 'partial':
      return 'Partially matched features';
    case 'extra':
      return 'Extra features';
    default:
      throw new Error('Not implemented');
  }
};

const getIcon = variant => {
  switch(variant) {
    case 'match':
      return CheckIcon;
    case 'missing':
    case 'partial':
      return WarningIcon;
    case 'extra':
      return StarIcon;
    default:
      throw new Error('Not implemented');
  }
}

const Features = ({ classes, features, variant, count }) => {
  if (features.length === 0) return null;

  const heading = getHeading(variant);
  const Icon = getIcon(variant);

  return (
    <div id={`features-${variant}`} className={classes.col}>
      <Typography className={classes.iconHeading} variant="subtitle1" gutterBottom>
        <Icon className={classnames(classes.icon, classes[variant])} />
        {`${heading} (${features.length}/${count})`}
      </Typography>
      {features.map(feature =>
        <Chip
          key={feature}
          label={titleize(feature)}
          className={classes.chip}
          variant="outlined"
        />
      )}
    </div>
  );
};

Features.propTypes = {
  classes: PropTypes.object.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  variant: PropTypes.oneOf(['match', 'missing', 'partial', 'extra']).isRequired,
  count: PropTypes.number.isRequired,
};

export default withStyles(styles)(Features);
