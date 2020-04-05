import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ButtonAppBar from './ButtonAppBar';
import Home from './Home';
import Products from './Products';
import Footer from './Footer';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  home: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}><ButtonAppBar /></Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.home}><Home /></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}><Products/></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}><Products/></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}><Products/></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}><Products/></Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}><Footer/></Paper>
        </Grid>
      </Grid>
    </div>
  );
}
