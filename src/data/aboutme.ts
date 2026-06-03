
import meImage from "../images/me.jpg";

import { StaticImageData } from "next/image";

export interface AboutMe {
  name: string;
  title: string;
  subtitle?: string;
  institution?: string;
  description: string;
  email: string;
  imageUrl?: string | StaticImageData;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string;
  secretDescription?: string;
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
 name: "Fairooz Nahiyan",
 title: "Seeking M.Sc. Opportunities",
 subtitle: "Medical Image Analysis Researcher",
 //institution: "International Islamic University of Chittagong(Graduated December, 2025)",
  // description:
  //   "I'm a CSE graduate from <a href='https://www.iiuc.ac.bd'>International Islamic University of Chittagong</a> working on medical image analysis with a focus on deep learning-based segmentation and classification in gastrointestinal and dermatological imaging. My core interests include semi-supervised and weakly supervised learning for annotation-scarce clinical settings, uncertainty estimation and entropy-based regularization in deep models, and parameter-efficient adaptation of vision foundation models for healthcare tasks.",
description: `
  <div style="font-style:italic; border-left: 2px solid #e4e0d8; padding-left: 1.25rem; margin-bottom: 2rem;">
    <p>"A jack of all trades is a master of none, but oftentimes better than a master of one." - and I have made peace with being exactly that, on my way to becoming something more.</p>
  </div>

  <div style="display:flex; flex-direction:column; gap:1.5rem;">

    <p>I have competed at global hackathons, taught programming, led IEEE chapters, built mobile apps, studied language models, and published research on clinical imaging;  not because I lacked focus, but because every domain taught me something the others could not. That breadth is now converging into a single, deliberate direction: <strong>medical image analysis</strong>.</p>

    <p>My research focuses on teaching models to detect and segment what trained clinical eyes spend years learning to see in settings where labeled data is scarce and the cost of being wrong is high. I work across gastrointestinal and dermatological imaging, with a particular interest in semi-supervised learning, uncertainty estimation, and vision foundation model adaptation for clinical tasks.</p>

    <p>I completed my B.Sc. at <a href='https://www.iiuc.ac.bd'>IIUC</a> and am currently conducting <strong>independent research in collaboration with researchers across different institutions</strong>. Four papers are published or under review at venues including BMVC, MIET, and ICCA.</p>

    <p>I am actively seeking a <strong>Master's position</strong> to pursue this work with the infrastructure and mentorship it deserves. If your group works on medical imaging or label-efficient deep learning, I would love to connect.</p>

  </div>
`,
  email: "fairooznahiyangrad@gmail.com",
  imageUrl: meImage,
  googleScholarUrl: "https://scholar.google.com/citations?user=rH3XPNIAAAAJ&hl=en",
  githubUsername: "Fairooz14",
  linkedinUsername: "fairooznahiyan",
  institutionUrl: "https://www.iiuc.ac.bd",
  cvUrl: "https://drive.google.com/file/d/1_a0EtTIKrBMiGagAN1DCUIjLnXIwRApR/view?usp=sharing",
  // blogUrl: "https://",
  // twitterUsername: "",
  // altName: "",
  // secretDescription: "",
};