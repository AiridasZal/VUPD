import { useMemo } from "react";
import Program from "../entities/program";
import data from "../data/mif.ts";

const programs = data;

const programsData: Program[] = [programs];

const useProgram = (slug: string) => {
  const program = useMemo(
    () => programsData.find((p) => p.slug === slug),
    [slug]
  );
  return program;
};
export default useProgram;
