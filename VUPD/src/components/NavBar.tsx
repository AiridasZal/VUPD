import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  useDisclosure,
  useColorModeValue,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Button,
  VStack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const NavBar = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Box bg={useColorModeValue("white", "gray.900")} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        {/* Mobile menu button */}
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />

        {/* Logo or Brand */}
        <Link to="/">
          <Text
            fontSize="2xl"
            fontWeight="bold"
            color={useColorModeValue("gray.800", "white")}
          >
            VUPD
          </Text>
        </Link>

        {/* Centered Desktop Links */}
        <Flex
          justifyContent={{ base: "none", md: "center" }}
          flex={1}
          display={{ base: "none", md: "flex" }}
        >
          <Stack direction={"row"} spacing={4}>
            <Button as={Link} to="/" variant="ghost">
              Home
            </Button>
            <Button as={Link} to="/about" variant="ghost">
              About
            </Button>
            <Button as={Link} to="/courses" variant="ghost">
              Courses
            </Button>
            <Button as={Link} to="/contact" variant="ghost">
              Contact
            </Button>
          </Stack>
        </Flex>

        {/* CTA Button */}
        <Flex display={{ base: "none", md: "flex" }} alignItems={"center"}>
          <Button as={Link} to="/login" variant="solid" colorScheme="green">
            Log In
          </Button>
        </Flex>
      </Flex>

      {/* Mobile Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xs">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Navigation</DrawerHeader>
          <DrawerBody>
            <Stack as="nav" spacing={4} justifyContent="space-between" h="full">
              {/* Navigation Links */}
              <VStack spacing={4}>
                <Button as={Link} to="/" w="full" variant="ghost">
                  Home
                </Button>
                <Button as={Link} to="/about" w="full" variant="ghost">
                  About
                </Button>
                <Button as={Link} to="/courses" w="full" variant="ghost">
                  Courses
                </Button>
                <Button as={Link} to="/contact" w="full" variant="ghost">
                  Contact
                </Button>
              </VStack>
              {/* Log In CTA */}
              <Button as={Link} to="/login" colorScheme="green" w="full">
                Log In
              </Button>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default NavBar;
