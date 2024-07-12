import { useState } from "react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import { useAppDispatch } from "../store";
import { SET_LOGIN } from "../store/slice/auth";
import ApiConfig from "../libs/api";
import { IUserData } from "../types/login";

function BasicUsage() {
  const dispatch = useAppDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [bio, setBio] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [cover, setCover] = useState(null);

  const handleAvatarChange = (event: any) => {
    setAvatar(event.target.files[0]);
  };

  const handleCoverChange = (event: any) => {
    setCover(event.target.files[0]);
  };

  const handleSaveProfile = async () => {
    try {
      const formData = new FormData();
      if (bio) {
        formData.append("bio", bio);
      }
      if (avatar) {
        formData.append("avatar", avatar);
      }
      if (cover) {
        formData.append("cover", cover);
      }

      await axios.patch("http://localhost:3002/api/v1/profile", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const responseProfile = await ApiConfig.get("/profile", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      dispatch(
        SET_LOGIN({
          user: responseProfile.data.data as IUserData,
          token: localStorage.getItem("token") as string,
        })
      );
      onClose();
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <>
      <Text onClick={onOpen}>
        Edit Profile <ExternalLinkIcon mx="2px" />
      </Text>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box bg="#1d1d1d" p="4" borderRadius="md">
              <Flex align="center" justify="center" direction="column">
                <Input
                  type="file"
                  borderColor="gray.300"
                  _focus={{ borderColor: "gray.700" }}
                  name=""
                  w="100%"
                  h="200px"
                  objectFit="cover"
                  borderRadius="md"
                  onChange={handleCoverChange}
                />

                <Flex alignItems="center" mt="-100px">
                  <Input
                    type="file"
                    name="avatar"
                    borderRadius="full"
                    boxSize="150px"
                    onChange={handleAvatarChange}
                  />
                </Flex>
                <FormControl id="bio">
                  <FormLabel fontWeight="bold" color="gray.300">
                    Bio
                  </FormLabel>
                  <Textarea
                    borderColor="gray.300"
                    _focus={{ borderColor: "gray.700" }}
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                  />
                </FormControl>
                <Button
                  mt={4}
                  colorScheme="teal"
                  variant="solid"
                  onClick={handleSaveProfile}
                >
                  Save
                </Button>
              </Flex>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default BasicUsage;
