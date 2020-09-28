import React from "react";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import styled from "styled-components";

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
      font-size: 0.7rem;
      display: flex;
      align-items: center;
      padding: 8px 10px;
      div {
        margin-left: 10px;
      }
      &:not(:last-child) {
        border-bottom: 1px solid gray;
      }
    }
  }
`;

export default function PersonalModal() {
  const dispatch = useDispatch();
  return (
    <PersonalModalBlock>
      <ul className="menu-list">
        <li onClick={() => dispatch(push("/profile"))}>
          <AccountCircleRoundedIcon fontSize="small" />
          <div>마이페이지</div>
        </li>
        <li>
          <AccountCircleRoundedIcon fontSize="small" />
          <div>로그아웃</div>
        </li>
        <li>
          <AccountCircleRoundedIcon fontSize="small" />
          <div>서비스 이용약관</div>
        </li>
        <li>
          <AccountCircleRoundedIcon fontSize="small" />
          <div>개인정보 처리방침</div>
        </li>
        <li>
          <AccountCircleRoundedIcon fontSize="small" />
          <div>설정</div>
        </li>
      </ul>
    </PersonalModalBlock>
  );
}
