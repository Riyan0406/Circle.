import { Box, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import { RootState, useAppSelector } from "../store";
import BasicUsage from "./modalEdit";

const Profile: React.FC = () => {
  const [isFollowed, setIsFollowed] = useState(false);

  const profile = useAppSelector((state: RootState) => state.auth);

  if (!profile || !profile.user) {
    return null;
  }

  const { user } = profile;

  console.log("uuuu", { user });

  const handleFollow = () => {
    setIsFollowed(!isFollowed);
  };

  return (
    <>
      <Box
        p="4"
        as="b"
        mx={"auto"}
        bg={"#262626"}
        position="relative"
        w={"90%"}
        borderRadius={"10"}
        border="1px solid #3f3f3f"
      >
        <h6>My Profile</h6>
        <Box
          mt="5"
          display={"flex"}
          justifyContent={"space-between"}
          position="relative"
          h={"80px"}
        >
          <Image
            src={"http://localhost:3002/uploads/" + user?.cover}
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
            src={"http://localhost:3002/uploads/" + user?.avatar}
            alt=""
            mr="2"
            w={"10"}
            h={"10"}
            border={"2px solid white"}
            borderRadius={"full"}
            zIndex="1"
            position="relative"
            bottom="-40px"
            left={"3"}
          />

          <Text
            display={"flex"}
            alignItems={"center"}
            position="relative"
            zIndex="1"
            top={"26px"}
            right={"2"}
          >
            <BasicUsage />
          </Text>
        </Box>
        <Box mt="3">
          <Text>👋{profile.user?.user?.fullname}👋</Text>
          <Text ml={"2"} fontSize={"sm"} color={"#909090"}>
            @{profile.user?.user?.username}
          </Text>
          <Text mt="2" fontSize={"sm"} color={"#ffffff"}>
            {profile.user.bio}
          </Text>
          <Box mt="1" display={"flex"} gap={"4"}>
            <Text fontSize={"sm"} color={"#909090"}>
              <Text as="b" color={"#ffffff"}>
                {profile.user?.user?._count.follower}
              </Text>{" "}
              Following{" "}
            </Text>
            <Text fontSize={"sm"} color={"#909090"}>
              <Text as="b" color={"#ffffff"}>
                {profile.user?.user?._count.following}
              </Text>{" "}
              Followers{" "}
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Profile;
