import dynamic from "next/dynamic";
import React from "react";

const Lesson = dynamic(() => import("../BeautifulOnScroll"), {
  ssr: false,
});

const Home = () => {
  return <Lesson />;
};

export default Home;
