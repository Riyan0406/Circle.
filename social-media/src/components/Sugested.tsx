import { Avatar, Box, Button, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { ISuges } from "../types/suges";

const Sugessted: React.FC<ISuges> = ({
  author_fullname,
  author_username,
  author_picture,
}) => {
  const [isFollowed, setIsFollowed] = useState(false);

  const handleFollow = () => {
    setIsFollowed(!isFollowed);
  };
  return (
    <>
      <Box maxW="md" pt={"4"}>
        <Flex justifyContent="space-between" alignItems="center" mb="4">
          <Flex alignItems="center">
            <Avatar name="Segun Adebayo" src={author_picture} />
            <Box ml="4">
              <Text fontSize={"sm"} color={"#ffffff"}>
                {author_fullname}
              </Text>
              <Text fontSize={"sm"} color={"#909090"}>
                {author_username}
              </Text>
            </Box>
          </Flex>
          <Button
            onClick={handleFollow}
            colorScheme={isFollowed ? "red" : "blue"}
            variant="ghost"
            textAlign={"end"}
            size="sm"
          >
            {isFollowed ? "Following" : "Follow"}
          </Button>
        </Flex>
      </Box>
    </>
  );
};

export default Sugessted;
