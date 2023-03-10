import React, { createContext, useEffect, useState } from "react";
import { READ, CREATE } from "../api/mockapi";

export const MessagesContext = createContext();

const ENDPOINT = "messages";

const MessagesContextProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const fetchMessages = async () => {
      const messagesList = await READ(ENDPOINT);
      setMessages(messagesList);
    };
    fetchMessages();
    return () => false;
  }, []);

  const send = async (msgObject) => {
    setIsLoading(true);
    const newMsg = await CREATE(ENDPOINT, msgObject);
    setMessages((state) => {
      setIsLoading(false);
      return [...state, newMsg];
    });
  };

  const value = {
    messages,
    send,
    isLoading,
  };

  return (
    <MessagesContext.Provider value={value}>
      {children}
    </MessagesContext.Provider>
  );
};

export default MessagesContextProvider;
