import React, { useState, useEffect } from "react";
import apiClient from "../../../components/lib/axios";

const ChatJobSeeker = () => {
  // Daftar kontak (recruiter) yang diambil dari lowongan
  const [contacts, setContacts] = useState([]);
  // Kontak yang dipilih untuk percakapan
  const [conversationWith, setConversationWith] = useState(null);
  // Percakapan pesan
  const [messages, setMessages] = useState([]);
  // Input pesan baru
  const [newMessage, setNewMessage] = useState("");
  // Loading dan error untuk percakapan
  const [loadingConversation, setLoadingConversation] = useState(false);
  const [conversationError, setConversationError] = useState("");

  // Ambil data user login (job_seeker)
  const loggedUser = JSON.parse(localStorage.getItem("userData")) || {};

  // Fungsi mengambil daftar lowongan dan ekstrak recruiter unik
  const fetchRecruiterContacts = async () => {
    try {
      const params = new URLSearchParams({
        page: "1",
        size: "10",
      });
      const response = await apiClient.get(`/api/jobs?${params.toString()}`);
      const jobs = response.data.data || [];
      // Ekstrak recruiter dari tiap job
      const recruiters = jobs.map((job) => job.recruiter);
      // Deduplicate berdasarkan recruiter.id
      const uniqueRecruiters = [];
      recruiters.forEach((r) => {
        if (r && !uniqueRecruiters.find((u) => u.id === r.id)) {
          uniqueRecruiters.push(r);
        }
      });
      setContacts(uniqueRecruiters);
    } catch (err) {
      console.error("Error fetching recruiter contacts:", err);
    }
  };

  useEffect(() => {
    fetchRecruiterContacts();
  }, []);

  // Fungsi mengambil conversation dengan kontak tertentu
  const fetchConversation = async (withUserId) => {
    setLoadingConversation(true);
    setConversationError("");
    try {
      const response = await apiClient.post("/api/messages/conversation", {
        with_user_id: withUserId,
        page: 1,
        size: 10,
      });
      setMessages(response.data.data);
    } catch (err) {
      console.error("Error fetching conversation:", err);
      setConversationError("Gagal mengambil percakapan.");
    } finally {
      setLoadingConversation(false);
    }
  };

  const handleSelectContact = (contact) => {
    setConversationWith(contact);
    fetchConversation(contact.id);
  };

  const handleSendMessage = async () => {
    if (!newMessage.trim() || !conversationWith) return;
    try {
      const token = localStorage.getItem("authToken");
      const response = await apiClient.post(
        "/api/messages",
        {
          receiver_id: conversationWith.id,
          content: newMessage,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );
      console.log("Message sent:", response.data.data);
      setNewMessage("");
      fetchConversation(conversationWith.id);
    } catch (err) {
      console.error("Error sending message:", err);
    }
  };

  return (
    <div className="bg-gray-100 p-4 min-h-screen">
      <div
        className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden flex"
        style={{ height: "850px" }}
      >
        {/* Left Container - Kontak */}
        <div className="w-80 border-r border-gray-200 flex flex-col">
          <div className="p-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold">Recruiters</h3>
            <input
              type="text"
              placeholder="Search recruiters..."
              className="w-full mt-2 p-2 border border-gray-300 rounded-md text-sm"
              // onChange bisa ditambahkan untuk filter dinamis
            />
          </div>
          <div className="flex-1 overflow-y-auto">
            <div className="p-4">
              {contacts.length > 0 ? (
                contacts.map((contact) => (
                  <div
                    key={contact.id}
                    className={`flex items-center space-x-3 cursor-pointer p-2 rounded hover:bg-gray-50 ${
                      conversationWith && conversationWith.id === contact.id
                        ? "bg-gray-100"
                        : ""
                    }`}
                    onClick={() => handleSelectContact(contact)}
                  >
                    <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center text-blue-800 font-semibold">
                      {contact.username.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{contact.username}</p>
                      <p className="text-xs text-gray-500">{contact.role}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-500">No recruiters found.</p>
              )}
            </div>
          </div>
        </div>
        {/* Right Container - Chat Area */}
        <div className="flex-1 flex flex-col max-w-[600px]">
          {/* Header */}
          <div className="p-4 border-b border-gray-200">
            {conversationWith ? (
              <div>
                <h2 className="text-lg font-semibold">
                  {conversationWith.username}
                </h2>
                <p className="text-xs text-gray-500">{conversationWith.role}</p>
              </div>
            ) : (
              <h2 className="text-lg font-semibold">
                Select a recruiter to chat
              </h2>
            )}
          </div>
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {loadingConversation ? (
              <p className="text-center text-gray-500">
                Loading conversation...
              </p>
            ) : conversationError ? (
              <p className="text-center text-red-500">{conversationError}</p>
            ) : messages.length > 0 ? (
              messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.sender_id === loggedUser.id
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  <div className="bg-white p-3 rounded-lg shadow-sm max-w-[70%]">
                    <p className="text-sm">{msg.content}</p>
                    <span className="block text-[10px] text-gray-400 mt-1">
                      {new Date(msg.created_at).toLocaleTimeString()}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">No messages yet.</p>
            )}
          </div>
          {/* Input Pesan */}
          {conversationWith && (
            <div className="p-4 border-t border-gray-200">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Write a message..."
                  className="w-full p-2 border border-gray-300 rounded-lg pr-20 text-sm"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                />
                <button
                  onClick={handleSendMessage}
                  className="absolute right-2 top-1.5 bg-blue-500 text-white px-3 py-1 rounded-md text-xs"
                >
                  Send
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatJobSeeker;
