import { Box, Image, Text } from "@chakra-ui/react";
import { Heart } from "react-feather";
import { FaCommentAlt } from "react-icons/fa";
import { IThread } from "../types/thread";
import GetComment from "./GetComment";
import Comment from "./Comment";

const Detail: React.FC<IThread> = ({
  post,
  user,
  postAt,
  conten,
  image,
  totalLikes,
  totalComments,
  comment,
}) => {
  return (
    <Box>
      <Box>
        <Box display="flex" ms={4}>
          {user && (
            <Image
              src={user.profile}
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
        <Box w={"90%"} ms={4} mt={4}>
          <Text color="white" mt={6}>
            {conten}
          </Text>
          {image && (
            <Image
              src={image}
              mt={4}
              w="100%"
              h="300px"
              objectFit={"cover"}
              objectPosition={"center"}
              position={"relative"}
            />
          )}
          <Box mt={4} display="flex" alignItems="center" ms={3}>
            <Heart color="red" />
            <Text ml={1} color="gray.400">
              {totalLikes}
            </Text>
            <FaCommentAlt color="blue" style={{ marginLeft: "20px" }} />
            <Text ml={1} color="gray.400">
              {totalComments}
            </Text>
          </Box>
        </Box>
        <Box
          mt={3}
          mx={"auto"}
          borderTop={"1px solid gray"}
          borderBottom={"1px solid gray"}
        >
          <Comment />
        </Box>
      </Box>

      <Box>
        {comment && comment.length > 0 && <GetComment comments={comment} />}
      </Box>
    </Box>
  );
};

export default Detail;
