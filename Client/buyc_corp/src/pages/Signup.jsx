import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Link,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../Assets/SignUp_Login_Logo.png";
import { registerfun } from "../Redux/Auth/auth.action";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
let toast=useToast();
let navigate=useNavigate();
  //dispatch
  let dispatch = useDispatch();
  //selector
  let { loading, error } = useSelector((store) => store.authManager);

  //signup
  let handleSignup = () => {
    if(!name || !email || !password)
    {
      toast({
        title: `Email and password required`,
        status: "error",
        isClosable: true,
      })
      return;
    }
    let data = { name, email, password };
    dispatch(registerfun(data));
    navigate("/signin")
    toast({
      title: `Registration successfull`,
      status: "success",
      isClosable: true,
    })
  };

  return (
    <Flex
      bg={"rgb(247,250,252)"}
      justifyContent={"center"}
      alignItems={"center"}
      p={15}
      mt={{ base: "0px", sm: "0px", md: "0px", lg: "120px" }}
    >
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        gap={10}
        direction={{ base: "column", sm: "column", md: "column", lg: "row" }}
      >
        <Box>
          <Image src={Logo} alt="logo" marginBottom={"20px"} />
        </Box>
        <Box>
          <Stack align={"center"}>
            <Heading
              mt={"-30px"}
              fontSize={"xl"}
              fontWeight={"700"}
              textAlign={"center"}
            >
              Enter details to sign-up
            </Heading>
          </Stack>

          <Box>
            <Stack spacing={4} mt={"-10px"}>
              <Box>
                <FormControl id="firstName" isRequired>
                  <Flex direction={"column"}>
                    <FormLabel color={"green"} fontSize={"md"}>
                      Enter Name
                    </FormLabel>
                    <Input
                      width={{ base: "300px", md: "500px", lg: "500px" }}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                    />
                  </Flex>
                </FormControl>
              </Box>

              <FormControl id="email" isRequired>
                <Flex direction={"column"}>
                  <FormLabel color={"green"}>Enter Email ID</FormLabel>
                  <Input
                    width={{ base: "300px", md: "500px", lg: "500px" }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                  />
                </Flex>
              </FormControl>

              <FormControl id="password" isRequired>
                <Flex direction={"column"}>
                  <FormLabel color={"green"}>Enter Password</FormLabel>
                  <Input
                    width={{ base: "300px", md: "500px", lg: "500px" }}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                  />
                </Flex>
              </FormControl>

              <Stack spacing={10} pt={2}>
                {loading ? (
                  <Button isLoading colorScheme="green" variant="solid">
                    Email
                  </Button>
                ) : (
                  <Button
                    onClick={handleSignup}
                    loadingText="Submitting"
                    size="md"
                    bg={"green.600"}
                    color={"white"}
                    _hover={{
                      bg: "green.700",
                    }}
                  >
                    Sign up
                  </Button>
                )}
              </Stack>
              <Stack>
                <Text align={"center"} fontSize={"sm"}>
                  Already a user?{" "}
                  <Link color={"green"} to="/signup">
                    Login
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Signup;
