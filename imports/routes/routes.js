import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import _ from 'lodash';

import Signup from '../ui/Signup';
import Dashboard from '../ui/Dashboard';
import NotFound from '../ui/NotFound';
import Login from '../ui/Login';

import UsersList from '../ui/UsersList';
import TransactionsList from '../ui/TransactionsList';
import ClientUrlsList from '../ui/ClientUrlsList';
import UrlSetup from '../ui/UrlSetup';
import UIExample from '../ui/UIExample';

const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = [
  '/dashboard',
  '/users',
  '/transactions',
  '/client_urls',
  '/url_setup',
  '/uiexample'
];
const onEnterPublicPage = () => {
  if (Meteor.userId()) {
    browserHistory.replace('/dashboard');
  }
};
const onEnterPrivatePage = () => {
  if (!Meteor.userId()) {
    browserHistory.replace('/');
  } else {
    const pathname = browserHistory.getCurrentLocation().pathname;

    setTimeout(function () {
      const user = Meteor.user();

      if ( user.role !== 1 && ['/users', '/client_urls'].includes(pathname)) {
        browserHistory.replace('/dashboard');
      }
    }, 500);
  }
};
export const onAuthChange = (isAuthenticated) => {
  const pathname = browserHistory.getCurrentLocation().pathname;
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
  const isAuthenticatedPage = authenticatedPages.includes(pathname);

  if (isUnauthenticatedPage && isAuthenticated) {
    browserHistory.replace('/dashboard');
  } else if (isAuthenticatedPage && !isAuthenticated) {
    browserHistory.replace('/');
  }
};
export const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Login} onEnter={onEnterPublicPage}/>
    <Route path="/signup" component={Signup} onEnter={onEnterPublicPage}/>
    <Route path="/dashboard" component={Dashboard} onEnter={onEnterPrivatePage}/>
    <Route path="/users" component={UsersList} onEnter={onEnterPrivatePage}/>
    <Route path="/transactions" component={TransactionsList} onEnter={onEnterPrivatePage}/>
    <Route path="/client_urls" component={ClientUrlsList} onEnter={onEnterPrivatePage}/>
    <Route path="/url_setup" component={UrlSetup} onEnter={onEnterPrivatePage}/>
    <Route path="/uiexample" component={UIExample} onEnter={onEnterPrivatePage}/>
    <Route path="*" component={NotFound}/>
  </Router>
);
