import { useState } from "react";
import ApiConfig, { setAuthToken } from "../libs";
import { IThread } from "../types/thread";

const useUser = () => {
  const getThreads = async (): Promise<void> => {
    const [thread, setThread] = useState<IThread[]>([]);
    try {
      const token = localStorage.getItem("token");
      setAuthToken(token);
      const response = await ApiConfig.get("/threads");
      setThread(response.data);
    } catch (err) {
      console.log(err);
    }
  };
};
