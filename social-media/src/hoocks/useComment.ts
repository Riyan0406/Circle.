import { useState } from "react";
import ApiConfig, { setAuthToken } from "../libs";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useComment = () => {
  const [form, setForm] = useState({
    comment_text: "",
    image: null,
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
      formData.append("comment_text", form.comment_text);
      formData.append("image", form.image as any);

      const token = localStorage.getItem("token");
      setAuthToken(token);

      const response = await ApiConfig.post("/comment", formData, {
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
        comment_text: "",
        image: null,
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
