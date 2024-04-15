import { Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import ProfileLayout from "./profileLayout";
import MyProfile from "../components/MyProfile";

const MyProfileLayout = () => {
  return (
    <>
      <Box display={"flex"} w={"71%"} h={"100vh"} bg={"#1d1d1d"}>
        <Navbar />
        <div
          style={{
            marginLeft: "400px",
            width: "100%",
          }}
        >
          <Box w={"full"} h={"100%"} bg={"#1d1d1d"}>
            <Box mt={"4"} p={"4"} bg={"#1d1d1d"}>
              <Link
                to="/"
                style={{
                  color: "white",
                  marginLeft: "10px",
                  marginTop: "10px",
                  fontWeight: "bold",
                  fontSize: "20px",
                  textDecoration: "none",
                }}
              >
                <FontAwesomeIcon icon={faArrowLeft} />
                👋Stela Rahadina👋
              </Link>
            </Box>
            <MyProfile />
          </Box>
        </div>
        <ProfileLayout />
      </Box>
    </>
  );
};

export default MyProfileLayout;
