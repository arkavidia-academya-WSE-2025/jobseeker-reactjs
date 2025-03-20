import React from "react";
import Layout from "../../../layout/Layout";
import { FaSliders } from "react-icons/fa6";
import TopTag from "../../../topTag/TopTag";
import Topics from "./topics/Topics";
import JobCard from "../../../jobs/JobCard";
import ReactLogo from "../../../../assets/react.svg";
import { TbReload } from "react-icons/tb";

const Jobs = () => {
  return (
    <div className="w-full">
      <Layout className="w-full space-y-12 flex items-center justify-center  flex-col">
        {/* Top Section*/}
        <TopTag
          title={"Top Trending Jobs"}
          desc={"Lorem Ipsum Ipsum Lorem Lorem Ipsum Lorem Ipsum"}
        />

        {/* Job Section*/}
        <div className="w-full flex items-start gap-16 flex-wrap">
          {/* Trending Topics Section*/}
          <div className="md:w-1/3 w-full bg-sky-500/15 rounded-xl p-6 space-y-5 md:sticky relative md:top-5 top-0">
            <div className="w-full flex items-center justify-between border-b border-neutral-400/50 pb-5">
              <h1 className="text-x1 font-bold text-sky-600">Trending Tags</h1>
            </div>
            {/* Search Topics Section*/}
            <Topics />
          </div>
          {/* Job Cards Section*/}
          <div className="flex-1 space-y-12">
            <div className="w-full space-y-5">
              <JobCard
                companyImg={ReactLogo}
                jobTitle={"Senior UI/Ux Designer"}
                companyName={"React Company"}
                // jobLocation={"Indonesian - East Java"}
                // jobType={"WFO"}
                // jobTime={"Full Time"}
                // salary={"$70k"}
                // dateDuration={"5th Sept - 10th Sept"}
                jobDesc={
                  "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
                }
              />
              <JobCard
                companyImg={ReactLogo}
                jobTitle={"Senior UI/Ux Designer"}
                companyName={"React Company"}
                // jobLocation={"Indonesian - East Java"}
                // jobType={"WFO"}
                // jobTime={"Full Time"}
                // salary={"$70k"}
                // dateDuration={"5th Sept - 10th Sept"}
                jobDesc={
                  "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
                }
              />
              <JobCard
                companyImg={ReactLogo}
                jobTitle={"Senior UI/Ux Designer"}
                companyName={"React Company"}
                // jobLocation={"Indonesian - East Java"}
                // jobType={"WFO"}
                // jobTime={"Full Time"}
                // salary={"$70k"}
                // dateDuration={"5th Sept - 10th Sept"}
                jobDesc={
                  "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
                }
              />
              <JobCard
                companyImg={ReactLogo}
                jobTitle={"Senior UI/Ux Designer"}
                companyName={"React Company"}
                // jobLocation={"Indonesian - East Java"}
                // jobType={"WFO"}
                // jobTime={"Full Time"}
                // salary={"$70k"}
                // dateDuration={"5th Sept - 10th Sept"}
                jobDesc={
                  "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
                }
              />
              <JobCard
                companyImg={ReactLogo}
                jobTitle={"Senior UI/Ux Designer"}
                companyName={"React Company"}
                // jobLocation={"Indonesian - East Java"}
                // jobType={"WFO"}
                // jobTime={"Full Time"}
                // salary={"$70k"}
                // dateDuration={"5th Sept - 10th Sept"}
                jobDesc={
                  "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
                }
              />
            </div>

            <div className="w-full flex items-center justify-center">
              <button className="w-fit px-6 py-2 rounded-full bg-sky-500 hover:bg-sky-600 text-base text-neutral-50 font-normal flex items-center justify-center gap-x-2 ease-in-out duration-300">
                Load More
                <TbReload className="text-lg" />
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Jobs;
