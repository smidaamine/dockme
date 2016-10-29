import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';

import Containners from './components/containners/list';
import  Images from './components/images/list';
export default (
  <Route path="/" component={App}>
    <Route path="/containers" component={Containners}/>
    <Route path="/images" component={Images}/>
  </Route>
);