import { useState } from "react";
import {
  Box,
  FormControl,
  Input,
  Button,
  VStack,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useRegister from "../hoocks/useRegister";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    username: "",
  });

  const { getRegister } = useRegister();
  const navigate = useNavigate();

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("Data Form:", formData);
    await getRegister(formData);
    navigate("/login");
    setFormData({
      fullname: "",
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <Box
      bg={"#1d1d1d"}
      h="100vh"
      w="100vw"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box maxW="md" mx="auto" w={"50%"} p={6}>
        <Box display="flex" flexDirection={"column"} mb={2}>
          <Text as="b" fontSize="3xl" color="#04A51E">
            Circle
          </Text>
          <Text as="b" fontSize="3xl" color="#ffffff">
            Create account circle
          </Text>
        </Box>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl>
              <Input
                type="text"
                color={"white"}
                id="fullname"
                name="fullname"
                placeholder="Full Name *"
                value={formData.fullname}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl>
              <Input
                type="text"
                color={"white"}
                id="username"
                name="username"
                placeholder="username *"
                value={formData.username}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl>
              <Input
                type="email"
                color={"white"}
                id="email"
                name="email"
                placeholder="Email *"
                value={formData.email}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl>
              <Input
                type="password"
                color={"white"}
                id="password"
                name="password"
                placeholder="Password *"
                value={formData.password}
                onChange={handleInputChange}
              />
            </FormControl>
            <Button
              type="submit"
              colorScheme="teal"
              color="#ffffff"
              py={"5"}
              mt={"4"}
              size="xs"
              w={"100%"}
              bg="#04A51E"
              borderRadius="10px"
            >
              Button
            </Button>
            <Text color="#ffffff">
              Already have an account ?{" "}
              <Link
                to="/login"
                style={{
                  color: "#04A51E",
                  cursor: "pointer",
                  fontWeight: "bold",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
              >
                Login
              </Link>{" "}
            </Text>
          </VStack>
        </form>
      </Box>
    </Box>
  );
};

export default RegisterForm;
