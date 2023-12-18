import { Box, Input } from "@chakra-ui/react";
import { useState } from "react";

const BrowseSearchSection = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    console.log(searchTerm + " was searched");
    // Implement the API call function here
  };

  return (
    <Box as="form" onSubmit={handleSearch}>
      <Input
        placeholder="Search courses"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onSubmit={handleSearch}
      />
    </Box>
  );
};

export default BrowseSearchSection;
