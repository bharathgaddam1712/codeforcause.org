import { Box, makeStyles, Typography } from '@material-ui/core';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    background: 'linear-gradient(180deg, #2A185A 0%, #000000 100%)',
    padding: theme.spacing(3, 10, 3),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(3, 10, 3)
    },
    color: '#000000'
  },
  lineBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'center'
    }
  }
}));

function Header({ course, className, ...rest }) {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Box display="flex" className={classes.lineBox} justifyContent="center">
        <Typography
          style={{ color: '#ffffff', padding: '5px' }}
          variant="h4"
          align="center"
        >
          {(() => {
            if (course.schedule[course.default].active) {
              if (course.schedule[course.default].special) {
                return course.schedule[course.default].special;
              } else {
                return '☀️ Use Coupon code : SUMMERS21 and get Flat 50% Off on All Live courses ☀️';
              }
            } else {
              return 'Oops! The seats are full. ✅ We will be happy to see you in the next batch! 😊';
            }
          })()}
        </Typography>
      </Box>
    </div>
  );
}

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
