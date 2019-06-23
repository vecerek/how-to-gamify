import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import CloseIcon from '@material-ui/icons/Close';
import green from '@material-ui/core/colors/green';
import grey from '@material-ui/core/colors/grey';
import AddButton from './components/AddButton';
import Recommender from '../../../../lib/recommender';
import { titleize } from '../../../../lib/formatting';
import * as actions from '../../../../actions/GetStarted';

const styles = theme => ({
  container: {
    backgroundColor: '#f8f8f8',
    flex: '1 1 100%',
    height: '100%',
    padding: '50px',
    position: 'relative',
    [theme.breakpoints.up('md')]: {
      flex: '0 1 450px',
      height: 'calc(100vh - 2 * 50px)',
      overflow: 'auto',
    },
  },
  chip: {
    margin: theme.spacing.unit,
  },
  fab: {
    margin: theme.spacing.unit,
  },
  divider: {
    marginBottom: theme.spacing.unit,
    marginTop: theme.spacing.unit,
  },
  checked: {
    color: green[500],
    '&$checked': {
      color: green[500],
    },
  },
  closeIcon: {
    color: grey[500],
    cursor: 'pointer',
    fontSize: 30,
    position: 'absolute',
    right: 15,
    top: 15,
    '&:hover': {
      color: 'initial',
    },
  },
  showMore: {
    borderBottom: '1px dashed',
    cursor: 'pointer',
    display: 'inline',
  },
  sectionHeader: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
  },
});

class Sidebar extends React.Component {
  state = {
    expanded: false,
  };

  handleCheck = (feature, currentValue) => () => {
    const { dispatch } = this.props;
    const values = ['U', 'I', 'E'];
    const currentIndex = values.indexOf(currentValue);
    const nextIndex = values.length === currentIndex + 1
      ? 0
      : currentIndex + 1;
    const nextValue = values[nextIndex];

    dispatch(actions.updateFeature(feature, nextValue));
  }

  handleDeleteDomain = (d) => () => {
    const { dispatch } = this.props;
    dispatch(actions.removeDomain(d));
  }

  handleDeleteTarget = (t) => () => {
    const { dispatch } = this.props;
    dispatch(actions.removeTarget(t));
  }

  toggleExpanded = () => {
    this.setState(prevState => ({
      expanded: !prevState.expanded,
    }));
  }

  addDomain = domain => {
    const { dispatch } = this.props;
    dispatch(actions.addDomain(domain));
  }

  addTarget = target => {
    const { dispatch } = this.props;
    dispatch(actions.addTarget(target));
  }

  renderFeatures = () => {
    const { expanded } = this.state;
    const { framework: { features }, classes, locked } = this.props;

    const visibleFeatures = expanded || features.length < 5
      ? features
      : features.slice(0, 5);

    return visibleFeatures.map(({ id, value }) => (
      <FormControlLabel
        key={id}
        control={
          <Checkbox
            checked={value !== 'U'}
            onChange={this.handleCheck(id, value)}
            value={id}
            disabled={!!locked}
            indeterminate={value === 'I' ? true : null}
            className={classnames({
              [classes.checked]: value === 'E' && !locked,
            })}
            color="primary"
          />
        }
        label={titleize(id)}
      />
    ))
  }

  render() {
    const { classes, framework, locked, onClose } = this.props;
    const { expanded } = this.state;

    return (
      <div className={classes.container}>
        {onClose &&
          <CloseIcon
            className={classes.closeIcon}
            onClick={onClose}
          />
        }
        <Typography variant="h6" gutterBottom>
          Requirements
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Features:
        </Typography>
        {this.renderFeatures()}
        {framework.features.length >= 5 &&
          <Typography
            className={classes.showMore}
            onClick={this.toggleExpanded}
          >
            Show {expanded ? `less (5)` : `all (${framework.features.length})`}
          </Typography>
        }
        <Divider className={classes.divider} />
        <div className={classes.sectionHeader}>
          <Typography variant="subtitle1">
            Domains:
          </Typography>
          <AddButton
            options={Recommender.availableDomains()}
            disabledOptions={framework.domains}
            onAdd={this.addDomain}
          />
        </div>
        {framework.domains.map(d => (
          <Chip
            key={d}
            label={titleize(d)}
            onDelete={locked ? null : this.handleDeleteDomain(d)}
            className={classes.chip}
          />
        ))}
        <Divider className={classes.divider} />
        <div className={classes.sectionHeader}>
          <Typography variant="subtitle1">
            Targets:
          </Typography>
          <AddButton
            options={Recommender.availableTargets()}
            disabledOptions={framework.targets}
            onAdd={this.addTarget}
          />
        </div>
        {framework.targets.map(t => (
          <Chip
            key={t}
            label={titleize(t)}
            onDelete={locked ? null : this.handleDeleteTarget(t)}
            className={classes.chip}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ getStarted: state }) => ({
  framework: state.userDefinedFramework,
});

Sidebar.propTypes = {
  locked: PropTypes.bool,
  onClose: PropTypes.func,
  framework: PropTypes.shape({
    features: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        value: PropTypes.string,
      }),
    ),
    domains: PropTypes.arrayOf(PropTypes.string),
    targets: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(Sidebar));

