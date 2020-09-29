import React, { useEffect } from 'react';
import DotVideoCard from './DotVideoCard';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { startGetVideos } from '../../redux/module/videos';

const UserContentBlock = styled.div`
  padding: 30px;
  width: 100%;
  .dot-videos ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
    grid-gap: 20px;
  }
`;

export default function UserContent() {
  const dispatch = useDispatch();
  const videos = useSelector(state => state.videos.videos);

  useEffect(() => {
    dispatch(startGetVideos());
  }, [dispatch]);

  if (!videos) return <div></div>;
  return (
    <UserContentBlock>
      <div className="dot-videos">
        <h4>닷비디오</h4>
        <hr />
        <ul>
          {videos.map(video => (
            <li key={video.id}>
              <DotVideoCard video={video} />
            </li>
          ))}
        </ul>
      </div>
    </UserContentBlock>
  );
}
