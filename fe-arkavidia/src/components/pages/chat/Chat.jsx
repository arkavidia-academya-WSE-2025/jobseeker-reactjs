import React from "react";

const Chat = () => {
  return (
    <div className="bg-gray-100 p-4">
      <div
        className="flex bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full mx-auto"
        style={{ height: "850px" }}
      >
        {/* Left Container */}
        <div className="w-80 border-r border-gray-200 flex flex-col">
          {/* Search Bar */}
          <div className="p-4 border-b border-gray-200">
            <input
              type="text"
              placeholder="Search messages"
              className="w-full p-2 border border-gray-300 rounded-lg text-sm"
            />
          </div>
          <div className="flex-1 overflow-y-auto">
            <div className="p-4 border-b border-gray-200">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-sm">My Chats</h3>
              </div>
              <div className="space-y-4 mt-2">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded"
                  >
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">Contact {i + 1}</h4>
                      <p className="text-xs text-gray-500">Position {i + 1}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Container  */}
        <div className="flex-1 flex flex-col max-w-[600px]">
          {/* Header Chat */}
          <div className="p-4 border-b border-gray-200">
            <h2 className="font-semibold text-sm">Ralfiy Rayhansyah</h2>
            <p className="text-xs text-gray-500">Associate on iOS/AI</p>
          </div>
          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {[...Array(20)].map((_, i) => {
              const is_read = i % 2 === 0;
              return (
                <div key={i} className="flex justify-start">
                  <div className="bg-white p-3 rounded-lg shadow-sm max-w-[70%]">
                    <p className="text-sm">Message {i + 1}</p>
                    <span className="text-[10px] text-gray-400 mt-1">
                      9:59 AM {is_read ? "✔✔" : "✔"}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          {/* Message Input */}
          <div className="h-[80px] p-4 border-t border-gray-200">
            <div className="relative">
              <input
                type="text"
                placeholder="Write a message..."
                className="w-full p-2 border border-gray-300 rounded-lg pr-20 text-sm"
              />
              <button className="absolute right-2 top-1.5 bg-blue-500 text-white px-3 py-1 rounded-md text-xs">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
