import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Select,
  Box,
  Button,
  Flex,
  Stack,
  Grid,
  GridItem,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Textarea,
  VStack,
  useDisclosure,
  useToast,
  Tooltip,
} from "@chakra-ui/react";
import { getCars } from "../Redux/Cars/cars.action";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Search2Icon, TriangleUpIcon } from "@chakra-ui/icons";
const Home = () => {
  const [filter, setFilter] = useState("");
  const [order, setOrder] = useState("");
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
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  //carsData
  let { loading, error, carsData } = useSelector((store) => store.carsManager);

  //authData
  let { token, name, isAuth } = useSelector((store) => store.authManager);

  let elem = useRef(null);

  //remove cars
  let handleDelete = async (id) => {
    await axios
      .delete(
        `https://drawers-armadillo.cyclic.app/api/marketPlace_Inventory/remove-inventoryInfo/${id}`,
        {
          headers: {
            Authorization: ` ${token}`,
          },
        }
      )
      .then((response) => {
        // Handle the response
        console.log(response.data);
        dispatch(getCars());
        toast({
          title: `Car removed successfully`,
          status: "success",
          isClosable: true,
        });
      })
      .catch((error) => {
        // Handle the error
        console.error(error);
      });
  };

  //////////
  let handleFocus = () => {
    elem.current.focus();
  };
  //search
  let handleSearch = async () => {
    let res = await axios.get(
      `https://drawers-armadillo.cyclic.app/api/OEM_Specs/get-OEM_Specs?search=${inputData}`
    );
    setSearch(res.data.specs);
  };
  let handleSetOEMId = (id, el) => {
    setOemSpecs(id);
  };

  let handleOpen = (id) => {
    onOpen();
    localStorage.setItem("editId", JSON.stringify(id));
  };

  let editId = JSON.parse(localStorage.getItem("editId"));

  //edit

  const handleEditCar = async () => {
    //  car edit logic here
    if (!oemSpecs || !image) {
      toast({
        title: `Oem Specs and Image url are required !`,
        status: "info",
        isClosable: true,
      });
      return;
    }

    await axios
      .patch(
        `https://drawers-armadillo.cyclic.app/api/marketPlace_Inventory/remove-inventoryInfo/${editId}`,
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
        dispatch(getCars());
        toast({
          title: `Car updated successfully`,
          status: "success",
          isClosable: true,
        });
        onClose();
      })
      .catch((error) => {
        // Handle the error
        console.error(error);
      });
  };

  ////////////
  useEffect(() => {
    dispatch(getCars(filter, order));
  }, [dispatch, order, filter]);
  console.log(carsData);

  return (
    <>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(1, 1fr)",
          lg: "repeat(5, 1fr)",
        }}
        justifyContent={"space-around"}
        p={5}
        gap={10}
      >
        <GridItem>
          {/* //filteByCategory */}
          <Heading size={"md"} color={"teal"} marginLeft={"30px"} mt={4}>
            Filter by Price
          </Heading>
          <br />
          <hr />
          <br />
          <Box mt={7}>
            <Flex justifyContent={"center"} gap={10}>
              <Button
                backgroundColor={"gray.600"}
                color={"white"}
                _hover={{ backgroundColor: "gray.700", color: "white" }}
                onClick={() => [setFilter("price"), setOrder("desc")]}
              >
                High to low
              </Button>
              <Button
                backgroundColor={"gray.600"}
                color={"white"}
                _hover={{ backgroundColor: "gray.700", color: "white" }}
                onClick={() => [setFilter("price"), setOrder("asc")]}
              >
                Low to high
              </Button>
            </Flex>
          </Box>
          {/* //filteByPrice */}
          <Heading size={"md"} color={"teal"} marginLeft={"30px"} mt={4}>
            Filter by Mieage
          </Heading>
          <br />
          <hr />
          <br />
          <Box mt={7}>
            <Flex justifyContent={"center"} gap={10}>
              <Button
                backgroundColor={"gray.600"}
                color={"white"}
                _hover={{ backgroundColor: "gray.700", color: "white" }}
                onClick={() => [setFilter("mileage"), setOrder("desc")]}
              >
                High to low
              </Button>
              <Button
                backgroundColor={"gray.600"}
                color={"white"}
                _hover={{ backgroundColor: "gray.700", color: "white" }}
                onClick={() => [setFilter("mileage"), setOrder("asc")]}
              >
                Low to high
              </Button>
            </Flex>
          </Box>
          <Heading size={"md"} color={"teal"} marginLeft={"30px"} mt={4}>
            Filter by Colors
          </Heading>
          <br />
          <hr />
          <br />
          <Select
            placeholder="Select color"
            onChange={(e) => [setFilter("colors"), setOrder(e.target.value)]}
          >
            <option value="Red">Red</option>
            <option value="White">White</option>
            <option value="Silver">Silver</option>
            <option value="Yellow">Yellow</option>
            <option value="Purple">Purple</option>
            <option value="Black">Black</option>
          </Select>
          <Box mt={7} marginLeft={"20px"}>
            <Button
              size={"sm"}
              backgroundColor={"red.500"}
              color={"white"}
              _hover={{ backgroundColor: "red.600", color: "white" }}
              onClick={() => window.location.reload()}
            >
              Reset Filters
            </Button>
          </Box>
        </GridItem>
        <GridItem colSpan={4}>
          <Image src={""} w={"100%"} mt={10} mb={10} />
          <Heading textAlign={"center"}>All Second-hand Cars</Heading>
          {!isAuth ? (
            <Button as={"b"} textAlign={"center"} mt={5} color={"red"}>
              Only authorized person can do add , edit and delete !
            </Button>
          ) : null}

          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
            gap={10}
            mt={10}
          >
            {carsData?.map((el) => (
              <GridItem
                key={el._id}
                boxShadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px "
                p={10}
                borderRadius={"7px"}
              >
                <Box
                  p={4}
                  borderRadius="md"
                  boxShadow="md"
                  transition="box-shadow 0.2s"
                  _hover={{ boxShadow: "lg" }}
                >
                  <Image src={el.image} />
                </Box>
                <Box>
                  <Flex justifyContent={"space-between"} alignItems={"center"}>
                    <Heading fontSize={"sm"} mt={3}>
                      {el.title}
                    </Heading>
                    <Heading
                      fontSize={"md"}
                      mt={3}
                      color={"green"}
                      fontWeight={"700"}
                    >
                      RS {el.oemSpecs.listPrice}
                    </Heading>
                  </Flex>
                  <Text as="b" mt={10}>
                    Dealer:-{el?.user?.name}
                  </Text>
                  <Text mt={3}>Mileage:-{el.oemSpecs.mileage}</Text>
                  <Text mt={3}>{el.description.substring(0, 30)}</Text>

                  <Flex
                    justifyContent={"center"}
                    alignItems={"center"}
                    mt={5}
                    gap={2}
                  >
                    <Text>Colors:-</Text>
                    <Flex
                      justifyContent={"center"}
                      alignItems={"center"}
                    
                      gap={2}
                    >
                      {el.oemSpecs.colors.map((color, index) => (
                        <Box
                          h={"10px"}
                          width={"10px"}
                          bgColor={color}
                          borderRadius={"50%"}
                          key={index}
                        ></Box>
                      ))}
                    </Flex>
                  </Flex>

                  {name === el.user.name ? (
                    <Flex gap={3} mt={5} justifyContent={"space-around"}>
                      <Button
                        size={"sm"}
                        color={"white"}
                        bg={"green.600"}
                        _hover={{
                          bg: "green.700",
                        }}
                        onClick={() => navigate(`/single-car-page/${el._id}`)}
                      >
                        More Details
                      </Button>
                      <Button
                        size={"sm"}
                        backgroundColor={"gray.600"}
                        color={"white"}
                        _hover={{ backgroundColor: "gray.700", color: "white" }}
                        onClick={() => handleOpen(el._id)}
                      >
                        Edit
                      </Button>
                      <Button
                        size={"sm"}
                        backgroundColor={"red.600"}
                        color={"white"}
                        _hover={{ backgroundColor: "red.700", color: "white" }}
                        onClick={() => handleDelete(el._id)}
                      >
                        Delete
                      </Button>
                    </Flex>
                  ) : (
                    <Flex gap={3} mt={5} justifyContent={"space-around"}>
                      <Button
                        size={"sm"}
                        color={"white"}
                        bg={"green.600"}
                        _hover={{
                          bg: "green.700",
                        }}
                        onClick={() => navigate(`/single-car-page/${el._id}`)}
                      >
                        More Details
                      </Button>
                      <Tooltip label={`Only ${el?.user?.name} can edit`}>
                        <Button
                          size={"sm"}
                          backgroundColor={"gray.600"}
                          color={"white"}
                          _hover={{
                            backgroundColor: "gray.700",
                            color: "white",
                          }}
                          onClick={() => handleOpen(el._id)}
                          isDisabled={true}
                        >
                          Edit
                        </Button>
                      </Tooltip>
                      <Tooltip label={`Only ${el?.user?.name} can delete`}>
                        <Button
                          size={"sm"}
                          backgroundColor={"red.600"}
                          color={"white"}
                          _hover={{
                            backgroundColor: "red.700",
                            color: "white",
                          }}
                          onClick={() => handleDelete(el._id)}
                          isDisabled={true}
                        >
                          Delete
                        </Button>
                      </Tooltip>
                    </Flex>
                  )}
                </Box>
              </GridItem>
            ))}
          </Grid>
        </GridItem>
      </Grid>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Car</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={5}>
              <InputGroup margin="auto">
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
                    <Flex
                      justifyContent={"center"}
                      alignItems={"center"}
                      gap={10}
                    >
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
                      onClick={handleFocus}
                      bgColor={"green.600"}
                      color={"white"}
                      _hover={{
                        color: "white",
                        bg: "green.700",
                      }}
                    >
                      <TriangleUpIcon />
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
              </Stack>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button
              bgColor={"gray.600"}
              color="white"
              _hover={{ bgColor: "gray.700", color: "white" }}
              onClick={handleEditCar}
            >
              EDIT
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Home;
