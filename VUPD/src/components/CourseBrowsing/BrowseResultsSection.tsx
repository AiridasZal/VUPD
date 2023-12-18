import { Link, Box, Text } from "@chakra-ui/react";
import { Subject } from "../../hooks/useSubjects";
import { Link as RouterLink } from "react-router-dom";

interface BrowseResultsSectionProps {
  subjects: Subject[];
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
}

const BrowseResultsSection = ({
  subjects,
  isLoading,
  isError,
  error,
}: BrowseResultsSectionProps) => {
  if (isLoading) return <Box>Loading...</Box>;
  if (isError) return <Box>Error: {error?.message}</Box>;

  return (
    <Box>
      {subjects.map((subject) => (
        <Box key={subject.id} p={4} borderWidth="1px" borderRadius="lg" mb={4}>
          <Link
            as={RouterLink}
            to={`/courses/${subject.faculty}/${subject.course}/${subject.slug}`}
            color="blue.500"
          >
            <Text fontSize="lg" fontWeight="bold">
              {subject.name}
            </Text>
          </Link>
        </Box>
      ))}
    </Box>
  );
};

export default BrowseResultsSection;
