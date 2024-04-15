import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import { IComment } from "../types/thread";

interface Props {
  comments: IComment[];
}

const GetComment: React.FC<Props> = ({ comments }) => {
  return (
    <>
      {comments.map((comment) => (
        <Box key={comment.comment_id} borderBottom={"1px solid gray"}>
          <Box display="flex" ms={4} mt={4}>
            <Image
              src={comment.user.profile}
              alt={comment.user.fullname}
              boxSize="50px"
              borderRadius="full"
              mr={4}
            />
            <Box>
              <Text fontWeight="bold" color="white">
                {comment.user.fullname}
              </Text>
              <Text color="gray.400">
                @{comment.user.username} • {comment.comment_date}
              </Text>
            </Box>
          </Box>
          <Box w={"90%"} ms={4} mt={4}>
            <Text color="white" mb={4}>
              {comment.comment_text}
            </Text>
            {comment.image && (
              <Image
                src={comment.image}
                mb={4}
                w="100%"
                borderRadius="10"
                h="300px"
                objectFit={"cover"}
                objectPosition={"center"}
              />
            )}
          </Box>
        </Box>
      ))}
    </>
  );
};

export default GetComment;
