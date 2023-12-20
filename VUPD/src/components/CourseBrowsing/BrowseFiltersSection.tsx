import { Flex, Select } from "@chakra-ui/react";
import { ChangeEvent } from "react";
import faculties from "../../data/faculties";
import { useFacultyFilter } from "../../hooks/useFacultyFilter";

interface Program {
  name: string;
  slug: string;
  facultyId: string;
  years: number;
}

interface Props {
  selectedFaculty: string;
  setSelectedFaculty: React.Dispatch<React.SetStateAction<string>>;
  selectedProgram: string;
  setSelectedProgram: React.Dispatch<React.SetStateAction<string>>;
  selectedYear: string;
  setSelectedYear: React.Dispatch<React.SetStateAction<string>>;
}

const BrowseFiltersSection = ({
  selectedFaculty,
  setSelectedFaculty,
  selectedProgram,
  setSelectedProgram,
  selectedYear,
  setSelectedYear,
}: Props) => {
  const { data: programs, isLoading: isProgramsLoading } =
    useFacultyFilter(selectedFaculty);

  function handleFacultyChange(event: ChangeEvent<HTMLSelectElement>): void {
    setSelectedFaculty(event.target.value);
  }

  function handleProgramChange(event: ChangeEvent<HTMLSelectElement>): void {
    setSelectedProgram(event.target.value);
  }

  function handleYearChange(event: ChangeEvent<HTMLSelectElement>): void {
    setSelectedYear(event.target.value);
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
        isDisabled={!selectedFaculty || isProgramsLoading}
      >
        {isProgramsLoading ? (
          <option>Loading programs...</option>
        ) : (
          programs?.map((program: Program) => (
            <option key={program.slug} value={program.slug}>
              {program.name}
            </option>
          ))
        )}
      </Select>
      <Select
        placeholder="Select Year"
        onChange={handleYearChange}
        value={selectedYear}
        isDisabled={!selectedProgram}
      >
        {Array.from(
          {
            length:
              programs?.find(
                (program: Program) => program.slug === selectedProgram
              )?.years || 0,
          },
          (_, i) => i + 1
        ).map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </Select>
    </Flex>
  );
};

export default BrowseFiltersSection;
