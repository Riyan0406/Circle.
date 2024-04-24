import { Box, Image, Text } from "@chakra-ui/react";
import { Heart } from "react-feather";
import { FaCommentAlt } from "react-icons/fa";
import { RootState, useAppSelector } from "../store";
import React, { useEffect, useState } from "react";
import useReply from "../hoocks/useReply";
import { IThreadData } from "../types/profileUser";

type Props = {
  userId: number;
};
const AllPost: React.FC<Props> = ({ userId }) => {
  const [threads, setThreads] = useState<IThreadData[]>([]);

  const { getThreadUser } = useReply();
  console.log("allpost", userId);

  const facthData = async () => {
    try {
      const res = await getThreadUser(Number(userId));
      setThreads(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    facthData();
  }, []);
  const formatDate = (createdAt: string) => {
    const date = new Date(createdAt);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return threads.map((thread) => (
    <Box key={thread.id} color={"#909090"} border={"1px solid #909090"} p={2}>
      <Box display={"flex"} flexDirection="row" mt="2" gap={"2"}>
        <Image
          src={
            "http://localhost:3002/uploads/" + thread.author.profile.avatar ||
            "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          }
          alt=""
          border={"2px solid white"}
          borderRadius={"full"}
          mr="2"
          w={"40px"}
          h={"40px"}
        />
        <Box>
          <Box display="flex">
            <Text color="white" fontWeight="bold">
              {thread.author.fullname}{" "}
            </Text>
            <Text color="#909090" ml="1">
              @{thread.author.username}
            </Text>{" "}
            <Text color="gray.400">• {formatDate(thread.createdAt)}</Text>
          </Box>
          <Text color="#ffffff" mt={3} textAlign={"justify"}>
            {thread.conten}
          </Text>
          {thread.image.map((image: any, index: any) => (
            <Image
              key={index}
              src={"http://localhost:3002/uploads/" + image.image}
              alt={`Image ${index}`}
              mt={2}
              w="100%"
              maxHeight="300px"
              objectFit="cover"
            />
          ))}
          <Box mt={2} display="flex" alignItems="center">
            <Heart color="#909090" width={"20px"} />
            <Text ml={1} color="gray.400">
              {thread._count.like} Likes
            </Text>
            <FaCommentAlt
              color="#909090"
              width={"20px"}
              style={{ marginLeft: "20px" }}
            />
            <Text ml={1} color="gray.400">
              {thread._count.reply} Replies
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  ));
  // <>
  //   {threads?.map((thread) => (
  //     <Box
  //       key={thread.id}
  //       color={"#909090"}
  //       border={"1px solid #909090"}
  //       p={2}
  //     >
  //       <Box display={"flex"} flexDirection="row" mt="2" gap={"2"}>
  //         <Image
  //           src={
  //             "http://localhost:3002/uploads/" +
  //               thread.author.profile.avatar ||
  //             "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
  //           }
  //           alt=""
  //           border={"2px solid white"}
  //           borderRadius={"full"}
  //           mr="2"
  //           w={"40px"}
  //           h={"40px"}
  //         />
  //         <Box>
  //           <Box display="flex">
  //             <Text color="white" fontWeight="bold">
  //               {thread.author.fullname}{" "}
  //             </Text>
  //             <Text color="#909090" ml="1">
  //               @{thread.author.username}
  //             </Text>{" "}
  //             <Text color="#909090" ml="1"></Text>
  //           </Box>
  //           <Text color="#ffffff">{thread.conten}</Text>
  //           {thread.image.map((image: any, index: any) => (
  //             <Image
  //               key={index}
  //               src={"http://localhost:3002/uploads/" + image.image}
  //               alt={`Image ${index}`}
  //               mt={2}
  //               w="100%"
  //               maxHeight="300px"
  //               objectFit="cover"
  //             />
  //           ))}
  //           {/* <Box mt={2} display="flex" alignItems="center">
  //             <Heart color="#909090" width={"20px"} />
  //             <Text ml={1} color="gray.400">
  //               {thread?._count.like} Likes
  //             </Text>
  //             <FaCommentAlt
  //               color="#909090"
  //               width={"20px"}
  //               style={{ marginLeft: "20px" }}
  //             />
  //             <Text ml={1} color="gray.400">
  //               {thread?._count.replies} Replies
  //             </Text>
  //           </Box> */}
  //         </Box>
  //       </Box>
  //     </Box>
  //   ))}
  // </>
};

export default AllPost;
