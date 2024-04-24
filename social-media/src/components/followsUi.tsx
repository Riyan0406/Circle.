import { Box, Text } from "@chakra-ui/react";
import { useState } from "react";
import UsersFollowers from "./UsersFollowers";
import UsersFollowing from "./UsersFollowing";

const FollowsUi = () => {
  const [isClick, setIcClick] = useState(true);

  const handleClick = () => {
    setIcClick(!isClick);
  };
  return (
    <>
      <Box w={"100%"} h={"100%"}>
        <Box ps={"4"} pt={"4"}>
          <Text color={"#ffffff"} fontWeight={"bold"} fontSize={"lg"}>
            Follows Your Frends 👨🏼‍🤝‍👨🏻👩🏼‍🤝‍🧑🏼
          </Text>
        </Box>

        <Box display={"flex"} gap={"4"} w={"100%"} p={"4"} mt={"6"}>
          <Text
            style={{
              textDecoration: "none",
              fontWeight: "bold",
              color: "gray",
              fontSize: "12px",
              width: "50%",
              textAlign: "center",
              borderBottom: isClick ? "3px solid #005E0E" : "none",
              cursor: "pointer",
            }}
            onClick={handleClick}
          >
            Followers
          </Text>
          <Text
            style={{
              textDecoration: "none",
              fontWeight: "bold",
              color: "gray",
              fontSize: "12px",
              width: "50%",
              textAlign: "center",
              borderBottom: !isClick ? "3px solid #005E0E" : "none",
              cursor: "pointer",
            }}
            onClick={() => setIcClick(!isClick)}
          >
            Following
          </Text>
        </Box>

        {isClick && <UsersFollowers />}
        {!isClick && <UsersFollowing />}
      </Box>
    </>
  );
};

export default FollowsUi;
