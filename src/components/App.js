import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import Dashboard from "./Dashboard/Dashboard";
import Gallery from "./Gallery/Gallery";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: "dashboard"
    };
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Sidebar activePage={this.state.activePage} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/gallery" component={Gallery} />
          <Redirect from="/*" to="/dashboard" />
        </div>
      </Router>
    );
  }
}

export default App;
