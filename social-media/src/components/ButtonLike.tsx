import { useEffect, useState } from "react";
import ApiConfig from "../libs/api";
import { Box, Text } from "@chakra-ui/react";
import { Heart } from "react-feather";
import { FaCommentAlt } from "react-icons/fa";

interface ILikeButtonProps {
  threadId: number;
}

const ButtonLike: React.FC<ILikeButtonProps> = ({ threadId }) => {
  const [liked, setliked] = useState<boolean>(false);
  const [likeCount, setlikeCount] = useState();

  const handleLike = async (e: any) => {
    e.preventDefault();

    try {
      const res = await ApiConfig.post(
        `/like`,
        {
          threadId: threadId,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      await getLike();
      await getLikeCount();
    } catch (error) {
      console.log(error);
    }
  };

  const getLikeCount = async () => {
    try {
      const res = await ApiConfig.get(`/likes/${threadId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setlikeCount(res.data.data.length);
    } catch (error) {
      console.log(error);
    }
  };

  const getLike = async () => {
    try {
      const res = await ApiConfig.get(`/like/${threadId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setliked(res.data.data === null ? false : true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLike();
    getLikeCount();
  }, []);

  return (
    <>
      <Box display="flex" alignItems="center" ms={3}>
        <Heart
          onClick={handleLike}
          color={liked ? "red" : "#909090"}
          width={"20px"}
        />
        <Text color="gray.400" ml={2}>
          {likeCount} Likes
        </Text>
      </Box>
    </>
  );
};

export default ButtonLike;
