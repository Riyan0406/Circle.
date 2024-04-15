import { Button, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useComment from "../hoocks/useComment";

const Comment = () => {
  const { handleChange, handleSubmit, form } = useComment();

  return (
    <>
      <form
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          padding: "4px",
        }}
        action=""
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <Input
          placeholder="What's replaying"
          color="white"
          type="text"
          mr="2"
          w="60%"
          border="none"
          name="comment_text"
          value={form.comment_text}
          onChange={handleChange}
        />
        <InputGroup mr="10" w="5%">
          <InputLeftElement
            pointerEvents="none"
            children={<FontAwesomeIcon icon={faImage} />}
            color="#005E0E"
          />
          <Input
            type="file"
            placeholder="Select file"
            opacity={0}
            width="5%"
            name="image"
            onChange={handleChange}
            accept="image/*"
          />
        </InputGroup>
        <Button
          type="submit"
          colorScheme="teal"
          color="#ffffff"
          w="20%"
          h="30px"
          px="4"
          bg="#005E0E"
          _hover={{ bg: "#04A51E" }}
        >
          Replay
        </Button>
      </form>
    </>
  );
};

export default Comment;
