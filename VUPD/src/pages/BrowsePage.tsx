import { SetStateAction, useEffect, useState } from "react";
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
  const [searchTerm, setSearchTerm] = useState("");
  const [lastUpdated, setLastUpdated] = useState("");

  const {
    data: subjects,
    isLoading,
    isError,
    error,
  } = useSubjects(selectedFaculty, selectedProgram, selectedYear, searchTerm);

  useEffect(() => {
    if (lastUpdated === "search" && searchTerm) {
      setSelectedFaculty("");
      setSelectedProgram("");
      setSelectedYear("");
      setFiltersApplied(false);
    } else if (lastUpdated === "filter") {
      setSearchTerm("");
      setFiltersApplied(true);
    } else if (
      !searchTerm &&
      !selectedFaculty &&
      !selectedProgram &&
      !selectedYear
    ) {
      setFiltersApplied(false);
    }
  }, [lastUpdated, searchTerm, selectedFaculty, selectedProgram, selectedYear]);

  const handleSearchTermChange = (term: SetStateAction<string>) => {
    setSearchTerm(term);
    setLastUpdated("search");
  };

  const handleFacultyChange = (faculty: SetStateAction<string>) => {
    setSelectedFaculty(faculty);
    setLastUpdated("filter");
  };
  const handleProgramChange = (program: SetStateAction<string>) => {
    setSelectedProgram(program);
    setLastUpdated("filter");
  };

  const handleYearChange = (year: SetStateAction<string>) => {
    setSelectedYear(year);
    setLastUpdated("filter");
  };

  return (
    <Box w="full" py={5}>
      <Flex direction="column" align="center" justify="flex-start">
        <Box maxW="6xl" w="full" px={5}>
          <Box w="full" p={4} borderWidth="1px">
            <BrowseSearchSection
              searchTerm={searchTerm}
              setSearchTerm={handleSearchTermChange}
            />
          </Box>
          <Box w="full" p={4} borderWidth="1px" my={4}>
            <BrowseFiltersSection
              selectedFaculty={selectedFaculty}
              setSelectedFaculty={handleFacultyChange}
              selectedProgram={selectedProgram}
              setSelectedProgram={handleProgramChange}
              selectedYear={selectedYear}
              setSelectedYear={handleYearChange}
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
