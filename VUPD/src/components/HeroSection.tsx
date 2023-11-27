import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  useColorModeValue,
  Stack,
  useBreakpointValue,
  StackDirection,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import heroImage from "../assets/Hero.svg";

const HeroSection = () => {
  const stackDirection = useBreakpointValue({
    base: "column",
    sm: "row",
  }) as StackDirection;

  return (
    <Box
      as="section"
      bg={useColorModeValue("gray.50", "gray.900")}
      pt={10}
      pb={24}
      maxW="full"
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="center"
        wrap="wrap"
        mx="auto"
        maxW="6xl"
        px={8}
      >
        {/* Hero Text */}
        <Box flex="1" maxW={{ md: "50%" }} mb={{ base: 12, md: 0 }}>
          <Heading
            as="h1"
            size="xl"
            fontWeight="bold"
            color={useColorModeValue("gray.800", "white")}
          >
            Empower Your Academic Choices
          </Heading>
          <Text
            fontSize="lg"
            my={4}
            color={useColorModeValue("gray.600", "gray.200")}
          >
            VUPD - A place for students to leave reviews and discover insights
            on university subjects. Use shared experiences and machine learning
            to choose a subject that's the best for you!
          </Text>
          <Stack direction={stackDirection} spacing={4} mt={8}>
            <Button
              as={Link}
              to="/courses"
              size="lg"
              colorScheme="blue"
              variant="outline"
            >
              View Courses
            </Button>
          </Stack>
        </Box>

        {/* Hero Image */}
        <Box flex="1" maxW={{ md: "50%" }}>
          <Image
            src={heroImage}
            alt="VUPD Hero"
            fit="cover"
            w="full"
            h={{ base: 64, md: "full" }}
            bg="gray.100"
            loading="lazy"
            sx={{
              mixBlendMode: "multiply",
            }}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default HeroSection;
