import React from "react";
import Layout from "../../../layout/Layout";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { MdTrendingUp } from "react-icons/md";

const Hero = () => {
  return (
    <Layout className="w-full h-auto py-10 flex items-center justify-center bg-gradient-to-tr from-zinc-700 to-neutral-700">
      <div className="w-full flex items-center justify-center flex-col space-y-8">
        <div className="space-y-3 text-center">
          <h1 className="text-neutral-50 text-3xl md:text-5xl lg:text-6xl font-bold">
            Looking for a New Job?
          </h1>

          <p className="text-neutral-400 text-sm md:text-lg lg:text-2xl font-normal">
            Search Over 200+ categories of jobs and companies in one place.
          </p>
        </div>

        <div className="space-y-4 w-full">
          {/*Search Section */}
          <div className="w-full p-3.5 flex items-center justify-between gap-5 flex-wrap bg-sky-500/5 md:rounded-full rounded-xl border border-sky-500/50 backdrop-blur">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search jobs, Companies..."
                className="w-full px-4 py-3 rounded-full text-base text-neutral-50 font-normal bg-transparent backdrop-blur-lg border border-neutral-50/40
                outline-none focus:border-sky-500/40 focus:outline-none ease-in-out duration-300"
              />
            </div>
            <button
              className="md:w-fit w-full px-5 py-3 rounded-full text-base text-neutral-900 font-medium
             bg-sky-500 hover:bg-sky-600 flex items-center justify-center gap-x-2 ease-in-out duration-300"
            >
              <FaSearch />
              Search Jobs
            </button>
          </div>
          {/*Trending Topic Section */}
          <div className="w-full inline-flex items-center gap-x-2">
            <div className="flex items-center gap-x-1 5">
              <MdTrendingUp className="text-lg text-sky-500" />
              <p className="text-sm text-neutral-300">Top Trending Jobs:</p>
            </div>

            <div className="flex items-center gap-x-2 flex-wrap">
              <div>
                <Link className="text-sm font-normal text-neutral-400 hover:text-sky-500 ease-in-out duration-300">
                  UI/Ux
                </Link>
                ,
              </div>
              <div>
                <Link className="text-sm font-normal text-neutral-400 hover:text-sky-500 ease-in-out duration-300">
                  Front-End Developer
                </Link>
                ,
              </div>
              <div>
                <Link className="text-sm font-normal text-neutral-400 hover:text-sky-500 ease-in-out duration-300">
                  Back-End Developer
                </Link>
                ,
              </div>
              <div>
                <Link className="text-sm font-normal text-neutral-400 hover:text-sky-500 ease-in-out duration-300">
                  Android Developer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Hero;
