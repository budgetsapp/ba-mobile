import React, { Component } from 'react';
import { getIsAuthenticated } from '../services/auth';
import { appPath } from '../services/app-path';
import { Route, Redirect } from 'react-router-native';

export function ProtectedRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        getIsAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: appPath.login()
              // state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}
