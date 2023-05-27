import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Radio,
  Text,
} from "@chakra-ui/react";
import { getCars } from "../Redux/Cars/cars.action";
import { useNavigate } from "react-router-dom";
const Home = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let { loading, error, carsData } = useSelector((store) => store.carsManager);
  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);
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
            Filter by color
          </Heading>
          <br />
          <hr />
          <br />
          {/* <Box mt={7}>
            {cats?.map((el) => (
              <Flex direction={"column"}>
                <Checkbox
                  key={el._id}
                  onChange={(e) => handleFilter(e.target.checked, el._id)}
                >
                  {el.name}
                </Checkbox>
              </Flex>
            ))}
          </Box> */}
          {/* //filteByPrice */}
          <Heading size={"md"} color={"teal"} marginLeft={"30px"} mt={4}>
            Filter by Price
          </Heading>
          <br />
          <hr />
          <br />
          <Box mt={7}>
            {/* <Radio.Group onChange={(e) => setRadio(e.target.value)}>
              {prices.map((price) => (
                <Box key={price._id}>
                  <Radio value={price.array}>{price.name}</Radio>
                </Box>
              ))}
            </Radio.Group> */}
          </Box>
          <Box mt={3} marginLeft={"20px"}>
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
                  <Image src={el.image[0].url} />
                </Box>

                <Heading fontSize={"sm"} mt={3}>
                  {el.title}
                </Heading>

                <Text mt={3}>{el.description.substring(0, 30)}</Text>
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
                    // onClick={() => {
                    //   setCart([...cart, el]);
                    //   localStorage.setItem(
                    //     "cart",
                    //     JSON.stringify([...cart, el])
                    //   );
                    //   toast({
                    //     title: "Item is added to cart",
                    //     status: "success",
                    //     isClosable: true,
                    //     position: "top-right",
                    //   });
                    // }}
                  >
                    Delete
                  </Button>
                </Flex>
              </GridItem>
            ))}
          </Grid>
        </GridItem>
      </Grid>
    </>
  );
};

export default Home;
