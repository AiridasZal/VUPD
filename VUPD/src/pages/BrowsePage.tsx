import BrowseFiltersSection from "../components/CourseBrowsing/BrowseFiltersSection";
import BrowseResultsSection from "../components/CourseBrowsing/BrowseResultsSection";
import BrowseSearchSection from "../components/CourseBrowsing/BrowseSearchSection";

const BrowsePage = () => {
  return (
    <>
      <BrowseSearchSection />
      <BrowseFiltersSection />
      <BrowseResultsSection />
    </>
  );
};

export default BrowsePage;
