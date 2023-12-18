import { Box, Button, Input } from "@chakra-ui/react";
import { useState } from "react";

const BrowseSearchSection = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Implement the API call function here
  };

  return (
    <Box as="form" onSubmit={handleSearch}>
      <Input
        placeholder="Search courses"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button type="submit" colorScheme="blue" mt={3}>
        Search
      </Button>
    </Box>
  );
};

export default BrowseSearchSection;
