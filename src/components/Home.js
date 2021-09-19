import { Container } from '@material-ui/core';
import React from 'react';
import useStyles from '../utils/styles';
import BubbleOne from './Bubble.jsx';
import BubbleTwo from './BubblesTwo.jsx';

const Home = () => {
  const classes = useStyles();

  return (
    <Container className={classes.main}>
      <BubbleOne />
    </Container>
  );
};

export default Home;
