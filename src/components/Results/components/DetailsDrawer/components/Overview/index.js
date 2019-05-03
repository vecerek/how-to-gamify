import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Attribute from './components/Attribute';
import Value from './components/Value';
import AvailabilityIndicator from '../../../../../shared/AvailabilityIndicator';
import Recommender from '../../../../../../lib/recommender';

const styles = {
  overview: {
    borderRight: '1px solid #ccc',
    flex: '0 1 25%',
    minWidth: '200px',
    padding: '20px',
  },
};

const getAttribsWithIcon = (attribs, result) =>
  Array.from(attribs)
    .map(attr => {
      if (attr === 'score') return null;

      let variant;
      switch(result[attr]) {
        case Recommender.MATCH:
          variant = 'match';
          break;
        case Recommender.PARTIAL_MATCH:
          variant = 'partial';
          break;
        case Recommender.MISMATCH:
        case undefined:
          variant = 'mismatch';
          break;
        default:
          throw new Error('Not implemented');
      }

      return {
        value: attr,
        indicator: <AvailabilityIndicator variant={variant} position='right' />
      }
    })
    .filter(el => el);

const Overview = ({ classes, result }) => {
  const { framework } = result;

  const domains = getAttribsWithIcon(framework.domains, result.domains);
  const targets = getAttribsWithIcon(framework.targets, result.targets);

  return (
    <div
      id="overview"
      className={classes.overview}
    >
      <Typography variant="subtitle1" gutterBottom>
        Overview
      </Typography>
      <dl>
        <Attribute name="Title" >
          <Value inline>{framework.displayName}</Value>
        </Attribute>
        <Attribute name="Authors" >
          <Value inline>{framework.displayAuthor}</Value>
        </Attribute>
        <Attribute name="Year" >
          <Value inline>{framework.year}</Value>
        </Attribute>
        <Attribute name="Application area" >
          {domains.map(({ value, indicator }) =>
            <Value key={value} indicator={indicator} inline>{value}</Value>
          )}
        </Attribute>
        <Attribute name="Target" >
          {targets.map(({ value, indicator }) =>
            <Value
              key={value}
              indicator={indicator}
              inline={targets.length <= 1}
            >
              {value}
            </Value>
          )}
        </Attribute>
      </dl>
    </div>
  );
};

Overview.propTypes = {
  classes: PropTypes.object.isRequired,
  result: PropTypes.object.isRequired,
};

export default withStyles(styles)(Overview);
