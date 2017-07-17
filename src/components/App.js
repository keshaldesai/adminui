import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import Sidebar from "./Sidebar/Sidebar";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Sidebar />
          <Route path="/dashboard" component={Dashboard} />
        </div>
      </Router>
    );
  }
}

export default App;
