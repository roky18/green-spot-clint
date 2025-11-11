import React from "react";
import Banner from "./Banner";
import Category from "./Category";
import RecentComplaints from "./RecentComplaints";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <RecentComplaints></RecentComplaints>
    </div>
  );
};

export default Home;
