import { useEffect, useState } from "react";
import useUsers from "../hoocks/useUsers";
import { IUser } from "../types/users";
import { Box, Image, Text } from "@chakra-ui/react";
import ButtonFollow from "./ButtonFollow";

const UsersFollowing = () => {
  const [followingUsers, setFollowingUsers] = useState<IUser[]>([]);
  const { getFollow } = useUsers();

  useEffect(() => {
    const fetchFollowingUsers = async () => {
      try {
        const response = await getFollow();
        setFollowingUsers(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchFollowingUsers();
  }, []);

  return (
    <>
      {followingUsers.map((user: any) => (
        <Box
          key={user.id}
          w={"100%"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          p={"4"}
        >
          <Box display={"flex"} alignItems={"center"} gap={"4"} p={"4"}>
            <Image
              src={"http://localhost:3002/uploads/" + user.profile?.avatar}
              alt="Avatar"
              borderRadius="full"
              boxSize="50px"
              objectFit="cover"
              objectPosition="center"
            />

            <Text color={"white"} fontWeight={"bold"} fontSize={"lg"}>
              {user.fullname}
              <Text color={"gray.400"} fontSize={"sm"} fontWeight={"normal"}>
                @{user.username}
              </Text>
              <Text color={"white"} fontSize={"sm"} fontWeight={"normal"}>
                {user.profile?.bio}
              </Text>
            </Text>
          </Box>

          <ButtonFollow followingId={user.id} />
        </Box>
      ))}
    </>
  );
};

export default UsersFollowing;
