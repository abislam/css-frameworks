import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddItem from '@material-ui/icons/AddShoppingCart';

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
      <h2>Product</h2>
      <Button variant="contained" color="primary">
        <AddItem/>Add to Cart
      </Button>
    </div>
  );
}