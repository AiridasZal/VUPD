import { useQuery, UseQueryResult } from "@tanstack/react-query";
import axios from "axios";
import { Subject } from "../entities/subject";

const fetchSubjectDetails = async (
  faculty: string,
  course: string,
  year: number,
  id: string
): Promise<Subject[]> => {
  const { data } = await axios.get<Subject[]>(
    `http://localhost:6060/subjects/${faculty}/${course}/${year}/${id}`
  );
  return data;
};

export const useSubjectDetails = (
  faculty: string,
  course: string,
  year: number,
  id: string
): UseQueryResult<Subject[], Error> => {
  return useQuery<Subject[], Error>({
    queryKey: ["subjectDetails", faculty, course, year, id],
    queryFn: () => fetchSubjectDetails(faculty, course, year, id),
    enabled: !!faculty && !!course && !!year && !!id,
  });
};
