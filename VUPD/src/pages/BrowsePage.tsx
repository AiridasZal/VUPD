import { useEffect, useState } from "react";
import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import BrowseFiltersSection from "../components/CourseBrowsing/BrowseFiltersSection";
import BrowseResultsSection from "../components/CourseBrowsing/BrowseResultsSection";
import BrowseSearchSection from "../components/CourseBrowsing/BrowseSearchSection";
import { useSubjects } from "../hooks/useSubjects";

const BrowsePage = () => {
  const [selectedFaculty, setSelectedFaculty] = useState<string>("");
  const [selectedProgram, setSelectedProgram] = useState<string>("");
  const [selectedYear, setSelectedYear] = useState<string>("");

  const [filtersApplied, setFiltersApplied] = useState<boolean>(false);

  const {
    data: subjects,
    isLoading,
    isError,
    error,
  } = useSubjects(selectedFaculty, selectedProgram, selectedYear);

  useEffect(() => {
    if (!selectedFaculty || !selectedProgram || !selectedYear) {
      setFiltersApplied(false);
    } else {
      setFiltersApplied(true);
    }
  }, [selectedFaculty, selectedProgram, selectedYear]);

  return (
    <Box w="full" py={5}>
      <Flex direction="column" align="center" justify="flex-start">
        <Box maxW="6xl" w="full" px={5}>
          <Box w="full" p={4} borderWidth="1px">
            <BrowseSearchSection />
          </Box>
          <Box w="full" p={4} borderWidth="1px" my={4}>
            <BrowseFiltersSection
              selectedFaculty={selectedFaculty}
              setSelectedFaculty={setSelectedFaculty}
              selectedProgram={selectedProgram}
              setSelectedProgram={setSelectedProgram}
              selectedYear={selectedYear}
              setSelectedYear={setSelectedYear}
            />
          </Box>
          <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10}>
            <BrowseResultsSection
              subjects={subjects || []}
              isLoading={isLoading}
              isError={isError}
              error={error}
              filtersApplied={filtersApplied}
            />
          </SimpleGrid>
        </Box>
      </Flex>
    </Box>
  );
};

export default BrowsePage;
