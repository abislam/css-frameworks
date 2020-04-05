import React from 'react';
import HomeIcon from '@material-ui/icons/Home';

const style = {
  height: '500px'
};

export default function Home() {


  return (
    <div style={style}>
      <h2>Home Section <HomeIcon/></h2>
      <h3>Some motto about boots</h3>
    </div>
  );
}