import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import BrowseFiltersSection from "../components/CourseBrowsing/BrowseFiltersSection";
import BrowseResultsSection from "../components/CourseBrowsing/BrowseResultsSection";
import BrowseSearchSection from "../components/CourseBrowsing/BrowseSearchSection";

const BrowsePage = () => {
  return (
    <Box w="full" py={5}>
      <Flex direction="column" align="center" justify="flex-start">
        <Box maxW="6xl" w="full" px={5}>
          <Box w="full" p={4} borderWidth="1px">
            <BrowseSearchSection />
          </Box>
          <Box w="full" p={4} borderWidth="1px" my={4}>
            <BrowseFiltersSection />
          </Box>
          <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10}>
            <BrowseResultsSection />
          </SimpleGrid>
        </Box>
      </Flex>
    </Box>
  );
};

export default BrowsePage;
