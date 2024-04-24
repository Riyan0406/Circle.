import { Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import ProfileLayout from "./profileLayout";
import UserProfile from "../components/UserProfile";
import { useParams } from "react-router-dom";

const UserProfileLayout: React.FC = () => {
  const { profileId } = useParams<{ profileId: string }>();

  return (
    <>
      <Box w={"71%"} h={"100vh"} bg={"#1d1d1d"}>
        <Navbar />
        <div
          style={{
            marginLeft: "400px",
          }}
        >
          <Box bg={"#1d1d1d"}>
            {profileId && <UserProfile profileId={parseInt(profileId)} />}
          </Box>
        </div>
        <ProfileLayout />
      </Box>
    </>
  );
};

export default UserProfileLayout;
