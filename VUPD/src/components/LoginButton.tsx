import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@chakra-ui/react";

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();

    return (
        !isAuthenticated && !isLoading && (
            <Button colorScheme='green' onClick={() => loginWithRedirect()}>
                Log In
            </Button>
        )
    )
}

export default LoginButton