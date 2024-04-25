import { Box, Flex, Button, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faHome,
  faSearch,
  faSignOutAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Heart } from "react-feather";
import ButtonPost from "./ButtonPost";
import { Link } from "react-router-dom";
import { useAppSelector } from "../store";

function Navbar() {
  const auth = useAppSelector((state) => state.auth);
  return (
    <Flex
      height={"100vh"}
      flexDirection="column"
      alignItems="flex-start"
      justifyContent="flex-start"
      bg="#1d1d1d"
      p="4"
      w={"400px"}
      position="fixed"
      borderRight="1px solid #3f3f3f"
    >
      <Box w={"100%"} h={"100%"} position="relative">
        <Text p="2" as="b" fontSize="6xl" color="#04A51E" ml={"19px"}>
          Circle
        </Text>
        <Box display={"flex"} flexDirection={"column"} gap={"15px"}>
          <Box>
            <Text
              color="#ffffff"
              variant="ghost"
              display="flex"
              alignItems="center"
              ml={5}
              mb={3}
            >
              <Link
                to={"/"}
                style={{
                  marginLeft: "10px",
                }}
              >
                <FontAwesomeIcon
                  icon={faHome}
                  style={{ marginRight: "0.5rem" }}
                />
                Home
              </Link>
            </Text>
          </Box>

          <Box>
            <Text
              color="#ffffff"
              variant="ghost"
              display="flex"
              alignItems="center"
              ml={5}
              mb={3}
            >
              <Link to={"/search"} style={{ marginLeft: "10px" }}>
                <FontAwesomeIcon
                  icon={faSearch}
                  style={{ marginRight: "0.5rem" }}
                />
                Search
              </Link>
            </Text>
          </Box>
          <Box>
            <Text
              color="#ffffff"
              variant="ghost"
              display="flex"
              alignItems="center"
              ml={5}
              mb={3}
            >
              <Link to={"/follows"} style={{ marginLeft: "10px" }}>
                <FontAwesomeIcon
                  icon={faHeart}
                  style={{ marginRight: "0.5rem" }}
                />
                Follows
              </Link>
            </Text>
          </Box>
          <Box>
            <Text
              color="#ffffff"
              variant="ghost"
              display="flex"
              alignItems="center"
              ml={5}
              mb={3}
            >
              <Link
                to={`/profile/${auth.user?.id}`}
                style={{ marginLeft: "10px" }}
              >
                <FontAwesomeIcon
                  icon={faUser}
                  style={{ marginRight: "0.5rem" }}
                />
                Profile
              </Link>
            </Text>
          </Box>
        </Box>

        <ButtonPost />
        <Box position="absolute" bottom="4" left="0" right="0">
          <Button
            color="#ffffff"
            variant="ghost"
            leftIcon={<FontAwesomeIcon icon={faSignOutAlt} />}
          >
            Logout
          </Button>
        </Box>
      </Box>
    </Flex>
  );
}

export default Navbar;
