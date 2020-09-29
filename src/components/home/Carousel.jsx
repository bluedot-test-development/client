import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled, { css } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { startGetArtists } from '../../redux/module/users';

const CarouselBlock = styled.div`
  padding: 0 10vw;
  .carousel-card {
    height: 6rem;
    background-color: lightgray;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .slick-arrow {
    z-index: 3;
    height: 70%;
    width: 2rem;

    &.slick-prev {
      background: linear-gradient(to right, dimgrey, transparent);
      transform: translate3d(30%, -52%, 0);
      text-align: left;
    }
    &.slick-next {
      background: linear-gradient(to left, dimgrey, transparent);
      transform: translate3d(-30%, -56%, 0);
      text-align: right;
    }
  }
  .slick-prev:before {
    content: '👈';
  }
  .slick-next:before {
    content: '👉';
  }
  .slick-slide {
    transform: translate3d(-1170px, 0px, 0px);
  }
  .slick-slide > div {
    margin: 0 5px;
  }
  .artist-card {
    &:hover {
      transform: translate3d(0, -1.5%, 0);
      transition: transform ease-in-out 0.1s;
    }
  }
  .artist-title {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translate3d(-50%, 0, 0);

    color: white;
    text-align: center;
  }
`;

const ProfileImg = styled.div`
  height: 300px;
  background-size: cover;
  background-color: blueviolet;
  border-radius: 5px;
  margin: 10px 0;

  ${props =>
    props.source &&
    css`
      background-image: url(${props.source});
    `}
`;

function SampleNextArrow(props) {
  return <div {...props} />;
}

function SamplePrevArrow(props) {
  return <div {...props} />;
}

export default function Carousel(props) {
  const dispatch = useDispatch();
  const artists = useSelector(state => state.users.users);

  useEffect(() => {
    dispatch(startGetArtists());
  }, [dispatch]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    swipeToSlide: true,
    reverse: true,
    nextArrow: <SampleNextArrow className="slick-arrow slick-prev" />,
    prevArrow: <SamplePrevArrow className="slick-arrow slick-next" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  if (!artists) return <div></div>;
  return (
    <CarouselBlock>
      <h1>{props.name}</h1>
      <Link to="/">전체보기 </Link>
      <ul>
        <Slider {...settings}>
          {artists &&
            // Link to 컴포넌트로 프로필카드를 클릭해서 profile페이지 이동 시,
            // 해당 유저의 프로필로 넘어가도록 처리
            artists.map(artist => (
              <li className="artist-card" key={artist.id}>
                <Link
                  to={{
                    pathname: `/profile/${artist.id}`,
                    state: artist,
                  }}
                >
                  <ProfileImg source={artist.img} />
                  <h3 className="artist-title">{artist.name}</h3>
                </Link>
              </li>
            ))}
          {/* <li className="artist-card">
          <ProfileImg source="https://t1.daumcdn.net/liveboard/music/17248a3203ab439ab726b9628b70fa33.jpg" />
          <h3 className="artist-title">데이빗 보위</h3>
        </li>
        <li className="artist-card">
          <ProfileImg source="https://t1.daumcdn.net/liveboard/music/17248a3203ab439ab726b9628b70fa33.jpg" />
          <h3 className="artist-title">데이빗 보위</h3>
        </li>
        <li className="artist-card">
          <ProfileImg source="https://t1.daumcdn.net/liveboard/music/17248a3203ab439ab726b9628b70fa33.jpg" />
          <h3 className="artist-title">데이빗 보위</h3>
        </li> */}
        </Slider>
      </ul>
    </CarouselBlock>
  );
}
