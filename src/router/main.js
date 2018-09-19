import React from 'react';
import { Switch, Route } from 'react-router-dom'

// Different App Pages/Routes
import Alerts from '../pages/alerts';
import Schedule from '../pages/schedule';
import Logout from '../pages/logout';
import Products from '../pages/products';
import EventLog from '../pages/events';
import Settings from '../pages/settings';
import Home from '../pages/home';

/*
The main page body, which contains the route definitions
*/
const Main = ({style}) => (
  <main style={{padding: '16px'}}>
    <Switch>
      <Route exact path='/alerts' component={Alerts}/>
      <Route exact path='/schedule' component={Schedule}/>
      <Route exact path='/logout' component={Logout}/>
      <Route exact path='/products' component={Products}/>
      <Route exact path='/eventlog' component={EventLog}/>
      <Route exact path='/settings' component={Settings}/>
      <Route exact path='/logout' component={Logout}/>
      <Route path='*' component={Home}/>
    </Switch>
  </main>
);
export default Main;