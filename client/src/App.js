import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./components/Main";
import Search from "./components/Search";
import Saved from "./components/Saved";
import NoMatch from "./components/NoMatch";
const App = () =>
  <Router>
    <div>
      <Switch>
        <Route path="/" component={Main} />
        <Route path="/articles" component={Saved} />
        <Route exact path="/articles/find" component={Search} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>;

export default App;
