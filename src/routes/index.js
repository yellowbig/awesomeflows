import React from 'react';

const Routes = () => (
    <Router>
        <Switch>
            <Route path="/" exact component={Home}/>
        </Switch>
    </Router>
);

export default Routes;

