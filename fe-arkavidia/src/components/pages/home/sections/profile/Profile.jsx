import React, { useEffect, useState } from "react";
import apiClient from "../../../../../components/lib/axios";
import { Link } from "react-router-dom";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // Ambil data lengkap profile jobseeker
        const response = await apiClient.get("/api/profile/jobseeker");
        // response.data.data berisi:
        // { id, user_id, photo_url, headline, created_at, updated_at }
        setProfile(response.data.data);
      } catch (err) {
        console.error("Error fetching profile:", err);
        setError("Gagal mengambil data profil.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-gray-700 text-lg">Loading profile...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-red-500 text-lg">{error}</p>
      </div>
    );
  }
  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-gray-700 text-lg">No profile data available.</p>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
        {/* Tampilkan Foto Profil (jika ada) */}
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
          <p className="mt-1 text-gray-700">Headline: {profile.headline}</p>
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
      </div>
    </div>
  );
};

export default Profile;
