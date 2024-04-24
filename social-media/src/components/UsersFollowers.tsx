import { useEffect, useState } from "react";
import useUsers from "../hoocks/useUsers";
import { IFollower } from "../types/users";
import { Box, Image, Text } from "@chakra-ui/react";
import ButtonFollow from "./ButtonFollow";

const UsersFollowers = () => {
  const [users, setUsers] = useState<IFollower[]>([]);
  const { getFollower } = useUsers();

  const fetchUsers = async () => {
    try {
      const response = await getFollower();
      console.log("response", response.data.data);

      setUsers(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      {users.map((user: any) => (
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
              src={"http://localhost:3002/uploads/" + user.profile.avatar}
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

          <ButtonFollow followingId={user.id} isFollowing={false} />
        </Box>
      ))}
    </>
  );
};

export default UsersFollowers;
