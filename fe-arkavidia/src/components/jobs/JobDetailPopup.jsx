import React from "react";
import { FaTimes } from "react-icons/fa";

const JobDetailPopup = ({ job, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full p-6 relative animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <FaTimes size={20} />
        </button>
        <h2 className="text-3xl font-bold mb-4 text-gray-800">{job.title}</h2>
        <p className="text-sm text-gray-500 mb-2">
          <strong>Company:</strong> {job.company}
        </p>
        <p className="text-gray-700 mb-4">{job.fullDescription}</p>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-sm text-gray-600">
              <strong>Location:</strong> {job.location}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600">
              <strong>Salary:</strong> ${job.salary.toLocaleString()}
            </p>
          </div>
        </div>
        <div className="space-y-3">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Requirements
            </h3>
            <ul className="list-disc list-inside text-gray-700">
              {job.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Benefits</h3>
            <ul className="list-disc list-inside text-gray-700">
              {job.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailPopup;
