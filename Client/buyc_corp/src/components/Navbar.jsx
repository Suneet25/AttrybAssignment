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
} from "@chakra-ui/react";

import buycars from "../Assets/BUYCARS.png"
import React from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { GiTwoCoins } from "react-icons/gi";
import { TbCoin } from "react-icons/tb";
import { MdOutlineAccountBalanceWallet, MdVerifiedUser } from "react-icons/md";
import { BiCar } from "react-icons/bi";
import { RiLogoutBoxLine, RiLogoutBoxRLine } from "react-icons/ri";

import {
  FaUser,
  FaRegCopy,
  FaMapMarkerAlt,
  FaPhone,
 
  FaWindowClose,
} from "react-icons/fa";
import { Link } from "react-router-dom";



// import { AuthContext } from "../../Components/AuthContext";
// import { useContext } from "react";
import { Link as RouterLink } from "react-router-dom";
// import "../../Styles/Navbar.css";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // const { name, isAuth, logoutUser } = useContext(AuthContext);

let name="Suneet";
let isAuth=true
  return (
    <>
      {isAuth ? (
        <Box backgroundColor={"black"} color="white" px={4} >
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
                  
                     
                     
                      <hr color="gray"></hr>
                      <Flex alignItems={"center"} gap="10px" height={"50px"}>
                        <RiLogoutBoxRLine size={"22"} />
                        <RouterLink to="/">
                          {" "}
                          <Text
                            fontSize="16px"
                            cursor="pointer"
                           
                            // onClick={logoutUser}
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
                  <RouterLink to="/host">
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
                  <Link to="/zms">CARS</Link>
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
                      // onClick={logoutUser}
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
                  
                    <DrawerBody>
                    
                      
                      <hr color="gray"></hr>
                      <Flex alignItems={"center"} gap="10px" height={"50px"}>
                        <RiLogoutBoxLine size={"22"} />
                        <RouterLink to="/login">
                          <Text
                            fontSize="16px"
                            cursor="pointer"
                         
                          >
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
                  className="zoomLogoNavbar"
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
                  fontSize={{ lg: "md", md: "md", sm: "sm" }}
                  fontWeight={"600"}
                  visibility={{ base: "hidden", lg: "visible" }}
                >
                  <RouterLink to="/host">
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
                  <Link to="/zms">CARS</Link>
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
    </>
  );
};

export default Navbar;