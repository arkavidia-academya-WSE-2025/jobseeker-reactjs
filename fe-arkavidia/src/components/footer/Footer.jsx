import React from "react";
import Layout from "../layout/Layout";
import { Link } from "react-router-dom";
import { GiPortal } from "react-icons/gi";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full py-7 bg-neutral-200/50">
      <Layout className="w-full space-y-10">
        <div className="grid md:grid-cols-5 grid-cols-2 gap-10">
          <div className="col-span-2 space-y-4">
            <Link
              to="/"
              className="text-4xl text-sky-500 font-bold mr-16 flex items-center"
            >
              <GiPortal />
              JobSync
            </Link>
            <div className="space-y-6">
              <p className="text-sm text-neutral-500 font-normal">
                JobSync is a platform that connects job seekers with employers.
                We are committed to ease the recruitment process and help job
                seekers find the best career opportunities.
              </p>
              <div className="flex items-center gap-5 w-full">
                <Link
                  to="https://github.com/arkavidia-academya-WSE-2025/jobseeker-reactjs"
                  target="_blank"
                  className="w-10 h-10 rounded-full bg-sky-500/10 flex items-center justify-center hover:bg-sky-500/20 ease-in-out duration-300"
                >
                  <FaGithub className="text-sky-500 text-lg" />
                </Link>
              </div>
            </div>
          </div>

          <div className="col-span-1 space-y-4">
            <h1 className="text-xl text-neutral-700 font-semibold">
              For Job Seeker
            </h1>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/feeds"
                  className="text-base text-neutral-600 font-medium hover:text-sky-500 ease-in-out duration-300"
                >
                  Feeds
                </Link>
              </li>
              <li>
                <Link
                  to="/chatJob"
                  className="text-base text-neutral-600 font-medium hover:text-sky-500 ease-in-out duration-300"
                >
                  Chat
                </Link>
              </li>
              <li>
                <Link
                  to="/profile"
                  className="text-base text-neutral-600 font-medium hover:text-sky-500 ease-in-out duration-300"
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/findJobs"
                  className="text-base text-neutral-600 font-medium hover:text-sky-500 ease-in-out duration-300"
                >
                  Find Jobs
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1 space-y-4">
            <h1 className="text-xl text-neutral-700 font-semibold">
              For Recruiter
            </h1>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/feeds"
                  className="text-base text-neutral-600 font-medium hover:text-sky-500 ease-in-out duration-300"
                >
                  Feeds
                </Link>
              </li>
              <li>
                <Link
                  to="/profile"
                  className="text-base text-neutral-600 font-medium hover:text-sky-500 ease-in-out duration-300"
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/jobPosting"
                  className="text-base text-neutral-600 font-medium hover:text-sky-500 ease-in-out duration-300"
                >
                  Job Posting
                </Link>
              </li>
              <li>
                <Link
                  to="/applications"
                  className="text-base text-neutral-600 font-medium hover:text-sky-500 ease-in-out duration-300"
                >
                  Applications
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1 col-span-2 space-y-4">
            <h1 className="text-xl text-neutral-700 font-semibold">
              More Info
            </h1>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/notification"
                  className="text-base text-neutral-600 font-medium hover:text-sky-500 ease-in-out duration-300"
                >
                  Notifications
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="text-base text-neutral-600 font-medium hover:text-sky-500 ease-in-out duration-300"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="text-base text-neutral-600 font-medium hover:text-sky-500 ease-in-out duration-300"
                >
                  Register
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-base text-neutral-600 font-medium hover:text-sky-500 ease-in-out duration-300"
                >
                  Home
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full h-[1px] bg-neutral-300"></div>

        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-3 md:gap-0">
          <p className="text-sm text-neutral-500/80 font-normal">
            © 2025 JobSync. All rights reserved.
          </p>
          <p className="text-sm text-neutral-500/80 font-normal">
            Designed and Developed by{" "}
            <Link
              to="https://github.com/arkavidia-academya-WSE-2025/jobseeker-reactjs"
              className="text-sky-500 hover:text-sky-600 ease-in-out duration-300 ml-1"
              target="_blank"
              rel="noreferrer"
            >
              Group 5
            </Link>
          </p>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
