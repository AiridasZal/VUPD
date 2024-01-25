import { Route, Routes } from "react-router-dom";
import CallBackPage from "./pages/CallBackPage";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import ProfilePage from "./pages/ProfilePage";
import { useAuth0 } from "@auth0/auth0-react";
import { AuthenticationGuard } from "./components/AuthenticationGuard";
import PageLoader from "./components/PageLoader";
import BrowsePage from "./pages/BrowsePage";
import CourseDetailPage from "./pages/CourseDetailPage";
import CourseReviewPage from "./pages/CourseReviewPage";
import ErrorPage from "./pages/ErrorPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import DashboardPage from "./pages/DashboardPage";

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
        <Route path="browse" element={<BrowsePage />} />
        <Route
          path="courses/:slug/:program/:course"
          element={<CourseDetailPage />}
        />
        <Route
          path="courses/:slug/:program/:course/review"
          element={<CourseReviewPage />}
        />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};

export default RoutesConfig;
