import { Box, Input } from "@chakra-ui/react";
import { debounce } from "lodash";
import { useState, useCallback, useEffect, SetStateAction } from "react";

interface Props {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const BrowseSearchSection = ({ searchTerm, setSearchTerm }: Props) => {
  const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm);

  useEffect(() => {
    setLocalSearchTerm(searchTerm);
  }, [searchTerm]);

  const handleSearchTermChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setLocalSearchTerm(event.target.value);
    debouncedSetSearchTerm(event.target.value);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
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
