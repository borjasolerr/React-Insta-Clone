import React from "react";

export default function authenticate(Component, LoginComponent) {
  return class Authenticate extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loginName: "",
        loginPassword: "",
        isAuthed: false
      };
    }

    login = () => {
      this.setState({ isAuthed: true });
      localStorage.setItem("isAuthed", "true");
    };

    handleAddNameInput = input => {
      this.setState({
        loginName: input
      });
    };

    handleAddPasswordInput = input => {
      this.setState({
        loginPassword: input
      });
    };

    render() {
      if (this.state.isAuthed) {
        return <Component {...this.props} />;
      }
      return <LoginComponent {...this.props} login={this.login} handleAddPasswordInput={this.handleAddPasswordInput} handleAddNameInput={this.handleAddNameInput} loginName={this.state.loginName} loginPassword={this.state.loginPassword} />;
    }
  };
}
