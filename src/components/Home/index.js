import React from 'react';
import { Link } from 'react-router-dom'
import classnames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SvgIcon from '@material-ui/core/SvgIcon';
// import GithubIcon from '@material-ui/icons/Github';
import styles from './index.module.css';

const classes = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  startBtn: {
    backgroundColor: '#fff',
    border: 0,
    color: '#ffcc33',
    fontSize: '20px',
    padding: '10px',
    textTransform: 'initial',
    width: '200px',
    '&:hover': {
      backgroundColor: '#f8f8f8',
      border: 0,
    },
  },
  readMoreBtn: {
    color: '#fff',
  },
  linkIcon: {
    marginRight: '5px',
  },
  githubLink: {
    color: '#fff',
    display: 'inline-flex',
    fontSize: '20px',
    textDecoration: 'none',
  },
  githubIcon: {
    marginRight: '5px',
  },
});

const Home = ({ classes }) => (
  <div className={styles.container}>
    <nav className={styles.navigation}>
      <a
        className={classes.githubLink}
        href="https://github.com/vecerek/how-to-gamify"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SvgIcon className={classes.githubIcon}>
          <path d="M12.007 0C6.12 0 1.1 4.27.157 10.08c-.944 5.813 2.468 11.45 8.054 13.312.19.064.397.033.555-.084.16-.117.25-.304.244-.5v-2.042c-3.33.735-4.037-1.56-4.037-1.56-.22-.726-.694-1.35-1.334-1.756-1.096-.75.074-.735.074-.735.773.103 1.454.557 1.846 1.23.694 1.21 2.23 1.638 3.45.96.056-.61.327-1.178.766-1.605-2.67-.3-5.462-1.335-5.462-6.002-.02-1.193.42-2.35 1.23-3.226-.327-1.015-.27-2.116.166-3.09 0 0 1.006-.33 3.3 1.23 1.966-.538 4.04-.538 6.003 0 2.295-1.5 3.3-1.23 3.3-1.23.445 1.006.49 2.144.12 3.18.81.877 1.25 2.033 1.23 3.226 0 4.607-2.805 5.627-5.476 5.927.578.583.88 1.386.825 2.206v3.29c-.005.2.092.393.26.507.164.115.377.14.565.063 5.568-1.88 8.956-7.514 8.007-13.313C22.892 4.267 17.884.007 12.008 0z" />
        </SvgIcon>
        Open source
      </a>
    </nav>
    <div className={styles.header}>
      <h1>
        Find the best matching<br/>
        gamification framework<br/>
        for your project
      </h1>
      <div>
        <Button
          variant="outlined"
          size="large"
          color="primary"
          className={classnames(classes.button, classes.startBtn)}
          component={Link}
          to="/get-started"
        >
          Get started
        </Button>
        <Button
          className={classnames(classes.button, classes.readMoreBtn)}
        >
          <SvgIcon className={classes.linkIcon}>
            <path d="m19.818 8.9715c-1.4849-1.4849-3.8891-1.2021-5.9397-1.2728 0.14142 0.14142 0.42426 0.28284 0.6364 0.49497 0.35355 0.35355 0.6364 0.77782 0.84853 1.2728 1.1314 0 2.3335-0.070711 3.182 0.77782 0.42426 0.42426 0.70711 1.1314 0.77782 1.7678 0 1.4142-1.1314 2.5456-2.5456 2.5456h-3.677c-0.56568 0-1.3435-0.35355-1.7678-0.77782-0.98995-0.98995-0.84853-2.1213-0.42426-3.2527h-1.8385c-0.49497 1.6263-0.42426 3.2527 0.84853 4.5255 0.84853 0.84853 1.9799 1.2728 3.0406 1.2021h3.677c1.2728 0 2.4749-0.35355 3.3941-1.2728 1.4142-1.6971 1.3435-4.4548-0.21213-6.0104zm-11.597 5.5154h-1.2728c-0.56569 0-1.3435-0.35355-1.7678-0.77782-0.42426-0.42426-0.70711-1.1314-0.77782-1.7678 0-1.4142 1.2021-2.6163 2.5456-2.5456h3.677c0.56568 0 1.3435 0.35355 1.7678 0.77782 0.98995 0.98995 0.77782 2.192 0.42426 3.2527h1.8385c0.49498-1.6263 0.42426-3.2527-0.84853-4.5255-0.84853-0.84853-1.9799-1.2728-3.0406-1.2021h-3.677c-2.4042 0-4.3134 1.9092-4.2426 4.2426 0 2.2627 1.9092 4.3134 4.1719 4.1719h2.687c-0.28284-0.14142-0.49497-0.35355-0.70711-0.56568-0.35355-0.35355-0.6364-0.6364-0.77782-1.0607z"/>
          </SvgIcon>
          Read more
        </Button>
      </div>
    </div>
  </div>
);

export default withStyles(classes)(Home);
