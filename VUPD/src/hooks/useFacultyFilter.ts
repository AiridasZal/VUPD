import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useFacultyFilter = (facultySlug: string) => {
  return useQuery({
    queryKey: ["courses", facultySlug],
    queryFn: () =>
      axios(`http://localhost:6060/courses/${facultySlug}`).then(
        (res) => res.data
      ),
    enabled: !!facultySlug,
  });
};
