import { Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Heart } from "react-feather";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../store";
import ApiConfig from "../libs/api";
import { SET_LOGIN } from "../store/slice/auth";
import { IUserData } from "../types/login";

const ButtonFollow = (props: { followingId: number }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const Profile = useAppSelector((state) => state.auth.user);

  const dispatch = useAppDispatch();

  const checkIsFollowing = () => {
    try {
      const following = Profile?.user.follower.find((following) => {
        following.followingId === props.followingId;
      });

      console.log("following from btn follow", following);
      setIsFollowing(following ? true : false);
    } catch (error) {}
  };
  useEffect(() => {
    checkIsFollowing();
  }, [props.followingId]);

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
      const response = await ApiConfig.get("/profile", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      dispatch(
        SET_LOGIN({
          user: response.data.data as IUserData,
          token: localStorage.getItem("token") as string,
        })
      );
      setIsFollowing(!isFollowing);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Button
      colorScheme={isFollowing ? "red" : "green"}
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
