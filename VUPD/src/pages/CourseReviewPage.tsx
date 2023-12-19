import {
  Box,
  Button,
  Divider,
  Heading,
  Text,
  Textarea,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import StarRating from "../components/StarRating";
import { useAuth0 } from "@auth0/auth0-react";

const CourseReviewPage = () => {
  const [value, setValue] = useState("");
  const [ratings, setRatings] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { getAccessTokenSilently } = useAuth0();
  const toast = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const courseData = location.state;

  useEffect(() => {
    if (!courseData) {
      toast({
        title: "Error",
        description: "Course data not found",
        status: "error",
        isClosable: true,
      });
      navigate("/");
    }
  }, [courseData, navigate, toast]);

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleRatingChange = (criteria, rating) => {
    setRatings((prevRatings) => ({ ...prevRatings, [criteria]: rating }));
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const accessToken = await getAccessTokenSilently();
      const reviewData = {
        courseId: courseData?.id, // Replace with actual course ID key
        review: value,
        ratings: ratings,
      };

      const response = await fetch("http://localhost:6060/reviews/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(reviewData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit review");
      }

      toast({
        title: "Review submitted",
        description: "Thank you for your review!",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Failed to submit review",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const ratingCriteria = [
    "Course Content",
    "Instructor Performance",
    "Assessment and Feedback",
    "Difficulty Level",
    "Practical Application",
    "Workload",
  ];

  if (!courseData) return <Box>Loading...</Box>;

  return (
    <Box as="section">
      <VStack spacing={6} align="stretch" m={8} mx="auto" maxW="6xl">
        <Heading as="h1" size="2xl" textAlign="center" mb={4}>
          Course Review
        </Heading>
        <Text fontWeight="bold" textAlign="center">
          {courseData.name}
        </Text>
        <Divider my={4} />
        {ratingCriteria.map((criteria) => (
          <Box
            key={criteria}
            p={5}
            shadow="sm"
            transition="box-shadow 0.2s"
            _hover={{ shadow: "md" }}
          >
            <Text fontWeight="semibold" mb={3}>
              {criteria}
            </Text>
            <StarRating
              onRating={(rating) => handleRatingChange(criteria, rating)}
            />
          </Box>
        ))}
        <Box
          p={5}
          shadow="sm"
          transition="box-shadow 0.2s"
          _hover={{ shadow: "md" }}
        >
          <Text fontWeight="semibold" mb={3}>
            Write your review
          </Text>
          <Textarea
            value={value}
            onChange={handleInputChange}
            placeholder="Your detailed review..."
            resize="none"
            minHeight="150px"
          />
        </Box>
        <Button
          colorScheme="green"
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
