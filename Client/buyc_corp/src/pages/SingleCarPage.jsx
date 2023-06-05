import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleCar } from "../Redux/Cars/cars.action";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Image,
  Select,
  Text,
  Heading,
} from "@chakra-ui/react";
import Loader from "../components/Loader";
const SingleCarPage = () => {
  let { id } = useParams();
  let dispatch = useDispatch();
  let { loading, error, singleCarData } = useSelector(
    (store) => store.carsManager
  );

  useEffect(() => {
    dispatch(getSingleCar(id));
  }, [dispatch, id]);

  console.log("single", singleCarData);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Box>
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(5, 1fr)",
            }}
            padding={"10"}
            mt={10}
            gap={"100px"}
            justifyContent={"center"}
          >
            <GridItem
              colSpan={3}
              boxShadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px "
              p={10}
              borderRadius={"7px"}
            >
              <Image
                src={singleCarData?.image}
                width={"500px"}
                height={"400px"}
              />
            </GridItem>
            <GridItem
              colSpan={{
                base: "3",
                md: "2",
                lg: "2",
              }}
              boxShadow=" rgba(0, 0, 0, 0.35) 0px 5px 15px"
              p={10}
              borderRadius={"7px"}
            >
              <Flex direction={"column"} gap={5}>
                <Text
                  fontSize={{
                    base: "xl",
                    md: "2xl",
                    lg: "3xl",
                  }}
                >
                  {singleCarData?.title}
                </Text>
                <Text
                  fontSize={{
                    base: "md",
                    md: "lg",
                    lg: "xl",
                  }}
                  fontWeight={"500"}
                >
                  Description:-{singleCarData?.description}
                </Text>

                <Text fontSize={"lg"} color={"green"} fontWeight={"700"}>
                  RS {singleCarData?.oemSpecs?.listPrice}
                </Text>
                <Text fontSize={"lg"}>
                  Registration Place:- {singleCarData?.registrationPlace}
                </Text>
                <Text as={"u"} color={"tomato"}>
                  <Select placeholder="Available Colors" size={"md"}>
                    {singleCarData?.oemSpecs?.colors.map((el) => (
                      <option key={el}>{el}</option>
                    ))}
                  </Select>
                </Text>
                <Flex
                  justifyContent={"center"}
                  alignItems={"center"}
                  direction={"column"}
                >
                  <Text as={"b"}>
                    Oem Specs:-{singleCarData?.oemSpecs?.model}
                  </Text>
                  <Text as={"b"}>
                    Mileage:-{singleCarData?.oemSpecs?.mileage}
                  </Text>
                </Flex>
                <Box>
                  <Button
                    size={"sm"}
                    backgroundColor={"red.600"}
                    color={"white"}
                    _hover={{ backgroundColor: "red.700", color: "white" }}
                  >
                    Dealer Name:-{singleCarData?.user?.name}
                  </Button>
                </Box>
              </Flex>
            </GridItem>
          </Grid>
        </Box>
      )}
    </>
  );
};

export default SingleCarPage;
