// import { ExternalLinkIcon } from "@chakra-ui/icons";
// import { Box, Flex, Image, Text } from "@chakra-ui/react";
// import { useState } from "react";
// import AllPost from "./AllPost";
// import Media from "./Media";
// import { RootState, useAppSelector } from "../store";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";
// import BasicUsage from "./modalEdit";

// const MyProfile: React.FC = () => {
//   const profile = useAppSelector((state: RootState) => state.auth);

//   console.log("au ah", profile);

//   if (!profile || !profile.user) {
//     return null;
//   }

//   const { user } = profile;
//   const [isClicked, setIsClicked] = useState(true);
//   const handleClick = () => {
//     setIsClicked(!isClicked);
//   };

//   return (
//     <>
//       <Box p={"4"}>
//         <Box mt={"4"} p={"4"} bg={"#1d1d1d"}>
//           <Link
//             to="/"
//             style={{
//               color: "white",
//               marginLeft: "10px",
//               marginTop: "10px",
//               fontWeight: "bold",
//               fontSize: "20px",
//               textDecoration: "none",
//             }}
//           >
//             <FontAwesomeIcon icon={faArrowLeft} />
//             👋{profile.user.user?.fullname}👋
//           </Link>
//         </Box>
//         <Box position={"relative"} padding={"4"}>
//           <Image
//             src={"http://localhost:3002/uploads/" + user.cover}
//             alt="Cover Image"
//             w={"full"}
//             h={"100px"}
//             border={"2px solid white"}
//             objectFit={"cover"}
//             position={"absolute"}
//             zIndex={0}
//             borderRadius={"10px"}
//             top={"5"}
//             left={0}
//           />

//           <Image
//             src={"http://localhost:3002/uploads/" + user.avatar}
//             alt=""
//             mr="2"
//             w={"60px"}
//             h={"60px"}
//             borderRadius={"full"}
//             border={"2px solid white"}
//             zIndex="1"
//             position="relative"
//             top="76px"
//             left={"3"}
//           />
//         </Box>
//         <Box position={"relative"} zIndex="1" top={"8"}>
//           <Link
//             to=""
//             style={{
//               textDecoration: "none",
//               color: "white",
//               fontWeight: "bold",
//               fontSize: "sm",
//               display: "flex",
//               justifyContent: "end",
//               alignItems: "center",
//             }}
//           >
//             <BasicUsage />
//           </Link>
//         </Box>

//         <Box position={"relative"} zIndex="1" top={"50"}>
//           <Text color={"white"} fontWeight={"bold"} fontSize={"20px"} ms={2}>
//             {profile.user.user?.fullname}
//           </Text>

//           <Text ml={"2"} fontSize={"sm"} color={"#909090"}>
//             @{profile.user.user.username}
//           </Text>
//           <Text mt="2" ms={2} fontSize={"sm"} color={"#ffffff"}>
//             {profile.user.bio}
//           </Text>
//           <Box mt="1" ms={2} display={"flex"} gap={"4"}>
//             <Text fontSize={"sm"} color={"#909090"}>
//               <Text as="b" color={"#ffffff"}>
//                 {profile.user.user._count.follower}
//               </Text>{" "}
//               Followers{" "}
//             </Text>
//             <Text fontSize={"sm"} color={"#909090"}>
//               <Text as="b" color={"#ffffff"}>
//                 {profile.user.user._count.following}
//               </Text>{" "}
//               Following{" "}
//             </Text>
//           </Box>
//         </Box>
//       </Box>
//       <Box position={"relative"} zIndex="1" top={"30"} bg={"#1d1d1d"}>
//         <Flex w={"100%"} justifyContent={"space-around"} mt={"2"} p={2}>
//           <Text
//             style={{
//               textDecoration: "none",
//               fontWeight: "bold",
//               color: "gray",
//               fontSize: "12px",
//               width: "50%",
//               textAlign: "center",
//               borderBottom: isClicked ? "3px solid #005E0E" : "none",
//               cursor: "pointer",
//             }}
//             onClick={handleClick}
//           >
//             All Post
//           </Text>
//           <Text
//             style={{
//               textDecoration: "none",
//               fontWeight: "bold",
//               color: "gray",
//               fontSize: "12px",
//               width: "50%",
//               textAlign: "center",
//               borderBottom: !isClicked ? "3px solid #005E0E" : "none",
//               cursor: "pointer",
//             }}
//             onClick={() => setIsClicked(false)}
//           >
//             Media
//           </Text>
//         </Flex>
//         <Box>
//           {isClicked && <AllPost />}
//           {!isClicked && <Media />}
//         </Box>
//       </Box>
//     </>
//   );
// };

// export default MyProfile;
