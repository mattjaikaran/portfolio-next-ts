/* eslint-disable @next/next/no-img-element */
import {
  LucideProps,
  Moon,
  SunMedium,
  Instagram,
  Github,
  Undo2,
  Linkedin,
  // @ts-ignore
  type Icon as LucideIcon,
  Loader2,
} from 'lucide-react';

export type Icon = LucideIcon;

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  instagram: Instagram,
  linkedin: Linkedin,
  github: Github,
  spinner: Loader2,
  undo: Undo2,
  // logo: (props: LucideProps) => (
  //   <img src={logo.src} width={100} alt="logo" {...props} />
  // ),
};
