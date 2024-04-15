import React, { useEffect } from "react";
import LoginForm from "./components/Login";
import RegisterForm from "./components/Register";
import HomePages from "./pages/homePages";
import { Navigate, Outlet, Route, Routes, useNavigate } from "react-router-dom";
import ApiConfig, { setAuthToken } from "./libs/index";
import { AUTH_CHECK } from "./store/rootReducer";
import { AUTH_ERROR } from "./store/rootReducer";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import DetailLayout from "./layouts/detailLayout";
import MyProfileLayout from "./layouts/MyProfileLayout";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const authCheck = async () => {
    try {
      setAuthToken(localStorage.getItem("token"));
      const response = await ApiConfig.get("/auth/check");
      dispatch(AUTH_CHECK(response.data));
      console.log(response.data);
    } catch (err) {
      console.log(err);
      dispatch(AUTH_ERROR());
      navigate("/login");
    }
  };

  React.useEffect(() => {
    authCheck();
  }, []);

  useEffect(() => {
    const sse = new EventSource("http://localhost:3002/api/v1/notifications");
    sse.onmessage = () => {
      toast("Thread have a new await");
    };
  }, []);
  const isLogin = () => {
    if (!localStorage.getItem("token")) {
      return <Navigate to="/login" />;
    } else {
      return <Outlet />;
    }
  };
  return (
    <>
      <Routes>
        <Route path="/" element={isLogin()}>
          <Route path="/" element={<HomePages />} />
          <Route path="/detail/:id" element={<DetailLayout />} />
          <Route path="/profile" element={<MyProfileLayout />} />
        </Route>
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </>
  );
}

export default App;
