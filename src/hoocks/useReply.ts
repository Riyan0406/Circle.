import { useParams } from "react-router-dom";
import ApiConfig from "../libs/api";

const useReply = () => {
  const threadById = async (id: number) => {
    return await ApiConfig.get(`/thread/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  };

  const getThreadUser = async (userId: number) => {
    return await ApiConfig.get(`/thread/user/${userId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  };

  const getReplies = async (id: number) => {
    return await ApiConfig.get(`/replies/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  };

  const postReply = async (
    threadId: number,
    conten: string,
    image: string[]
  ) => {
    return await ApiConfig.post(
      "/thread",
      { threadId, conten, image },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
  };

  return {
    threadById,
    getReplies,
    getThreadUser,
    postReply,
  };
};

export default useReply;
