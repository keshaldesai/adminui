import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import Dashboard from "./Dashboard/Dashboard";
import Gallery from "./Gallery/Gallery";
import Inbox from "./Mailbox/Inbox";
import Compose from "./Mailbox/Compose";
import Mail from "./Mailbox/Mail";
import Social from "./Social/Social";
import Post from "./Blog/Post";
import Posts from "./Blog/Posts";
import Header from "./Header/Header";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Route path="*" component={Sidebar} />
          <div className="page">
            <Header />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/mailbox/inbox" component={Inbox} />
            <Route path="/mailbox/compose" component={Compose} />
            <Route path="/mailbox/mail" component={Mail} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/social" component={Social} />
            <Route path="/blog/post" component={Post} />
            <Route path="/blog/posts" component={Posts} />
            <Redirect from="/" to="/dashboard" />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
