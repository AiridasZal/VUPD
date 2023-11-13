// useCourse.ts
import { useMemo } from "react";
import { Course } from "../data/isisubjects.ts";
import courseData from "../data/isisubjects.ts";

// Assuming this is your global course data structure
const allCoursesData: Course[] = [courseData];

export const useCourse = (slug: string): Course | undefined => {
  return useMemo(() => {
    return allCoursesData.find((course) => course.slug === slug);
  }, [slug]);
};
