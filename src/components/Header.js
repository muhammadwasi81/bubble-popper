import {
  AppBar,
  Avatar,
  Button,
  createTheme,
  CssBaseline,
  ThemeProvider,
  Toolbar,
  Typography,
} from '@material-ui/core';
import React from 'react';
import useStyles from '../utils/styles';
import { useAuth0 } from '@auth0/auth0-react';
import { Redirect } from 'react-router-dom';

const Header = () => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  const theme = createTheme({
    typography: {
      h1: {
        fontSize: '1.6rem',
        fontWeight: 400,
        margin: '1rem 0',
      },

      h2: {
        fontSize: '1.4rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
    },

    primary: {
      main: '#f0c000',
    },

    secondary: {
      main: '#208080',
    },
  });

  const classes = useStyles();

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static" className={classes.navbar}>
          <Toolbar>
            <Typography className={classes.brand}>Arc Technology</Typography>

            <div className={classes.grow}></div>

            {!isAuthenticated ? (
              <>
                <Button
                  onClick={() => {
                    loginWithRedirect();
                  }}
                  variant="contained"
                  color="secondary"
                  className={classes.space}
                >
                  Log In
                </Button>
              </>
            ) : (
              <>
                <div>
                  <Typography>{user.name}</Typography>
                </div>

                <div>
                  <Avatar
                    alt={user.name}
                    src={user.picture}
                    className={classes.space}
                  />
                </div>

                <Button
                  onClick={() => logout()}
                  variant="contained"
                  color="secondary"
                >
                  Logout
                </Button>
                <Redirect to="/home"></Redirect>
              </>
            )}
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </div>
  );
};

export default Header;
