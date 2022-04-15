import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import './App.css';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Add from './pages/Add/Add';
import Header from './components/Header';
import Container from './components/UI/Container';
import { useState } from 'react';
import AuthContext from './store/authContext';
import NotLogedIn from './components/UI/NotLogedIn';

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  function login() {
    setIsUserLoggedIn(true);
  }

  function logout() {
    setIsUserLoggedIn(false);
  }

  const ctxValue = {
    isUserLoggedIn,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={ctxValue}>
      <div className='App'>
        <Header />
        <Switch>
          <Route path={'/'} exact>
            <Register />
          </Route>
          <Route path={'/login'}>
            <Login />
          </Route>
          <Route path={'/home'}>
            {isUserLoggedIn ? <Home /> : <NotLogedIn />}
          </Route>
          <Route path={'/add'}>
            {isUserLoggedIn ? <Add /> : <NotLogedIn />}
          </Route>
          <Route path={'*'}>
            <Container>
              <h2>Page not found 404 error...</h2>
            </Container>
          </Route>
        </Switch>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
