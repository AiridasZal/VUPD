import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import aboutImage from "../assets/About.png";

const AboutSection = () => {
  const { colorMode } = useColorMode();
  return (
    <Box
      as="section"
      bg={useColorModeValue("gray.50", "gray.900")}
      pt={10}
      pb={10}
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
        {/* About Text */}
        <Box flex="1" maxW={{ md: "50%" }} mb={{ base: 12, md: 0 }}>
          <Heading
            as="h2"
            size="xl"
            fontWeight="bold"
            color={useColorModeValue("gray.800", "white")}
            textAlign={{ base: "center", md: "left" }}
          >
            About VUPD
          </Heading>
          <Text
            fontSize="lg"
            my={4}
            color={useColorModeValue("gray.600", "gray.200")}
            textAlign={{ base: "center", md: "left" }}
          >
            VUPD is a cutting-edge platform designed to transform the university
            experience by empowering students with a voice. Our mission is to
            create a transparent, data-driven space for academic feedback and
            discovery.
          </Text>
          <Text
            fontSize="lg"
            color={useColorModeValue("gray.600", "gray.200")}
            textAlign={{ base: "center", md: "left" }}
          >
            Through rigorous machine learning algorithms, VUPD identifies
            correlations and insights among various subjects, aiding students in
            making informed decisions about their educational journey.
          </Text>
        </Box>

        {/* About Image */}
        <Box flex="1" maxW={{ md: "50%" }}>
          <Image
            src={aboutImage}
            alt="About VUPD"
            fit="cover"
            w="full"
            h={{ base: 64, md: "full" }}
            loading="lazy"
            sx={{
              mixBlendMode: colorMode === "light" ? "multiply" : "unset",
            }}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default AboutSection;
