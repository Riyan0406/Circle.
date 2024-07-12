import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import AllPost from "./AllPost";
import Media from "./Media";
import ApiConfig from "../libs/api";
import { IProfile } from "../types/profile";
import { Link } from "react-router-dom";
import BasicUsage from "./modalEdit";

interface Profile {
  profileId: number;
}

const UserProfile: React.FC<Profile> = ({ profileId }) => {
  const [profile, setProfile] = useState<IProfile>();
  const [isClicked, setIsClicked] = useState(true);

  const getProfileById = async () => {
    try {
      const res = await ApiConfig.get(`/profile/${profileId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setProfile(res.data.data);
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };

  useEffect(() => {
    getProfileById();
  }, [profileId]);

  return (
    <>
      <Box p={"4"}>
        <Box position={"relative"} padding={"4"}>
          <Image
            src={"http://localhost:3002/uploads/" + profile?.cover}
            alt="Cover Image"
            w={"full"}
            h={"100px"}
            border={"2px solid white"}
            objectFit={"cover"}
            position={"absolute"}
            zIndex={0}
            borderRadius={"10px"}
            top={"5"}
            left={0}
          />

          <Image
            src={"http://localhost:3002/uploads/" + profile?.avatar}
            alt=""
            mr="2"
            w={"60px"}
            h={"60px"}
            borderRadius={"full"}
            border={"2px solid white"}
            zIndex="1"
            position="relative"
            top="76px"
            left={"3"}
          />
        </Box>
        <Box position={"relative"} zIndex="1" top={"8"}>
          <Link
            to=""
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
            <BasicUsage />
          </Link>
        </Box>
        <Box mt="6" p={"4"}>
          <Text color={"white"} fontWeight={"bold"} fontSize={"20px"} ms={2}>
            {profile?.user.fullname}
          </Text>
          <Text ml={"2"} fontSize={"sm"} color={"#909090"}>
            @{profile?.user.username}
          </Text>
          <Text mt="2" ms={2} fontSize={"sm"} color={"#ffffff"}>
            {profile?.bio}
          </Text>
          <Box mt="1" ms={2} display={"flex"} gap={"4"}>
            <Text fontSize={"sm"} color={"#909090"}>
              <Text as="b" color={"#ffffff"}>
                {profile?.user._count.follower}
              </Text>{" "}
              Followers{" "}
            </Text>
            <Text fontSize={"sm"} color={"#909090"}>
              <Text as="b" color={"#ffffff"}>
                {profile?.user._count.following}
              </Text>{" "}
              Following{" "}
            </Text>
          </Box>
        </Box>
      </Box>

      <Box position={"relative"} zIndex="1" bg={"#1d1d1d"}>
        <Flex w={"100%"} justifyContent={"space-around"} p={2}>
          <Text
            style={{
              textDecoration: "none",
              fontWeight: "bold",
              color: "gray",
              fontSize: "12px",
              width: "50%",
              textAlign: "center",
              borderBottom: isClicked ? "3px solid #005E0E" : "none",
              cursor: "pointer",
            }}
            onClick={() => setIsClicked(true)}
          >
            All Post
          </Text>
          <Text
            style={{
              textDecoration: "none",
              fontWeight: "bold",
              color: "gray",
              fontSize: "12px",
              width: "50%",
              textAlign: "center",
              borderBottom: !isClicked ? "3px solid #005E0E" : "none",
              cursor: "pointer",
            }}
            onClick={() => setIsClicked(false)}
          >
            Media
          </Text>
        </Flex>
        <Box>
          {isClicked && <AllPost userId={profileId} />}
          {!isClicked && <Media />}
        </Box>
      </Box>
    </>
  );
};

export default UserProfile;
