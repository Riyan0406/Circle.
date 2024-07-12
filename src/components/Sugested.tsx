import { Avatar, Box, Button, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { IUser } from "../types/users";
import useUsers from "../hoocks/useUsers";
import ButtonFollow from "./ButtonFollow";

const Suggested: React.FC = () => {
  // const [isFollowed, setIsFollowed] = useState<{ [key: number]: boolean }>({});
  const [users, setUsers] = useState<IUser[]>([]);
  const { getUsers } = useUsers();

  const fetchUsers = async () => {
    try {
      const response = await getUsers();
      setUsers(response.data.data.users);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // const handleFollow = (userId: number) => {
  //   setIsFollowed((prevState) => ({
  //     ...prevState,
  //     [userId]: !prevState[userId],
  //   }));
  // };

  return (
    <Box
      maxW="md"
      pt={4}
      overflowY="auto"
      h="200px"
      css={{
        "&::-webkit-scrollbar": {
          width: "0",
        },
        "&::-webkit-scrollbar-track": {
          width: "0",
        },
      }}
    >
      {users.map((user) => (
        <Flex
          key={user.id}
          justifyContent="space-between"
          alignItems="center"
          mb={4}
        >
          <Flex alignItems="center">
            <Avatar
              name={user.fullname}
              src={"http://localhost:3002/uploads/" + user.profile.avatar}
            />
            <Text ml={4}>
              {user.fullname}
              <Text color="gray.400" fontSize="sm" fontWeight="normal">
                @{user.username}
              </Text>
            </Text>
          </Flex>
          <ButtonFollow followingId={user.id} />
        </Flex>
      ))}
    </Box>
  );
};

export default Suggested;
