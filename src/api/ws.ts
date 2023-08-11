import { io, Socket } from 'socket.io-client';

const URL = `${import.meta.env.VITE_WS_URL}`;

class SocketSingleton {
  private static instance: SocketSingleton;
  private socket: Socket;

  private constructor() {
    this.socket = io(URL, {
      autoConnect: false,
    });
  }

  public static getInstance(): SocketSingleton {
    if (!SocketSingleton.instance) {
      SocketSingleton.instance = new SocketSingleton();
    }

    return SocketSingleton.instance;
  }

  public getSocket(): Socket {
    return this.socket;
  }
}

export const socket = SocketSingleton.getInstance().getSocket();
