import React, { Component } from "react";
import LoginPage from "./components/LoginPage/LoginPage";
import Authenticate from "./components/authentication/Authenticate";
import PostsPage from "./components/PostContainer/PostsPage";
import "./App.css";

class Posts extends Component {
  render() {
    return <PostsPage {...this.props} />;
  }
}

class Login extends Component {
  render() {
    return <LoginPage {...this.props} />;
  }
}

const App = Authenticate(Posts, Login);
export default App;
