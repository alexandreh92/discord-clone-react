export interface User {}

export interface Server {
  id: number;
  name: string;
}

export interface MessageUser {
  id: number;
  username: string;
  email: string;
}

export interface Message {
  id: number;
  room_id: number;
  content: string;
  user: MessageUser;
}

export interface RoomMessages {
  room_id: number;
  messages: Message[];
}

export interface Room {
  id: number;
  name: string;
  messages: Message[];
  server_id: number;
}

const events = ['create', 'delete', 'update'] as const;
type RequestEvent = typeof events[number];

export interface MainRequest {
  event: RequestEvent;
  data: Server;
}

export interface ServerRequest {
  event: RequestEvent;
  data: Room;
}

export interface RoomRequest {
  event: RequestEvent;
  data: Message;
}
