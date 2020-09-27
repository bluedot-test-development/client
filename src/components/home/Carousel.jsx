import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CarouselBlock = styled.div`
  padding: 0 10vw;
  .carousel-board {
    display: flex;
  }
  .carousel-card {
    width: 200px;
    height: 200px;
    background-color: lightgray;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default function Carousel(props) {
  return (
    <CarouselBlock>
      <h1>{props.name}</h1>
      <Link to="/">전체보기 </Link>
      <div className="carousel-board">
        <div className="carousel-card">1</div>
        <div className="carousel-card">2</div>
        <div className="carousel-card">3</div>
        <div className="carousel-card">4</div>
        <div className="carousel-card">5</div>
        <div className="carousel-card">6</div>
        <div className="carousel-card">5</div>
        <div className="carousel-card">6</div>
      </div>
    </CarouselBlock>
  );
}
