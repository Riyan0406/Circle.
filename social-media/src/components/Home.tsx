import { Button, Box, Input, Flex, Image, Heading } from "@chakra-ui/react";
import { InputGroup, InputLeftElement } from "@chakra-ui/react";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useThread from "../hoocks/useThread";

const Home = () => {
  const { handleChange, form, handleSubmit } = useThread();

  return (
    <Box>
      <Heading mb="4" fontSize="3xl" px={"5"} pt={"5"} color={"#ffffff"}>
        Home
      </Heading>
      <Flex alignItems="center" p={"5"}>
        <Image
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt=""
          mr="2"
          w={"10"}
        />
        <form
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
          }}
          action=""
          onSubmit={handleSubmit.mutate}
        >
          <Input
            placeholder="What's happening"
            color={"white"}
            type="text"
            mr="2"
            w={"30000%"}
            border={"none"}
            name="conten"
            value={form.conten}
            onChange={handleChange}
          />
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
              width={"3"}
              name="image"
              accept="image/*"
              multiple
              onChange={handleChange}
            />
          </InputGroup>
          <Button
            type="submit"
            colorScheme="teal"
            color="#ffffff"
            w={"100%"}
            h={"30px"}
            px={"4"}
            bg="#005E0E"
            _hover={{ bg: "#04A51E" }}
          >
            Post
          </Button>
        </form>
      </Flex>
    </Box>
  );
};

export default Home;
