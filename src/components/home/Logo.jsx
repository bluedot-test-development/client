import { push } from "connected-react-router";
import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const LogoBlock = styled.div`
  color: white;
  display: flex;
  align-items: center;
  cursor: pointer;

  div {
    width: 1rem;
    height: 1rem;
    border-radius: 1rem;
    background-color: blue;
    margin: 0 0.7rem;
  }
`;

export default function Logo() {
  const dispatch = useDispatch();
  return (
    <LogoBlock onClick={() => dispatch(push("/"))}>
      <div />
      <h1>bluedot</h1>
    </LogoBlock>
  );
}
