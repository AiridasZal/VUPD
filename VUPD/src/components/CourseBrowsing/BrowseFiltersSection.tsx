import { Flex, Select } from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";
import faculties from "../../data/faculties";

const BrowseFiltersSection = () => {
  const [selectedFaculty, setSelectedFaculty] = useState("");
  const [selectedProgram, setSelectedProgram] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  const programs = ["Informacinių Sistemų Inžinerija"]; // TODO: Programs should be fetched based on the selected faculty
  const years = ["1", "2", "3", "4"]; // TODO: Replace this with actual years

  function handleFacultyChange(event: ChangeEvent<HTMLSelectElement>): void {
    setSelectedFaculty(event.target.value);
    setSelectedProgram("");
    setSelectedYear("");
    // TODO: implement the logic to fetch programs based on the selected faculty here
  }

  function handleProgramChange(event: ChangeEvent<HTMLSelectElement>): void {
    setSelectedProgram(event.target.value);
    setSelectedYear("");
    // TODO: implement the logic to fetch years based on the selected program here
  }

  function handleYearChange(event: ChangeEvent<HTMLSelectElement>): void {
    setSelectedYear(event.target.value);
    // TODO: implement the logic to fetch courses based on the selected year here
  }

  return (
    <Flex gap={2}>
      <Select
        placeholder="Select Faculty"
        onChange={handleFacultyChange}
        value={selectedFaculty}
      >
        {faculties.results.map((faculty) => (
          <option key={faculty.slug} value={faculty.slug}>
            {faculty.name}
          </option>
        ))}
      </Select>
      <Select
        placeholder="Select Program"
        onChange={handleProgramChange}
        value={selectedProgram}
        isDisabled={!selectedFaculty}
      >
        {programs.map(
          (
            program,
            index // TODO: replace with actual programs
          ) => (
            <option key={index} value={program}>
              {program}
            </option>
          )
        )}
      </Select>
      <Select
        placeholder="Select Year"
        onChange={handleYearChange}
        value={selectedYear}
        isDisabled={!selectedFaculty || !selectedProgram}
      >
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </Select>
    </Flex>
  );
};

export default BrowseFiltersSection;
