"use client";
import { createClient } from "@/lib/supabase/client";
import { useCallback, useEffect, useState } from "react";

interface UseRealtimeChatProps {
  roomName: string;
  username: string;
}

export interface ChatMessage {
  id: string;
  content: string;
  username: string;
  created_at: string;
}

export function useRealtimeChat({ roomName, username }: UseRealtimeChatProps) {
  const supabase = createClient();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const channel = supabase.channel(roomName);

    async function loadAndSubscribe() {
      // Load initial messages
      const { data, error } = await supabase
        .from('chat_messages')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(50);

      if (!error && data) {
        setMessages(data.reverse() as ChatMessage[]);
      }

      // Subscribe to new inserts
      channel
        .on('postgres_changes', {
          event: 'INSERT',
          schema: 'public',
          table: 'chat_messages'
        }, (payload) => {
          setMessages((current) => [...current, payload.new as ChatMessage]);
        })
        .subscribe((status) => {
          if (status === 'SUBSCRIBED') {
            console.log('Postgres_changes Subscription connected')
            setIsConnected(true);
          } else {
            console.log('Subscription disconnected')
            setIsConnected(false);
          }
        });
    }

    loadAndSubscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [roomName, username, supabase]);

  const sendMessage = useCallback(
    async (content: string) => {
      try {
        const { error } = await supabase
          .from('chat_messages')
          .insert({ content, username });

        if (error) throw error;
      } catch (error) {
        console.error('Failed to send message:', error);
      }
    },
    [username, supabase]
  );

  return { messages, sendMessage, isConnected };
}