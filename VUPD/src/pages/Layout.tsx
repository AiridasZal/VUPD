import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Box } from "@chakra-ui/react";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Box w="100%">
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
