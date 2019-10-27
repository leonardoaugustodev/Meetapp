import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Dashboard from '~/pages/Dashboard';
import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Profile from '~/pages/Profile';
import Details from '~/pages/Details';
import Edit from '~/pages/Edit';
import NewMeetup from '~/pages/NewMeetup';

export default function routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/dashboard" isPrivate component={Dashboard} />
      <Route path="/profile" isPrivate component={Profile} />
      <Route path="/details/:id" isPrivate component={Details} />
      <Route path="/edit/:id" isPrivate component={Edit} />
      <Route path="/newmeetup" isPrivate component={NewMeetup} />
    </Switch>
  );
}
