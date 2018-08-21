import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import MusicMain from './containers/MusicMain/MusicMain';


const AppRoutes = () => (
  <Route path="/" component={App}>
    <IndexRoute component={MusicMain} />
  </Route>
);

export default AppRoutes;
