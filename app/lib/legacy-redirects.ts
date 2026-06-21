import { ambassadors } from "../data/ambassadors";

type LegacyRedirect = {
  source: string;
  destination: string;
  permanent: true;
};

const redirects: LegacyRedirect[] = [
  { source: "/about-1", destination: "/about", permanent: true },
  { source: "/adoption", destination: "/adopt-a-bird", permanent: true },
  { source: "/camp", destination: "/summer-camp", permanent: true },
  { source: "/our-staff", destination: "/staff", permanent: true },
  { source: "/our-board", destination: "/board", permanent: true },
  { source: "/raptor-tours", destination: "/visit#raptor-tours", permanent: true },
  { source: "/raptor-adventures-summer-camp", destination: "/summer-camp", permanent: true },
  { source: "/education-programs", destination: "/education", permanent: true },
  { source: "/avianambassadors", destination: "/ambassadors", permanent: true },
  { source: "/how-you-can-protect-wildlife", destination: "/protect-wildlife", permanent: true },
  { source: "/what-to-do-if-you-find-a-baby-bird", destination: "/rescue/baby-birds", permanent: true },
  { source: "/how-to-handle-an-injured-raptor", destination: "/rescue#safe-recovery", permanent: true },
  { source: "/volunteer", destination: "/make-a-difference#volunteer", permanent: true },
  { source: "/givingtuesday", destination: "/giving-tuesday", permanent: true },
  { source: "/takingflight", destination: "/newsletter", permanent: true },
  { source: "/giftshop", destination: "/shop", permanent: true },
  { source: "/store", destination: "/shop", permanent: true },
  ...ambassadors.map((bird) => ({
    source: bird.sourcePath,
    destination: `/ambassadors#bird-${bird.slug}`,
    permanent: true as const,
  })),
];

export const legacyRedirects = redirects;
