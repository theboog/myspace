import React from 'react';
import { AuthConsumer, } from '../providers/AuthProvider';
import { Route, Redirect, } from 'react-router-dom';


const ProtectedRoute =({ component: Component, ...rest}) => (
  <AuthConsumer>
    { auth => (
      <Route
        { ...rest }
        render={ props => (
          auth.authenticated ? 
            <Component  { ...props } /> 
              :
            <Redirect  to={{pathname: "/", state: {from: props.location}}}/>
        )} 

      />
    )}
  </AuthConsumer>

)

export default ProtectedRoute;