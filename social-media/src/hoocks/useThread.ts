import { useState } from "react";
import ApiConfig, { setAuthToken, setMultiPart } from "../libs";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";

const useThread = () => {
  const [form, setForm] = useState({
    conten: "",
    image: null,
  });
  const [detail, setDetail] = useState<any>([]);
  const navigate = useNavigate();
  const {
    data: thread,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["threads"],
    queryFn: async () => {
      const token = localStorage.getItem("token");
      setAuthToken(token);
      const response = await ApiConfig.get("/threads");
      console.log(" detail", response.data);
      return response.data;
    },
  });

  const getthreadById = async (id: any): Promise<void> => {
    try {
      const token = localStorage.getItem("token");
      setAuthToken(token);
      const response = await ApiConfig.get(`/threads/${id}`);
      setDetail(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const postThread = async (data: any): Promise<void> => {
    try {
      const token = localStorage.getItem("token");
      setAuthToken(token);
      setMultiPart();
      const response = await ApiConfig.post("/thread", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setForm(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e: any) => {
    const { name, value, files } = e.target;
    const newValue = name === "image" ? files[0] : value;
    setForm((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const handleSubmit = useMutation({
    mutationFn: async (e: any) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append("conten", form.conten);
      if (form.image) {
        formData.append("image", form.image);
      }
      console.log("Data Form:", formData);
      await postThread(formData);
      navigate("/");
      setForm({
        conten: "",
        image: null,
      });
    },
    onSuccess: () => refetch(),
  });

  return {
    isLoading,
    isError,
    error,
    thread,
    handleChange,
    handleSubmit,
    form,
    getthreadById,
    detail,
  };
};

export default useThread;
