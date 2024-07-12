import { Box } from "@chakra-ui/react";
import FollowsUi from "../components/followsUi";
import Navbar from "../components/Navbar";
import ProfileLayout from "./profileLayout";

const FollowLayout: React.FC = () => {
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
            <FollowsUi />
          </Box>
        </div>
        <ProfileLayout />
      </Box>
    </>
  );
};

export default FollowLayout;
