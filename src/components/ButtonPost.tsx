import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useThread from "../hoocks/useThread";

const ButtonPost = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { handleChange, form, handleSubmit } = useThread();
  return (
    <>
      <Button
        colorScheme="teal"
        color="#ffffff"
        py={"5"}
        mt={"4"}
        size="xs"
        w={"80%"}
        bg="#04A51E"
        borderRadius="10px"
        onClick={onOpen}
      >
        Create Post
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent borderRadius={"10px"} bg={"#262626"} p={"4"}>
          <ModalCloseButton />
          <form action="" onSubmit={handleSubmit.mutate}>
            <ModalBody mb={"6"}>
              <Flex gap={4}>
                <Image
                  src="https://via.placeholder.com/150"
                  alt=""
                  w={10}
                  borderRadius={"full"}
                />
                <Input
                  type="text"
                  placeholder="What's on your mind?"
                  border={"none"}
                  name="conten"
                  value={form.conten}
                  onChange={handleChange}
                />
              </Flex>
            </ModalBody>
            <hr
              style={{
                paddingBottom: "20px",
              }}
            />

            <Flex justifyContent={"space-between"} alignItems={"center"}>
              <Box>
                <InputGroup mr="10" w={"5"}>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<FontAwesomeIcon icon={faImage} />}
                    color="#005E0E"
                  />
                  <Input
                    type="file"
                    placeholder="Select file"
                    opacity={0}
                    width={"5"}
                    name="image"
                    onChange={handleChange}
                  />
                </InputGroup>
              </Box>

              <Button
                type="submit"
                colorScheme="teal"
                color="#ffffff"
                w={"65px"}
                h={"30px"}
                bg="#005E0E"
                _hover={{ bg: "#04A51E" }}
              >
                Post
              </Button>
            </Flex>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ButtonPost;
