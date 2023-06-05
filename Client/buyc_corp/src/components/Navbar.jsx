import {
  Box,
  Flex,
  Button,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Image,
  Text,
  useToast,
} from "@chakra-ui/react";

import buycars from "../Assets/BUYCARS.png";
import React from "react";
import { HamburgerIcon } from "@chakra-ui/icons";

import { RiLogoutBoxLine, RiLogoutBoxRLine } from "react-icons/ri";
import { AiOutlineCar } from "react-icons/ai";
import { GrAdd } from "react-icons/gr";

import { FaUser, FaWindowClose } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import { Link as RouterLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutfun } from "../Redux/Auth/auth.action";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  let toast = useToast();
  //dispatch
  let dispatch = useDispatch();
  let navigate = useNavigate();
  //selector

  let { isAuth, loading, error, name } = useSelector(
    (store) => store.authManager
  );

  //logout
  let logoutUser = () => {
    dispatch(logoutfun());

    toast({
      title: `Loggedout successfull`,
      status: "success",
      isClosable: true,
    });
  };

  return (
    <Box position={"sticky"} top={"0"} zIndex={"1"}>
      {isAuth ? (
        <Box backgroundColor={"black"} color="white" px={4}>
          <Flex
            h={16}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexWrap={"wrap"}
          >
            <Flex gap={"15px"} alignItems="center" direction="row">
              <Box>
                <HamburgerIcon
                  w={6}
                  h={5}
                  color="white.500"
                  onClick={onOpen}
                  cursor="pointer"
                  marginRight={"20px"}
                >
                  Open
                </HamburgerIcon>
                <Drawer
                  placement="left"
                  onClose={onClose}
                  isOpen={isOpen}
                  size="sm"
                >
                  <DrawerOverlay />
                  <DrawerContent bg={"white"} color={"gray.700"}>
                    <DrawerHeader
                      borderBottomWidth="1px"
                      bg="black"
                      color="white"
                    >
                      <Flex
                        alignItems={"center"}
                        justifyContent="space-between"
                      >
                        <Flex alignItems={"center"} gap="20px">
                          <FaUser size={"25px"} />
                          <Box>
                            <Text fontSize="18px">{name}</Text>
                          </Box>
                        </Flex>
                        <Box alignItems={"center"} onClick={onClose}>
                          <FaWindowClose size={"28px"} />
                        </Box>
                      </Flex>
                    </DrawerHeader>
                    <DrawerBody>
                      <Flex alignItems={"center"} gap="10px" height={"50px"}>
                        <GrAdd size={"22"} />
                        <RouterLink to="/car-addDetails">
                          <Text fontSize="16px" cursor="pointer">
                            Add Car
                          </Text>
                        </RouterLink>
                      </Flex>
                      <Flex alignItems={"center"} gap="10px" height={"50px"}>
                        <AiOutlineCar size={"22"} />
                        <RouterLink to="/">
                          <Text fontSize="16px" cursor="pointer">
                            Cars
                          </Text>
                        </RouterLink>
                      </Flex>

                      <hr color="gray"></hr>
                      <Flex alignItems={"center"} gap="10px" height={"50px"}>
                        <RiLogoutBoxRLine size={"22"} />
                        <RouterLink to="/">
                          <Text
                            fontSize="16px"
                            cursor="pointer"
                            onClick={logoutUser}
                          >
                            Logout
                          </Text>
                        </RouterLink>
                      </Flex>
                    </DrawerBody>
                  </DrawerContent>
                </Drawer>
              </Box>

              <RouterLink to="/">
                <Image
                  className="zoomLogoNavbar"
                  width="120px"
                  height="60px"
                  src={buycars}
                  cursor="pointer"
                />
              </RouterLink>
            </Flex>

            <Flex
              minWidth={{ lg: "320px", md: "320px", sm: "10px" }}
              alignItems="center"
              gap="20px"
              direction="row"
              width="auto"
            >
              <Box>
                <Text
                  fontSize={{ lg: "md", md: "md", sm: "sm" }}
                  fontWeight={"600"}
                  visibility={{ base: "hidden", lg: "visible" }}
                >
                  <RouterLink to="/car-addDetails">
                    <Button
                      size={{ lg: "md", md: "md", sm: "xs" }}
                      className="navbar_hostButton"
                      style={{
                        color: "black",
                        backgroundColor: "white",
                        borderRadius: "20px",
                      }}
                    >
                      ADD CAR
                    </Button>
                  </RouterLink>
                </Text>
              </Box>
              <Box>
                <Text
                  fontSize="sm"
                  fontWeight={"600"}
                  visibility={{ base: "hidden", lg: "visible" }}
                >
                  <Link to="/">CARS</Link>
                </Text>
              </Box>
              <Box>
                <Text fontSize="sm">
                  <Button
                    size={{ lg: "md", md: "md", sm: "xs" }}
                    bg="black"
                    color="white"
                    fontSize={"16px"}
                    fontWeight="bold"
                    rounded="none"
                    visibility={{
                      base: "hidden",
                      md: "visible",
                      lg: "visible",
                    }}
                    _hover={{ bgColor: "white", color: "black" }}
                  >
                    {name}
                  </Button>
                </Text>
              </Box>
              <Box>
                <Text fontSize="sm">
                  <RouterLink to="/">
                    <Button
                      size={{ lg: "md", md: "md", sm: "xs" }}
                      variant="outline"
                      _hover={{ bgColor: "white", color: "black" }}
                      visibility={{
                        base: "hidden",
                        md: "visible",
                        lg: "visible",
                      }}
                      onClick={logoutUser}
                    >
                      <b>Logout</b>
                    </Button>
                  </RouterLink>
                </Text>
              </Box>
            </Flex>
          </Flex>
        </Box>
      ) : (
        <Box backgroundColor={"black"} color="white" px={4}>
          <Flex
            h={16}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexWrap={"wrap"}
          >
            <Flex gap={"15px"} alignItems="center" direction="row">
              <Box>
                <HamburgerIcon
                  w={6}
                  h={5}
                  color="white.500"
                  onClick={onOpen}
                  cursor="pointer"
                >
                  Open
                </HamburgerIcon>
                <Drawer
                  placement="left"
                  onClose={onClose}
                  isOpen={isOpen}
                  size="sm"
                >
                  <DrawerOverlay />

                  <DrawerContent bg={"white"} color={"gray.700"}>
                    <DrawerHeader
                      borderBottomWidth="1px"
                      bg="black"
                      color="white"
                    >
                      <Flex
                        alignItems={"center"}
                        justifyContent="space-between"
                      >
                        <Flex alignItems={"center"} gap="20px" >
                          <FaUser size={"25px"} />
                          <Box>
                            <Text fontSize="18px">{name}</Text>
                          </Box>
                        </Flex>
                        <Box alignItems={"center"} onClick={onClose}>
                          <FaWindowClose size={"28px"} />
                        </Box>
                      </Flex>
                    </DrawerHeader>
                    <DrawerBody>
                      <hr color="gray"></hr>
                      <Flex alignItems={"center"} gap="10px" height={"50px"}>
                        <GrAdd size={"22"} />
                        <RouterLink to="/car-addDetails">
                          <Text fontSize="16px" cursor="pointer">
                            Add Car
                          </Text>
                        </RouterLink>
                      </Flex>
                      <Flex alignItems={"center"} gap="10px" height={"50px"}>
                        <AiOutlineCar size={"22"} />
                        <RouterLink to="/">
                          <Text fontSize="16px" cursor="pointer">
                            Cars
                          </Text>
                        </RouterLink>
                      </Flex>
                      <Flex alignItems={"center"} gap="10px" height={"50px"}>
                        <RiLogoutBoxLine size={"22"} />
                        <RouterLink to="/signin">
                          <Text fontSize="16px" cursor="pointer">
                            Login
                          </Text>
                        </RouterLink>
                      </Flex>
                    </DrawerBody>
                  </DrawerContent>
                </Drawer>
              </Box>
              <RouterLink to="/">
                <Image
                  width={{ lg: "120px", md: "100px", sm: "50px" }}
                  height="60px"
                  src={buycars}
                  cursor="pointer"
                />
              </RouterLink>
            </Flex>

            <Flex
              minWidth={{ lg: "320px", md: "320px", sm: "10px" }}
              alignItems="center"
              gap="20px"
              direction="row"
              width="auto"
            >
              <Box>
                <Text
                  fontSize="sm"
                  fontWeight={"600"}
                  visibility={{ base: "hidden", lg: "visible" }}
                >
                  <Link to="/">CARS</Link>
                </Text>
              </Box>
              <Box>
                <Text
                  fontSize="sm"
                  fontWeight={"600"}
                  visibility={{ base: "hidden", lg: "visible" }}
                >
                  <Link to="/car-addDetails">ADD CAR</Link>
                </Text>
              </Box>
              <Box>
                <Text fontSize="sm">
                  <RouterLink to="/signup">
                    <Button
                      size={{ lg: "md", md: "md", sm: "xs" }}
                      variant="outline"
                      _hover={{ bgColor: "white", color: "black" }}
                      visibility={{
                        base: "hidden",
                        md: "visible",
                        lg: "visible",
                      }}
                    >
                      Sign up
                    </Button>
                  </RouterLink>
                </Text>
              </Box>
              <Box>
                <Text fontSize="sm">
                  <RouterLink to="/signin">
                    <Button
                      size={{ lg: "md", md: "md", sm: "xs" }}
                      variant="outline"
                      _hover={{ bgColor: "white", color: "black" }}
                      visibility={{
                        base: "hidden",
                        md: "visible",
                        lg: "visible",
                      }}
                    >
                      Log in
                    </Button>
                  </RouterLink>
                </Text>
              </Box>
            </Flex>
          </Flex>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
