import { useState } from "react";
import ApiConfig from "../libs";
import { IUserLogin } from "../types/login";
import { useNavigate } from "react-router-dom";
import { AUTH_LOGIN } from "../store/rootReducer";
import { useDispatch } from "react-redux";

const useLogin = () => {
  const dispatch = useDispatch();
  const [login, setLogin] = useState<IUserLogin[]>([]);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const getLogin = async (data: any): Promise<void> => {
    try {
      const response = await ApiConfig.post("/auth/login", data);
      setLogin(response.data);
      dispatch(AUTH_LOGIN(response.data));
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
    await getLogin(formData);
    navigate("/");
    setFormData({
      email: "",
      password: "",
    });
  };

  return {
    getLogin,
    login,
    handleInputChange,
    handleSubmit,
    formData,
  };
};

export default useLogin;
