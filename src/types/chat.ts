export interface Message {
  id: number;
  content: string;
  sender: "user" | "bot";
  timestamp: string;
}

export interface Chat {
  id: number;
  name: string;
  lastMessage: string;
  timestamp: string;
  messages: Message[];
}
