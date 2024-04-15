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
import useLogin from "../hoocks/useLogin";

const LoginForm = () => {
  const { handleInputChange, handleSubmit, formData } = useLogin();
  return (
    <Box
      bg={"#1d1d1d"}
      h="100vh"
      w="100vw"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box maxW="md" w={"50%"} p={6}>
        <Box display="flex" flexDirection={"column"} mb={2}>
          <Text as="b" fontSize="3xl" color="#04A51E">
            Circle
          </Text>
          <Text as="b" fontSize="3xl" color="#ffffff">
            Login to circle
          </Text>
        </Box>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="email *"
                color={"white"}
                value={formData.email}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl>
              <Input
                type="password"
                id="password"
                name="password"
                placeholder="Password *"
                color={"white"}
                value={formData.password}
                onChange={handleInputChange}
              />
            </FormControl>
            <Box w={"100%"}>
              <Text
                color="#ffffff"
                cursor="pointer"
                _hover={{ color: "#04A51E" }}
                textAlign={"end"}
              >
                Forget Password ?
              </Text>
            </Box>
            <Button
              type="submit"
              colorScheme="teal"
              color="#ffffff"
              py={"5"}
              size="xs"
              w={"100%"}
              bg="#04A51E"
              borderRadius="10px"
            >
              Login
            </Button>
            <Text color="#ffffff">
              {" "}
              Don't have an account ?{" "}
              <Link
                to="/register"
                style={{
                  color: "#04A51E",
                  cursor: "pointer",
                  fontWeight: "bold",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
              >
                Create Account
              </Link>
            </Text>
          </VStack>
        </form>
      </Box>
    </Box>
  );
};

export default LoginForm;
