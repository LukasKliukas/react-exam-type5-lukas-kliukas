import Container from '../../components/UI/Container';
import css from './Register.module.css';
import { useState } from 'react';

const regUrl = 'https://autumn-delicate-wilderness.glitch.me/v1/auth/register';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);

  async function sendPostFetch() {
    //Validacija
    // if (petName.trim() === '') {
    //   setErrorObj((prevState) => ({
    //     ...prevState,
    //     name: 'Name cant be blank',
    //   }));
    // }
    // if (dob.trim() === '') {
    //   setErrorObj((prevState) => ({
    //     ...prevState,
    //     dob: 'Dob cant be blank',
    //   }));
    // }
    // if (email.trim() === '') {
    //   setErrorObj((prevState) => ({
    //     ...prevState,
    //     client_email: 'Email cant be blank',
    //   }));
    // }
    //ar yra klaidu
    // console.log('errorObj ===', errorObj);
    // const isErrorsEmpty = Object.values(errorObj).every((el) => el === '');
    // console.log('isErrorsEmpty ===', isErrorsEmpty);
    // if (isError) {
    //   return;
    // }
    //jei yra mes nutraukiame funkcijos vygdyma

    const newPostObj = {
      email: email,
      password: password,
    };

    const resp = await fetch(regUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPostObj),
    });
    const atsInJs = await resp.json();
    console.log('atsInJs ===', atsInJs);

    // if (atsInJs.changes === 1) {
    //   //redirect to pets page
    //   history.push('/');
    // }
    if (atsInJs.err) {
      setIsError(true);
    }
  }

  function submitHandler(e) {
    e.preventDefault();
    sendPostFetch();
  }

  return (
    <Container>
      <form onSubmit={submitHandler} className={css.form}>
        <h2>Please register</h2>
        {isError && <h3 className={css.err}>Please check the form !</h3>}
        <label htmlFor='email'>Email for registration : </label>
        <input
          type='email'
          onChange={(e) => setEmail(e.target.value)}
          id='email'
          placeholder='Enter your email here'
          value={email}
        />
        <label htmlFor='password'>Password for registration : </label>
        <input
          type='text'
          onChange={(e) => setPassword(e.target.value)}
          id='password'
          placeholder='Enter your email here'
          value={password}
        />
        <button className={css.btn} type='submit'>
          Register
        </button>
      </form>
    </Container>
  );
};

export default Register;
