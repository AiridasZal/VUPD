export interface Subject {
  id: string;
  faculty: string;
  course: string;
  year: number;
  semester: string;
  name: string;
  slug: string;
  credits: number;
  language: string;
  lecturers: string[];
  lecturerEmails: string[];
  summary: string;
  link: string;
}
