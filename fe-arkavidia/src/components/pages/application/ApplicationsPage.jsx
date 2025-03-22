import React, { useEffect, useState } from "react";
import apiClient from "../../../components/lib/axios";
import { useNavigate } from "react-router-dom";

const ApplicationsPage = () => {
  const [applications, setApplications] = useState([]);
  const [paging, setPaging] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const fetchApplications = async () => {
    setLoading(true);
    setError("");
    try {
      const params = new URLSearchParams({
        page: "1",
        size: "10",
      });
      const response = await apiClient.get(
        `/api/applications?${params.toString()}`
      );
      const { data, paging: pagingInfo } = response.data;
      setApplications(data);
      setPaging(pagingInfo);
    } catch (err) {
      setError("Gagal mengambil data aplikasi.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  const handleChatWithApplicant = (application) => {
    if (application.job_seeker) {
      navigate("/chat", { state: { withUser: application.job_seeker } });
    } else {
      console.error("Data job_seeker tidak tersedia.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white p-6 relative overflow-hidden">
      <div className="absolute w-96 h-96 bg-blue-200/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse" />
      <div className="absolute w-96 h-96 bg-blue-200/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse" />
      <div className="max-w-5xl w-full mx-auto bg-white/90 backdrop-blur-sm border border-white/20 p-6 rounded-2xl shadow-xl relative z-10">
        <h2 className="text-2xl font-bold mb-4">Applications</h2>
        {loading ? (
          <p className="text-center text-gray-500">Loading applications...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : applications.length === 0 ? (
          <p className="text-center text-gray-500">No applications found.</p>
        ) : (
          <ul className="space-y-4">
            {applications.map((app) => (
              <li
                key={app.id}
                className="border p-4 rounded bg-white shadow-sm"
              >
                <p>
                  <strong>Full Name:</strong> {app.full_name}
                </p>
                <p>
                  <strong>Address:</strong> {app.address}
                </p>
                <p>
                  <strong>Status:</strong> {app.application_status}
                </p>
                <p>
                  <strong>CV Path:</strong> {app.cv_path}
                </p>
                {app.job && (
                  <div className="mt-2">
                    <p>
                      <strong>Job Title:</strong> {app.job.title}
                    </p>
                    <p>
                      <strong>Job Description:</strong> {app.job.description}
                    </p>
                  </div>
                )}
                {app.job_seeker && (
                  <button
                    onClick={() => handleChatWithApplicant(app)}
                    className="mt-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition-colors"
                  >
                    Chat
                  </button>
                )}
              </li>
            ))}
          </ul>
        )}
        {paging && (
          <div className="mt-4 text-center text-gray-500">
            Page {paging.page} of {paging.total_page} | Total Applications:{" "}
            {paging.total_item}
          </div>
        )}
      </div>
    </div>
  );
};

export default ApplicationsPage;
