import React, { useEffect } from 'react';
import Header from '../components/home/Header';
import UserContent from '../components/profile/UserContent';
import ProfileCard from '../components/profile/ProfileCard';
import { useDispatch, useSelector } from 'react-redux';

import styled, { css } from 'styled-components';
import { startGetUser } from '../redux/module/users';
import { Redirect } from 'react-router-dom';

const ProfileBlock = styled.div`
  .profile-content {
    display: flex;
    margin: 0 10vw;
  }
`;
const ProfileBgBlock = styled.div`
  width: 100vw;
  height: 26vh;
  background-size: contain;
  background-position: center;
  ${props => css`
    background-image: url(${props.source});
  `}
`;

export default function Profile(props) {
  const user = useSelector(state => state.users.profileUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startGetUser());
  }, [dispatch]);

  // if (!user) return <Redirect to="/profile" />;
  return (
    <ProfileBlock>
      <Header />
      <ProfileBgBlock source={user && user.bannerImg} />
      <div className="profile-content">
        <ProfileCard user={user} />
        <UserContent />
      </div>
    </ProfileBlock>
  );
}
