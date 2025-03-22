import React, { useState } from "react";
import Layout from "../../../layout/Layout";
import TopTag from "../../../topTag/TopTag";
import { Link } from "react-router-dom";
import ReactLogo from "../../../../assets/react.svg";
import JobDetailPopup from "../../../jobs/JobDetailPopup";

const NearbyJobs = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupJobData, setPopupJobData] = useState(null);
  const staticJobData = {
    title: "Frontend Developer",
    company: "Innovative Web Solutions",
    fullDescription:
      "We are seeking a highly skilled Frontend Developer who is proficient in React, CSS, and JavaScript. You will work closely with our design team to create visually appealing, user-friendly interfaces. You must have a keen eye for design and a passion for building high-performance web applications.",
    location: "New York, NY",
    salary: 85000,
    requirements: [
      "3+ years of experience in frontend development",
      "Proficient in React and Redux",
      "Experience with responsive and mobile-first design",
      "Strong understanding of JavaScript, HTML5, and CSS3",
    ],
    benefits: [
      "Health insurance",
      "401(k) matching",
      "Flexible working hours",
      "Remote work options",
    ],
  };

  const handleViewDetails = () => {
    setPopupJobData(staticJobData);
    setShowPopup(true);
  };

  return (
    <div className="w-full">
      <Layout className="w-full space-y-12 flex items-center justify-center flex-col">
        {/* Top Section */}
        <TopTag
          title={"Jobs That Fit You"}
          desc={"Discover jobs near you that match your interests."}
        />
        {/* Jobs Card */}
        <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-12">
          <div className="w-full rounded-xl bg-gray-100 border border-gray-300 flex items-start md:gap-6 gap-4 p-4">
            {/* Jobs Image */}
            <div className="md:w-14 w-10 md:h-14 h-10 rounded-lg border border-gray-200">
              <img
                src={ReactLogo}
                alt="Company Logo"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
            {/* Jobs Details */}
            <div className="flex-1 space-y-5">
              <div className="space-y-3">
                <div className="w-full flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Link
                      to="/job-details"
                      className="text-xl font-semibold text-gray-800"
                    >
                      Frontend Developer
                    </Link>
                    <p className="text-sm text-blue-600">
                      Innovative Web Solutions
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 line-clamp-2">
                  Join our dynamic team as a Frontend Developer and create
                  stunning user interfaces.
                </p>
              </div>
              <div className="w-full flex items-center justify-between gap-5 flex-wrap">
                <button
                  onClick={handleViewDetails}
                  className="md:w-fit w-full px-5 py-2 rounded-full bg-blue-500 hover:bg-blue-600 text-sm text-white font-normal flex items-center justify-center gap-x-2 transition duration-300"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
          <div className="w-full rounded-xl bg-gray-100 border border-gray-300 flex items-start md:gap-6 gap-4 p-4">
            <div className="md:w-14 w-10 md:h-14 h-10 rounded-lg border border-gray-200">
              <img
                src={ReactLogo}
                alt="Company Logo"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
            <div className="flex-1 space-y-5">
              <div className="space-y-3">
                <div className="w-full flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Link
                      to="/job-details"
                      className="text-xl font-semibold text-gray-800"
                    >
                      Data Analyst
                    </Link>
                    <p className="text-sm text-blue-600">Insight Analytics</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 line-clamp-2">
                  Looking for a Data Analyst to help drive our data initiatives
                  and provide business insights.
                </p>
              </div>
              <div className="w-full flex items-center justify-between gap-5 flex-wrap">
                <button
                  onClick={handleViewDetails}
                  className="md:w-fit w-full px-5 py-2 rounded-full bg-blue-500 hover:bg-blue-600 text-sm text-white font-normal flex items-center justify-center gap-x-2 transition duration-300"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </Layout>

      {showPopup && popupJobData && (
        <JobDetailPopup
          job={popupJobData}
          onClose={() => setShowPopup(false)}
        />
      )}
    </div>
  );
};

export default NearbyJobs;
