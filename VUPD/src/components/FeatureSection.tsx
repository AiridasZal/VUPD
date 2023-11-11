import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import { MdRateReview, MdAnalytics, MdPeople } from "react-icons/md";

interface FeatureProps {
  title: string;
  text: string;
  icon: JSX.Element;
}

const FeatureSection = () => {
  const Feature = ({ title, text, icon }: FeatureProps) => {
    return (
      <Stack>
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={useColorModeValue("blue.500", "blue.300")}
          mb={1}
        >
          {icon}
        </Flex>
        <Text fontWeight={600}>{title}</Text>
        <Text color={useColorModeValue("gray.600", "gray.400")}>{text}</Text>
      </Stack>
    );
  };

  return (
    <Box
      p={4}
      bg={useColorModeValue("gray.50", "gray.700")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Stack
        spacing={4}
        as={Box}
        maxW={"3xl"}
        textAlign={"center"}
        mx={"auto"}
        mb={20}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }}
        >
          Why Choose VUPD?
        </Heading>
        <Text color={"gray.500"}>
          Our platform offers unique features that help you make the most
          informed decisions about your university experience.
        </Text>
      </Stack>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} mx={"auto"}>
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
    </Box>
  );
};

export default FeatureSection;
