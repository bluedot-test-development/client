import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled, { css } from "styled-components";
import UserService from "../../service/UserService";
import { useDispatch, useSelector } from "react-redux";
import { startGetArtists } from "../../redux/module/users";

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
    height: 6rem;
    width: 4rem;
    &.slick-prev {
      background: linear-gradient(to right, dimgrey, transparent);
      transform: translate3d(30%, -50%, 0);
      text-align: left;
    }
    &.slick-next {
      background: linear-gradient(to left, dimgrey, transparent);
      transform: translate3d(-30%, -50%, 0);
      text-align: right;
    }
  }
  .slick-prev:before {
    content: "👈";
  }
  .slick-next:before {
    content: "👉";
  }
  .slick-slide {
    transform: translate3d(-1170px, 0px, 0px);
  }
  .slick-slide > div {
    margin: 0 5px;
  }
  .artist-title {
    color: white;
    text-align: center;
    transform: translate3d(0, -100%, 0);
  }
`;

const ProfileImg = styled.div`
  height: 300px;
  background-size: cover;
  background-color: coral;
  ${(props) =>
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
  const artists = useSelector((state) => state.users.users);

  useEffect(() => {
    dispatch(startGetArtists());
  }, [dispatch]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    reverse: true,
    nextArrow: <SampleNextArrow className="slick-arrow slick-prev" />,
    prevArrow: <SamplePrevArrow className="slick-arrow slick-next" />,
  };
  return (
    <CarouselBlock>
      <h1>{props.name}</h1>
      <Link to="/">전체보기 </Link>

      <Slider {...settings}>
        {artists &&
          artists.map((one) => (
            <div key={one.id}>
              <ProfileImg source={one.img} />
              <h3 className="artist-title">{one.name}</h3>
            </div>
          ))}
        <div>
          <ProfileImg source="https://t1.daumcdn.net/liveboard/music/17248a3203ab439ab726b9628b70fa33.jpg" />
          <h3 className="artist-title">데이빗 보위</h3>
        </div>
        <div>
          <ProfileImg source="https://t1.daumcdn.net/liveboard/music/17248a3203ab439ab726b9628b70fa33.jpg" />
          <h3 className="artist-title">데이빗 보위</h3>
        </div>
        <div>
          <ProfileImg source="https://t1.daumcdn.net/liveboard/music/17248a3203ab439ab726b9628b70fa33.jpg" />
          <h3 className="artist-title">데이빗 보위</h3>
        </div>
        <div>
          <ProfileImg source="https://t1.daumcdn.net/liveboard/music/17248a3203ab439ab726b9628b70fa33.jpg" />
          <h3 className="artist-title">데이빗 보위</h3>
        </div>
        <div>
          <ProfileImg source="https://t1.daumcdn.net/liveboard/music/17248a3203ab439ab726b9628b70fa33.jpg" />
          <h3 className="artist-title">데이빗 보위</h3>
        </div>
        <div>
          <ProfileImg source="https://t1.daumcdn.net/liveboard/music/17248a3203ab439ab726b9628b70fa33.jpg" />
          <h3 className="artist-title">데이빗 보위</h3>
        </div>
        <div>
          <ProfileImg source="https://t1.daumcdn.net/liveboard/music/17248a3203ab439ab726b9628b70fa33.jpg" />
          <h3 className="artist-title">데이빗 보위</h3>
        </div>
        <div>
          <ProfileImg source="https://t1.daumcdn.net/liveboard/music/17248a3203ab439ab726b9628b70fa33.jpg" />
          <h3 className="artist-title">데이빗 보위</h3>
        </div>
      </Slider>
    </CarouselBlock>
  );
}
