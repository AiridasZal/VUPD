import {
    Box,
    Flex,
    Heading,
    Text,
    Image,
    useColorModeValue,
    useColorMode,
} from "@chakra-ui/react";
import goalImage from "../assets/goal.svg";

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
                justify="space-between"
                wrap="wrap"
                mx="auto"
                maxW="6xl"
                px={8}
            >
                {/* Goal Image */}
                <Box flex="1" maxW={{ md: "50%" }}>
                    <Image
                        src={goalImage}
                        alt="About VUPD"
                        fit="cover"
                        w="90%"
                        borderRadius='13%'
                        h={{ base: 64, md: "full" }}
                        loading="lazy"
                        sx={{
                            mixBlendMode: colorMode === "light" ? "multiply" : "unset",
                        }}
                    />
                </Box>
                {/* About Text */}
                <Box flex="1" maxW={{ md: "45%" }} mb={{ base: 12, md: 0 }}>
                    <Heading
                        as="h2"
                        size="xl"
                        fontWeight="bold"
                        color={useColorModeValue("gray.800", "white")}
                        textAlign={{ base: "center", md: "left" }}
                    >
                        Our Goal
                    </Heading>
                    <Text
                        fontSize="lg"
                        my={4}
                        color={useColorModeValue("gray.600", "gray.200")}
                        textAlign={{ base: "center", md: "left" }}
                    >
                        We aim to help students find the best academic path for their own future at Vilnius University.
                    </Text>
                    <Text
                        fontSize="lg"
                        color={useColorModeValue("gray.600", "gray.200")}
                        textAlign={{ base: "center", md: "left" }}
                    >
                        Whether you're a freshman or a senior, every student can use our website to answer various questions about the elective study courses offered by the university.


                    </Text>

                </Box>
            </Flex>
        </Box>
    );
};

export default AboutSection;
