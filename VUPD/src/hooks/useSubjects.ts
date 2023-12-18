import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface Subject {
  id: string;
  faculty: string;
  course: string;
  year: string;
  semester: string;
  name: string;
  slug: string;
  credits: number;
  language: string;
  lecturer: string;
  summary: string;
  link: string;
}

const getSubjects = async (
  facultySlug: string,
  programSlug: string,
  year: string
): Promise<Subject[]> => {
  const { data } = await axios.get(
    `http://localhost:6060/subjects/${facultySlug}/${programSlug}/${year}`
  );
  return data;
};

export const useSubjects = (
  facultySlug: string,
  programSlug: string,
  year: string
) => {
  return useQuery<Subject[], Error>({
    queryKey: ["subjects", facultySlug, programSlug, year],
    queryFn: () => {
      return getSubjects(facultySlug, programSlug, year);
    },
    enabled: !!facultySlug && !!programSlug && !!year,
  });
};
