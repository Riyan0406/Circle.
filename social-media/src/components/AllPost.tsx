import { Box, Image, Text } from "@chakra-ui/react";
import { Heart } from "react-feather";
import { FaCommentAlt } from "react-icons/fa";

const AllPost = () => {
  return (
    <>
      <Box
        color={"#909090"}
        borderTop={"1px solid gray"}
        borderBottom={"1px solid gray"}
        p={2}
      >
        <Box display={"flex"} flexDirection="row" mt="2" gap={"2"}>
          <Image
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt=""
            mr="2"
            w={"40px"}
            h={"40px"}
          />
          <Box>
            <Box display="flex">
              <Text color="white" fontWeight="bold">
                Stella Rahadina{" "}
              </Text>
              <Text color="#909090" ml="1">
                @Stella
              </Text>{" "}
              <Text color="#909090" ml="1">
                • 2h
              </Text>
            </Box>
            <Text color="#ffffff">I'm so proud of you</Text>
            <Box mt={2} display="flex" alignItems="center">
              <Heart color="#909090" width={"20px"} />
              <Text ml={1} color="gray.400">
                1.5k Likes
              </Text>
              <FaCommentAlt
                color="#909090"
                width={"20px"}
                style={{ marginLeft: "20px" }}
              />
              <Text ml={1} color="gray.400">
                115 Replies
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AllPost;
