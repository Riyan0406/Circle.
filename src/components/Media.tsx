import { Box, Image } from "@chakra-ui/react";
import { RootState } from "../store";
import { useSelector } from "react-redux";

const Media = () => {
  const threadImages = useSelector((state: RootState) =>
    state.auth.user?.user?.thread.map((thread) =>
      thread.image.map((image) => image.image)
    )
  );

  if (!threadImages || threadImages.length === 0) {
    return null;
  }
  const flattenedImages = threadImages.flat();

  return (
    <>
      <Box color={"#909090"} border={"1px solid gray"}>
        <Box
          display={"flex"}
          flexWrap={"wrap"}
          gap={"1"}
          justifyContent={"center"}
          px={"2"}
        >
          {flattenedImages.map((imageUrl, index) => (
            <Image
              key={index}
              src={"http://localhost:3002/uploads/" + imageUrl}
              alt={`Image ${index}`}
              boxSize="130px"
              objectFit="cover"
              border={"1px solid gray"}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Media;
