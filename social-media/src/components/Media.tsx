import { Box, Image } from "@chakra-ui/react";

const Media = () => {
  return (
    <>
      <Box
        color={"#909090"}
        borderTop={"1px solid gray"}
        borderBottom={"1px solid gray"}
      >
        <Box display={"flex"} flexWrap={"wrap"}>
          <Image
            src="https://pm1.narvii.com/6227/149b3b778803457410b8e49c47f82f7c3b86d2ad_hq.jpg"
            alt="Image"
            boxSize="150px"
            objectFit="cover"
          />
          <Image
            src="https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/113/2023/12/24/Megapa-Hinata-sangat-menyukai-Uzumaki-Naruto-3016652457.jpeg"
            alt="Image"
            boxSize="150px"
            objectFit="cover"
          />
        </Box>
      </Box>
    </>
  );
};

export default Media;
