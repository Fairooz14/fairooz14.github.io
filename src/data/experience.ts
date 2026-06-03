export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "Oct 2024 — Aug 2025",
    title: "Part-Time Teaching Assistant",
    company: "International Islamic University of Chittagong",
    description:
      "Assisted in teaching Computer Programming I & II Labs (CSE-1122, CSE-1222) for 30+ first-year students. Created and graded 20+ lab assessments and evaluated 30+ final programming projects with detailed technical feedback.",
    companyUrl: "https://www.iiuc.ac.bd",
  },
  {
    date: "Sep 2025 — Feb 2026",
    title: "Trainee App Developer",
    company: "mPair Technologies",
    description:
      "Integrated GraphQL APIs enabling efficient data retrieval and structured data flow between services. Processed and mapped API response data into application-ready formats and optimised queries to reduce redundant data transfer.",
  },
];