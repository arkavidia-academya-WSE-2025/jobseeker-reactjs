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
      console.error("Error fetching applications:", err);
      setError("Gagal mengambil data aplikasi.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Applications</h2>
        {loading ? (
          <p className="text-center text-gray-500">Loading applications...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : applications.length === 0 ? (
          <p className="text-center text-gray-500">No applications found.</p>
        ) : (
          <ul>
            {applications.map((app) => (
              <li key={app.id} className="border p-4 mb-4 rounded">
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
                {/* Tombol Chat: saat recruiter klik, navigasi ke /chat dan kirim data kontak (job_seeker) */}
                {app.job_seeker && (
                  <button
                    className="mt-2 bg-blue-500 text-white px-3 py-1 rounded"
                    onClick={() =>
                      navigate("/chat", { state: { withUser: app.job_seeker } })
                    }
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
