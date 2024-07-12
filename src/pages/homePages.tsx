import { Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import ProfileLayout from "../layouts/profileLayout";
import HomeLayout from "../layouts/homeLayout";

const HomePages: React.FC = () => {
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
            <HomeLayout />
          </Box>
        </div>
        <ProfileLayout />
      </Box>
    </>
  );
};

export default HomePages;
