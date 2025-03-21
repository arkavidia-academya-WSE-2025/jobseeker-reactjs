import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import apiClient from "../../../components/lib/axios";

const Chat = () => {
  const location = useLocation();
  // Inisialisasi conversationWith dari state yang dikirim melalui navigate
  const initialContact = location.state?.withUser || null;
  const [conversationWith, setConversationWith] = useState(initialContact);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [loadingConversation, setLoadingConversation] = useState(false);
  const [conversationError, setConversationError] = useState("");

  // Ambil data user login
  const loggedUser = JSON.parse(localStorage.getItem("userData")) || {};

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

  // Jika conversationWith sudah ada, ambil conversation
  useEffect(() => {
    if (conversationWith) {
      fetchConversation(conversationWith.id);
    }
  }, [conversationWith]);

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
        className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full mx-auto"
        style={{ height: "850px" }}
      >
        {/* Header Chat */}
        <div className="p-4 border-b border-gray-200">
          {conversationWith ? (
            <div>
              <h2 className="font-semibold text-sm">
                {conversationWith.username}
              </h2>
              <p className="text-xs text-gray-500">{conversationWith.role}</p>
            </div>
          ) : (
            <h2 className="font-semibold text-sm">No conversation selected</h2>
          )}
        </div>
        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
          {loadingConversation ? (
            <p>Loading conversation...</p>
          ) : conversationError ? (
            <p className="text-red-500">{conversationError}</p>
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
                  <span className="text-[10px] text-gray-400 mt-1">
                    {new Date(msg.created_at).toLocaleTimeString()}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No messages yet.</p>
          )}
        </div>
        {/* Message Input */}
        {conversationWith && (
          <div className="h-[80px] p-4 border-t border-gray-200">
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
  );
};

export default Chat;
