import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@chakra-ui/react";

const LogoutButton = () => {
    const { logout, isAuthenticated, isLoading } = useAuth0();

    return (
        isAuthenticated && !isLoading && (
            <Button colorScheme='green' onClick={() => logout()}>
                Log Out
            </Button>
        )
    )
}

export default LogoutButton