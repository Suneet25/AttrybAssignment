import React, { useState } from 'react'
import {Box,Button,Flex,FormControl,FormLabel,Heading, Image, Input, Link, Stack, Text} from "@chakra-ui/react"
import Logo from "../Assets/SignUp_Login_Logo.png"
const Signin = () => {

let [email,setEmail]=useState("");
let [password,setPassword]=useState("");

let load=false;

// let handleSignup=async(e)=>{
//   e.preventDefault();

// }

  return (
    <Flex
    bg={"rgb(247,250,252)"}
    justifyContent={"center"}
    alignItems={"center"}
  >
    <Stack spacing={6} mx={"auto"} px={6} className={"signup_main"}>
      <Image src={Logo} alt="logo" marginBottom={"20px"} />
      <Stack align={"center"}>
        <Heading
          mt={"-30px"}
          fontSize={"xl"}
          fontWeight={"700"}
          textAlign={"center"}
        >
          Enter details to login
        </Heading>
      </Stack>

      <Box>
        <Stack spacing={4} mt={"-10px"}>
    

          <FormControl id="email" isRequired>
            <Flex direction={"column"}>
              <FormLabel color={"green"}>Enter Email ID</FormLabel>
              <Input
                 width={{base:"300px",md:"500px",lg:"500px"}}
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
              width={{base:"300px",md:"500px",lg:"500px"}}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
              />
            </Flex>
          </FormControl>

          <Stack spacing={10} pt={2}>
            {load ? (
              <Button isLoading colorScheme="green" variant="solid">
                Email
              </Button>
            ) : (
              <Button
                // onClick={handleSignup}
                loadingText="Submitting"
                size="md"
                bg={"green.600"}
                color={"white"}
                _hover={{
                  bg: "green.700",
                }}
              >
                Sign in
              </Button>
            )}
          </Stack>
          <Stack>
            <Text align={"center"} fontSize={"sm"}>
              New user?{" "}
              <Link color={"green"} to="/login">
                Sign-up
              </Link>
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  </Flex>
  )
}

export default Signin