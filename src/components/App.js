import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
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
    this.state = { showSidebar: false, page: 0 };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ showSidebar: !this.state.showSidebar });
  }
  handleActive(page) {
    this.setState({ page });
  }
  render() {
    const { showSidebar, page } = this.state;
    const overlay = showSidebar
      ? { visibility: "visible", opacity: 1 }
      : { visibility: "hidden", opacity: 0 };
    const pageStyle = showSidebar
      ? { height: "100vh", overflowY: "hidden" }
      : {};
    return (
      <Router>
        <div className="app" style={{ overflowY: "hidden" }}>
          <Sidebar
            users={users}
            show={showSidebar}
            handleClose={this.handleClick}
            page={page}
          />
          <div className="sidebar-overlay" style={overlay} />
          <div className="page" style={pageStyle}>
            <Header handleClick={this.handleClick} />
            <Switch>
              <Route exact path="/mailbox/inbox">
                <Inbox
                  users={users}
                  handleActive={this.handleActive.bind(this, 0)}
                />
              </Route>
              <Route exact path="/mailbox/mail">
                <Mail handleActive={this.handleActive.bind(this, 1)} />
              </Route>
              <Route exact path="/mailbox/compose">
                <Compose handleActive={this.handleActive.bind(this, 2)} />
              </Route>
              <Route exact path="/gallery">
                <Gallery handleActive={this.handleActive.bind(this, 3)} />
              </Route>
              <Route exact path="/social">
                <Social
                  users={users}
                  handleActive={this.handleActive.bind(this, 4)}
                />
              </Route>
              <Route exact path="/blog/posts">
                <Posts
                  users={users}
                  handleActive={this.handleActive.bind(this, 5)}
                />
              </Route>
              <Route exact path="/blog/post">
                <Post handleActive={this.handleActive.bind(this, 6)} />
              </Route>
              <Redirect from="/" to="/social" />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
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

export default App;
