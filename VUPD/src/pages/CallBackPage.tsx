import { useAuth0 } from "@auth0/auth0-react";
import { redirect } from "react-router-dom";

const CallBackPage = () => {
  const { error } = useAuth0();
  if (error) {
    return <div>Oops... {error.message}</div>;
  } else redirect("/");
};

export default CallBackPage;
