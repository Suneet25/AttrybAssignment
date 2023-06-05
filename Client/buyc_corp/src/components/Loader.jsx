import { Box, Heading, Spinner } from "@chakra-ui/react";
import React from "react";

const Loader = () => {
  return (
    <Box
      h={"100vh"}
      w={"100vw"}
      background="linear-gradient(to bottom, rgb(27,19,5), rgb(20,14,4))"
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={4}
        justifyContent={"center"}
        alignItems={"center"}
        minHeight={"100vh"}
      >
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="green.500"
          size="xl"
        />
        <Heading color={"white"}>Loading...</Heading>
      </Box>
    </Box>
  );
};

export default Loader;
