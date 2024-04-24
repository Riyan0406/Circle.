import { Box, Spinner } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import ProfileLayout from "./profileLayout";
import Detail from "../components/Detail";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import useReply from "../hoocks/useReply";
import { IThreadData } from "../types/replies";

const DetailLayout = () => {
  const { id } = useParams();
  const { threadById } = useReply();
  const [thread, setThread] = useState<IThreadData>();
  console.log(thread);

  const fetchData = async () => {
    try {
      const response = await threadById(Number(id));
      setThread(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Box w={"71%"} h={"100vh"} bg={"#1d1d1d"}>
        <Navbar />
        <Box
          style={{
            marginLeft: "400px",
          }}
        >
          <Box p={6}>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "white",
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              <FontAwesomeIcon icon={faArrowLeft} /> Status
            </Link>
          </Box>

          <Box bg={"#1d1d1d"}>
            <Detail thread={thread!} />
          </Box>
        </Box>
        <ProfileLayout />
      </Box>
    </>
  );
};

export default DetailLayout;
