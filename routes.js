// ./react-redux-client/src/routes.js
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Aulas from './containers/Aulas';
import Aula from './containers/Aula';

export default (
  <Route path="/" component={App}>
     <IndexRoute component={Aulas} />
     <Route path="/:id" component={Aula} />
  </Route>
)
