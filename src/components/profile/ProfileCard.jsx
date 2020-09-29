import React, { useState } from 'react';
import UploadModal from '../profile/UploadModal';
import styled, { css } from 'styled-components';
import { ThumbnailBlock } from '../../styles/ThumbnailBlock';

const ProfileCardBlock = styled.div`
  &.profile-card {
    transform: translate3d(0, -25%, 0);
    background: #eee;
    border-radius: 8px;
    min-width: 12rem;
    height: 100%;
    padding: 1.2rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    color: dimgray;

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
    [color='primary'] {
      background: blue;
      color: white;
    }
    [color='normal'] {
      background: white;
    }
  }
`;

export default function ProfileCard({ user }) {
  const [modal, setModal] = useState({
    isModalOn: false,
    type: null,
  });

  const onModal = e => {
    setModal({
      isModalOn: true,
      type: [e.currentTarget.name],
    });
  };

  const offModal = e => {
    if (e.target !== e.currentTarget) return;
    setModal({
      isModalOn: false,
      type: null,
    });
  };
  if (!user) return <div></div>;
  return (
    <>
      <ProfileCardBlock className="profile-card">
        {+user.isArtist && <h2>⭐</h2>}
        <ThumbnailBlock img={user.img} size="4" />
        <div className="summary">
          <h3>{user.name}</h3>
          <div>아티스트,랩퍼</div>
        </div>
        <div className="f-index">
          <div className="following">
            <div className="following-title">팔로우 수</div>
            <div className="following-count">{user.followingCount}</div>
          </div>
          <div className="follower">
            <div className="follower-title">팔로워 수</div>
            <div className="follower-count">{user.followedCount}</div>
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
