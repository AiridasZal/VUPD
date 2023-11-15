import { useParams } from "react-router-dom";
import { useCourse } from "../hooks/useCourse";
import { Box, Heading, List, ListItem, Text, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const CourseSelectPage = () => {
  const { slug, program } = useParams();
  const subjects = useCourse(program!);
  if (!subjects) {
    return <Text>Couldn't find any subject for this course</Text>;
  }
  return (
    <Box>
      <Heading as="h1" size="2xl" fontWeight="bold" color="gray.900">
        {subjects.name}
      </Heading>
      {subjects.results.map((year) => (
        <Box key={year.name} ml={4}>
          <Heading as="h2" size="lg" fontWeight="semibold" py={4}>
            {year.name}
          </Heading>
          {year.semesters.map((semester) => (
            <Box key={semester.name} ml={4}>
              <Heading as="h3" size="md" fontWeight="semibold" py={2}>
                {semester.name}
              </Heading>
              <List spacing={3} ml={4}>
                {typeof semester.subjects === "string" ? (
                  <ListItem>{semester.subjects}</ListItem>
                ) : (
                  semester.subjects.map((subject) => (
                    <ListItem key={subject.name}>
                      <Link
                        as={RouterLink}
                        to={`/courses/${slug}/${program}/${subject.slug}`}
                        color="blue.500"
                      >
                        {subject.name}
                      </Link>
                    </ListItem>
                  ))
                )}
              </List>
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  );
};

export default CourseSelectPage;
