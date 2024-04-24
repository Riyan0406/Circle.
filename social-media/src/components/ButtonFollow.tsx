import { Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Heart } from "react-feather";
import axios from "axios";
import { useAppSelector } from "../store";
import ApiConfig from "../libs/api";

const ButtonFollow = (props: { followingId: number; isFollowing: boolean }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isFollowing, setIsFollowing] = useState(props.isFollowing);
  const Profile = useAppSelector((state) => state.auth.user);

  useEffect(() => {
    const getFollower = async () => {
      try {
        const res = await ApiConfig.get(`/follow/${props.followingId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        if (Profile?.userId && res.data.data.followingId !== Profile?.userId) {
          setIsFollowing(true);
        } else if (
          Profile?.userId &&
          res.data.data.followingId === Profile?.userId
        ) {
          setIsFollowing(false);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getFollower();
  }, [props.followingId, Profile?.userId]);

  const handleFollow = async () => {
    setIsLoading(true);
    try {
      await axios.post(
        "http://localhost:3002/api/v1/follow",
        {
          followingId: props.followingId,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setIsFollowing(!isFollowing);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      colorScheme={props.isFollowing ? "red" : "green"}
      onClick={handleFollow}
      isLoading={isLoading}
      disabled={isLoading}
      variant="solid"
      size="sm"
      leftIcon={<Heart />}
    >
      {isFollowing ? "Unfollow" : "Follow"}
    </Button>
  );
};

export default ButtonFollow;
