import React from "react";
import Layout from "../../../layout/Layout";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { MdTrendingUp } from "react-icons/md";

const Hero = () => {
  return (
    <Layout className="w-full h-auto py-10 flex items-center justify-center bg-gradient-to-tr from-gray-700 to-gray-900">
      <div className="w-full flex items-center justify-center flex-col space-y-8">
        <div className="space-y-3 text-center">
          <h1 className="text-gray-50 text-3xl md:text-5xl lg:text-5xl font-bold">
            Looking for Your Next Opportunity?
          </h1>
          <p className="text-gray-300 text-sm md:text-lg lg:text-xl font-normal">
            Explore hundreds of job openings and find the perfect match for you.
          </p>
        </div>
        <div className="space-y-4 w-full">
          {/* Search Section */}
          {/* <div className="w-full p-4 flex items-center justify-between gap-5 flex-wrap bg-blue-400/10 md:rounded-full rounded-xl border border-blue-500/40 backdrop-blur">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search for jobs or companies..."
                className="w-full px-4 py-3 rounded-full text-base text-gray-50 font-normal bg-transparent backdrop-blur-lg border border-gray-50/40 focus:border-blue-400 focus:ring-blue-400 transition duration-300"
              />
            </div>
            <button className="md:w-fit w-full px-5 py-3 rounded-full text-base text-gray-900 font-medium bg-blue-500 hover:bg-blue-600 flex items-center justify-center gap-x-2 transition duration-300">
              <FaSearch />
              Search Jobs
            </button>
          </div> */}
          {/* Job Categories Section */}
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <Link
              to="/findJobs"
              className="px-4 py-3 bg-blue-900/80 hover:bg-blue-800 text-white rounded-lg transition duration-300"
            >
              Software Development
            </Link>
            <Link
              to="/findJobs"
              className="px-4 py-3 bg-blue-900/80 hover:bg-blue-800 text-white rounded-lg transition duration-300"
            >
              Marketing
            </Link>
            <Link
              to="/findJobs"
              className="px-4 py-3 bg-blue-900/80 hover:bg-blue-800 text-white rounded-lg transition duration-300"
            >
              UI/UX Design
            </Link>
            <Link
              to="/findJobs"
              className="px-4 py-3 bg-blue-900/80 hover:bg-blue-800 text-white rounded-lg transition duration-300"
            >
              Management
            </Link>
          </div>

          {/* Trending Topic Section */}
          <div className="w-full inline-flex items-center gap-x-2">
            <div className="flex items-center gap-x-1">
              <MdTrendingUp className="text-lg text-blue-500" />
              <p className="text-sm text-gray-300">Top Trending Jobs:</p>
            </div>
            <div className="flex items-center gap-x-2 flex-wrap">
              <div>
                <Link className="text-sm font-normal text-gray-400 hover:text-blue-500 transition duration-300">
                  Software Engineer
                </Link>
                ,
              </div>
              <div>
                <Link className="text-sm font-normal text-gray-400 hover:text-blue-500 transition duration-300">
                  Data Scientist
                </Link>
                ,
              </div>
              <div>
                <Link className="text-sm font-normal text-gray-400 hover:text-blue-500 transition duration-300">
                  UX Designer
                </Link>
                ,
              </div>
              <div>
                <Link className="text-sm font-normal text-gray-400 hover:text-blue-500 transition duration-300">
                  Project Manager
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
