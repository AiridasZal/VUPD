import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@chakra-ui/react";

interface Props {
  width?: string;
}

const LoginButton = ({ width }: Props) => {
  const { loginWithRedirect } = useAuth0();
  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/profile",
      },
      authorizationParams: {
        prompt: "login",
      },
    });
  };

  return (
    <Button
      colorScheme="green"
      variant="solid"
      onClick={handleLogin}
      width={width}
    >
      Log In
    </Button>
  );
};

export default LoginButton;
