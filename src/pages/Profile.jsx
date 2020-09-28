import React from "react";

import styled from "styled-components";

import Header from "../components/home/Header";
import UserContent from "../components/profile/UserContent";
import ProfileCard from "../components/profile/ProfileCard";

const ProfileBlock = styled.div`
  .profile-bg {
    width: 100vw;
    height: 26vh;
    background: url(https://images.unsplash.com/photo-1578070181910-f1e514afdd08?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1404&q=80);
    background-size: cover;
  }
  .profile-content {
    display: flex;
    margin: 0 10vw;
  }
`;

export default function Profile() {
  return (
    <ProfileBlock>
      <Header />
      <div className="profile-bg" />
      <div className="profile-content">
        <ProfileCard />
        <UserContent />
      </div>
    </ProfileBlock>
  );
}
