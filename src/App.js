import "./App.css";
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import Demo from "./components/demo";
import Table from "./components/Table";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/demo" component={Demo} />
        <Route exact path="/table" component={Table} />
      </Switch>
    </Router>
  );
}

export default App;
