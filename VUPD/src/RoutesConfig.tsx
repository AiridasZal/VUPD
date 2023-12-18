import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import CallBackPage from "./pages/CallBackPage";
import ProfilePage from "./pages/ProfilePage";
import AdminPage from "./pages/AdminPage";
import ProtectedPage from "./pages/ProtectedPage";
import PublicPage from "./pages/PublicPage";
import FacultySelectPage from "./pages/FacultySelectPage";
import ProgramSelectPage from "./pages/ProgramSelectPage";
import CourseSelectPage from "./pages/CourseSelectPage";
import CourseDetailPage from "./pages/CourseDetailPage";
import CourseReviewPage from "./pages/CourseReviewPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ErrorPage from "./pages/ErrorPage";
import { AuthenticationGuard } from "./components/AuthenticationGuard";
import PageLoader from "./components/PageLoader";
import { useAuth0 } from "@auth0/auth0-react";
// Import other components as needed

const RoutesConfig = () => {
  const { isLoading } = useAuth0();
  if (isLoading) return <PageLoader />;
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="callback" element={<CallBackPage />} />
        <Route
          path="testing/profile"
          element={<AuthenticationGuard component={ProfilePage} />}
        />
        <Route
          path="testing/admin"
          element={<AuthenticationGuard component={AdminPage} />}
        />
        <Route
          path="testing/protected"
          element={<AuthenticationGuard component={ProtectedPage} />}
        />
        <Route path="testing/public" element={<PublicPage />} />
        <Route path="courses" element={<FacultySelectPage />} />
        <Route path="courses/:slug" element={<ProgramSelectPage />} />
        <Route path="courses/:slug/:program" element={<CourseSelectPage />} />
        <Route
          path="courses/:slug/:program/:course"
          element={<CourseDetailPage />}
        />
        <Route
          path="courses/:slug/:program/:course/review"
          element={<CourseReviewPage />}
        />
        <Route
          path="about"
          element={<AboutPage />}
        />
        <Route
          path="contact"
          element={<ContactPage />}
        />
        <Route path="profile" element={<ProfilePage />} />
        {/* Uncomment and add other routes as needed */}
        {/* <Route path="about" element={<AboutPage />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="admin/dashboard" element={<Dashboard />} /> */}
        <Route path="*" element={<ErrorPage />} />
      </Route>
      {/* Additional routes outside of Layout can be added here */}
    </Routes>
  );
};

export default RoutesConfig;
