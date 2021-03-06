import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import AvailabilityIndicator from '../../../../../shared/AvailabilityIndicator';
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
    cursor: 'pointer',
  },
  iconHeading: {
    display: 'flex',
    alignItems: 'center',
  },
  tooltip: {
    backgroundColor: theme.palette.common.black,
  },
});

const getHeading = variant => {
  switch(variant) {
    case 'match':
      return 'Matching features';
    case 'mismatch':
      return 'Missing features';
    case 'partial':
      return 'Partially matched features';
    case 'extra':
      return 'Extra features';
    default:
      throw new Error('Not implemented');
  }
};

const Features = ({ classes, features, variant, count, featureDefinitions }) => {
  if (features.length === 0) return null;

  const heading = getHeading(variant);

  return (
    <div id={`features-${variant}`} className={classes.col}>
      <Typography className={classes.iconHeading} variant="subtitle1" gutterBottom>
        <AvailabilityIndicator variant={variant} />
        {`${heading} (${features.length}/${count})`}
      </Typography>
      {features.map(feature =>
        <Tooltip
          key={feature}
          classes={{ tooltip: classes.tooltip }}
          interactive
          title={
            featureDefinitions
              .find(({ id }) => id === feature)
              .description
          }
        >
          <Chip
            label={titleize(feature)}
            className={classes.chip}
            variant="outlined"
          />
        </Tooltip>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  featureDefinitions: state.getStarted.features,
});

Features.propTypes = {
  classes: PropTypes.object.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  variant: PropTypes.oneOf(['match', 'mismatch', 'partial', 'extra']).isRequired,
  count: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(Features));
