import { Box, Button, Text } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import { courseDetails, CourseDetailResult } from "../data/courseDetails";

const CourseDetailPage = () => {
  const { slug, program, course } = useParams();
  const { course: courseSlug } = useParams<{ course: string }>();
  const courseData: CourseDetailResult | undefined = courseDetails.results.find(
    (course) => course.slug === courseSlug
  );
  if (!courseData) {
    return <div>Course not found</div>;
  }

  return (
    <>
      <Box p={5}>
        <Text fontSize="2xl" fontWeight="bold" color="gray.900">
          {courseData.name}
        </Text>
        <Text fontWeight="semibold">Coordinators:</Text>
        <Text>{courseData.coordinators.join(", ")}</Text>
        <Text fontWeight="semibold">Summary:</Text>
        <Text>{courseData.summary}</Text>

        <Button
          as={Link}
          to={`/courses/${slug}/${program}/${course}/review`}
          colorScheme="green"
        >
          Review course
        </Button>
      </Box>
    </>
  );
};

export default CourseDetailPage;
