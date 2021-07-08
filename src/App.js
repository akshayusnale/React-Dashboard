import "./App.css";
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import Table from "./components/Table";
import Chart from "./components/Data";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/table" component={Table} />
        <Route exact path="/chart" component={Chart} />
      </Switch>
    </Router>
  );
}

export default App;
