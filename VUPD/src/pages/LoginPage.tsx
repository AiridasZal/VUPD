import {
  Flex,
  useColorModeValue,
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  Text,
  Link,
  HStack,
} from "@chakra-ui/react";
import { FaFacebook, FaTwitter } from "react-icons/fa";

const LoginPage = () => {
  const navbarHeight = "105px";
  return (
    <Flex
      height={`calc(100vh - ${navbarHeight})`}
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      px={6}
      bg={useColorModeValue("gray.50", "gray.800")}
      overflow="hidden"
    >
      <Box w="full" maxW="sm" textAlign="center">
        <Text
          mb={6}
          textAlign="center"
          fontSize="2xl"
          fontWeight="bold"
          color={useColorModeValue("gray.900", "white")}
        >
          Sign in to your account
        </Text>
      </Box>

      <Box mt={10} mx="auto" w="full" maxW="sm">
        <form action="#" method="POST">
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input type="email" autoComplete="email" />
          </FormControl>

          <FormControl id="password" mt={4} isRequired>
            <Flex justify="space-between">
              <FormLabel>Password</FormLabel>
              <p className="text-blue-600 hover:underline font-semibold hover:cursor-pointer">
                Forgot password?
              </p>
            </Flex>
            <Input type="password" autoComplete="current-password" />
          </FormControl>

          <Button
            mt={6}
            w="full"
            colorScheme="blue"
            type="submit"
            onClick={(e) => e.preventDefault()}
          >
            Sign in
          </Button>
        </form>
        <div>
          <Flex align="center" color="gray.300" my={6}>
            <Box flex="1">
              <hr />
            </Box>
            <Text px="3" className="text-gray-900 font-semibold">
              Or continue with
            </Text>
            <Box flex="1">
              <hr />
            </Box>
          </Flex>
          <HStack mt={6} justify="center" display={"flex"} width={"full"}>
            <Button colorScheme="facebook" leftIcon={<FaFacebook />}>
              Facebook
            </Button>
            <Button colorScheme="twitter" leftIcon={<FaTwitter />}>
              Twitter
            </Button>
          </HStack>
        </div>
        <Text
          mt={10}
          textAlign="center"
          fontSize="sm"
          color={useColorModeValue("gray.600", "gray.400")}
        >
          Not a member?{" "}
          <Link href="#" color="blue.600" fontWeight="semibold">
            Create an account
          </Link>
        </Text>
      </Box>
    </Flex>
  );
};

export default LoginPage;
