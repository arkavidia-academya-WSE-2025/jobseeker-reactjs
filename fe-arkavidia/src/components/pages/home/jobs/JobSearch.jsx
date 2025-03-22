import React, { useEffect, useState } from "react";
import SearchBar from "../../../ui/SearchBar";
import FilterPanel from "../../../ui/FilterPanel";
import JobCards from "./JobCards";
import apiClient from "../../../../components/lib/axios";

const JobSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("latest");
  const [filters, setFilters] = useState({ location: "" });
  const [jobs, setJobs] = useState([]);
  const [paging, setPaging] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [showDetailModal, setShowDetailModal] = useState(false);
  const [jobDetail, setJobDetail] = useState(null);
  const [modalError, setModalError] = useState("");

  const [showApplyModal, setShowApplyModal] = useState(false);
  const [applicationForm, setApplicationForm] = useState({
    full_name: "",
    address: "",
    cv_path: "",
    job_id: "",
  });
  const [isSubmittingApplication, setIsSubmittingApplication] = useState(false);
  const [applyError, setApplyError] = useState("");

  const userData = JSON.parse(localStorage.getItem("userData")) || {};
  const isJobSeeker = userData.role === "job_seeker";

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchJobs();
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const fetchJobs = async () => {
    setIsLoading(true);
    setError("");
    try {
      const params = new URLSearchParams();
      if (searchTerm) params.append("title", searchTerm);
      if (filters.location) params.append("location", filters.location);
      params.append("page", "1");
      params.append("size", "10");

      const response = await apiClient.get(`/api/jobs?${params.toString()}`);
      const { data, paging: pagingInfo } = response.data;
      let sortedJobs = data;
      if (sortOption === "latest") {
        sortedJobs = data.sort(
          (a, b) => new Date(b.created_at) - new Date(a.created_at)
        );
      } else if (sortOption === "oldest") {
        sortedJobs = data.sort(
          (a, b) => new Date(a.created_at) - new Date(b.created_at)
        );
      }
      setJobs(sortedJobs);
      setPaging(pagingInfo);
    } catch (err) {
      setError("Gagal mengambil data lowongan pekerjaan.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleViewDetail = async (job) => {
    try {
      const response = await apiClient.get(`/api/jobs/${job.id}`);
      setJobDetail(response.data.data);
      setShowDetailModal(true);
      setModalError("");
    } catch (err) {
      setModalError("Gagal mengambil detail lowongan.");
      setShowDetailModal(true);
    }
  };

  const handleOpenApplyModal = (job) => {
    if (!isJobSeeker) return;
    setApplicationForm({
      full_name: "",
      address: "",
      cv_path: "",
      job_id: job.id,
    });
    setShowApplyModal(true);
    setApplyError("");
  };

  const handleApplicationInputChange = (e) => {
    const { name, value } = e.target;
    setApplicationForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleApplicationSubmit = async (e) => {
    e.preventDefault();
    setIsSubmittingApplication(true);
    setApplyError("");
    try {
      const token = localStorage.getItem("authToken");
      await apiClient.post(
        "/api/applications",
        {
          full_name: applicationForm.full_name,
          address: applicationForm.address,
          cv_path: applicationForm.cv_path,
          job_id: applicationForm.job_id,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );
      setShowApplyModal(false);
    } catch (err) {
      setApplyError("Gagal mengirim aplikasi.");
    } finally {
      setIsSubmittingApplication(false);
    }
  };

  const closeDetailModal = () => {
    setShowDetailModal(false);
    setJobDetail(null);
  };

  const closeApplyModal = () => {
    setShowApplyModal(false);
    setApplicationForm((prev) => ({ ...prev, job_id: "" }));
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white p-6 relative overflow-hidden">
      <div className="absolute w-96 h-96 bg-blue-200/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse" />
      <div className="absolute w-96 h-96 bg-blue-200/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse" />
      <div className="max-w-5xl w-full mx-auto bg-white/90 backdrop-blur-sm border border-white/20 p-6 rounded-2xl shadow-xl relative z-10">
        <h2 className="text-2xl font-bold mb-4">Search Jobs</h2>
        <div className="mb-4">
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={handleSearchChange}
            onSearchSubmit={handleSearchSubmit}
          />
        </div>
        <div className="mb-6">
          <FilterPanel
            sortOption={sortOption}
            onSortChange={handleSortChange}
            filters={filters}
            onFilterChange={handleFilterChange}
          />
        </div>
        {isLoading ? (
          <p className="text-center text-gray-500">Loading jobs...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : jobs.length > 0 ? (
          <div className="grid grid-cols-1 gap-4">
            {jobs.map((job) => (
              <JobCards
                key={job.id}
                job={job}
                onViewDetail={handleViewDetail}
                onApply={isJobSeeker ? () => handleOpenApplyModal(job) : null}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">Sorry! no jobs found.</p>
        )}
        {paging && (
          <div className="mt-4 text-center text-gray-500">
            Page {paging.page} of {paging.total_page} | Total Jobs:{" "}
            {paging.total_item}
          </div>
        )}
      </div>

      {showDetailModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl relative">
            <button
              onClick={closeDetailModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            >
              &times;
            </button>
            {modalError ? (
              <p className="text-red-500">{modalError}</p>
            ) : jobDetail ? (
              <div>
                <h2 className="text-2xl font-bold mb-4">{jobDetail.title}</h2>
                <p className="mb-2">
                  <strong>Description:</strong> {jobDetail.description}
                </p>
                <p className="mb-2">
                  <strong>Requirements:</strong> {jobDetail.requirements}
                </p>
                <p className="mb-2">
                  <strong>Location:</strong> {jobDetail.location}
                </p>
                <p className="mb-2">
                  <strong>Salary:</strong> {jobDetail.salary}
                </p>
                <p className="mb-2">
                  <strong>Posted at:</strong>{" "}
                  {new Date(jobDetail.created_at).toLocaleString()}
                </p>
                <p className="mb-2">
                  <strong>Updated at:</strong>{" "}
                  {new Date(jobDetail.updated_at).toLocaleString()}
                </p>
                {jobDetail.recruiter && (
                  <div className="mt-4">
                    <h3 className="text-xl font-semibold">Recruiter Info</h3>
                    <p>
                      <strong>Username:</strong> {jobDetail.recruiter.username}
                    </p>
                    <p>
                      <strong>Email:</strong> {jobDetail.recruiter.email}
                    </p>
                    <p>
                      <strong>Role:</strong> {jobDetail.recruiter.role}
                    </p>
                  </div>
                )}
              </div>
            ) : (
              <p>Loading job detail...</p>
            )}
          </div>
        </div>
      )}

      {showApplyModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
            <button
              onClick={closeApplyModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">Apply for Job</h2>
            {applyError && <p className="text-red-500 mb-2">{applyError}</p>}
            <form onSubmit={handleApplicationSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="full_name"
                  value={applicationForm.full_name}
                  onChange={handleApplicationInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={applicationForm.address}
                  onChange={handleApplicationInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  CV Path
                </label>
                <input
                  type="text"
                  name="cv_path"
                  value={applicationForm.cv_path}
                  onChange={handleApplicationInputChange}
                  placeholder="Link or file name"
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubmittingApplication}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                {isSubmittingApplication
                  ? "Submitting..."
                  : "Submit Application"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobSearch;
