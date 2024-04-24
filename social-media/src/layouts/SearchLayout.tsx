import { Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import ProfileLayout from "./profileLayout";
import Search from "../components/search";

const SearchLayout: React.FC = () => {
  return (
    <>
      <Box w={"71%"} h={"100vh"} bg={"#1d1d1d"}>
        <Navbar />
        <Box
          style={{
            marginLeft: "400px",
          }}
        >
          <Box bg={"#1d1d1d"}>
            <Search />
          </Box>
        </Box>
        <ProfileLayout />
      </Box>
    </>
  );
};

export default SearchLayout;
