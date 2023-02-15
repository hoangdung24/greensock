import dynamic from "next/dynamic";
import React from "react";

const Lesson = dynamic(() => import("./Lesson2"), {
  ssr: false,
});

const Home = () => {
  return <Lesson />;
};

export default Home;
