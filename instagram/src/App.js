import React, { Component } from "react";
import LoginPage from "./components/LoginPage/LoginPage";
import Authenticate from "./components/authentication/Authenticate";
import PostsPage from "./components/PostContainer/PostsPage";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <PostsPage />;
  }
}

class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <LoginPage />;
  }
}

const AuthenticatedApp = Authenticate(App, Login);
export default AuthenticatedApp;
