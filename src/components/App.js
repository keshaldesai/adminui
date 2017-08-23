import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
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
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: null
    };
  }

  componentWillMount() {
    axios
      .get("https://randomuser.me/api/?inc=name,picture&results=15&nat=us")
      .then(response => {
        const { results } = response.data;
        const users = results.map(user => {
          const name = `${capitalize(user.name.first)} ${capitalize(
            user.name.last
          )}`;
          return { name, picture: user.picture.thumbnail };
        });
        this.setState({ users });
      });
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Route
            exact
            path="*"
            render={props => <Sidebar {...props} users={this.state.users} />}
          />
          <div className="page">
            <Header />
            <div className="content">
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/mailbox/inbox" component={Inbox} />
              <Route path="/mailbox/compose" component={Compose} />
              <Route path="/mailbox/mail" component={Mail} />
              <Route path="/gallery" component={Gallery} />
              <Route path="/social" component={Social} />
              <Route path="/blog/post" component={Post} />
              <Route path="/blog/posts" component={Posts} />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

function capitalize(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

export default App;
