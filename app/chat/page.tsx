import { RealtimeChat } from "@/components/realtime-chat";
// import { useMessagesQuery }

export default function ChatPage() {
  // const { data: messages } = useMessagesQuery();
  return (<RealtimeChat roomName="our-chat-room" username="Ahmad_Aro" />)
}