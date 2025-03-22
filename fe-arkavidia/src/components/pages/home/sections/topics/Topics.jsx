import React from "react";

const topicsData = [
  "Remote Work",
  "Software Development",
  "UI/UX Design",
  "Data Science",
  "Cyber Security",
];

const Topics = () => {
  return (
    <div className="space-y-3">
      <h1 className="text-lg font-semibold text-neutral-700">
        Trending Topics
      </h1>
      <ul className="space-y-2">
        {topicsData.map((topic, index) => (
          <li
            key={index}
            className="text-base text-neutral-600 font-medium hover:text-sky-500 ease-in-out duration-300"
          >
            {topic}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Topics;
