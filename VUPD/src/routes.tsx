import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";
// import LoginPage from "./pages/LoginPage";
import FacultySelectPage from "./pages/FacultySelectPage";
import ProgramSelectPage from "./pages/ProgramSelectPage";
import CourseSelectPage from "./pages/CourseSelectPage";
import CourseDetailPage from "./pages/CourseDetailPage";
import CourseReviewPage from "./pages/CourseReviewPage";
import VerifyPage from "./pages/VerifyPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      // { path: "about", element: <AboutPage /> },
      { path: "courses", element: <FacultySelectPage /> },
      { path: "courses/:slug", element: <ProgramSelectPage /> },
      { path: "courses/:slug/:program", element: <CourseSelectPage /> },
      { path: "courses/:slug/:program/:course", element: <CourseDetailPage /> },
      {
        path: "courses/:slug/:program/:course/review",
        element: <CourseReviewPage />,
      },
      {
        path: "verify", element: <VerifyPage />
      },
      // { path: "contact", element: <ContactPage /> },
      // { path: "login", element: <LoginPage /> },
      // { path: "admin", element: <AdminLoginPage /> },
      // { path: "admin/dashboard", element: <Dashboard /> }, // Authorized route with automatic redirect
    ],
  },
]);

export default router;
