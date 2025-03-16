import React from "react";
import { Link } from "react-router-dom";

const Topics = () => {
  return (
    <div className="w-full space-y-3">
      <Link
        to="/jobs/tag"
        className="w-full flex items-center justify-between text-base text-neutral-500 hover:text-sky-600"
      >
        <p className="">Software Engineering</p>
        <p className="">200k+</p>
      </Link>
      <Link
        to="/jobs/tag"
        className="w-full flex items-center justify-between text-base text-neutral-500 hover:text-sky-600"
      >
        <p className="">Data Science</p>
        <p className="">150k+</p>
      </Link>
      <Link
        to="/jobs/tag"
        className="w-full flex items-center justify-between text-base text-neutral-500 hover:text-sky-600"
      >
        <p className="">UI/UX Design</p>
        <p className="">120k+</p>
      </Link>
      <Link
        to="/jobs/tag"
        className="w-full flex items-center justify-between text-base text-neutral-500 hover:text-sky-600"
      >
        <p className="">Marketing</p>
        <p className="">130k+</p>
      </Link>
      <Link
        to="/jobs/tag"
        className="w-full flex items-center justify-between text-base text-neutral-500 hover:text-sky-600"
      >
        <p className="">Cyber Security</p>
        <p className="">90k+</p>
      </Link>
      <Link
        to="/jobs/tag"
        className="w-full flex items-center justify-between text-base text-neutral-500 hover:text-sky-600"
      >
        <p className="">Project Management</p>
        <p className="">100k+</p>
      </Link>
      <Link
        to="/jobs/tag"
        className="w-full flex items-center justify-between text-base text-neutral-500 hover:text-sky-600"
      >
        <p className="">Artificial Intelligence</p>
        <p className="">80k+</p>
      </Link>
      <Link
        to="/jobs/tag"
        className="w-full flex items-center justify-between text-base text-neutral-500 hover:text-sky-600"
      >
        <p className="">DevOps</p>
        <p className="">110k+</p>
      </Link>
      <Link
        to="/jobs/tag"
        className="w-full flex items-center justify-between text-base text-neutral-500 hover:text-sky-600"
      >
        <p className="">Blockchain</p>
        <p className="">70k+</p>
      </Link>
      <Link
        to="/jobs/tag"
        className="w-full flex items-center justify-between text-base text-neutral-500 hover:text-sky-600"
      >
        <p className="">Cloud Computing</p>
        <p className="">95k+</p>
      </Link>
    </div>
  );
};

export default Topics;
