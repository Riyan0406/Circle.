import { Box, Spinner } from "@chakra-ui/react";
import Home from "../components/Home";
import Status from "../components/Status";
import useThread from "../hoocks/useThread";
import { useSelector } from "react-redux";
import { RootState } from "../store/types/rootState";

const HomeLayout: React.FC = () => {
  const { thread, isLoading } = useThread();
  const auth = useSelector((state: RootState) => state.auth);

  console.log("data post", thread);

  return (
    <Box>
      <Home />
      {isLoading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="200px"
        >
          <Spinner size="lg" color="teal.500" />
        </Box>
      ) : (
        thread.map((status: any, index: any) => (
          <Box key={index}>
            <Status
              key={index}
              id={status.id}
              user={status.user}
              image={status.image}
              postAt={status.postAt}
              conten={status.conten}
              totalLikes={status.totalLikes}
              totalComments={status.totalComments}
            />
          </Box>
        ))
      )}
    </Box>
  );
};

export default HomeLayout;
