import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../../../components/lib/axios";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.email || !formData.password) {
      setError("Please fill in all fields");
      return;
    }

    setIsLoading(true);

    try {
      const response = await apiClient.post("/api/users/login", {
        email: formData.email,
        password: formData.password,
      });

      localStorage.setItem("authToken", response.data.token);
      localStorage.setItem(
        "userData",
        JSON.stringify({
          id: response.data.id,
          username: response.data.username,
          email: response.data.email,
          role: response.data.role,
          is_premium: response.data.is_premium,
          created_at: new Date(response.data.created_at).toLocaleDateString(),
          updated_at: new Date(response.data.updated_at).toLocaleDateString(),
        })
      );
      switch (response.data.role) {
        case "admin":
          navigate("/");
          break;
        case "premium":
          navigate("/");
          break;
        default:
          navigate(response.data.is_premium ? "/" : "/");
      }
    } catch (err) {
      console.error("Login error:", err);
      const errorMessage =
        err.response?.data?.error ||
        err.response?.data?.message ||
        "Error logging in";
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute w-96 h-96 bg-blue-200/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
      <div className="absolute w-96 h-96 bg-blue-200/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse"></div>

      <div className="bg-white/90 backdrop-blur-sm border border-white/20 p-8 rounded-2xl shadow-xl w-full max-w-md relative z-10">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
          JobSync
          <span className="block text-lg font-normal mt-2 text-gray-600">
            Welcome Back
          </span>
        </h1>

        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm">
            ⚠️ {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 mb-2 font-medium"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@email.com"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white disabled:bg-gray-100"
              value={formData.email}
              onChange={handleInputChange}
              disabled={isLoading}
              autoComplete="email"
              required
            />
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label
                htmlFor="password"
                className="block text-gray-700 font-medium"
              >
                Password
              </label>
              <a
                href="#lupa-password"
                className="text-sm text-blue-600 hover:text-blue-700 font-medium underline underline-offset-2"
              >
                Forgot Password?
              </a>
            </div>
            <input
              type="password"
              id="password"
              placeholder="Fill in your password"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white disabled:bg-gray-100"
              value={formData.password}
              onChange={handleInputChange}
              disabled={isLoading}
              autoComplete="current-password"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 shadow-lg disabled:opacity-75 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Loading..
              </div>
            ) : (
              "Sign In Now"
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Don't Have Account?{" "}
            <a
              href="/register"
              className="text-blue-600 hover:text-blue-700 font-medium underline underline-offset-2"
            >
              Register Now!
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
