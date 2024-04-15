import { Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import ProfileLayout from "./profileLayout";
import Detail from "../components/Detail";
import Home from "../components/Home";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import useThread from "../hoocks/useThread";
import { useSelector } from "react-redux";
import { RootState } from "../store/types/rootState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const DetailLayout = () => {
  const { id } = useParams();
  const { detail, getthreadById } = useThread();
  const auth = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    getthreadById(id);
  }, []);

  return (
    <>
      <Box display={"flex"} w={"71%"} h={"100%"} bg={"#1d1d1d"}>
        <Navbar />
        <div
          style={{
            marginLeft: "400px",
            borderRight: "1px solid gray",
            borderBottom: "1px solid gray",
            borderLeft: "1px solid gray",
          }}
        >
          <Box w={"full"} h={"100%"} bg={"#1d1d1d"}>
            <Box mt={"3"} p={"4"} bg={"#1d1d1d"} display={"flex"} mb={5}>
              <Link
                to="/"
                style={{
                  color: "white",
                  marginLeft: "10px",
                  marginTop: "10px",
                  fontWeight: "bold",
                  fontSize: "20px",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                }}
              >
                <FontAwesomeIcon icon={faArrowLeft} />
                Status
              </Link>
            </Box>

            {detail && (
              <Detail
                user={detail.user}
                id={detail.id}
                post={detail.post}
                image={detail.image}
                postAt={detail.postAt}
                conten={detail.conten}
                totalLikes={detail.totalLikes}
                totalComments={detail.totalComments}
                comment={detail.comments}
              />
            )}
          </Box>
        </div>
        <ProfileLayout />
      </Box>
    </>
  );
};

export default DetailLayout;
