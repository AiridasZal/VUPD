import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Subject } from "../entities/subject";

const getSubjects = async (
  facultySlug: string,
  programSlug: string,
  year: string,
  searchTerm: string
) => {
  let endpoint;
  if (searchTerm) {
    endpoint = `http://localhost:6060/subjects/search?query=${searchTerm}`;
  } else {
    endpoint = `http://localhost:6060/subjects/${facultySlug}/${programSlug}/${year}`;
  }

  const { data } = await axios.get(endpoint);
  return data;
};

export const useSubjects = (
  facultySlug: string,
  programSlug: string,
  year: string,
  searchTerm: string
) => {
  const areAllFiltersSelected = facultySlug && programSlug && year;

  return useQuery<Subject[], Error>({
    queryKey: ["subjects", facultySlug, programSlug, year, searchTerm],
    queryFn: () => getSubjects(facultySlug, programSlug, year, searchTerm),
    enabled: Boolean(searchTerm) || Boolean(areAllFiltersSelected),
  });
};
