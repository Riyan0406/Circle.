import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import { useState } from "react";
import AllPost from "./AllPost";
import Media from "./Media";

const MyProfile = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
    setIsClicked2(false);
  };
  const handleClick2 = () => {
    setIsClicked2(!isClicked2);
    setIsClicked(false);
  };
  return (
    <>
      <Box w={"100%"} p={"4"}>
        <Box position={"relative"} padding={"4"}>
          <Image
            src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
            alt="Cover Image"
            w={"full"}
            h={"100px"}
            objectFit={"cover"}
            position={"absolute"}
            zIndex={0}
            borderRadius={"10px"}
            top={"5"}
            left={0}
          />

          <Image
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt=""
            mr="2"
            w={"60px"}
            h={"60px"}
            zIndex="1"
            position="relative"
            top="76px"
            left={"3"}
          />
        </Box>
        <Box position={"relative"} zIndex="1" top={"8"}>
          <Link
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "bold",
              fontSize: "sm",
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
            }}
          >
            Edit Profile <ExternalLinkIcon mx="2px" />
          </Link>
        </Box>

        <Box position={"relative"} zIndex="1" top={"50"}>
          <Text color={"white"} fontWeight={"bold"} fontSize={"20px"} ms={2}>
            Stella Rahadina
          </Text>

          <Text ml={"2"} fontSize={"sm"} color={"#909090"}>
            @Stella
          </Text>
          <Text mt="2" ms={2} fontSize={"sm"} color={"#ffffff"}>
            picked over by the worms, and weird fishes
          </Text>
          <Box mt="1" ms={2} display={"flex"} gap={"4"}>
            <Text fontSize={"sm"} color={"#909090"}>
              <Text as="b" color={"#ffffff"}>
                1.5k
              </Text>{" "}
              Followers{" "}
            </Text>
            <Text fontSize={"sm"} color={"#909090"}>
              <Text as="b" color={"#ffffff"}>
                35
              </Text>{" "}
              Following{" "}
            </Text>
          </Box>
        </Box>
      </Box>
      <Box position={"relative"} zIndex="1" top={"30"}>
        <Flex w={"full"} justifyContent={"space-around"} mt={"2"} p={2}>
          <Link
            style={{
              textDecoration: "none",
              fontWeight: "bold",
              color: "gray",
              fontSize: "12px",
              width: "50%",
              textAlign: "center",
              borderBottom: isClicked ? "3px solid #005E0E" : "none",
            }}
            onClick={handleClick}
          >
            All Post
          </Link>
          <Link
            style={{
              textDecoration: "none",
              fontWeight: "bold",
              color: "gray",
              fontSize: "12px",
              width: "50%",
              textAlign: "center",
              borderBottom: isClicked2 ? "3px solid #005E0E" : "none",
            }}
            onClick={handleClick2}
          >
            Media
          </Link>
        </Flex>
        {isClicked && <AllPost />}
        {isClicked2 && <Media />}
      </Box>
    </>
  );
};

export default MyProfile;
