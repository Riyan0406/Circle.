import { Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import ProfileLayout from "./profileLayout";
import UserProfile from "../components/UserProfile";
import { useParams } from "react-router-dom";

const MyProfileLayout = () => {
  const { profileId } = useParams();
  return (
    <>
      <Box w={"71%"} bg={"#1d1d1d"}>
        <Navbar />
        <div
          style={{
            marginLeft: "400px",
          }}
        >
          <Box bg={"#1d1d1d"}>
            <UserProfile profileId={Number(profileId)} />
          </Box>
        </div>
        <ProfileLayout />
      </Box>
    </>
  );
};

export default MyProfileLayout;
