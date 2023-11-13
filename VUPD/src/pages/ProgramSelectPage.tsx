import { useParams } from "react-router-dom";
import program from "../entities/program.ts";
import useProgram from "../hooks/useProgram";
import { Box, Link, List, ListItem, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const ProgramSelectPage = () => {
  const { slug } = useParams();
  const courses = useProgram(slug!) as program;
  if (!courses) return <Text>No courses found!</Text>;
  return (
    <>
      <Text fontSize="2xl" fontWeight="bold" color="gray.900">
        {courses.name}
      </Text>
      <Box p={5}>
        <List spacing={3}>
          {courses.results.map((program) => (
            <ListItem key={program.slug}>
              <Link
                as={RouterLink}
                to={`/courses/${slug}/${program.slug}`}
                color="blue.500"
              >
                {program.name}
              </Link>
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
};

export default ProgramSelectPage;
