import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import aboutImage from "../assets/about.svg";

const AboutSection = () => {
  return (
    <Flex
      align="center"
      justify="center"
      py={{ base: 10, md: 20 }}
      direction={{ base: "column-reverse", md: "row" }}
      wrap="wrap"
      bg={useColorModeValue("white", "gray.800")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Box
        flex="1"
        maxW={{ base: "100%", md: "50%" }}
        px={{ base: 4, md: 10, lg: 20 }}
      >
        <Heading
          as="h2"
          size="xl"
          fontWeight="bold"
          mb={5}
          textAlign={{ base: "center", md: "left" }}
        >
          About VUPD
        </Heading>
        <Text fontSize="lg" textAlign={{ base: "center", md: "left" }} mb={5}>
          VUPD is a cutting-edge platform designed to transform the university
          experience by empowering students with a voice. Our mission is to
          create a transparent, data-driven space for academic feedback and
          discovery.
        </Text>
        <Text fontSize="lg" textAlign={{ base: "center", md: "left" }} mb={5}>
          Through rigorous machine learning algorithms, VUPD identifies
          correlations and insights among various subjects, aiding students in
          making informed decisions about their educational journey.
        </Text>
      </Box>
      <Box
        flex="1"
        maxW={{ base: "100%", md: "50%" }}
        mb={{ base: 8, md: 0 }}
        textAlign="center"
      >
        <Image
          borderRadius="lg"
          src={aboutImage}
          alt="About VUPD"
          maxW="lg"
          mx="auto"
        />
      </Box>
    </Flex>
  );
};

export default AboutSection;
