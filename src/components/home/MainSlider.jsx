import React from "react";

import styled from "styled-components";

const SliderContentBlock = styled.div`
  & .slider-card-desc-wrapper {
    position: relative;
    user-select: none;
  }
  & .slider-card-desc {
    position: absolute;
    top: 300px;
    right: 60px;
    padding: 0 10vw;
    color: white;
    width: 20vw;
    h2 {
      font-size: 2rem;
    }
    p {
      font-size: 0.8rem;
    }
  }
  & .hero-background {
    background-image: url("/image/main-hero.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 65% 30%;
    width: 100vw;
    height: 700px;
  }
  & .hero-button {
    background: transparent;
    border: white 1px solid;
    border-radius: 3px;
    color: white;
    padding: 0.7rem 2rem;
    cursor: pointer;
  }
`;

export default function MainSlider() {
  return (
    <div>
      <SliderContentBlock>
        <div className="slider-card-desc-wrapper">
          <div className="slider-card-desc">
            <h2>DOT VIDEO</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
              autem, sapiente o
            </p>
            <button className="hero-button">My Dotter</button>
          </div>
        </div>
        <div className="hero-background"></div>
      </SliderContentBlock>
    </div>
  );
}
