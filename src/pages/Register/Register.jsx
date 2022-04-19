import Container from '../../components/UI/Container';
import css from './Register.module.css';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const regUrl = 'https://autumn-delicate-wilderness.glitch.me/v1/auth/register';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);
  const history = useHistory();

  async function sendRegisterFetch() {
    const registerObj = {
      email: email,
      password: password,
    };

    const resp = await fetch(regUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(registerObj),
    });
    const atsInJs = await resp.json();

    if (atsInJs.changes === 1) {
      history.push('/login');
    }
    if (atsInJs.err) {
      setIsError(true);
    }
  }

  function submitHandler(e) {
    e.preventDefault();
    sendRegisterFetch();
  }

  return (
    <Container>
      <form onSubmit={submitHandler} className={css.form}>
        <h2>Please register</h2>
        {isError && (
          <h3 className={css.err}>
            Please check the form ! Incorrect data sent
          </h3>
        )}
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
          type='password'
          onChange={(e) => setPassword(e.target.value)}
          id='password'
          placeholder='Enter your password here'
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
