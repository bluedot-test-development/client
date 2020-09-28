import React, { useState } from "react";
import UploadModal from "../profile/UploadModal";
import styled from "styled-components";

const ProfileCardBlock = styled.div`
  &.profile-card {
    transform: translate3d(0, -25%, 0);
    background: lightgray;
    border-radius: 3px;
    width: 10rem;
    height: 100%;
    padding: 1.2rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    color: dimgray;

    .thumbnail {
      background: url(https://vignette.wikia.nocookie.net/xmenmovies/images/9/94/Deadpool_Textless.jpg/revision/latest?cb=20200608174908);
      background-size: contain;
      background-position: center;
      border-radius: 4rem;
      width: 4rem;
      height: 4rem;
    }
    .summary {
      text-align: center;
    }
  }
  .f-index {
    display: flex;
    font-size: 0.4rem;
    margin: 12px 0;
    & > div {
      margin: 0 20px;
      text-align: center;
    }
  }
  .profile-buttons {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 5px;
    button {
      border: none;
      border-radius: 8px;
      margin: 5px auto;
      padding: 8px;
      width: 100%;
    }
    [color="primary"] {
      background: blue;
      color: white;
    }
    [color="normal"] {
      background: white;
    }
  }
`;

export default function ProfileCard() {
  const [modal, setModal] = useState({
    isModalOn: false,
    type: null,
  });

  const onModal = (e) => {
    setModal({
      isModalOn: true,
      type: [e.currentTarget.name],
    });
  };

  const offModal = (e) => {
    if (e.target !== e.currentTarget) return;
    setModal({
      isModalOn: false,
      type: null,
    });
  };

  return (
    <>
      <ProfileCardBlock className="profile-card">
        <div className="thumbnail"></div>
        <div className="summary">
          <h3>레이놀즈</h3>
          <div>아티스트,랩퍼</div>
        </div>
        <div className="f-index">
          <div className="following">
            <div className="following-title">팔로우 수</div>
            <div className="following-count">123</div>
          </div>
          <div className="follower">
            <div className="follower-title">팔로워 수</div>
            <div className="follower-count">312</div>
          </div>
        </div>
        <div className="profile-buttons">
          <button color="normal">팔로우</button>
          <button color="primary" name="post" onClick={onModal}>
            게시글 업로드
          </button>
          <button color="primary" name="video" onClick={onModal}>
            닷비디오 업로드
          </button>
        </div>
      </ProfileCardBlock>
      {modal.isModalOn && <UploadModal type={modal.type} offModal={offModal} />}
    </>
  );
}
