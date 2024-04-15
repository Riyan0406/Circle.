import { Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import HomeLayout from "../layouts/homeLayout";
import ProfileLayout from "../layouts/profileLayout";

const HomePages: React.FC = () => {
  return (
    <>
      <Box w={"71%"} h={"100%"} bg={"#1d1d1d"}>
        <Navbar />
        <div style={{ marginLeft: "400px" }}>
          <HomeLayout />
        </div>
        <ProfileLayout />
      </Box>
    </>
  );
};

export default HomePages;
