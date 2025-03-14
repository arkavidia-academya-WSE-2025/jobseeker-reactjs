import React from "react";
import Layout from "../../../layout/Layout";

const Hero = () => {
  return (
    <Layout className="w-full h-auto py-10 flex items-center justify-center bg-gradient-to-tr from-zinc-700 to-neutral-700">
      <div className="w-full flex items-center justify-center flex-col space-y-8">
        <div className="space-y-3 text-center">
          <h1 className="text-neutral-50 md:text-5x1 text-3x1 font-bold">
            Looking for a New Job?
          </h1>

          <p className="text-neutral-400 md:text-base text-sm font-normal">
            Search Over 200+ categories of jobs and companies in one place.
          </p>
        </div>

        <div className="space-y-4 w-full">
          {/*Search Section */}
          <div className="w-full p-3.5 flex items-center justify-between gap-5 flex-wrap bg-sky-500/5 md:rounded-full rounded-xl border border-sky-500/50 backdrop-blur">
            Search for Jobs
          </div>
          {/*Trending Topic Section */}
        </div>
      </div>
    </Layout>
  );
};

export default Hero;
