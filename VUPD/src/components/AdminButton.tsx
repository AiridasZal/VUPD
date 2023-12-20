import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { jwtDecode } from "jwt-decode";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const AdminButton = () => {
  const { getAccessTokenSilently } = useAuth0();
  const [hasAdminPermissions, setHasAdminPermissions] = useState(false);

  useEffect(() => {
    const checkPermissions = async () => {
      try {
        const token = await getAccessTokenSilently();
        const decodedToken = jwtDecode(token);
        if (
          decodedToken.permissions &&
          decodedToken.permissions.includes("read:admin-messages")
        ) {
          setHasAdminPermissions(true);
        }
      } catch (e) {
        console.error(e);
      }
    };
    checkPermissions();
  }, [getAccessTokenSilently]);

  if (!hasAdminPermissions) {
    return null;
  }

  return (
    <Button as={Link} to="/admin/dashboard" variant="ghost">
      Dashboard
    </Button>
  );
};

export default AdminButton;
