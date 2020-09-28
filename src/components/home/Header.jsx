import React from "react";
import HeaderRight from "./HeaderRight";
import Logo from "./Logo";
import styled, { css } from "styled-components";

const HeaderBlock = styled.div`

  width: 100vw;
  color: white;
  background: black;
  z-index: 99;
  
  ${(props) =>
    props.type &&
    css`
      position: fixed;
      background: linear-gradient(black, transparent);
    `}

  & *{
    user-select: none;
  }
  .header-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10vw;
  }
  .header-left {
    display: flex;
    align-items: center;
    font-size: 1rem;
      img {
        width: 1rem;
        margin: 0 8px;
      }
    }
  }

  & ul {
    display: flex;
    font-size: 1rem;
    li {
      padding: 0 15px;
      button {
        background: transparent;
        border: none;
        color: white;
        font-size: 1rem;
        cursor: pointer;
      }
    }
  }
`;

export default function Header(props) {
  return (
    <HeaderBlock type={props.type}>
      <header className="header-wrapper">
        <div className="header-left">
          <Logo />
          <ul>
            <li>
              <button>홈</button>
            </li>
            |
            <li>
              <button>닷비디오</button>
            </li>
            |
            <li>
              <button>검색</button>
            </li>
          </ul>
        </div>
        <HeaderRight />
      </header>
    </HeaderBlock>
  );
}
