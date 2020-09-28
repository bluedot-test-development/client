import React from "react";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import TextsmsIcon from "@material-ui/icons/Textsms";
import styled from "styled-components";

const DotVideoCardBlock = styled.div`
  min-width: 210px;
  .video-thumbnail {
    background: url(https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80);
    background-size: cover;
    min-height: 300px;
    color: white;
    border-radius: 8px;

    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
  }
  .video-count {
    display: flex;
    margin: 20px 10px;
    font-size: 0.8rem;
    & .MuiSvgIcon-root {
      font-size: 0.6rem;
    }
    .video-likes-count {
      margin: 0 5px;
    }
    .video-comments-count {
      margin: 0 5px;
    }
  }
`;

export default function DotVideoCard(props) {
  return (
    <DotVideoCardBlock>
      <div>{new Date().toLocaleDateString()}</div>
      <Link
        // to={{
        //   pathname: "/dot-videos",
        //   // state:props.videoId,
        //   search: "?videoId=HASHEDID",
        // }}
        to="/profile"
      >
        <div className="video-thumbnail">
          <div className="video-count">
            <div className="video-likes-count">
              <FavoriteBorderIcon />
              1.2K
            </div>
            <div className="video-comments-count">
              <TextsmsIcon />
              20
            </div>
          </div>
        </div>
      </Link>
      <div className="video-description">
        <h3 className="video-title">아 안끝나누,,</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eius,
          dignissimos piciatis consequuntur, sequi optio vero{" "}
        </p>
      </div>
    </DotVideoCardBlock>
  );
}
