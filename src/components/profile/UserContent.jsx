import React from "react";
import DotVideoCard from "./DotVideoCard";
import styled from "styled-components";

const UserContentBlock = styled.div`
  padding: 30px;
  width: 100%;
  .dot-videos ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
    grid-gap: 10px;
  }
`;

export default function UserContent() {
  return (
    <UserContentBlock>
      <div className="dot-videos">
        <h4>닷비디오</h4>
        <hr />
        <ul>
          <li>
            <DotVideoCard />
          </li>
          <li>
            <DotVideoCard />
          </li>
          <li>
            <DotVideoCard />
          </li>
          <li>
            <DotVideoCard />
          </li>
          <li>
            <DotVideoCard />
          </li>
        </ul>
      </div>
    </UserContentBlock>
  );
}
