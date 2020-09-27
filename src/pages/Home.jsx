import React from "react";
import Header from "../components/home/Header";
import MainSlider from "../components/home/MainSlider";
import Carousel from "../components/home/Carousel";
import Posts from "../components/home/Posts";

export default function Home() {
  return (
    <div>
      <Header />
      <MainSlider />
      <Carousel name="아티스트 소개" />
      <Posts name="장르별 다터 게시물" />
    </div>
  );
}
