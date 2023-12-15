import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";
import { getAdminResource } from "../services/message.service";
import { Code } from "@chakra-ui/react";

const AdminPage = () => {
  const [message, setMessage] = useState<string>("");

  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    let isMounted = true;

    const getMessage = async () => {
      const accessToken = await getAccessTokenSilently();
      const { data, error } = await getAdminResource(accessToken);

      if (!isMounted) {
        return;
      }

      if (data) {
        setMessage(JSON.stringify(data, null, 2));
      }

      if (error) {
        setMessage(JSON.stringify(error, null, 2));
      }
    };

    getMessage();

    return () => {
      isMounted = false;
    };
  }, [getAccessTokenSilently]);

  return (
    <div>
      <h1>Admin Page</h1>
      <span>
        This page retrieves an <strong>admin message</strong> from an external
        API.
      </span>
      <span>
        <strong>
          Only authenticated users with admin role can access this page.
        </strong>
      </span>
      <Code>{message}</Code>
    </div>
  );
};

export default AdminPage;
