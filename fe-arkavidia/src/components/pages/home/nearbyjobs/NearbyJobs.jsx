import React from "react";
import Layout from "../../../layout/Layout";
import TopTag from "../../../topTag/TopTag";
import ReactLogo from "../../../../assets/react.svg";
import { Link } from "react-router-dom";
import { IoMdHeartEmpty } from "react-icons/io";

const NearbyJobs = () => {
  return (
    <div className="w-full">
      <Layout className="w-full space-y-12 flex items-center justify-center flex-col">
        {/* Top Section */}
        <TopTag
          title={"Nearby Jobs"}
          desc={"System found jobs according to your interest"}
        />

        {/* Jobs Card */}
        <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-12">
          <div className="w-full rounded-x1 bg-neutral-100/60 border border-neutral-300/18 flex items-start md:gap-6 gap-4 p-4">
            {/* Jobs Image */}
            <div className="md:w-14 w-10 md:h-14 h-10 rounded-lg border border-neutral-100/20">
              <img
                src={ReactLogo}
                alt="company logo"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
            {/* Jobs Details */}
            <div className="flex-1 space-y-5">
              {/* Jobs Title, Company, Desc */}
              <div className="space-y-3">
                <div className="w-full flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Link
                      to="/job-details"
                      className="text-xl font-semibold text-neutral-700"
                    >
                      Senior UI/Ux Designer
                    </Link>
                    <p className="text-sm text-sky-700">MiawAug Team</p>
                  </div>
                  <Link
                    to="/"
                    className="w-9 h-9 rounded-full bg-sky-500/10 flex items-center justify-center hover:bg-sky-500/10 ease-in-out duration-300"
                  >
                    <IoMdHeartEmpty className="text-sky-500 text-2x1 pt-0.5" />
                  </Link>
                </div>

                <p className="text-sm text-neutral-500 line-clamp-2">
                  Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                  Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                </p>
              </div>

              {/* Tags and Buttons*/}
              <div className="w-full flex items-center justify-between gap-5 flex-wrap">
                <div className="flex items-center gap-3 flex-wrap">
                  <Link
                    to="/"
                    className="text-sm text-sky-500 bg-sky-500/10 rounded-full px-2 py-0.5"
                  >
                    Figma
                  </Link>
                  <Link
                    to="/"
                    className="text-sm text-sky-500 bg-sky-500/10 rounded-full px-2 py-0.5"
                  >
                    Design
                  </Link>
                  <Link
                    to="/"
                    className="text-sm text-sky-500 bg-sky-500/10 rounded-full px-2 py-0.5"
                  >
                    Canvas
                  </Link>
                </div>
                <button className="md:w-fit w-full px-5 py-2 rounded-full bg-sky-500 hover:bg-sky-600 text-sm text-neutral-50 font-normal flex items-center justify-center gap-x-2 ease-in-out duration-300">
                  View Details
                </button>
              </div>
            </div>
          </div>
          <div className="w-full rounded-x1 bg-neutral-100/60 border border-neutral-300/18 flex items-start md:gap-6 gap-4 p-4">
            {/* Jobs Image */}
            <div className="md:w-14 w-10 md:h-14 h-10 rounded-lg border border-neutral-100/20">
              <img
                src={ReactLogo}
                alt="company logo"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
            {/* Jobs Details */}
            <div className="flex-1 space-y-5">
              {/* Jobs Title, Company, Desc */}
              <div className="space-y-3">
                <div className="w-full flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Link
                      to="/job-details"
                      className="text-xl font-semibold text-neutral-700"
                    >
                      Senior UI/Ux Designer
                    </Link>
                    <p className="text-sm text-sky-700">MiawAug Team</p>
                  </div>
                  <Link
                    to="/"
                    className="w-9 h-9 rounded-full bg-sky-500/10 flex items-center justify-center hover:bg-sky-500/10 ease-in-out duration-300"
                  >
                    <IoMdHeartEmpty className="text-sky-500 text-2x1 pt-0.5" />
                  </Link>
                </div>

                <p className="text-sm text-neutral-500 line-clamp-2">
                  Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                  Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                </p>
              </div>

              {/* Tags and Buttons*/}
              <div className="w-full flex items-center justify-between gap-5 flex-wrap">
                <div className="flex items-center gap-3 flex-wrap">
                  <Link
                    to="/"
                    className="text-sm text-sky-500 bg-sky-500/10 rounded-full px-2 py-0.5"
                  >
                    Figma
                  </Link>
                  <Link
                    to="/"
                    className="text-sm text-sky-500 bg-sky-500/10 rounded-full px-2 py-0.5"
                  >
                    Design
                  </Link>
                  <Link
                    to="/"
                    className="text-sm text-sky-500 bg-sky-500/10 rounded-full px-2 py-0.5"
                  >
                    Canvas
                  </Link>
                </div>
                <button className="md:w-fit w-full px-5 py-2 rounded-full bg-sky-500 hover:bg-sky-600 text-sm text-neutral-50 font-normal flex items-center justify-center gap-x-2 ease-in-out duration-300">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default NearbyJobs;
