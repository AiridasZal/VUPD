import { Box, Link, List, ListItem, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import data from "../data/faculties.ts";
import Faculties from "../entities/faculties.ts";

const FacultySelectPage = () => {
  const { results } = data as Faculties;
  return (
    <>
      <Text fontSize="2xl" fontWeight="bold" color="gray.900">
        {" "}
        Faculties{" "}
      </Text>
      <Box p={5}>
        <List spacing={3}>
          {results.map((faculty) => (
            <ListItem key={faculty.slug}>
              <Link
                as={RouterLink}
                to={`/courses/${faculty.slug}`}
                color="blue.500"
              >
                {faculty.name}
              </Link>
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
};

export default FacultySelectPage;
