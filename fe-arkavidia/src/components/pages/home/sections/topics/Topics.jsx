import React from "react";

const Topics = () => {
  return (
    <div className="space-y-3">
      <h1 className="text-lg font-semibold text-neutral-700">
        Trending Topics
      </h1>
      <ul className="space-y-2">
        <li className="text-base text-neutral-600 font-medium hover:text-sky-500 ease-in-out duration-300">
          Topic 1
        </li>
        <li className="text-base text-neutral-600 font-medium hover:text-sky-500 ease-in-out duration-300">
          Topic 2
        </li>
        <li className="text-base text-neutral-600 font-medium hover:text-sky-500 ease-in-out duration-300">
          Topic 3
        </li>
        <li className="text-base text-neutral-600 font-medium hover:text-sky-500 ease-in-out duration-300">
          Topic 4
        </li>
      </ul>
    </div>
  );
};

export default Topics;
