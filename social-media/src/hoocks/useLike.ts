import { useState } from "react";
import ApiConfig from "../libs/api";

const useLike = () => {
  const [like, setLike] = useState<any>([]);
  const [getlike, setLikes] = useState<any>([]);

  const postLike = async (data: any): Promise<void> => {
    try {
      const token = localStorage.getItem("token");

      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const response = await ApiConfig.post("/like", data, { headers });
      setLike(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getLike = async (data: any): Promise<void> => {
    try {
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const response = await ApiConfig.get(`/like/${data}`, { headers });
      setLikes(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  return {
    postLike,
    getLike,
    like,
    getlike,
  };
};

export default useLike;
