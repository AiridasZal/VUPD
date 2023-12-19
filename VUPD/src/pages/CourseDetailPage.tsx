import {
  Box,
  Button,
  Text,
  VStack,
  HStack,
  Tag,
  Flex,
  Link as ChakraLink,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link as RouterLink, useParams, useLocation } from "react-router-dom";
import { useSubjectDetails } from "../hooks/useSubjectDetails";
import { useAuth0 } from "@auth0/auth0-react";
import { useCourseReviews } from "../hooks/useCourseReviews";
import Reviews from "../components/SubjectDetails/Reviews";

const CourseDetailPage = () => {
  const { slug, program, course } = useParams<{
    slug: string;
    program: string;
    course: string;
  }>();
  const location = useLocation();
  const state = location.state as { subjectId?: string; year?: number };
  const { isAuthenticated } = useAuth0();
  const subjectId = state?.subjectId ?? "";
  const year = state?.year ?? 0;
  const safeSlug = slug ?? "";
  const safeProgram = program ?? "";
  const {
    data: subjectDetailsArray,
    isLoading,
    isError,
    error,
  } = useSubjectDetails(safeSlug, safeProgram, year, subjectId);
  const subjectDetails = subjectDetailsArray?.[0];

  const bgColor = useColorModeValue("gray.50", "gray.700");

  const { data: reviews, isLoading: isLoadingReviews } =
    useCourseReviews(subjectId);
  if (!subjectDetails) return <Box>Course not found</Box>;

  if (isLoading) return <Box>Loading...</Box>;
  if (isError) return <Box>Error: {error?.message}</Box>;
  if (!subjectDetails) return <Box>Course not found</Box>;

  function handleReviewDelete(reviewId: string): void {
    throw new Error("Function not implemented.");
  }

  function handleDownvote(reviewId: string): void {
    throw new Error("Function not implemented.");
  }

  function handleEdit(review: Review): void {
    throw new Error("Function not implemented.");
  }

  function handleUpvote(reviewId: string): void {
    throw new Error("Function not implemented.");
  }

  return (
    <Box w="full" py={5}>
      <Flex direction="column" align="center" justify="flex-start">
        <VStack spacing={4} align="stretch" m={5} maxW="6xl">
          <Text fontSize="3xl" fontWeight="bold">
            {subjectDetails.name}
          </Text>
          <HStack spacing={4} wrap="wrap" justify="center">
            <Tag colorScheme="blue" borderRadius="full" px={3} py={1}>
              <Text fontWeight="semibold">
                Course Code: {subjectDetails.course}
              </Text>
            </Tag>
            <Tag colorScheme="green" borderRadius="full" px={3} py={1}>
              <Text fontWeight="semibold">
                Faculty: {subjectDetails.faculty}
              </Text>
            </Tag>
            <Tag colorScheme="orange" borderRadius="full" px={3} py={1}>
              <Text fontWeight="semibold">Year: {subjectDetails.year}</Text>
            </Tag>
            <Tag colorScheme="red" borderRadius="full" px={3} py={1}>
              <Text fontWeight="semibold">
                Semester: {subjectDetails.semester}
              </Text>
            </Tag>
            <Tag colorScheme="purple" borderRadius="full" px={3} py={1}>
              <Text fontWeight="semibold">
                Credits: {subjectDetails.credits}
              </Text>
            </Tag>
            <Tag colorScheme="cyan" borderRadius="full" px={3} py={1}>
              <Text fontWeight="semibold">
                Language: {subjectDetails.language}
              </Text>
            </Tag>
          </HStack>
          <Box borderWidth="1px" borderRadius="lg" p={4} bg={bgColor}>
            <Text fontWeight="semibold">Summary:</Text>
            <Text mt={2}>{subjectDetails.summary}</Text>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" p={4} bg={bgColor}>
            <Text fontWeight="semibold">Lecturers:</Text>
            {subjectDetails.lecturers.map((lecturer, index) => (
              <HStack key={index} mt={2} align="start">
                <Text>{lecturer}</Text>
                <ChakraLink
                  href={`mailto:${subjectDetails.lecturerEmails[index]}`}
                  color="blue.500"
                >
                  {subjectDetails.lecturerEmails[index]}
                </ChakraLink>
              </HStack>
            ))}
          </Box>
          {isAuthenticated && (
            <Flex justify="end" w="full">
              <Button
                as={RouterLink}
                to={`/courses/${slug}/${program}/${course}/review`}
                state={{ courseData: subjectDetails }}
                colorScheme="green"
                size="md"
                mt={4}
              >
                Review Course
              </Button>
            </Flex>
          )}
        </VStack>
        {isLoadingReviews ? (
          <Box>Loading...</Box>
        ) : (
          <>
            <Text fontSize="2xl" mb={4} alignSelf="left">
              Reviews
            </Text>
            <Reviews
              reviews={reviews}
              currentUserId=""
              onDelete={handleReviewDelete}
              onDownvote={handleDownvote}
              onEdit={handleEdit}
              onUpvote={handleUpvote}
            />
          </>
        )}
      </Flex>
    </Box>
  );
};

export default CourseDetailPage;
