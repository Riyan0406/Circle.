import { useState } from "react";
import ApiConfig, { setAuthToken } from "../libs/api";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useComment = () => {
  const [form, setForm] = useState({
    conten: "",
    image: null,
    threadId: undefined,
  });

  const [comments, setComments] = useState([]);

  const navigate = useNavigate();

  const fetchComments = async () => {
    try {
      const token = localStorage.getItem("token");
      setAuthToken(token);
      const response = await ApiConfig.get("/comments");
      setComments(response.data);
    } catch (error) {
      console.error("Failed to fetch comments:", error);
    }
  };

  const postComment = async () => {
    try {
      const formData = new FormData();
      formData.append("conten", form.conten);
      formData.append("threadId", form.threadId as any);
      formData.append("image", form.image as any);

      const token = localStorage.getItem("token");
      setAuthToken(token);

      const response = await ApiConfig.post("/thread", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setComments(response.data);
    } catch (error) {
      console.error("Failed to post comment:", error);
      throw new Error("Failed to post comment");
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

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await postComment();
      navigate("/");
      setForm({
        conten: "",
        image: null,
        threadId: undefined,
      });
    } catch (error) {
      console.error("Failed to handle submit:", error);
    }
  };

  return {
    fetchComments,
    comments,
    handleChange,
    handleSubmit,
    form,
  };
};

export default useComment;
