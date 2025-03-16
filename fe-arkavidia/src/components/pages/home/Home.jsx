import React from "react";
import Hero from "./hero/Hero";
import NearbyJobs from "./nearbyjobs/NearbyJobs";
import Jobs from "./jobs/Jobs";

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
