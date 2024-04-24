import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { FaCommentAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IData } from "../types/thread";
import ButtonLike from "./ButtonLike";
import { IProfile } from "../types/profile";

interface AllDates {
  thread: IData;
}

const Status: React.FC<AllDates> = ({ thread }) => {
  const formatDate = (createdAt: string) => {
    const date = new Date(createdAt);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <Box border={"1px solid rgba(144, 144, 144, 1)"} p={4}>
      <Box display="flex">
        {thread.author && (
          <Box>
            <Link to={`/profile/${thread.author.id}`}>
              <Image
                src={
                  "http://localhost:3002/uploads/" +
                  thread.author.profile.avatar
                }
                alt={thread.author.username}
                boxSize="50px"
                borderRadius="full"
                mr={4}
              />
            </Link>
          </Box>
        )}
        <Box>
          {thread.author && (
            <>
              <Text fontWeight="bold" color="white">
                {thread.author.username}
              </Text>
              <Text color="gray.400">
                @{thread.author.username} • {formatDate(thread.createdAt)}
              </Text>
            </>
          )}
        </Box>
      </Box>
      <Box w={"90%"} ms={4}>
        <Link to={`/detail/${thread.id}`}>
          <Text color="white" mt={2} align={"justify"}>
            {thread.conten}
          </Text>
          {thread.image && thread.image.length > 0 && (
            <Box mt={2}>
              {thread.image.length === 1 ? (
                <Image
                  src={"http://localhost:3002/uploads/" + thread.image[0].image}
                  mt={2}
                  w="100%"
                  h="300px"
                  objectFit="cover"
                  objectPosition="center"
                />
              ) : (
                <SimpleGrid columns={2} spacing={1}>
                  {thread.image.map((image, index) => (
                    <Image
                      key={index}
                      src={"http://localhost:3002/uploads/" + image.image}
                      h="200px"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  ))}
                </SimpleGrid>
              )}
            </Box>
          )}
        </Link>
      </Box>
      <Box mt={4} display="flex" alignItems="center" ms={3}>
        <ButtonLike threadId={thread.id as number} />

        <FaCommentAlt
          color="#909090"
          style={{ marginLeft: "20px", width: "20px" }}
        />
        <Text ml={1} color="gray.400">
          {thread._count.replies} Replies
        </Text>
      </Box>
    </Box>
  );
};

export default Status;
