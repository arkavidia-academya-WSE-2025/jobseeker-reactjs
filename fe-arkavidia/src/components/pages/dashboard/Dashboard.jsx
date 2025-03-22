import React, { useState, useEffect } from "react";
import apiClient from "../../../components/lib/axios";

const Dashboard = () => {
  const [newPost, setNewPost] = useState({ title: "", content: "" });
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await apiClient.get("/api/posts");
      setPosts(response.data.data);
    } catch (err) {
      console.error("Error fetching posts:", err);
      setError("Error fetching posts");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prev) => ({ ...prev, [name]: value }));
  };

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    setIsPosting(true);
    setError("");
    try {
      const token = localStorage.getItem("authToken");
      const response = await apiClient.post("/api/posts", newPost, {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });
      setNewPost({ title: "", content: "" });
      fetchPosts();
    } catch (err) {
      console.error("Error creating post:", err);
      setError("Gagal membuat posting.");
    } finally {
      setIsPosting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute w-96 h-96 bg-blue-200/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse" />
      <div className="absolute w-96 h-96 bg-blue-200/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse" />
      <div className="max-w-4xl w-full bg-white/90 backdrop-blur-sm border border-white/20 p-6 rounded-2xl shadow-xl relative z-10">
        <h1 className="text-3xl font-bold mb-6">Feeds</h1>
        <form onSubmit={handlePostSubmit} className="mb-6">
          <div className="mb-4">
            <input
              type="text"
              name="title"
              value={newPost.title}
              onChange={handleInputChange}
              placeholder="Post Title"
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              name="content"
              value={newPost.content}
              onChange={handleInputChange}
              placeholder="What's on your mind?"
              className="w-full p-2 border rounded"
              rows={4}
              required
            />
          </div>
          <button
            type="submit"
            disabled={isPosting}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            {isPosting ? "Posting..." : "Post"}
          </button>
        </form>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {loading ? (
          <p>Loading posts...</p>
        ) : posts.length === 0 ? (
          <p>No posts available.</p>
        ) : (
          <div className="space-y-4">
            {posts.map((post) => (
              <div key={post.id} className="border p-4 rounded">
                <h2 className="text-xl font-semibold">{post.title}</h2>
                <p className="mt-2">{post.content}</p>
                <div className="text-sm text-gray-500 mt-2">
                  <p>Posted at: {new Date(post.created_at).toLocaleString()}</p>
                  <p>
                    Updated at: {new Date(post.updated_at).toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
