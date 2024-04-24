import { useEffect } from "react";
import LoginForm from "./components/Login";
import RegisterForm from "./components/Register";
import HomePages from "./pages/homePages";
import { Navigate, Outlet, Route, Routes, useNavigate } from "react-router-dom";
import ApiConfig from "./libs/api";
import { toast } from "react-toastify";
import MyProfileLayout from "./layouts/MyProfileLayout";
import { useAppDispatch } from "./store";
import { SET_LOGIN } from "./store/slice/auth";
import { IUserData } from "./types/login";
import BasicUsage from "./components/modalEdit";
import DetailLayout from "./layouts/detailLayout";
import FollowLayout from "./layouts/followLayout";
import SearchLayout from "./layouts/SearchLayout";
import UserProfileLayout from "./layouts/userProfileLayout";

function App() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const authCheck = async () => {
    try {
      const response = await ApiConfig.get("/profile", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      dispatch(
        SET_LOGIN({
          user: response.data.data as IUserData,
          token: localStorage.getItem("token") as string,
        })
      );
      console.log(response.data.data);
    } catch (err) {
      console.log(err);
      navigate("/login");
    }
  };

  useEffect(() => {
    authCheck();
  }, []);

  // useEffect(() => {
  //   const sse = new EventSource("http://localhost:3002/api/v1/notifications");
  //   sse.onmessage = () => {
  //     toast("Thread have a new await");
  //   };
  // }, []);
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
          {/* <Route path="/profile" element={<MyProfileLayout />} /> */}
          <Route path="/edit" element={<BasicUsage />} />
          <Route path="/follows" element={<FollowLayout />} />
          <Route path="/search" element={<SearchLayout />} />
          <Route path="/profile/:profileId" element={<UserProfileLayout />} />
        </Route>
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </>
  );
}

export default App;
