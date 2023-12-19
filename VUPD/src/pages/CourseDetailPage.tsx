import { useAuth0 } from "@auth0/auth0-react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Link as ChakraLink,
  Flex,
  HStack,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Tag,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { useQueryClient } from "@tanstack/react-query";
import { SetStateAction, useEffect, useState } from "react";
import {
  Link as RouterLink,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import Reviews from "../components/SubjectDetails/Reviews";
import SubjectRating from "../components/SubjectDetails/SubjectRating";
import { Review } from "../entities/review";
import { useCourseReviews } from "../hooks/useCourseReviews";
import { useSubjectDetails } from "../hooks/useSubjectDetails";
import { FaBook } from "react-icons/fa6";
import { Select } from "@chakra-ui/react";

const CourseDetailPage = () => {
  const bgColor = useColorModeValue("gray.50", "gray.700");
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedReviewId, setSelectedReviewId] = useState<string | null>(null);
  const [reviewed, setReviewed] = useState<boolean>(false);
  const [sortType, setSortType] = useState("newest");

  const openDeleteModal = (reviewId: SetStateAction<string | null>) => {
    setSelectedReviewId(reviewId);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setSelectedReviewId(null);
    setIsDeleteModalOpen(false);
  };
  const queryClient = useQueryClient();
  const { slug, program, course } = useParams<{
    slug: string;
    program: string;
    course: string;
  }>();
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as { subjectId?: string; year?: number };
  const { isAuthenticated, getAccessTokenSilently, user } = useAuth0();
  const userId = user?.sub;

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

  const { data: reviews, isLoading: isLoadingReviews } =
    useCourseReviews(subjectId);

  useEffect(() => {
    if (reviews && userId) {
      const userReview = reviews.find(
        (review: Review) => review.userId === userId
      );
      setReviewed(!!userReview);
    }
  }, [reviews, userId]);

  if (!subjectDetails) return <Box>Course not found</Box>;

  if (isLoading) return <Box>Loading...</Box>;
  if (isError) return <Box>Error: {error?.message}</Box>;
  if (!subjectDetails) return <Box>Course not found</Box>;

  const calculateRatings = (reviews: Review[]) => {
    const ratingSums: { [criteria: string]: number } = {};
    let reviewCount = 0;

    reviews.forEach((review) => {
      Object.entries(review.ratings).forEach(([criteria, rating]) => {
        ratingSums[criteria] = (ratingSums[criteria] || 0) + rating;
      });
      reviewCount++;
    });

    const ratingAverages: { [criteria: string]: number } = {};
    Object.keys(ratingSums).forEach((criteria) => {
      ratingAverages[criteria] = ratingSums[criteria] / reviewCount;
    });

    const overallScore =
      reviewCount > 0
        ? Object.values(ratingAverages).reduce((a, b) => a + b, 0) /
          Object.keys(ratingAverages).length
        : 0;

    return { ratingAverages, overallScore };
  };

  const { ratingAverages, overallScore } = calculateRatings(reviews || []);
  const reviewCount = reviews?.length || 0;

  async function handleReviewDelete() {
    try {
      const accessToken = await getAccessTokenSilently();
      await fetch(`http://localhost:6060/reviews/${selectedReviewId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      closeDeleteModal();
      queryClient.invalidateQueries("courseReviews");
    } catch (error) {
      console.error("Error deleting review:", error);
    }
  }

  async function handleVote(reviewId: string, isUpvote: boolean) {
    try {
      const accessToken = await getAccessTokenSilently();
      await fetch(
        `http://localhost:6060/reviews/vote/${reviewId}?upvote=${isUpvote}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      queryClient.invalidateQueries("courseReviews");
    } catch (error) {
      console.error("Error voting on review:", error);
    }
  }

  const handleUpvote = (reviewId: string) => handleVote(reviewId, true);
  const handleDownvote = (reviewId: string) => handleVote(reviewId, false);

  function handleEdit(review: Review) {
    navigate(`/courses/${slug}/${program}/${course}/review`, {
      state: { courseData: subjectDetails, editReview: review },
    });
  }

  const handleSortChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSortType(event.target.value);
  };

  return (
    <Box w="full" py={5}>
      <Flex direction="column" align="center" justify="flex-start">
        <VStack spacing={4} align="stretch" m={5} maxW="6xl">
          <HStack spacing={4} wrap="wrap">
            <Text fontSize="3xl" fontWeight="bold">
              {subjectDetails.name}
            </Text>
            <ChakraLink as={RouterLink} to={subjectDetails.link} isExternal>
              <FaBook size={24} />
            </ChakraLink>
          </HStack>
          <HStack spacing={4} wrap="wrap" justify="center">
            <Tag colorScheme="green" borderRadius="full" px={3} py={1}>
              <Text fontWeight="semibold">
                Faculty: {subjectDetails.faculty.toUpperCase()}
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
          <Box p={4} borderWidth="1px" borderRadius="lg" bg={bgColor}>
            <Text fontWeight="semibold" mb={2}>
              Overall Course Rating
            </Text>
            <Flex alignItems="center">
              <SubjectRating rating={overallScore} />
              <Text ml={2}>
                ({overallScore.toFixed(2)}) ({reviewCount})
              </Text>
            </Flex>
            {reviewCount !== 0 && (
              <Accordion allowToggle mt={4}>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        Detailed Ratings
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Stack spacing={4}>
                      {Object.entries(ratingAverages).map(
                        ([criteria, rating]) => (
                          <Flex key={criteria} alignItems="center">
                            <Text fontWeight="semibold" mr={2}>
                              {criteria}
                            </Text>
                            <SubjectRating rating={rating} />
                            <Text ml={2}>({rating.toFixed(2)})</Text>
                          </Flex>
                        )
                      )}
                    </Stack>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            )}
          </Box>

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
                as={reviewed ? undefined : RouterLink}
                to={
                  reviewed
                    ? undefined
                    : `/courses/${slug}/${program}/${course}/review`
                }
                state={{ courseData: subjectDetails }}
                colorScheme="green"
                size="md"
                mt={4}
                isDisabled={reviewed}
              >
                {reviewed ? "Reviewed" : "Review Course"}
              </Button>
            </Flex>
          )}
        </VStack>
      </Flex>
      <Flex direction="column" align="center" justify="flex-start">
        <VStack align="stretch" maxW="6xl">
          {isLoadingReviews ?? <Box>Loading...</Box>}
          {reviews && (
            <>
              <HStack spacing={4} wrap="wrap" justify="space-between">
                <Text fontSize="2xl" mb={4} justifySelf="left">
                  Reviews
                </Text>
                <Box display="flex" justifyContent="flex-end" mb={4}>
                  <Select
                    onChange={handleSortChange}
                    placeholder="Sort by"
                    width="200px"
                  >
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                    <option value="highestUpvote">Most Popular</option>
                    <option value="highestDownvote">Least Popular</option>
                  </Select>
                </Box>
              </HStack>
              <Reviews
                reviews={reviews}
                currentUserId={userId || ""}
                onDelete={openDeleteModal}
                onDownvote={handleDownvote}
                onEdit={handleEdit}
                onUpvote={handleUpvote}
                sortType={sortType}
              />
            </>
          )}
        </VStack>
      </Flex>
      <Modal isOpen={isDeleteModalOpen} onClose={closeDeleteModal} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirm Delete</ModalHeader>
          <ModalBody>Are you sure you want to delete this review?</ModalBody>
          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={handleReviewDelete}>
              Delete
            </Button>
            <Button variant="ghost" onClick={closeDeleteModal}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default CourseDetailPage;
