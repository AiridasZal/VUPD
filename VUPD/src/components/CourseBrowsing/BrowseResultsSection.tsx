import { Box, Text } from "@chakra-ui/react";
import { useState } from "react";

const BrowseResultsSection = () => {
  const [courses, setCourses] = useState([]);
  // Implement the API call function here

  return courses.map((course) => (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={4}
      key={course.id}
    >
      <Text fontWeight="bold">{course.name}</Text>
      {/* Other course details */}
    </Box>
  ));
};

export default BrowseResultsSection;
