import { Box, Flex, Text } from "@chakra-ui/react";
import Profile from "../components/Profile";
import Sugessted from "../components/Sugested";

const ProfileLayout: React.FC = () => {
  return (
    <>
      <Flex
        flexDirection="column"
        bg="#1d1d1d"
        color="#ffffff"
        w={"395px"}
        h="100vh"
        position="fixed"
        top="0"
        right="0"
        px={"4"}
        borderStart={"1px solid gray"}
      >
        <Profile />
        <Box
          mt="5"
          p="4"
          as="b"
          w={"90%"}
          mx={"auto"}
          borderRadius={"10"}
          bg={"#262626"}
        >
          <Text fontSize={"sm"} color={"#ffffff"}>
            Sugessted for you{" "}
          </Text>

          <Sugessted />
        </Box>
      </Flex>
    </>
  );
};

export default ProfileLayout;
