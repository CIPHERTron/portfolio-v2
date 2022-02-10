import {
  FaDev,
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaTwitch,
  FaFileAlt,
} from "react-icons/fa";

import type { MotionLinkProps } from "./types";

export const wrapperAnimationProps = {
  variants: {
    before: { y: 0, opacity: 0, transition: { type: "spring" } },
    after: { y: 20, opacity: 1, transition: { type: "spring" } },
  },
  initial: "before",
  animate: "after",
};

export const staggerAnimationProps = {
  variants: {
    before: {},
    after: { transition: { staggerChildren: 0.06 } },
  },
  initial: "before",
  animate: "after",
};

export const childAnimationProps = {
  variants: {
    before: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 16,
        stiffness: 200,
      },
    },
    after: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 16,
        stiffness: 200,
      },
    },
  },
};

export const socialLinks: Array<MotionLinkProps> = [
  {
    platformName: "GitHub",
    url: "https://github.com/CIPHERTron",
    icon: FaGithub,
  },
  {
    platformName: "Resume",
    url: "https://drive.google.com/file/d/1qTBwrCZ6U41dMrBcynNOB6VwBeOJxntP/view",
    icon: FaFileAlt,
  },
  {
    platformName: "LinkedIn",
    url: "https://linkedin.com/in/pritishsamal",
    icon: FaLinkedin,
  },
  {
    platformName: "Twitter",
    url: "https://twitter.com/PritishSamal11",
    icon: FaTwitter,
  },
  {
    platformName: "dev.to",
    url: "https://dev.to/ciphertron",
    icon: FaDev,
  },
  {
    platformName: "Mail ID",
    url: "mailto:pritish.samal918@gmail.com",
    icon: FaEnvelope,
  },
  {
    platformName: "Instagram",
    url: "https://instagram.com/pritish__007",
    icon: FaInstagram,
  },
  {
    platformName: "Twitch",
    url: "https://twitch.tv/pritishsamal/",
    icon: FaTwitch,
  },
];
