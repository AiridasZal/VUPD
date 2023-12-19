import { Box, Input } from "@chakra-ui/react";
import { debounce } from "lodash";
import { useState, useCallback, useEffect } from "react";

const BrowseSearchSection = ({ searchTerm, setSearchTerm }) => {
  const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm);

  useEffect(() => {
    setLocalSearchTerm(searchTerm);
  }, [searchTerm]);

  const handleSearchTermChange = (event) => {
    setLocalSearchTerm(event.target.value);
    debouncedSetSearchTerm(event.target.value);
  };

  const debouncedSetSearchTerm = useCallback(
    debounce((term) => {
      setSearchTerm(term);
    }, 500),
    []
  );

  return (
    <Box>
      <Input
        placeholder="Search courses"
        value={localSearchTerm}
        onChange={handleSearchTermChange}
      />
    </Box>
  );
};

export default BrowseSearchSection;
