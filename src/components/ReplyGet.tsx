import React, { useEffect, useState } from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import { IThreadData } from "../types/replies";
import useReply from "../hoocks/useReply";
import { useParams } from "react-router-dom";

const GetComment: React.FC = () => {
  const [replies, setReplies] = useState<IThreadData[]>([]);
  const { getReplies } = useReply();
  const { id } = useParams();
  const fetchReplies = async () => {
    try {
      const response = await getReplies(Number(id));
      setReplies(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchReplies();
  }, []);

  return (
    <>
      {replies.map((comment) => (
        <Box key={comment.id} borderBottom={"1px solid gray"}>
          <Box display="flex" ms={4} mt={4}>
            <Image
              src={
                "http://localhost:3002/uploads/" +
                  comment.author.profile.avatar || "placeholder_avatar_url"
              }
              alt={comment.author.fullname}
              boxSize="50px"
              borderRadius="full"
              mr={4}
            />
            <Box>
              <Text fontWeight="bold" color="white">
                {comment.author.fullname}
              </Text>
              <Text color="gray.400">
                @{comment.author.username} • {comment.createdAt}
              </Text>
            </Box>
          </Box>
          <Box w={"90%"} ms={4} mt={4}>
            <Text color="white" mb={4}>
              {comment.conten}
            </Text>
            {comment.image && comment.image.length > 0 && (
              <>
                {comment.image.map((image, index) => (
                  <Image
                    key={index}
                    src={
                      "http://localhost:3002/uploads/" + image.image ||
                      "placeholder_image_url"
                    }
                    mb={4}
                    w="100%"
                    borderRadius="10"
                    h="300px"
                    objectFit={"cover"}
                    objectPosition={"center"}
                  />
                ))}
              </>
            )}
          </Box>
        </Box>
      ))}
    </>
  );
};

export default GetComment;
