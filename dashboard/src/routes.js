import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';

import Containners from './components/containners/list';
import Images from './components/images/list';
import Dashboard from './components/dashboard/dashboard';
import Containner from './components/containners/containner';
export default (
  <Route path="/" component={App}>
    <IndexRoute component={Dashboard} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/containers" component={Containners} />
    <Route path="/images" component={Images} />
    <Route path ="/containner" component={Containner}/>

  </Route>
);