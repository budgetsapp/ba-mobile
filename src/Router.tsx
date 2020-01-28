import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NativeRouter, Route, Link } from 'react-router-native';

import { SigninViewContainer, SignupView, HomeView } from './components/views';
import { ProtectedRoute } from './routing/ProtectedRoute';

export const Router = () => (
  <NativeRouter>
    <Route exact path='/' component={SigninViewContainer} />
    <Route path='/sign-up' component={SignupView} />
    <ProtectedRoute path='/app' component={HomeView} />
  </NativeRouter>
);
