import { Flex, Select } from "@chakra-ui/react";
import { useState } from "react";

const BrowseFiltersSection = () => {
  // States for filter
  const [selectedFaculty, setSelectedFaculty] = useState("");
  const [selectedProgram, setSelectedProgram] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  function handleFacultyChange(event: ChangeEvent<HTMLSelectElement>): void {
    throw new Error("Function not implemented.");
  }

  function handleProgramChange(event: ChangeEvent<HTMLSelectElement>): void {
    throw new Error("Function not implemented.");
  }

  function handleYearChange(event: ChangeEvent<HTMLSelectElement>): void {
    throw new Error("Function not implemented.");
  }

  return (
    <Flex>
      <Select placeholder="Select Faculty" onChange={handleFacultyChange}>
        {/* Options for faculties */}
      </Select>
      <Select placeholder="Select Program" onChange={handleProgramChange}>
        {/* Options for programmes */}
      </Select>
      <Select placeholder="Select Year" onChange={handleYearChange}>
        {/* Options for years */}
      </Select>
    </Flex>
  );
};

export default BrowseFiltersSection;
