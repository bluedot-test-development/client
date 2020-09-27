import React from "react";
import styled from "styled-components";

const PostsBlock = styled.div`
  padding: 0 10vw;
  .post-board {
    display: flex;
  }
  .post-card {
    width: 200px;
    height: 200px;
    background-color: lightgray;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default function Posts(props) {
  return (
    <PostsBlock>
      <h1>{props.name}</h1>
      <ul className="post-board">
        <div className="post-card">1</div>
        <div className="post-card">2</div>
        <div className="post-card">3</div>
        <div className="post-card">4</div>
        <div className="post-card">5</div>
        <div className="post-card">6</div>
        <div className="post-card">5</div>
        <div className="post-card">6</div>
      </ul>
    </PostsBlock>
  );
}
