import { Box } from "@chakra-ui/react";
import Home from "../components/Home";
import Status from "../components/Status";
import useThread from "../hoocks/useThread";
import { RootState, useAppSelector } from "../store";
import { useEffect, useState } from "react";
import { IData } from "../types/thread";

const HomeLayout: React.FC = () => {
  const auth = useAppSelector((state: RootState) => state.auth);
  const { getThreads } = useThread();
  const [threads, setThreads] = useState<IData[]>([]);

  const getThread = async () => {
    try {
      const response = await getThreads();
      setThreads(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getThread();
  }, [threads]);

  return (
    <Box>
      <Home />

      <Box>
        {threads.map((thread) => (
          <Status key={thread.id} thread={thread} />
        ))}
      </Box>
    </Box>
  );
};

export default HomeLayout;
