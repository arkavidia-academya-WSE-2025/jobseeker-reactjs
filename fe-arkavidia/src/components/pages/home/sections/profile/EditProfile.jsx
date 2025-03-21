import React, { useEffect, useState } from "react";
import apiClient from "../../../../../components/lib/axios";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("userData")) || {};
  const isRecruiter = userData.role === "recruiter";

  const [profile, setProfile] = useState(
    isRecruiter ? { description: "" } : { headline: "" }
  );
  const [photoFile, setPhotoFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const endpoint = isRecruiter
          ? "/api/profile/company"
          : "/api/profile/jobseeker";
        const response = await apiClient.get(endpoint);
        const { photo_url } = response.data.data;

        if (isRecruiter) {
          setProfile({ description: response.data.data.description || "" });
        } else {
          setProfile({ headline: response.data.data.headline || "" });
        }
        setPreviewUrl(photo_url || "");
      } catch (err) {
        console.error("Error fetching profile:", err);
        setError("Gagal mengambil data profil.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [isRecruiter]);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setPhotoFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleInputChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError(null);
    try {
      const formData = new FormData();
      // Append field berdasarkan role
      if (isRecruiter) {
        formData.append("description", profile.description);
      } else {
        formData.append("headline", profile.headline);
      }
      if (photoFile) {
        formData.append("photo_url", photoFile);
      }

      const updateEndpoint = isRecruiter
        ? "/api/profile/company"
        : "/api/profile/jobseeker";

      const response = await apiClient.put(updateEndpoint, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Profile updated:", response.data.data);
      navigate("/profile");
    } catch (err) {
      console.error("Error updating profile:", err);
      setError("Gagal memperbarui profil.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-gray-700 text-lg">Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Edit Profile</h2>
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded text-sm">
            {error}
          </div>
        )}
        <form
          onSubmit={handleSubmit}
          className="space-y-6"
          encType="multipart/form-data"
        >
          <div>
            <label
              htmlFor="photo"
              className="block text-gray-700 font-medium mb-2"
            >
              Upload Photo
            </label>
            <input
              type="file"
              name="photo"
              id="photo"
              onChange={handleFileChange}
              accept="image/*"
              className="w-full"
            />
          </div>
          {previewUrl && (
            <div className="mb-4">
              <img
                src={previewUrl}
                alt="Preview"
                className="w-32 h-32 object-cover rounded-full"
              />
            </div>
          )}
          <div>
            <label
              htmlFor={isRecruiter ? "description" : "headline"}
              className="block text-gray-700 font-medium mb-2"
            >
              {isRecruiter ? "Description" : "Headline"}
            </label>
            <input
              type="text"
              name={isRecruiter ? "description" : "headline"}
              id={isRecruiter ? "description" : "headline"}
              value={isRecruiter ? profile.description : profile.headline}
              onChange={handleInputChange}
              placeholder={
                isRecruiter
                  ? "Masukkan description profil"
                  : "Masukkan headline profil"
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            disabled={saving}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition-colors"
          >
            {saving ? "Saving..." : "Update Profile"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
