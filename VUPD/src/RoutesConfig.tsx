import { Route, Routes } from "react-router-dom";
import CallBackPage from "./pages/CallBackPage";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import ProfilePage from "./pages/ProfilePage";
// import AdminPage from "./pages/AdminPage";
// import ProtectedPage from "./pages/ProtectedPage";
import { useAuth0 } from "@auth0/auth0-react";
import { AuthenticationGuard } from "./components/AuthenticationGuard";
import PageLoader from "./components/PageLoader";
import BrowsePage from "./pages/BrowsePage";
import CourseDetailPage from "./pages/CourseDetailPage";
import CourseReviewPage from "./pages/CourseReviewPage";
import CourseSelectPage from "./pages/CourseSelectPage";
import ErrorPage from "./pages/ErrorPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import FacultySelectPage from "./pages/FacultySelectPage";
import ProgramSelectPage from "./pages/ProgramSelectPage";
import PublicPage from "./pages/PublicPage";
import DashboardPage from "./pages/DashboardPage";
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
          path="admin/dashboard"
          element={<AuthenticationGuard component={DashboardPage} />}
        />
        {/* <Route
          path="testing/admin"
          element={<AuthenticationGuard component={AdminPage} />}
        />
        <Route
          path="testing/protected"
          element={<AuthenticationGuard component={ProtectedPage} />}
        /> */}
        <Route path="browse" element={<BrowsePage />} />
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
        <Route path="profile" element={<ProfilePage />} />
        <Route
          path="about"
          element={<AboutPage />}
        />
        <Route
          path="contact"
          element={<ContactPage />}
        />
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
