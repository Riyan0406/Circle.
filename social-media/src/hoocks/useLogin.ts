import { useState } from "react";
import ApiConfig from "../libs/api";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { IUserLogin } from "../types/login";
import { SET_LOGIN } from "../store/slice/auth";
import { useAppDispatch } from "../store";

const useLogin = () => {
  const dispatch = useAppDispatch();
  const [login, setLogin] = useState<IUserLogin[]>([]);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const postLogin = async (data: any): Promise<void> => {
    try {
      const response = await ApiConfig.post("/login", data);
      const token = response.data.data.token.token;
      const resProfile = await ApiConfig.get("/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });
      localStorage.setItem("token", token);
      setLogin(response.data.data.token);
      dispatch(SET_LOGIN(resProfile.data.data));
    } catch (err) {
      console.log(err);
    }
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await postLogin(formData);
    navigate("/");
    setFormData({
      username: "",
      password: "",
    });
  };

  return {
    postLogin,
    login,
    handleInputChange,
    handleSubmit,
    formData,
  };
};

export default useLogin;
