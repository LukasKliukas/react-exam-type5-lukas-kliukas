import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from '../store/authContext';
import css from './Header.module.css';

const Header = () => {
  const authCtx = useContext(AuthContext);

  return (
    <header className={css.header}>
      <img
        className={css.logo}
        src='https://www.downloadclipart.net/large/free-png-clipart.png'
        alt=''
      />
      <nav className={css.mainNav}>
        {!authCtx.isUserLoggedIn && <NavLink to={'/login'}>Login</NavLink>}
        {!authCtx.isUserLoggedIn && <NavLink to={'/'}>Register</NavLink>}
        {authCtx.isUserLoggedIn && <NavLink to={'/home'}>Home</NavLink>}
        {authCtx.isUserLoggedIn && <NavLink to={'/add'}>Add</NavLink>}
      </nav>
    </header>
  );
};

export default Header;
