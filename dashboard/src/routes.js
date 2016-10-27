import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';

import List from './components/containners/list';
export default (
  <Route path="/" component={App}>
    <Route path="/containers" component={List}/>
  </Route>
);