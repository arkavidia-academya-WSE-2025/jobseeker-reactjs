// src/components/pages/home/jobs/JobSearch.jsx
import React, { useState } from "react";
import SearchBar from "../../../ui/SearchBar";
import FilterPanel from "../../../ui/FilterPanel";
import JobCard from "../../../jobs/JobCard";

const JobSearch = () => {
  // State untuk pencarian dan filter
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("latest");
  const [filters, setFilters] = useState({ location: "", category: "" });

  // Dummy data lowongan
  const jobData = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "PT. Tech Innovators",
      location: "Jakarta",
      description:
        "Bergabunglah dengan tim frontend kami untuk membangun aplikasi web yang inovatif.",
      category: "it",
    },
    {
      id: 2,
      title: "Backend Developer",
      company: "PT. Data Solutions",
      location: "Bandung",
      description:
        "Kami mencari backend developer yang handal untuk mengembangkan API skala besar.",
      category: "it",
    },
    // Tambahkan data lowongan lainnya jika diperlukan
  ];

  // Handler untuk perubahan input pencarian
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handler submit pencarian
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Lakukan pencarian lowongan dengan searchTerm
    console.log("Searching for:", searchTerm);
  };

  // Handler perubahan sorting
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  // Handler perubahan filter
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  // Handler untuk melihat detail lowongan
  const handleViewDetail = (job) => {
    // Navigasi ke halaman detail atau tampilkan modal
    console.log("View detail for job:", job);
  };

  // Handler untuk mendaftar ke lowongan
  const handleApply = (job) => {
    // Aksi pendaftaran lowongan
    console.log("Apply for job:", job);
  };

  // Filtering dan sorting dummy (sesuaikan dengan kebutuhan)
  const filteredJobs = jobData.filter((job) => {
    const matchesSearch = job.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesLocation = filters.location
      ? job.location.toLowerCase().includes(filters.location.toLowerCase())
      : true;
    const matchesCategory = filters.category
      ? job.category === filters.category
      : true;
    return matchesSearch && matchesLocation && matchesCategory;
  });

  const sortedJobs = filteredJobs.sort((a, b) => {
    if (sortOption === "latest") {
      return b.id - a.id;
    } else if (sortOption === "oldest") {
      return a.id - b.id;
    }
    return b.id - a.id;
  });

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Pencarian Lowongan</h2>
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
        <div className="grid grid-cols-1 gap-4">
          {sortedJobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              onViewDetail={handleViewDetail}
              onApply={handleApply}
            />
          ))}
          {sortedJobs.length === 0 && (
            <p className="text-center text-gray-500">
              Tidak ada lowongan yang ditemukan.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobSearch;
