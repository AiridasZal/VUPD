import { Box, Link as ChakraLink, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { Subject } from "../../entities/subject";

interface BrowseResultsSectionProps {
  subjects: Subject[];
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
  filtersApplied: boolean;
}

interface SubjectsBySemester {
  [key: string]: Subject[];
}

const BrowseResultsSection = ({
  subjects,
  isLoading,
  isError,
  error,
  filtersApplied,
}: BrowseResultsSectionProps) => {
  if (isLoading) return <Box>Loading...</Box>;
  if (isError) return <Box>Error: {error?.message}</Box>;

  const initialSubjectsBySemester: SubjectsBySemester = {
    "1": [],
    "2": [],
  };

  const subjectsBySemester = subjects.reduce(
    (acc: SubjectsBySemester, subject: Subject) => {
      const semesterKey = subject.semester.toString();
      acc[semesterKey] = acc[semesterKey] || [];
      acc[semesterKey].push(subject);
      return acc;
    },
    initialSubjectsBySemester
  );

  return (
    <>
      {Object.entries(subjectsBySemester).map(
        ([semester, semesterSubjects]) => (
          <Box key={semester} mb={6}>
            {filtersApplied && (
              <Text fontSize="xl" fontWeight="bold" mb={4}>
                Semester {semester}
              </Text>
            )}
            {semesterSubjects.length === 0 && filtersApplied ? (
              <Text>No optional subjects in this semester.</Text>
            ) : (
              semesterSubjects.map((subject) => (
                <Box
                  key={subject.id}
                  p={4}
                  borderWidth="1px"
                  borderRadius="lg"
                  mb={4}
                >
                  <ChakraLink
                    as={RouterLink}
                    to={`/courses/${subject.faculty}/${subject.course}/${subject.slug}`}
                    state={{ subjectId: subject.id, year: subject.year }}
                    color="blue.500"
                  >
                    <Text fontSize="lg" fontWeight="bold">
                      {subject.name}
                    </Text>
                  </ChakraLink>
                </Box>
              ))
            )}
          </Box>
        )
      )}
    </>
  );
};

export default BrowseResultsSection;
