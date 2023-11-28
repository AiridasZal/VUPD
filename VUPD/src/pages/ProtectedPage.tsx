import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";
import { getProtectedResource } from "../services/message.service";

const ProtectedPage = () => {
  const [message, setMessage] = useState<string>("");

  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    let isMounted = true;

    const getMessage = async () => {
      const accessToken = await getAccessTokenSilently();
      const { data, error } = await getProtectedResource(accessToken);

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
      <h1>Protected Page</h1>
      <span>
        This page retrieves a <strong>protected message</strong> from an
        external API.
      </span>
      <span>
        <strong>Only authenticated users can access this page.</strong>
      </span>
      <p>{message}</p>
    </div>
  );
};

export default ProtectedPage;
