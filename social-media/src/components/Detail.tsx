import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { Heart } from "react-feather";
import { FaCommentAlt } from "react-icons/fa";
import GetComment from "./ReplyGet";
import Comment from "./ReplyButton";
import useReply from "../hoocks/useReply";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IThreadData } from "../types/replies";
import ButtonLike from "./ButtonLike";

type Props = {
  thread: IThreadData;
};
const Detail: React.FC<Props> = ({ thread }) => {
  const { getReplies } = useReply();
  const { threadId } = useParams<{ threadId: string }>();
  const [replies, setReplies] = useState<IThreadData[]>([]);
  console.log(replies);
  const fetchData = async () => {
    try {
      const response = await getReplies(Number(threadId));
      setReplies(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [threadId]);

  return (
    <Box>
      {thread && (
        <Box>
          <Box display="flex" ms={4}>
            {thread.author && (
              <Image
                src={
                  " http://localhost:3002/uploads/" +
                  thread.author.profile.avatar
                }
                boxSize="50px"
                borderRadius="full"
                mr={4}
              />
            )}
            <Box>
              {thread.author && (
                <Text fontWeight="bold" color="white">
                  {thread.author.fullname}
                </Text>
              )}
              {thread.author && (
                <Text color="gray.400">
                  @{thread.author.username} • {thread.createdAt}
                </Text>
              )}
            </Box>
          </Box>
          <Box w={"90%"} ms={4} mt={4}>
            <Text color="white" mt={6}>
              {thread.conten}{" "}
            </Text>
            {thread.image && thread.image.length > 0 && (
              <Box>
                {thread.image.length === 1 ? (
                  <Image
                    src={
                      "http://localhost:3002/uploads/" + thread.image[0].image
                    }
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
            <Box mt={4} display="flex" alignItems="center" ms={3}>
              <Text ml={1} color="gray.400">
                <ButtonLike threadId={thread.id as number} />
              </Text>
              <FaCommentAlt color="white" style={{ marginLeft: "20px" }} />
              <Text ml={1} color="gray.400">
                {thread._count.replies}
              </Text>
            </Box>
          </Box>
          <Box
            mt={3}
            mx={"auto"}
            borderTop={"1px solid gray"}
            borderBottom={"1px solid gray"}
          >
            <Comment threadId={thread.id as number} />
          </Box>
        </Box>
      )}

      {replies && replies.length > 0 && <GetComment />}
    </Box>
  );
};

export default Detail;
