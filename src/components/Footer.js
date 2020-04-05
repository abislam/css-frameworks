import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


export default function Products() {
  const classes = useStyles();

  return (
    <div>
      <h4>Contact Us</h4>
      <Button variant="contained" color="primary">
        <FacebookIcon />
      </Button>

      <Button variant="contained" color="primary">
        <InstagramIcon />
      </Button>

      <Button variant="contained" color="primary">
        <TwitterIcon />
      </Button>

      <Button variant="contained" color="primary">
        <YouTubeIcon />
      </Button>
    </div>
  );
}