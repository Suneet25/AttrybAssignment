import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";

const CarDetailsPage = () => {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [odometer, setOdometer] = useState("");
  const [majorScratches, setMajorScratches] = useState("");
  const [originalPaint, setOriginalPaint] = useState("");
  const [accidentsReported, setAccidentsReported] = useState("");
  const [previousBuyers, setPreviousBuyers] = useState("");
  const [registrationPlace, setRegistrationPlace] = useState("");

  const handleAddCar = () => {
    //  car addition logic here
    console.log(
      "Add Car:",
      image,
      title,
      description,
      odometer,
      majorScratches,
      originalPaint,
      accidentsReported,
      previousBuyers,
      registrationPlace
    );
  };

  return (
    <Box bg={"rgb(247,250,252)"}>
      <Heading color={"green"} p={10}>Add Car Details</Heading>
      <Flex
        width={{ base: "300px", md: "500px", lg: "500px" }}
        boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
        direction={"column"}
        gap={4}
        margin={"auto"}
        mt={10}
     justifyContent={"center"}
     alignItems={"center"}
    
     px={10}
        borderRadius={5}
      >
        <Input
          width={{ base: "300px", md: "500px", lg: "500px" }}
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <Input
          width={{ base: "300px", md: "500px", lg: "500px" }}
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Textarea
          width={{ base: "300px", md: "500px", lg: "500px" }}
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></Textarea>
        <Input
          width={{ base: "300px", md: "500px", lg: "500px" }}
          type="text"
          placeholder="Odometer (KMs)"
          value={odometer}
          onChange={(e) => setOdometer(e.target.value)}
        />
        <Input
          width={{ base: "300px", md: "500px", lg: "500px" }}
          type="text"
          placeholder="Major Scratches"
          value={majorScratches}
          onChange={(e) => setMajorScratches(e.target.value)}
        />
        <Input
          width={{ base: "300px", md: "500px", lg: "500px" }}
          type="text"
          placeholder="Original Paint"
          value={originalPaint}
          onChange={(e) => setOriginalPaint(e.target.value)}
        />
        <Input
          width={{ base: "300px", md: "500px", lg: "500px" }}
          type="text"
          placeholder="Accidents Reported"
          value={accidentsReported}
          onChange={(e) => setAccidentsReported(e.target.value)}
        />
        <Input
          width={{ base: "300px", md: "500px", lg: "500px" }}
          type="text"
          placeholder="Previous Buyers"
          value={previousBuyers}
          onChange={(e) => setPreviousBuyers(e.target.value)}
        />
        <Input
          width={{ base: "300px", md: "500px", lg: "500px" }}
          type="text"
          placeholder="Registration Place"
          value={registrationPlace}
          onChange={(e) => setRegistrationPlace(e.target.value)}
        />
        <Button
          width={{ base: "300px", md: "500px", lg: "500px" }}
          onClick={handleAddCar}
          bgColor={"green"}
          bg={"green.600"}
          color={"white"}
          _hover={{
            bg: "green.700",
          }}
        >
          Add Car
        </Button>
      </Flex>
    </Box>
  );
};

export default CarDetailsPage;
