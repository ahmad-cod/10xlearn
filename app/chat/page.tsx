"use client"
import { RealtimeChat } from "@/components/realtime-chat";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

export default function ChatPage() {
  const { user, loading } = useAuth();
  const username = user?.email ? user.email?.substring(0, user.email.indexOf("@")) : "Guest";

  return <RealtimeChat roomName="our-chat-room" username={username} />;
}