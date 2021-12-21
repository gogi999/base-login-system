import React from 'react';
import jwt_decode from 'jwt-decode';
import { Provider } from 'react-redux';
import { Container } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import theme from './utils/theme';
import PrivateRoute from './components/auth/PrivateRoute';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Landing from './components/pages/Landing';
import IdleTimerContainer from './components/autoLogout/IdleTimerContainer';
import store from './store';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';

if (localStorage.jwtToken) {
  const token = localStorage.jwtToken;
  setAuthToken(token);

  const decoded = jwt_decode(token);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;

  if (decoded.exp < currentTime){
    store.dispatch(logoutUser());
    window.location.href = "./login";
  }
}

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <Container maxWidth="lg">
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={IdleTimerContainer} />
            </Switch> 
          </Container>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
