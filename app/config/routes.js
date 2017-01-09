import React from 'react';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';
import CategoryContainer from '../containers/CategoryContainer';
import FrontendContainer from '../containers/FrontendContainer';
import BackendContainer from
'../containers/BackendContainer';
import AddContainer from '../containers/AddContainer';


import Main from '../components/Main';
import Home from '../components/Home';
import Topic from '../components/Topic';


const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='/Category' component={CategoryContainer} />
      <Route path='/AddTutorial' component={AddContainer}/>
    </Route>
  </Router>
)

export default routes;
