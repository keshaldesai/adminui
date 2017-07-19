import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import Dashboard from "./Dashboard/Dashboard";
import Gallery from "./Gallery/Gallery";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Route path="*" component={Sidebar} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/gallery" component={Gallery} />
          <Redirect from="/*" to="/dashboard" />
        </div>
      </Router>
    );
  }
}

export default App;
