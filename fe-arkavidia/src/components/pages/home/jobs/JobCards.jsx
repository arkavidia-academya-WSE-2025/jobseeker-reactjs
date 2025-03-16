// src/components/jobs/JobCard.jsx
import React from "react";

const JobCards = ({ job, onViewDetail, onApply }) => {
  return (
    <div className="border border-gray-200 bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="flex justify-between items-center">
        <div>
          {/* Pastikan properti ini sesuai: job.title, job.company, job.location */}
          <h3 className="text-lg font-bold">{job.title}</h3>
          <p className="text-sm text-gray-600">{job.company}</p>
        </div>
        <div className="text-sm text-gray-500">{job.location}</div>
      </div>
      {/* job.description juga harus ada di data */}
      <p className="mt-2 text-gray-700">{job.description}</p>

      <div className="mt-4 flex space-x-2">
        <button
          onClick={() => onViewDetail && onViewDetail(job)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Detail
        </button>
        <button
          onClick={() => onApply && onApply(job)}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default JobCards;
