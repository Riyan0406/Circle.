import { Box, Flex, Button, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faSearch,
  faSignOutAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Heart } from "react-feather";
import ButtonPost from "./ButtonPost";
import { Link } from "react-router-dom";

function Navbar() {
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
      top="0"
      left="0"
      borderRight="1px solid gray"
    >
      <Box w={"100%"} h={"100%"} position="relative">
        <Text p="2" as="b" fontSize="6xl" color="#04A51E" ml={"19px"}>
          Circle
        </Text>
        <Box>
          <Button
            leftIcon={<FontAwesomeIcon icon={faHome} />}
            color="#ffffff"
            variant="ghost"
          >
            Home
          </Button>
        </Box>
        <Box>
          <Button
            leftIcon={<FontAwesomeIcon icon={faSearch} />}
            color="#ffffff"
            variant="ghost"
          >
            Search
          </Button>
        </Box>
        <Box>
          <Button leftIcon={<Heart />} color="#ffffff" variant="ghost">
            Follows
          </Button>
        </Box>
        <Box>
          <Button
            leftIcon={<FontAwesomeIcon icon={faUser} />}
            color="#ffffff"
            variant="ghost"
          >
            <Link to="/profile">Profile</Link>
          </Button>
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
