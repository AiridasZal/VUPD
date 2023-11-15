import {
  Box,
  Button,
  Divider,
  Heading,
  Text,
  Textarea,
  VStack,
  useBreakpointValue,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import StarRating from "../components/StarRating";
import { CourseDetailResult, courseDetails } from "../data/courseDetails";

const CourseReviewPage = () => {
  const [value, setValue] = useState<string>("");
  const [ratings, setRatings] = useState<{ [criteria: string]: number }>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const fontSize = useBreakpointValue({ base: "md", md: "xl" });
  const paddingX = useBreakpointValue({ base: 4, md: 8 });
  const boxBg = useColorModeValue("white", "gray.700");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const toast = useToast();
  const ratingCriteria = [
    "Course Content",
    "Instructor Performance",
    "Assessment and Feedback",
    "Difficulty Level",
    "Practical Application",
    "Workload",
  ];

  const { course } = useParams();
  const courseData: CourseDetailResult | undefined = courseDetails.results.find(
    (courseDetail) => courseDetail.slug === course
  );

  if (!courseData) return <Box>Course not found</Box>;

  const courseName = courseData.name;

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const handleRatingChange = (criteria: string, rating: number) => {
    setRatings((prevRatings) => ({ ...prevRatings, [criteria]: rating }));
  };

  const handleSubmit = () => {
    setIsLoading(true);
    console.log(value);
    console.log(ratings);
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Review submitted.",
        description: "Thank you for your review!",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }, 1000);
  };

  return (
    <Box as="section">
      <VStack
        spacing={6}
        align="stretch"
        m={8}
        px={paddingX}
        mx="auto"
        maxW="6xl"
      >
        <Heading as="h1" size="2xl" textAlign="center" mb={4}>
          Course Review
        </Heading>
        <Text fontSize={fontSize} fontWeight="bold" textAlign="center">
          {courseName}
        </Text>
        <Divider my={4} />
        {ratingCriteria.map((criteria) => (
          <Box
            key={criteria}
            p={5}
            bg={boxBg}
            borderWidth="1px"
            borderColor={borderColor}
            borderRadius="lg"
            shadow="sm"
            transition="box-shadow 0.2s"
            _hover={{ shadow: "md" }}
          >
            <Text fontSize={fontSize} fontWeight="semibold" mb={3}>
              {criteria}
            </Text>
            <StarRating
              onRating={(rating) => handleRatingChange(criteria, rating)}
            />
          </Box>
        ))}
        <Box
          p={5}
          bg={boxBg}
          borderWidth="1px"
          borderColor={borderColor}
          borderRadius="lg"
          shadow="sm"
          transition="box-shadow 0.2s"
          _hover={{ shadow: "md" }}
        >
          <Text fontSize={fontSize} fontWeight="semibold" mb={3}>
            Course Review
          </Text>
          <Textarea
            value={value}
            onChange={handleInputChange}
            placeholder="Write your detailed review here..."
            resize="none"
            size="md"
            minHeight="150px"
          />
        </Box>
        <Button
          colorScheme="green"
          size="md"
          fontWeight="bold"
          maxW="16rem"
          alignSelf="end"
          isLoading={isLoading}
          onClick={handleSubmit}
        >
          Submit Review
        </Button>
      </VStack>
    </Box>
  );
};

export default CourseReviewPage;
