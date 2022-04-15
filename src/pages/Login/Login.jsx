import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Container from '../../components/UI/Container';
import AuthContext from '../../store/authContext';
import css from './Login.module.css';

const logUrl = 'https://autumn-delicate-wilderness.glitch.me/v1/auth/login';

const Login = () => {
  const authCtx = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);
  const history = useHistory();

  async function sendPostFetch() {
    const newPostObj = {
      email: email,
      password: password,
    };

    const resp = await fetch(logUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPostObj),
    });
    const atsInJs = await resp.json();

    if (atsInJs.token) {
      localStorage.setItem('token', atsInJs.token);
      authCtx.login();
      history.push('/home');
    }
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
        <h2>Please login</h2>
        {isError && (
          <h3 className={css.err}>
            Please check the form ! Incorrect email or password
          </h3>
        )}
        <label htmlFor='email'>Email for login : </label>
        <input
          type='email'
          onChange={(e) => setEmail(e.target.value)}
          id='email'
          placeholder='Enter your email here'
          value={email}
        />
        <label htmlFor='password'>Password for login : </label>
        <input
          type='password'
          onChange={(e) => setPassword(e.target.value)}
          id='password'
          placeholder='Enter your password here'
          value={password}
        />
        <button className={css.btn} type='submit'>
          Login
        </button>
      </form>
    </Container>
  );
};

export default Login;
