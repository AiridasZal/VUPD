import { withAuthenticationRequired } from "@auth0/auth0-react";
import { ComponentType } from "react";
import PageLoader from "./PageLoader";

interface AuthenticationGuardProps {
  component: ComponentType;
}

export const AuthenticationGuard: React.FC<AuthenticationGuardProps> = ({
  component,
}) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => <PageLoader />,
  });

  return <Component />;
};
