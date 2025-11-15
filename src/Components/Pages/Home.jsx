import React from "react";
import Banner from "./Banner";
import Category from "./Category";
import RecentComplaints from "./RecentComplaints";
import ExtraSec from "./ExtraSec";
import { Fade } from "react-awesome-reveal";

const Home = () => {
  return (
    <div>
      <Fade>
        <Banner></Banner>
        <Category></Category>
        <RecentComplaints></RecentComplaints>
        <ExtraSec></ExtraSec>
      </Fade>
    </div>
  );
};

export default Home;
