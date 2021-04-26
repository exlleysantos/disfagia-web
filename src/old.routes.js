import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { isAuthenticated } from "./services/auth";

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Cadastro from './pages/Cadastro';
import Profile from './pages/Profile';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
);

const Routes = () => {
    return (
        <Switch>
            <PrivateRoute path="/App" component={Login}/>
            <Route path='/perfil' Component={Profile}/>
            <Route path='/' exact component={Login} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/cadastro' component={Cadastro} />
        </Switch>
    );
}

export default Routes;