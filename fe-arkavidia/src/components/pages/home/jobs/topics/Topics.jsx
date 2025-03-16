import React from "react";
import { Link } from "react-router-dom";

const Topics = () => {
  return (
    <div className="w-full space-y-3">
      <Link
        to="/jobs/tag"
        className="w-full flex items-center justify-between text-base text-neutral-500 hover:text-sky-600 "
      >
        <p className="">Natural Aceh</p>
        <p className="">120k+</p>
      </Link>
      <Link
        to="/jobs/tag"
        className="w-full flex items-center justify-between text-base text-neutral-500 hover:text-sky-600 "
      >
        <p className="">Natural Aceh</p>
        <p className="">120k+</p>
      </Link>
      <Link
        to="/jobs/tag"
        className="w-full flex items-center justify-between text-base text-neutral-500 hover:text-sky-600 "
      >
        <p className="">Natural Aceh</p>
        <p className="">120k+</p>
      </Link>
    </div>
  );
};

export default Topics;
