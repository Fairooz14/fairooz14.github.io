import { StaticImageData } from "next/dist/shared/lib/image-external";
import publicationImage1 from "../images/1_publication.jpg";

export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string | StaticImageData;
  award?: string;
}

export const publicationData: Publication[] = [
  {
    year: "2026",
    conference: "Engineering Proceedings (MDPI)",
    title: "Advancing Colorectal Polyp Detection in Colonoscopy Through Region-Guided Deep Learning",
    //authors: "Nahiyan, F.*; Nahar, S.; Alam, T.; Khaliluzzaman, M.; Hassan, M.M.",
    authors: "Fairooz Nahiyan*, Simoon Nahar, Taslim Alam, Md. Khaliluzzaman, Mohammed Mahadi Hassan",
    paperUrl: "https://www.mdpi.com/2673-4591/124/1/118",
    tldr: "A region-guided deep learning framework for improved colorectal polyp detection in colonoscopy images. Published in Eng. Proc. 2026, 124, 118.",
    imageUrl: publicationImage1,
    award: "📖 Peer-Reviewed",
  },
  // {
  //   year: "2026",
  //   conference: "MIET 2026 (Under Review)",
  //   title: "Entropy-Gated Semi-Supervised Learning for Gastrointestinal Endoscopy Classification with Uncertainty Decomposition",
  //   authors: "Nahiyan, F.*; et al.",
  //   tldr: "Semi-supervised classification for GI endoscopy leveraging entropy-gating and aleatoric/epistemic uncertainty decomposition.",
  //   award: "⏳ Under Review · Decision: June 30, 2026",
  // },
  // {
  //   year: "2026",
  //   conference: "ICCA 2026 (Under Review)",
  //   title: "Multi-Branch Late Fusion for Fine-Grained Emotion Recognition in Low-Resource Chittagong Bangla",
  //   authors: "Nahiyan, F.*; et al.",
  //   tldr: "Multi-branch late fusion architecture for emotion recognition in an under-resourced Bangla dialect.",
  //   award: "⏳ Under Review · Decision: Aug 5, 2026",
  // },
  // {
  //   year: "2026",
  //   conference: "BMVC 2026 (Under Review)",
  //   title: "MSSE-Net: Uncertainty-Aware MobileNet Swin Squeeze-Excitation Network for Dermoscopic Lesion Segmentation",
  //   authors: "Mahin, M.; Nahiyan, F.*; Tasnim, F.",
  //   tldr: "Lightweight uncertainty-aware hybrid network combining MobileNet and Swin Transformer for dermoscopic skin lesion segmentation.",
  //   award: "⏳ Under Review · Decision: Aug 7, 2026",
  // },
];