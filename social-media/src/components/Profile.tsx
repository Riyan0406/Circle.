import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Avatar, Box, Button, Flex, Image, Link, Text } from "@chakra-ui/react";
import { useState } from "react";
import { RootState } from "../store/types/rootState";
import { useSelector } from "react-redux";

const Profile: React.FC = () => {
  const [isFollowed, setIsFollowed] = useState(false);
  const { fullname, username, email, profile, sampul } = useSelector(
    (state: RootState) => state.auth
  );

  const handleFollow = () => {
    setIsFollowed(!isFollowed);
  };
  return (
    <>
      <Box p="4" as="b" mx={"auto"} bg={"#262626"} position="relative">
        <h6>My Profile</h6>
        <Box
          mt="5"
          display={"flex"}
          justifyContent={"space-between"}
          position="relative"
          h={"80px"}
        >
          <Image
            src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
            alt="Cover Image"
            w={"full"}
            h={"full"}
            objectFit={"cover"}
            position={"absolute"}
            zIndex={0}
            borderRadius={"10px"}
            top={0}
            left={0}
          />

          <Image
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt=""
            mr="2"
            w={"10"}
            h={"10"}
            zIndex="1"
            position="relative"
            bottom="-40px"
            left={"3"}
          />

          <Link
            href="https://chakra-ui.com"
            isExternal
            display={"flex"}
            alignItems={"center"}
            position="relative"
            zIndex="1"
            top={"26px"}
            right={"2"}
          >
            Edit Profile <ExternalLinkIcon mx="2px" />
          </Link>
        </Box>
        <Box mt="3">
          <Text>👋{fullname}👋</Text>
          <Text ml={"2"} fontSize={"sm"} color={"#909090"}>
            @{username}
          </Text>
          <Text mt="2" fontSize={"sm"} color={"#ffffff"}>
            picked over by the worms, and weird fishes
          </Text>
          <Box mt="1" display={"flex"} gap={"4"}>
            <Text fontSize={"sm"} color={"#909090"}>
              <Text as="b" color={"#ffffff"}>
                1.5k
              </Text>{" "}
              Followers{" "}
            </Text>
            <Text fontSize={"sm"} color={"#909090"}>
              <Text as="b" color={"#ffffff"}>
                35
              </Text>{" "}
              Following{" "}
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Profile;
