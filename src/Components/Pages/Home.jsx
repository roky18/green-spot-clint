import React from "react";
import Banner from "./Banner";
import Category from "./Category";
import RecentComplaints from "./RecentComplaints";
import ExtraSec from "./ExtraSec";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <RecentComplaints></RecentComplaints>
      <ExtraSec></ExtraSec>
    </div>
  );
};

export default Home;
