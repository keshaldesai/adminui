import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import Gallery from "./Gallery/Gallery";
import Inbox from "./Mailbox/Inbox/Inbox";
import Compose from "./Mailbox/Compose/Compose";
import Mail from "./Mailbox/Mail/Mail";
import Social from "./Social/Social";
import Post from "./Blog/Post";
import Posts from "./Blog/Posts";
import Header from "./Header/Header";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { sidebar: false };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ sidebar: !this.state.sidebar });
  }
  render() {
    const users = [
      {
        name: "Carolyn Rivera",
        picture: "https://randomuser.me/api/portraits/thumb/women/24.jpg"
      },
      {
        name: "Sonia Rodriquez",
        picture: "https://randomuser.me/api/portraits/thumb/women/13.jpg"
      },
      {
        name: "Elsie Terry",
        picture: "https://randomuser.me/api/portraits/thumb/women/85.jpg"
      },
      {
        name: "Ronald Vargas",
        picture: "https://randomuser.me/api/portraits/thumb/men/39.jpg"
      },
      {
        name: "Calvin Baker",
        picture: "https://randomuser.me/api/portraits/thumb/men/43.jpg"
      },
      {
        name: "Monica Snyder",
        picture: "https://randomuser.me/api/portraits/thumb/women/22.jpg"
      },
      {
        name: "Howard Mills",
        picture: "https://randomuser.me/api/portraits/thumb/men/28.jpg"
      },
      {
        name: "Liam Duncan",
        picture: "https://randomuser.me/api/portraits/thumb/men/7.jpg"
      },
      {
        name: "Freddie Lucas",
        picture: "https://randomuser.me/api/portraits/thumb/men/49.jpg"
      },
      {
        name: "Kevin Jacobs",
        picture: "https://randomuser.me/api/portraits/thumb/men/16.jpg"
      },
      {
        name: "Sonia Butler",
        picture: "https://randomuser.me/api/portraits/thumb/women/11.jpg"
      },
      {
        name: "Billie Black",
        picture: "https://randomuser.me/api/portraits/thumb/women/1.jpg"
      },
      {
        name: "Marsha Stewart",
        picture: "https://randomuser.me/api/portraits/thumb/women/13.jpg"
      },
      {
        name: "Riley Walker",
        picture: "https://randomuser.me/api/portraits/thumb/women/83.jpg"
      },
      {
        name: "Armando Gray",
        picture: "https://randomuser.me/api/portraits/thumb/men/40.jpg"
      }
    ];
    return (
      <Router>
        <div className="app">
          <Route
            exact
            path="*"
            render={props => (
              <Sidebar
                {...props}
                users={users}
                show={this.state.sidebar}
                handleClose={this.handleClick}
              />
            )}
          />
          <div className="page" style={{ translateX: "260px" }}>
            <Header handleClick={this.handleClick} />
            <div className="content">
              <Route
                exact
                path="/mailbox/inbox"
                render={props => <Inbox {...props} users={users} />}
              />
              <Route path="/mailbox/compose" component={Compose} />
              <Route path="/mailbox/mail" component={Mail} />
              <Route path="/gallery" component={Gallery} />
              <Route
                exact
                path="/social"
                render={props => <Social {...props} users={users} />}
              />
              <Route path="/blog/post" component={Post} />
              <Route path="/blog/posts" component={Posts} />
              <Route
                exact
                path="/*"
                render={props => <Social {...props} users={users} />}
              />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
