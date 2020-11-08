import React from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import history from "../history";
import { Home } from "../pages";

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        {/* <Route exact path='/items' component={ProductListView}></Route>
                <Route exact path='/items/:id' component={ProductView}></Route> */}
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};

export default Routes;
