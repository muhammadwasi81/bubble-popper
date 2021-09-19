import { Button, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from '../utils/styles';

const Bubble = () => {
  const classes = useStyles();

  let popped = 0;

  document.addEventListener('mouseover', function (e) {
    if (e.target.className === 'balloon') {
      e.target.style.backgroundColor = '#ffffff';
      e.target.textContent = 'POP!';
      popped++;
      removeEvent(e);
      // checkAllPopped();
    }
  });

  const removeEvent = (e) => {
    e.target.removeEventListener('mouseover', function () {});
  };

  const checkAllPopped = () => {
    if (popped === 20) {
      let gallery = document.querySelector('.balloonGallery');
      let message = document.querySelector('.Noballoons');
      gallery.innerText = '';
      message.style.display = 'block';
    }
  };

  return (
    <div className={classes.wrapper}>
      <Typography variant="h5" component="h5" className={classes.headOne}>
        Pop the balloons by moving your mouse over them
      </Typography>
      <div className={classes.Noballoons}>
        <span className={classes.blue}>Wow!</span> All balloons popped!
      </div>
      <div className={classes.balloonGallery}>
        <div className="balloon" style={{ backgroundColor: '#f0c040' }}></div>
        <div className="balloon" style={{ backgroundColor: '#00ff00' }}></div>
        <div className="balloon" style={{ backgroundColor: '#00ffff' }}></div>
        <div className="balloon" style={{ backgroundColor: '#ffa500' }}></div>
        <div className="balloon" style={{ backgroundColor: '#7fff00' }}></div>
        <div className="balloon" style={{ backgroundColor: '#ff8c00' }}></div>
        <div className="balloon" style={{ backgroundColor: '#9932cc' }}></div>
        <div className="balloon" style={{ backgroundColor: '#8b0000' }}></div>
        <div className="balloon" style={{ backgroundColor: '#483d8b' }}></div>
        <div className="balloon" style={{ backgroundColor: '#2f4f4f' }}></div>
        <div className="balloon" style={{ backgroundColor: '#696969' }}></div>
        <div className="balloon" style={{ backgroundColor: '#fffaf0' }}></div>
        <div className="balloon" style={{ backgroundColor: '#ff69b4' }}></div>
        <div className="balloon" style={{ backgroundColor: '#4b0082' }}></div>
        <div className="balloon" style={{ backgroundColor: '#f5fffa' }}></div>
        <div className="balloon" style={{ backgroundColor: '#ffe4b5' }}></div>
        <div className="balloon" style={{ backgroundColor: '#6b8e23' }}></div>
      </div>

      <Link to="/leveltwo" style={{ textDecoration: 'none' }}>
        <Button color="secondary" variant="contained">
          Next
        </Button>
      </Link>
    </div>
  );
};

export default Bubble;
