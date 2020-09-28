import React from "react";
import MainSlider from "../components/home/MainSlider";
import Carousel from "../components/home/Carousel";
import Posts from "../components/home/Posts";
import Header from "../components/home/Header";

export default function Home() {
  return (
    <div>
      <Header type="home" />
      <MainSlider />
      <Carousel name="아티스트 소개" />
      <Posts name="장르별 다터 게시물" />
    </div>
  );
}
