import ApiConfig from "../libs/api";

const useProfile = () => {
  const getProfile = async () => {
    return await ApiConfig.get("/profile", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  };

  

  return {
    getProfile,
  };
};

export default useProfile;
