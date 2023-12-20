import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useCourseReviews = (courseId: string) => {
  return useQuery({
    queryKey: ["courseReviews", courseId],
    queryFn: () =>
      axios(`http://localhost:6060/reviews/${courseId}`).then(
        (res) => res.data
      ),
    enabled: !!courseId,
  });
};
