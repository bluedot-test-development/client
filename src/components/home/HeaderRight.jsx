import React, { useState } from "react";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Portal from "./Portal";
import { Avatar, IconButton } from "@material-ui/core";
import PersonalModal from "../PersonalModal";
import styled from "styled-components";

const HeaderRightBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 170px;

  button {
    margin: 12px 6px;
    border: none;
    border-radius: 5px;
    padding: 5px 18px;
    cursor: pointer;
  }
  .login {
    color: black;
    background-color: lightgray;
  }
  .sign-up,
  .blue {
    color: white;
    background-color: blue;
  }
  #Avatar {
    width: 1.4rem;
    height: 1.4rem;
    cursor: pointer;
  }
  .NotiIcon {
    fill: lightgray;
    width: 1.3rem;
    height: 1.3rem;
    padding: 0.2rem;
    cursor: pointer;
  }
`;

export default function HeaderRight() {
  const [login, setLogin] = useState(false);
  const [visible, setVisible] = useState(false);
  return (
    <HeaderRightBlock>
      {login ? (
        <>
          <button className="login">로그인</button>
          <button className="sign-up blue">회원가입</button>
        </>
      ) : (
        <>
          <button className="blue">업로드</button>
          <div>
            <Avatar id="Avatar" onClick={() => setVisible(!visible)} />
            {visible && <PersonalModal />}
          </div>
          <NotificationsIcon className="NotiIcon" />
        </>
      )}
    </HeaderRightBlock>
  );
}
