import { Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import ProfileLayout from "../layouts/profileLayout";
import FollowLayout from "../layouts/followLayout";

const FollowPages: React.FC = () => {
  return (
    <>
      <Box bg={"#1d1d1d"}>
        <div>
          <Navbar />
        </div>
        <div
          style={{
            marginLeft: "400px",
          }}
        >
          <FollowLayout />
        </div>
        <ProfileLayout />
      </Box>
    </>
  );
};

export default FollowPages;
