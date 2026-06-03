
export interface News {
  date: string;
  title: string;
  description: string;
  link?: string;
}

export const newsData: News[] = [
  {
    date: "Aug 2026",
    title: "Paper under review at BMVC 2026",
    description:
      "MSSE-Net: Uncertainty-Aware MobileNet Swin Squeeze-Excitation Network for Dermoscopic Lesion Segmentation submitted to the 37th British Machine Vision Conference.",
  },
  {
    date: "Aug 2026",
    title: "Paper under review at ICCA 2026",
    description:
      "Multi-Branch Late Fusion for Fine-Grained Emotion Recognition in Low-Resource Chittagong Bangla submitted to the 4th International Conference on Computing Advancements.",
  },
  {
    date: "Jun 2026",
    title: "Paper under review at MIET 2026",
    description:
      "Entropy-Gated Semi-Supervised Learning for Gastrointestinal Endoscopy Classification with Uncertainty Decomposition submitted to the 3rd International Conference on Machine Intelligence and Emerging Technologies.",
  },
  {
    date: "May 2026",
    title: "Paper published in Engineering Proceedings (MDPI)",
    description:
      "Advancing Colorectal Polyp Detection in Colonoscopy Through Region-Guided Deep Learning published in Eng. Proc. 2026, 124, 118.",
    link: "https://scholar.google.com/citations?user=rH3XPNIAAAAJ&hl=en",
  },
  {
    date: "Dec 2025",
    title: "Oral presentation at ASEC 2025",
    description:
      "Presented Advancing Colorectal Cancer Prevention: Region-Guided Polyp Detection in Colonoscopy at the 6th International Electronic Conference on Applied Sciences, MDPI.",
  },
  {
    date: "Dec 2025",
    title: "Graduated from IIUC",
    description:
      "Completed B.Sc. in Computer Science and Engineering at International Islamic University of Chittagong with a CGPA of 3.6/4.00, awarded merit-based tuition waivers 3 times for outstanding academic performance.",
  },
  {
    date: "Dec 2025",
    title: "Promoted to Trainee App Developer at mPair Technologies",
    description:
      "Promoted from intern to Trainee App Developer, taking on greater responsibility in GraphQL API integration and data pipeline optimisation.",
  },
  {
    date: "Sep 2025",
    title: "Joined mPair Technologies as App Development Intern",
    description:
      "Started industry role at mPair Technologies, Chittagong, focusing on mobile app development and backend API integration.",
  },
  {
    date: "Nov 2024",
    title: "Two oral presentations at IEEE CS BDC Symposium 2024",
    description:
      "Presented research on low-resource Bangla dialect understanding in LLMs and on LLM evaluation and refinement at the IEEE Computer Society Bangladesh Chapter Symposium.",
  },
  {
    date: "Oct 2024",
    title: "Appointed Teaching Assistant at IIUC",
    description:
      "Started part-time TA role for Computer Programming I & II Labs, supporting 30+ first-year CSE students.",
  },
  {
    date: "2024",
    title: "2nd Runner-Up — HULT Prize On Campus",
    description:
      "Placed 2nd among 30+ campus teams by designing a sustainable, impact-driven business solution.",
  },
  {
    date: "2023",
    title: "2nd Runner-Up — NASA Space App Challenge",
    description:
      "Earned 2nd runner-up recognition among 1,500+ global participants for an aerospace data application prototype integrating NASA open APIs.",
    link: "https://github.com/Fairooz14/NASA_SpaceApp_2023",
  },
  {
    date: "2022",
    title: "1st Mention (Best Delegate) — IIUCMUN Mock MUN",
    description:
      "Awarded top recognition for outstanding analytical reasoning and persuasive communication while representing Austria on the Syrian Civil War at IIUCMUN Mock MUN 2022.",
  },
  {
    date: "2022",
    title: "Winner, Best Female Team — IIUC Programming Contest",
    description:
      "Ranked 1st among all female participants (1st–4th semester) in algorithmic problem-solving and competitive programming.",
  },
  // {
  //   date: "Aug 2021",
  //   title: "Started B.Sc. CSE at IIUC",
  //   description:
  //     "Began undergraduate studies in Computer Science and Engineering at International Islamic University of Chittagong.",
  // },
];