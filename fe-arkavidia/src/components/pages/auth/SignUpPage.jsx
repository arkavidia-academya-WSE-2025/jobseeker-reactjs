import React, { useState } from "react";

const SignUpPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("job_seeker");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log({ username, email, password, confirmPassword, role });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute w-96 h-96 bg-blue-200/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
      <div className="absolute w-96 h-96 bg-blue-200/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse"></div>

      <div className="bg-white/90 backdrop-blur-sm border border-white/20 p-8 rounded-2xl shadow-xl w-full max-w-md relative z-10">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
          JobSync
          <span className="block text-lg font-normal mt-2 text-gray-600">
            Start Your Journey
          </span>
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Role Selection */}
          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
            <label className="block text-gray-700 mb-2 font-medium">
              Register as:
            </label>
            <div className="flex gap-4">
              <label className="flex items-center flex-1 bg-white p-2 rounded-lg border border-gray-200 transition-all has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50">
                <input
                  type="radio"
                  name="role"
                  value="job_seeker"
                  checked={role === "job_seeker"}
                  onChange={(e) => setRole(e.target.value)}
                  className="mr-2 accent-blue-500"
                  required
                />
                <span className="text-gray-700">Job Seeker</span>
              </label>

              <label className="flex items-center flex-1 bg-white p-2 rounded-lg border border-gray-200 transition-all has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50">
                <input
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked={role === "recruiter"}
                  onChange={(e) => setRole(e.target.value)}
                  className="mr-2 accent-blue-500"
                />
                <span className="text-gray-700">Recruiter</span>
              </label>
            </div>
          </div>

          {/* Input Fields */}
          <div className="space-y-4">
            <div>
              <label
                htmlFor="username"
                className="block text-gray-700 mb-2 font-medium"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                placeholder="Enter your username"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

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
                placeholder="botaninfo@gmail.com"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-gray-700 mb-2 font-medium"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-gray-700 mb-2 font-medium"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm your password"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 shadow-lg"
          >
            Create Account
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Already have an account?{" "}
            <a
              href="#"
              className="text-blue-600 hover:text-blue-700 font-medium underline underline-offset-2"
            >
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
