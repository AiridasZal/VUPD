import { Box, Center, Flex, Heading, Text, useColorModeValue, Divider } from "@chakra-ui/react";

const ContactPage = () => {
    return (
        <Box p={5} h="93vh" bg={useColorModeValue("gray.50", "gray.900")}>
            <Center as="h1" my="4%">
                <Heading as="h1" size="2xl">Contact Us</Heading>
            </Center >
            <Divider />
            <Flex
                direction={{ base: "column", md: "row" }}
                align="center"
                justify="space-around"
                wrap="wrap"
                mx="auto"
                maxW="6xl"
                mt="2%"
                px={8}
            >
                <Box mt="5%">
                    <Heading textAlign='center' w="280px" as="h2" size="lg">Phone</Heading>
                    <Text textAlign='center' fontSize="2xl">+37065239781</Text>
                </Box>
                <Box mt="5%">
                    <Heading textAlign='center' w="280px" as="h2" size="lg">Email</Heading>
                    <Text textAlign='center' fontSize="2xl">vupd.support@gmail.com</Text>
                </Box>

            </Flex >
            <Center as="h1" mt="10%">
                <Text fontStyle="italic" size="xl">For general questions and suggestions*</Text>
            </Center >
        </Box >
    );
};

export default ContactPage;
