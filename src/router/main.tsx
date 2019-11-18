import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Different App Pages/Routes
import Alerts from '../pages/alerts';
import Schedule from '../pages/schedule';
import Logout from '../pages/logout';
import Products from '../pages/products';
import EventLog from '../pages/events';
import Settings from '../pages/settings';
import Userguide from '../pages/userguide';
import License from '../pages/license';
import Profile from '../pages/profile';
import Home from '../pages/home';

/*
The main page body, which contains the route definitions
*/
const Main = () => {
    return (
        <div style={{ padding: '16px' }}>
            <Switch>
                <Route exact path="/alerts" component={Alerts} />
                <Route exact path="/schedule" component={Schedule} />
                <Route exact path="/logout" component={Logout} />
                <Route exact path="/products" component={Products} />
                <Route exact path="/eventlog" component={EventLog} />
                <Route exact path="/settings" component={Settings} />
                <Route exact path="/userguide" component={Userguide} />
                <Route exact path="/license" component={License} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/logout" component={Logout} />
                <Route path="*" component={Home} />
            </Switch>
        </div>
    );
};
export default Main;
