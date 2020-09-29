import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import TextsmsIcon from '@material-ui/icons/Textsms';
import styled, { css } from 'styled-components';

const DotVideoCardBlock = styled.div`
  min-height: 240px;
  background-color: #eeeeee;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

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
  .thumbnail-holder {
    height: 130px;
  }
`;

const VideoThumbnail = styled.div`
  ${props => css`
    background: url(${props.img});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 12px;
    height: 100%;
    color: white;

    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
  `}
`;

const VideoBlock = styled.video`
  border-radius: 12px;
  height: 100%;
  width: 100%;
`;

export default function DotVideoCard({ video }) {
  const [mouseOver, setMouseOver] = useState(false);

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
        <div className="thumbnail-holder">
          {mouseOver && (
            <VideoBlock
              src={video.link}
              autoPlay
              muted
              onMouseLeave={() => setMouseOver(false)}
              height="280"
            ></VideoBlock>
          )}
          {!mouseOver && (
            <VideoThumbnail
              img={video.thumbnail}
              onMouseOver={() => setMouseOver(true)}
            >
              <div className="video-count">
                <div className="video-likes-count">
                  <FavoriteBorderIcon />
                  {video.likes}
                </div>
                <div className="video-comments-count">
                  <TextsmsIcon />
                  {video.comments}
                </div>
              </div>
            </VideoThumbnail>
          )}
        </div>
      </Link>
      <div className="video-description">
        <h3 className="video-title" style={{ color: 'dimgray' }}>
          닷 비디오
        </h3>
        <p>Lorem, ipsum dolor sit amet consectetur</p>
      </div>
    </DotVideoCardBlock>
  );
}
