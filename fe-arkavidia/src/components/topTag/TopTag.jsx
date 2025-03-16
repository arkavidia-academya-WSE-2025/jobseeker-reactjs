import React from "react";

const TopTag = ({ title, desc }) => {
  return (
    <div className="w-full space-y-2 flex items-center justify-center flex-col text-center">
      <h1 className="text-3x1 font-bold text-sky-600">{title}</h1>
      <p className="text-base font-normal text-neutral-500">{desc}</p>
    </div>
  );
};

export default TopTag;
