import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      // { path: "about", element: <AboutPage /> },
      // { path: "courses", element: <CoursesPage /> },
      // { path: "contact", element: <ContactPage /> },
      // { path: "login", element: <LoginPage /> },
      // { path: "admin", element: <AdminLoginPage /> },
      // { path: "admin/dashboard", element: <Dashboard /> }, // Authorized route with automatic redirect
    ],
  },
]);

export default router;
