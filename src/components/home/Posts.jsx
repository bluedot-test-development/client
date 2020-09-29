import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import { startGetMusicPosts, startGetPosts } from '../../redux/module/posts';
import { ThumbnailBlock } from '../../styles/ThumbnailBlock';

const PostsBlock = styled.div`
  padding: 70px 10vw;
  .post-board {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
    grid-gap: 18px;
  }
  .post-card {
    background-color: lightgray;
    height: 180px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-space-evenly;
    align-items: center;
  }
`;

const PostsImgBlock = styled.div`
  width: 100%;
  min-height: 130px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: cornflowerblue;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  ${props => css`
    background-image: url(${props.source});
  `}
`;

export default function Posts(props) {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.posts);

  useEffect(() => {
    dispatch(startGetMusicPosts());
  }, [dispatch]);

  return (
    <PostsBlock>
      <h1>{props.name}</h1>
      <ul className="post-board">
        {posts &&
          posts.map((post, i) => (
            <div className="post-card" key={i}>
              <PostsImgBlock source={post.img} />
              {/* <ThumbnailBlock img={post.userImg} size="2" /> */}
              <div
                style={{
                  display: 'flex',
                  maxHeight: '200px',
                  width: '100%',
                  justifyContent: 'space-between',
                }}
              >
                <img
                  src={post.userImg}
                  alt=""
                  style={{
                    width: '2.5rem',
                    height: '2.5rem',
                    borderRadius: '2.5rem',
                    padding: '5px',
                  }}
                />
                <div style={{ minWidth: '9rem' }}>
                  <div style={{ fontSize: '.8rem' }}>{post.description}</div>
                  <div
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <div style={{ fontSize: '.8rem' }}>{post.title}</div>
                    <div style={{ fontSize: '.8rem' }}>{post.userName}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </ul>
    </PostsBlock>
  );
}
