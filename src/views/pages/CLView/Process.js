import { Grid, makeStyles, Typography } from '@material-ui/core';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import ProcessSteppers from './ProcessSteppers';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(10),
    paddingLeft: 70,
    paddingRight: 70,
    [theme.breakpoints.down('md')]: {
      paddingLeft: 15,
      paddingRight: 15
    },
    color: '#000000'
  },
  centerPadding: {
    padding: 30,
    [theme.breakpoints.down('md')]: {
      padding: 15
    }
  },
  stepper: {
    padding: '20px',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 0,
      paddingRight: 0,
      '& .MuiStepper-root': {
        padding: '20px 0px'
      }
    }
  },
  responsivePadding: {
    padding: '0px 16px',
    [theme.breakpoints.down('sm')]: {
      padding: 0
    }
  }
}));

function Process({ benefits, className, ...rest }) {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <div className={classes.responsivePadding}>
        <Typography
          style={{ marginTop: '10px' }}
          variant="h2"
          align="center"
          gutterBottom
        >
          How to become Campus Leader
        </Typography>
        <Grid container component="dl" className={classes.stepper}>
          <ProcessSteppers />
        </Grid>
      </div>
    </div>
  );
}

Process.propTypes = {
  className: PropTypes.string
};

export default Process;
