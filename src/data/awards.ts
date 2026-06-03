export interface Award {
  year: string;
  title: string;
  organization: string;
  description?: string;
}

export const awardsData: Award[] = [
  {
    year: "2022",
    title: "Winner, Best Female Team",
    organization: "IIUC Programming Contest 2022",
    description:
      "Ranked 1st among all female participants (1st–4th semester), demonstrating advanced algorithmic problem-solving, competitive programming skills, and team leadership under pressure.",
  },
  {
    year: "2022",
    title: "1st Mention — Best Delegate",
    organization: "IIUCMUN Mock MUN 2022",
    description:
      "Awarded top recognition for outstanding analytical reasoning and persuasive communication while representing Austria on the Syrian Civil War.",
  },
  {
    year: "2023",
    title: "2nd Runner-Up",
    organization: "NASA Space App Challenge 2023 — Global Hackathon",
    description:
      "Engineered a space application prototype among 1,500+ participants worldwide, integrating NASA open APIs to fetch and process real-world aerospace data.",
  },
  {
    year: "2024",
    title: "2nd Runner-Up",
    organization: "HULT Prize On Campus 2024",
    description:
      "Placed 2nd among 30+ campus teams by designing a sustainable, impact-driven business solution.",
  },
];