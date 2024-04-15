import React, { useEffect } from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import { Heart } from "react-feather";
import { FaCommentAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import useThread from "../hoocks/useThread";
import { IThread } from "../types/thread";

const Status: React.FC<IThread> = ({
  id,
  user,
  image,
  postAt,
  conten,
  totalLikes,
  totalComments,
}) => {
  const { getthreadById } = useThread();

  useEffect(() => {
    getthreadById(id);
  }, [getthreadById, id]);

  return (
    <Box borderTop={"1px solid gray"} borderBottom={"1px solid gray"} p={4}>
      <Link to={`/detail/${id}`}>
        <Box display="flex">
          {user && (
            <Image
              src={user.profile}
              alt={user.fullname}
              boxSize="50px"
              borderRadius="full"
              mr={4}
            />
          )}
          <Box>
            {user && (
              <Text fontWeight="bold" color="white">
                {user.fullname}
              </Text>
            )}
            {user && (
              <Text color="gray.400">
                @{user.username} • {postAt}
              </Text>
            )}
          </Box>
        </Box>
        <Box w={"90%"} ms={4}>
          <Text color="white" mt={2}>
            {conten}
          </Text>
          {image && (
            <Image
              src={image}
              mt={2}
              w="100%"
              h="300px"
              objectFit={"cover"}
              objectPosition={"center"}
              position={"relative"}
            />
          )}
          <Box mt={4} display="flex" alignItems="center" ms={3}>
            <Heart color="#909090" width={"20px"} />
            <Text ml={1} color="gray.400">
              {totalLikes} Likes
            </Text>
            <FaCommentAlt
              color="#909090"
              style={{ marginLeft: "20px", width: "20px" }}
            />
            <Text ml={1} color="gray.400">
              {totalComments} Replies
            </Text>
          </Box>
        </Box>
      </Link>
    </Box>
  );
};

export default Status;
