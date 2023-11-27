import {
  Box,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { MdAnalytics, MdPeople, MdRateReview } from "react-icons/md";
import { Feature } from "./Feature";

const FeatureSection = () => {
  return (
    <Box
      as="section"
      bg={useColorModeValue("gray.50", "gray.900")}
      pt={10}
      pb={10}
      maxW="full"
    >
      <Flex
        direction="column"
        align="center"
        justify="center"
        wrap="wrap"
        mx="auto"
        maxW="6xl"
        px={8}
      >
        <Stack
          spacing={4}
          as={Box}
          textAlign={"center"}
          mx={"auto"}
          mb={20}
          maxW={{ lg: "3xl" }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "5xl" }}
            color={useColorModeValue("gray.800", "white")}
          >
            Why Choose VUPD?
          </Heading>
          <Text
            fontSize={{ base: "md", lg: "lg" }}
            color={useColorModeValue("gray.600", "gray.200")}
          >
            Our platform offers unique features that help you make the most
            informed decisions about your university experience.
          </Text>
        </Stack>

        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          spacing={10}
          mx={"auto"}
          maxW="full"
        >
          <Feature
            icon={<Icon as={MdRateReview} w={10} h={10} />}
            title={"Honest Reviews"}
            text={
              "Read genuine feedback from students like you, and understand the true nature of any course."
            }
          />
          <Feature
            icon={<Icon as={MdAnalytics} w={10} h={10} />}
            title={"Data-Driven Insights"}
            text={
              "Utilize advanced machine learning algorithms to discover patterns and insights across subjects."
            }
          />
          <Feature
            icon={<Icon as={MdPeople} w={10} h={10} />}
            title={"Community Support"}
            text={
              "Join a community of learners supporting each other in making better academic choices."
            }
          />
        </SimpleGrid>
      </Flex>
    </Box>
  );
};

export default FeatureSection;
