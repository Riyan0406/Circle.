import ApiConfig from "../libs/api";

const useUsers = () => {
  const getUsers = async () => {
    return await ApiConfig.get("/sugested", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  };

  const getFollower = async () => {
    return await ApiConfig.get("/follower", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  };

  const getFollow = async () => {
    return await ApiConfig.get("/following", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  };

  return {
    getUsers,
    getFollow,
    getFollower,
  };
};

export default useUsers;
