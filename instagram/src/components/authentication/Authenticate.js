import React from "react";

export default function authenticate(Component, LoginComponent) {
  return class Authenticate extends React.Component {
    render() {
      if (true) {
        return <Component />;
      }
      return <LoginComponent />;
    }
  };
}
