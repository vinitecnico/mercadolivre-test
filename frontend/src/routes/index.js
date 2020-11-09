import React from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import history from "../history";
import { Home, ProductList, ProductDetails } from "../pages";

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/items" component={ProductList}></Route>
        <Route exact path="/items/:id" component={ProductDetails}></Route>
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};

export default Routes;
