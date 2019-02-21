import React from "react";

export default function LoginPage(props) {
  const login = () => props.login();
  const handleAddNameInput = event => {
    props.handleAddNameInput(event.target.value);
    event.preventDefault();
  };
  const handleAddPasswordInput = event => {
    props.handleAddPasswordInput(event.target.value);
    event.preventDefault();
  };
  const loginName = props.loginName;
  const loginPassword = props.loginPassword;
  return (
    <form onSubmit={login}>
      Name: <input value={loginName} onChange={handleAddNameInput} />
      Password: <input value={loginPassword} type="password" onChange={handleAddPasswordInput} />{" "}
      <button type="button" onClick={login}>
        Submit
      </button>
    </form>
  );
}
