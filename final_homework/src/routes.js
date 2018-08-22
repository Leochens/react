import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import AppMain from './containers/AppMain/AppMain';


const AppRoutes = () => (
  <Route path="/" component={App}>
    <IndexRoute component={AppMain} />
  </Route>
);

export default AppRoutes;
