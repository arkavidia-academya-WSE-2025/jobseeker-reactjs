import React, { useEffect, useState } from "react";
import SearchBar from "../../../ui/SearchBar";
import FilterPanel from "../../../ui/FilterPanel";
import JobCards from "./JobCards";
import apiClient from "../../../../components/lib/axios";

const JobSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("latest");
  const [filters, setFilters] = useState({ location: "", category: "" });
  const [jobs, setJobs] = useState([]);
  const [paging, setPaging] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [jobDetail, setJobDetail] = useState(null);
  const [modalError, setModalError] = useState("");

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
      console.error("Error fetching jobs:", err);
      setError("Gagal mengambil data lowongan pekerjaan.");
    } finally {
      setIsLoading(false);
    }
  };
  const handleViewDetail = async (job) => {
    try {
      const response = await apiClient.get(`/api/jobs/${job.id}`);
      setJobDetail(response.data.data);
      setShowModal(true);
      setModalError("");
    } catch (err) {
      console.error("Error fetching job detail:", err);
      setModalError("Gagal mengambil detail lowongan.");
      setShowModal(true);
    }
  };

  const handleApply = (job) => {
    console.log("Apply for job:", job);
  };

  const closeModal = () => {
    setShowModal(false);
    setJobDetail(null);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow">
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
                onApply={handleApply}
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
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl relative">
            <button
              onClick={closeModal}
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
    </div>
  );
};

export default JobSearch;
