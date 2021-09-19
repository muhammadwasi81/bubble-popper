import { Container } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import React from 'react';

const Error404 = () => {
  return (
    <Container style={{ marginTop: '20px' }}>
      <Alert variant="filled" severity="error">
        Page Not Found
      </Alert>
    </Container>
  );
};

export default Error404;
