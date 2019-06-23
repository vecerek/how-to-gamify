import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import LinkIcon from '@material-ui/icons/OpenInNew';
import Button from '@material-ui/core/Button';
import Score from './components/Score';
import * as actions from '../../../../actions/Results';

const styles = theme => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'space-between',
    maxWidth: 400,
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '16px',
  },
  btn: {
    margin: theme.spacing.unit,
  },
  title: {
    fontSize: '1.2rem',
  },
  subheader: {
    fontSize: '.9rem',
  },
});

class Result extends React.Component {
  handleOpenDetails = () => () => {
    const { dispatch, data } = this.props;
    dispatch(actions.toggleDetails(true, data.other.id));
  }

  render() {
    const { classes, data } = this.props;
    const { other: framework } = data;

    return (
      <Card className={classes.card}>
        <CardHeader
          classes={{
            title: classes.title,
            subheader: classes.subheader,
          }}
          action={
            <Score
              size={55}
              percentage={Math.round(data.score * 100)}
              strokeWidth={4}
            />
          }
          title={framework.displayName}
          subheader={`${framework.displayAuthor} (${framework.year})`}
        />
        <CardContent>
          <Typography component="p">
            {framework.description}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <Button
            className={classes.button}
            aria-label="Open in a new tab"
            href={framework.url}
            target="_blank"
            rel="nofollow noopener"
          >
            <LinkIcon style={{ marginRight: '5px' }} />
            Read
          </Button>
          <Button
            color="primary"
            onClick={this.handleOpenDetails()}
          >
            Details
          </Button>
        </CardActions>
      </Card>
    );
  }
}

Result.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default connect()(withStyles(styles)(Result));
