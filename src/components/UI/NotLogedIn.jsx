import React from 'react';
import { Link } from 'react-router-dom';
import Container from './Container';
import css from './NotLogedIn.module.css';

const NotLogedIn = () => {
  return (
    <Container>
      <h2>You are not logged in !</h2>
      <p>Please login to see the content</p>
      <Link to='/login'>
        <button className={css.btn}>Login</button>
      </Link>
    </Container>
  );
};

export default NotLogedIn;
