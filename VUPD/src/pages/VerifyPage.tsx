import { Text, Flex, VStack, StackDivider } from "@chakra-ui/react";
const VerifyPage = () => {

    return (
        <Flex alignContent={"center"} justifyContent={"center"}>
            <VStack
                divider={<StackDivider borderColor='gray.200' />}
                spacing={4}
                align='stretch'
                mt="10%"
            >
                <Text fontSize="3xl" align="center">
                    Please verify your email

                </Text>
                <Text fontSize="2xl">
                    We've sent you a verification link

                </Text>
            </VStack>
        </Flex>
    );
};

export default VerifyPage;