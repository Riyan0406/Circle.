import { Button, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import useReply from "../hoocks/useReply";

interface IReplyButtonProps {
  threadId: number;
}

const Comment: React.FC<IReplyButtonProps> = ({ threadId }) => {
  const [conten, setContent] = useState("");
  const [image, setImages] = useState([]);
  const { postReply } = useReply();

  const handleChange = (event: any) => {
    if (event.target.name === "conten") {
      setContent(event.target.value);
    } else if (event.target.name === "image") {
      setImages(event.target.files);
    }
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      await postReply(threadId, conten, image);
      setContent("");
      setImages([]);
    } catch (error) {
      console.error("Error posting reply:", error);
    }
  };

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
          placeholder="What's replying"
          color="white"
          type="text"
          mr="2"
          w="60%"
          border="none"
          name="conten"
          value={conten}
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
            multiple
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
          Reply
        </Button>
      </form>
    </>
  );
};

export default Comment;
