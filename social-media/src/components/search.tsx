import {
  Box,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { MdOutlinePersonSearch } from "react-icons/md";
import useUsers from "../hoocks/useUsers";
import ButtonFollow from "./ButtonFollow";

interface User {
  id: number;
  username: string;
  fullname: string;
  email: string;
  password: string;
  profile: {
    id: number;
    userId: number;
    avatar: string;
    cover: string;
    bio: string;
  };
  follower: { followerId: number; followingId: number }[];
  following: { followerId: number; followingId: number }[];
}

const Search = () => {
  const [filter, setFilter] = useState("");
  const { getUsers } = useUsers();
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getUsers();
        if (response.status) {
          setUsers(response.data.data.users);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [getUsers]);

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  const filteredUsers = users.filter(
    (data) =>
      data.fullname.toLowerCase().includes(filter.toLowerCase()) ||
      data.username.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <Box py={5}>
        <Flex px={3}>
          <InputGroup>
            <InputLeftElement
              ml={2}
              children={<MdOutlinePersonSearch color="grey" size={20} />}
            />

            <Input
              type="text"
              w={"full"}
              color={"white"}
              borderRadius={"full"}
              bgColor={"rgba(60, 60, 60, 1)"}
              border={"none"}
              onChange={handleFilter}
              value={filter}
              placeholder="Search users..."
            />
          </InputGroup>
        </Flex>
        {filter && (
          <>
            {filteredUsers.map((data) => (
              <Box key={data.id} px={4} py={2} my={2}>
                <Box display={"flex"}>
                  <Image
                    src={
                      "http://localhost:3002/uploads/" + data.profile?.avatar
                    }
                    alt="Avatar"
                    borderRadius="full"
                    boxSize="50px"
                    objectFit="cover"
                    objectPosition="center"
                  />
                  <Text
                    color={"white"}
                    fontWeight={"bold"}
                    fontSize={"lg"}
                    ml={4}
                  >
                    {" "}
                    {data.fullname}
                    <Text
                      color={"gray.400"}
                      fontSize={"sm"}
                      fontWeight={"normal"}
                    >
                      @{data.username}
                    </Text>
                    <Text color={"white"} fontSize={"sm"} fontWeight={"normal"}>
                      {data.profile?.bio}
                    </Text>
                  </Text>
                  <Box ml={"150px"}>
                    <ButtonFollow
                      followingId={data.id}
                      isFollowing={data.is_following}
                    />
                  </Box>
                </Box>
              </Box>
            ))}
          </>
        )}
      </Box>
    </>
  );
};

export default Search;
