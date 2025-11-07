"use client"
import { RealtimeChat } from "@/components/realtime-chat";
import { useState } from "react";
// import { useMessagesQuery }

export default function ChatPage() {
  const [username, setUsername] = useState<string>("");
  const [isJoined, setIsJoined] = useState<boolean>(false);

  if (!isJoined) {
    return (
      <div className="p-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
          className="border p-2 rounded"
        />
        <button
          onClick={() => setIsJoined(true)}
          disabled={!username}
          className="ml-2 px-4 py-2 bg-primary text-white rounded disabled:bg-gray-300"
        >
          Join Chat
        </button>
      </div>
    );
  }

  return <RealtimeChat roomName="our-chat-room" username={username} />;
}