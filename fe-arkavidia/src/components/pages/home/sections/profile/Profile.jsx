import React, { useEffect, useState } from "react";
import apiClient from "../../../../../components/lib/axios";
import { Link } from "react-router-dom";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const userData = JSON.parse(localStorage.getItem("userData")) || {};
  const isRecruiter = userData.role === "recruiter";

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const endpoint = isRecruiter
          ? "/api/profile/company"
          : "/api/profile/jobseeker";
        const response = await apiClient.get(endpoint);
        setProfile(response.data.data);
      } catch (err) {
        setError("Gagal mengambil data profil.");
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [isRecruiter]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute w-96 h-96 bg-blue-200/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse" />
      <div className="absolute w-96 h-96 bg-blue-200/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse" />
      <div className="max-w-2xl w-full bg-white/90 backdrop-blur-sm border border-white/20 p-6 md:p-8 rounded-2xl shadow-xl relative z-10">
        {loading ? (
          <p className="text-gray-700 text-lg">Loading profile...</p>
        ) : error ? (
          <p className="text-red-500 text-lg">{error}</p>
        ) : !profile ? (
          <p className="text-gray-700 text-lg">No profile data available.</p>
        ) : (
          <>
            {profile.photo_url && (
              <div className="flex justify-center mb-4">
                <img
                  src={profile.photo_url}
                  alt="Profile"
                  className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                />
              </div>
            )}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 text-center">
                Profil User
              </h2>
              <p className="mt-1 text-gray-700">ID: {profile.id}</p>
              <p className="mt-1 text-gray-700">User ID: {profile.user_id}</p>
              {isRecruiter ? (
                <p className="mt-1 text-gray-700">
                  Description: {profile.description || "Tidak tersedia"}
                </p>
              ) : (
                <p className="mt-1 text-gray-700">
                  Headline: {profile.headline || "Tidak tersedia"}
                </p>
              )}
              <p className="mt-1 text-gray-700">
                Dibuat: {new Date(profile.created_at).toLocaleString()}
              </p>
              <p className="mt-1 text-gray-700">
                Diupdate: {new Date(profile.updated_at).toLocaleString()}
              </p>
            </div>
            <Link to="/editProfile">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                Edit Profile
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
