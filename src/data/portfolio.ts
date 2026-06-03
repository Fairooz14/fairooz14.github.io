
export interface Portfolio {
  title: string;
  description: string;
  technologies?: string[];
  imageUrl?: string;
  projectUrl?: string;
  codeUrl?: string;
}

export const portfolioData: Portfolio[] = [
  {
    title: "F1 Japanese GP Prediction 2025",
    description:
      "Ensemble ML pipeline combining XGBoost & LightGBM to forecast F1 race outcomes using engineered features. Correctly predicted Max Verstappen as the winner.",
    technologies: ["Python", "XGBoost", "LightGBM", "Feature Engineering"],
    imageUrl:
      "https://images.unsplash.com/photo-1724461186447-4b524fd4557e?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?q=80&w=2047&auto=format&fit=crop",
    codeUrl: "https://github.com/Fairooz14/F1_Japanese_gp_Prediction_2025",
  },
  {
    title: "Horcrux GPT",
    description:
      "Context-aware LLM tool providing explanations, summaries, and Q&A for educational content, built with Gemini API, LangChain, and Streamlit.",
    technologies: ["Python", "Gemini API", "LangChain", "Streamlit"],
    imageUrl:
      "https://images.unsplash.com/photo-1617791160536-598cf32026fb?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    codeUrl: "https://github.com/Fairooz14/Horcrux_GPT",
  },
  {
    title: "NASA Space App Challenge — Titan Trivia",
    description:
      "A learning quiz game about Saturn's moon Titan integrating NASA open APIs. Earned 2nd Runner-Up among 1,500+ global participants at NASA Space App Challenge 2023.",
    technologies: ["Dart", "Flutter", "NASA APIs"],
    imageUrl:
      "https://images.unsplash.com/photo-1657586640569-4a3d4577328c?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    codeUrl: "https://github.com/Fairooz14/NASA_SpaceApp_2023",
  },
  // {
  //   title: "ChatRoom",
  //   description:
  //     "A real-time chat application built during the internet blackout in Bangladesh as an alternative peer-to-peer communications channel.",
  //   technologies: ["JavaScript", "WebSockets", "Node.js"],
  //   imageUrl: "https://omnitide.com.au/wp-content/uploads/2024/03/4.png",
  //    // "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?q=80&w=2074&auto=format&fit=crop",
  //   codeUrl: "https://github.com/Fairooz14/ChatRoom",
  // },
];