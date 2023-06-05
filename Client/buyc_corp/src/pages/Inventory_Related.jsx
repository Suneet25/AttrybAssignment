import { Search2Icon, TriangleUpIcon, UpDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";

const AddDetails = () => {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [kmOnOdometer, setKmOnOdometer] = useState("");
  const [oemSpecs, setOemSpecs] = useState("");
  const [majorScratches, setMajorScratches] = useState("");
  const [originalPaint, setOriginalPaint] = useState("");
  const [accidentsReported, setAccidentsReported] = useState("");
  const [previousBuyers, setPreviousBuyers] = useState("");
  const [registrationPlace, setRegistrationPlace] = useState("");
  const [search, setSearch] = useState([]);
  const [inputData, setInputData] = useState("");
  let toast = useToast();
  let elem = useRef(null);

  let { token } = useSelector((store) => store.authManager);
  console.log(token);

  let handleSearch = async () => {
    let res = await axios.get(
      `https://drawers-armadillo.cyclic.app/api/OEM_Specs/get-OEM_Specs?search=${inputData}`
    );
    setSearch(res.data.specs);
  };
  let handleSetOEMId = (id, el) => {
    setOemSpecs(id);
  };

  const handleAddCar = async () => {
    //  car addition logic here
    if (
      !oemSpecs ||
      !image ||
      !title ||
      !description ||
      !kmOnOdometer ||
      !majorScratches ||
      !originalPaint ||
      !accidentsReported ||
      !previousBuyers ||
      !registrationPlace
    ) {
      toast({
        title: `All fields are required`,
        status: "info",
        isClosable: true,
      });
      return;
    }

    await axios
      .post(
        `https://drawers-armadillo.cyclic.app/api/marketPlace_Inventory/add-inventoryInfo`,
        {
          oemSpecs,
          image,
          title,
          description,
          kmOnOdometer,
          majorScratches,
          originalPaint,
          accidentsReported,
          previousBuyers,
          registrationPlace,
        },
        {
          headers: {
            Authorization: ` ${token}`,
          },
        }
      )
      .then((response) => {
        // Handle the response
        console.log(response.data);

        toast({
          title: `Car added successfully`,
          status: "success",
          isClosable: true,
        });
      })
      .catch((error) => {
        // Handle the error
        console.error(error);
      });
  };

  return (
    <Box bg={"rgb(247,250,252)"}>
      <Heading color={"black"} p={10}>
        Add Car Details
      </Heading>
      <InputGroup
        width={{ base: "300px", md: "500px", lg: "500px" }}
        margin="auto"
      >
        <Input
          ref={elem}
          type="text"
          placeholder="Search for OEM-specs"
          border={"1px solid gray"}
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
        <InputRightElement width="4.5rem">
          <Button
            h="1.75rem"
            size="sm"
            onClick={handleSearch}
            bgColor={"green.600"}
            color={"white"}
            _hover={{
              color: "white",
              bg: "green.700",
            }}
          >
            <Search2Icon />
          </Button>
        </InputRightElement>
      </InputGroup>
      <Box
        width={{ base: "300px", md: "500px", lg: "500px" }}
        margin={"auto"}
        boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
      >
        {search.map((el) => (
          <Box key={el._id} onClick={() => handleSetOEMId(el._id, el)}>
            <Flex justifyContent={"center"} alignItems={"center"} gap={10}>
              <Image
                src={el.image}
                h={"50px"}
                w={"50px"}
                borderRadius={"50%"}
              />
              <Text>{el.model}</Text>
            </Flex>
          </Box>
        ))}
      </Box>
      <Stack
        width={{ base: "300px", md: "500px", lg: "500px" }}
        boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
        direction={"column"}
        gap={4}
        margin={"auto"}
        mt={2}
        justifyContent={"center"}
        alignItems={"center"}
        p={10}
        pb={5}
        borderRadius={5}
      >
        <InputGroup margin="auto">
          <Input
            ref={elem}
            border={"1px solid gray"}
            type="text"
            placeholder="Select OEM specs"
            value={oemSpecs}
            onChange={(e) => setOemSpecs(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button
              h="1.75rem"
              size="sm"
              onClick={()=>elem.current.focus()}
              bgColor={"green.600"}
              color={"white"}
              _hover={{
                color: "white",
                bg: "green.700",
              }}
            >
              <TriangleUpIcon  />
            </Button>
          </InputRightElement>
        </InputGroup>

        <Input
          border={"1px solid gray"}
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <Input
          border={"1px solid gray"}
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Textarea
          border={"1px solid gray"}
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></Textarea>
        <Input
          border={"1px solid gray"}
          type="text"
          placeholder="Odometer (KMs)"
          value={kmOnOdometer}
          onChange={(e) => setKmOnOdometer(e.target.value)}
        />
        <Input
          border={"1px solid gray"}
          type="text"
          placeholder="Major Scratches"
          value={majorScratches}
          onChange={(e) => setMajorScratches(e.target.value)}
        />
        <Input
          border={"1px solid gray"}
          type="text"
          placeholder="Original Paint"
          value={originalPaint}
          onChange={(e) => setOriginalPaint(e.target.value)}
        />
        <Input
          border={"1px solid gray"}
          type="text"
          placeholder="Accidents Reported"
          value={accidentsReported}
          onChange={(e) => setAccidentsReported(e.target.value)}
        />
        <Input
          border={"1px solid gray"}
          type="text"
          placeholder="Previous Buyers"
          value={previousBuyers}
          onChange={(e) => setPreviousBuyers(e.target.value)}
        />
        <Input
          border={"1px solid gray"}
          type="text"
          placeholder="Registration Place"
          value={registrationPlace}
          onChange={(e) => setRegistrationPlace(e.target.value)}
        />
        <Button
          border={"1px solid gray"}
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
      </Stack>
    </Box>
  );
};

export default AddDetails;
