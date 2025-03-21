import React from "react";
import Hero from "./sections/Hero";
import NearbyJobs from "./sections/NearbyJobs";
import Jobs from "./sections/Jobs";

const Home = () => {
  return (
    <div className="w-full space-y-16 pb-16">
      {/*Hero Section */}
      <Hero />
      {/*Nearby Job Section*/}
      <NearbyJobs />
      {/*Jobs*/}
      <Jobs />
    </div>
  );
};

export default Home;
