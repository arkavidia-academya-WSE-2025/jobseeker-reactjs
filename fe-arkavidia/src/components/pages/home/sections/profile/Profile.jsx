import React, { useEffect, useState } from "react";
import apiClient from "../../../../../components/lib/axios";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCompleteProfile = async () => {
      try {
        // Pertama, ambil data profil minimal
        const profileRes = await apiClient.get("/api/profile/jobseeker");
        // Misalnya profileRes.data.data berisi field seperti:
        // { id, user_id, created_at, updated_at }
        const { user_id } = profileRes.data.data;

        // Kedua, ambil data lengkap user menggunakan user_id
        const userRes = await apiClient.get(`/api/users/${user_id}`);
        // userRes.data.data akan mengembalikan struktur lengkap:
        // { id, username, email, role, created_at, updated_at, ... }
        setUser(userRes.data.data);
      } catch (err) {
        console.error("Error fetching profile:", err);
        setError("Gagal mengambil data profil lengkap.");
      } finally {
        setLoading(false);
      }
    };

    fetchCompleteProfile();
  }, []);

  const handleEditProfile = () => {
    console.log("Membuka editor profil");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-gray-700 text-lg">Loading user data...</p>
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
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-gray-700 text-lg">No user data available.</p>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Profil User</h2>
          <p className="mt-1 text-gray-700">ID: {user.id}</p>
          <p className="mt-1 text-gray-700">Username: {user.username}</p>
          <p className="mt-1 text-gray-700">Email: {user.email}</p>
          <p className="mt-1 text-gray-700">Role: {user.role}</p>
          <p className="mt-1 text-gray-700">
            Dibuat: {new Date(user.created_at).toLocaleString()}
          </p>
          <p className="mt-1 text-gray-700">
            Diupdate: {new Date(user.updated_at).toLocaleString()}
          </p>
        </div>
        <button
          onClick={handleEditProfile}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
