import React from "react";
import { Link } from "react-router-dom";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import {
  MdWork,
  MdWorkHistory,
  MdOutlineAttachMoney,
  MdOutlineCalendarMonth,
} from "react-icons/md";

const JobCard = ({
  companyImg,
  jobTitle,
  companyName,
  jobLocation,
  jobType,
  jobTime,
  salary,
  dateDuration,
  jobDesc,
}) => {
  return (
    <div className="w-full bg-white border border-neutral-300/60 rounded-xl shadow-sm p-5 flex item-start md:gap-6 gap-4">
      {/* Jobs Image */}
      <div className="md:w-14 w-10 md:h-14 h-10 rounded-lg border border-neutral-100/20">
        <img
          src={companyImg}
          alt="company logo"
          className="w-full h-full object-contain rounded-lg"
        />
      </div>
      {/* Jobs Details */}
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
                {jobTitle}
              </Link>
              <p className="text-sm text-sky-700">{companyName}</p>
            </div>
            {/* <Link
              to="/"
              className="w-9 h-9 rounded-full bg-sky-500/10 flex items-center justify-center hover:bg-sky-500/10 ease-in-out duration-300"
            >
              <IoMdHeartEmpty className="text-sky-500 text-2x1 pt-0.5" />
            </Link> */}
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-x-4 gap-y-1 flex-wrap">
              <div className="flex items-center gap-x-1 text-sm">
                <IoLocationSharp className="text-neutral-400" />
                <p className="text-xs text-neutral-400">{jobLocation}</p>
              </div>
              <div className="w-1 h-1 bg-neutral-400/80 rounded-full"></div>
              <div className="flex items-center gap-x-1 text-sm">
                <MdWork className="text-neutral-400" />
                <p className="text-xs text-neutral-400">{jobType}</p>
              </div>
              <div className="w-1 h-1 bg-neutral-400/80 rounded-full"></div>
              <div className="flex items-center gap-x-1 text-sm">
                <MdWorkHistory className="text-neutral-400" />
                <p className="text-xs text-neutral-400">{jobTime}</p>
              </div>
            </div>
            <div className="flex items-center gap-x-4 gap-y-1 flex-wrap">
              <div className="flex items-center gap-x-1 text-sm">
                <MdOutlineAttachMoney className="text-neutral-400" />
                <p className="text-xs text-neutral-400">{salary}</p>
              </div>
              <div className="w-1 h-1 bg-neutral-400/80 rounded-full"></div>
              <div className="flex items-center gap-x-1 text-sm">
                <MdOutlineCalendarMonth className="text-neutral-400" />
                <p className="text-xs text-neutral-400">{dateDuration}</p>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral-500 line-clamp-2">{jobDesc}</p>
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
              Adobe
            </Link>
            <Link
              to="/"
              className="text-sm text-sky-500 bg-sky-500/10 rounded-full px-2 py-0.5"
            >
              Canva
            </Link>
            <Link
              to="/"
              className="text-sm text-sky-500 bg-sky-500/10 rounded-full px-2 py-0.5"
            >
              Adobe IL
            </Link>
          </div>
          <button className="md:w-fit w-full px-5 py-2 rounded-full bg-sky-500 hover:bg-sky-600 text-sm text-neutral-50 font-normal flex items-center justify-center gap-x-2 ease-in-out duration-300">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
