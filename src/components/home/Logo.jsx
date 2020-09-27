import React from "react";
import { Link } from "react-router-dom";
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
  }
`;

export default function Logo() {
  return (
    /* <Link to="/">*/
    <LogoBlock>
      <div />
      <h1>bluedot</h1>
    </LogoBlock>
    /* </Link> */
  );
}
