import React from "react";

const Profile = () => {
  // Data user statis
  const user = {
    id: "123e4567-e89b-12d3-a456-426614174000",
    username: "john_doe",
    email: "john@example.com",
    created_at: "2023-01-01T00:00:00Z",
    updated_at: "2023-10-01T00:00:00Z",
    is_premium: true,
  };

  const handleEditProfile = () => {
    // Logika untuk menangani edit profil
    console.log("Membuka editor profil");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
        {/* Foto Profil dan Tombol Edit */}
        <div className="flex flex-col items-center mb-8 relative">
          <div className="relative">
            <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
            />
            <button
              onClick={handleEditProfile}
              className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors shadow-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
            </button>
          </div>
          <h2 className="mt-4 text-2xl font-bold text-gray-800">
            {user.username}
          </h2>
        </div>

        {/* Profile Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-xl font-semibold text-gray-800">
            Account Details
          </h1>
          <span className="text-sm text-gray-500">
            Member since: {new Date(user.created_at).toLocaleDateString()}
          </span>
        </div>

        {/* Account Details */}
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-500">
                Username
              </label>
              <p className="mt-1 text-gray-900">{user.username}</p>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-500">Email</label>
              <p className="mt-1 text-gray-900">{user.email}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-500">
                Account Created
              </label>
              <p className="mt-1 text-gray-900">
                {new Date(user.created_at).toLocaleString()}
              </p>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-500">
                Last Updated
              </label>
              <p className="mt-1 text-gray-900">
                {new Date(user.updated_at).toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        {/* Membership Status dan Tombol Edit Utama */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              <div>
                <label className="text-sm font-medium text-gray-500">
                  Membership Status
                </label>
                <div className="mt-1">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                      user.is_premium
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {user.is_premium ? "Premium" : "Basic"}
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={handleEditProfile}
              className="ml-4 bg-white text-gray-600 px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 hover:text-gray-800 transition-colors"
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
