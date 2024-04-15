import { Box, Flex, Text } from "@chakra-ui/react";
import Profile from "../components/Profile";
import Sugessted from "../components/Sugested";
import { ISuges } from "../types/suges";
import suges from "../mocks/suges.json";
import { useState } from "react";

const ProfileLayout: React.FC = () => {
  const [sugested, setSuges] = useState<ISuges[]>(suges);
  return (
    <>
      <Flex
        flexDirection="column"
        bg="#1d1d1d"
        color="#ffffff"
        position="fixed"
        w={"395px"}
        h="100vh"
        top="0"
        right="0"
        p={"4"}
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
          {sugested.map((suges, index) => (
            <Sugessted
              key={index}
              author_fullname={suges.author_fullname}
              author_username={suges.author_username}
              author_picture={suges.author_picture}
            />
          ))}
        </Box>
      </Flex>
    </>
  );
};

export default ProfileLayout;
