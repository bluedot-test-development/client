import React from "react";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import styled from "styled-components";
import { Link } from "react-router-dom";

const PersonalModalBlock = styled.div`
  position: relative;
  z-index: 2;

  transform: translate3d(-90%, 0, 0);

  &:after {
    position: absolute;
    transform: translate3d(27px, 2px, 0);
    width: 0px;
    border: 8px solid transparent;
    border-bottom-color: white;
    content: "";
  }

  ul.menu-list {
    background-color: white;
    border-radius: 3px;
    color: black;
    position: absolute;
    display: flex;
    flex-direction: column;
    list-style: none;
    width: 150px;

    li {
      padding: 8px 10px;
      &:not(:last-child) {
        border-bottom: 1px solid gray;
      }
      a {
        display: flex;
        align-items: center;
        div {
          margin-left: 10px;
          font-size: 0.7rem;
        }
      }
    }
  }
`;

export default function PersonalModal() {
  return (
    <PersonalModalBlock>
      <ul className="menu-list">
        <li>
          <Link to="/profile">
            <AccountCircleRoundedIcon fontSize="small" />
            <div>마이페이지</div>
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <AccountCircleRoundedIcon fontSize="small" />
            <div>로그아웃</div>
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <AccountCircleRoundedIcon fontSize="small" />
            <div>서비스 이용약관</div>
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <AccountCircleRoundedIcon fontSize="small" />
            <div>개인정보 처리방침</div>
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <AccountCircleRoundedIcon fontSize="small" />
            <div>설정</div>
          </Link>
        </li>
      </ul>
    </PersonalModalBlock>
  );
}
