export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  {
    year: "2021—2025",
    institution: "International Islamic University of Chittagong",
    degree: "B.Sc. in Computer Science and Engineering — CGPA: 3.6 / 4.00",
    thesis: "Advancing Colorectal Cancer Prevention: Region-Guided Polyp Detection in Colonoscopy",
  },
];