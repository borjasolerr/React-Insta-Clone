import React from "react";
import styled from "styled-components";

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
  const isEnabled = loginName.length > 0 && loginPassword.length > 0;
  return (
    <StyledLogin>
      <form onSubmit={login}>
        Name: <input value={loginName} onChange={handleAddNameInput} />
        Password: <input value={loginPassword} type="password" onChange={handleAddPasswordInput} />
        <button type="button" disabled={!isEnabled} onClick={login}>
          Submit
        </button>
      </form>
    </StyledLogin>
  );
}

const StyledLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  form {
    height: 20vh;
    width: 50vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
