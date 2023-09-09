/* eslint-disable @next/next/no-img-element */
import {
  LucideProps,
  Moon,
  SunMedium,
  Instagram,
  Github,
  Linkedin,
  // @ts-ignore
  type Icon as LucideIcon,
} from 'lucide-react';

export type Icon = LucideIcon;

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  instagram: Instagram,
  linkedin: Linkedin,
  github: Github,
  // logo: (props: LucideProps) => (
  //   <img src={logo.src} width={100} alt="logo" {...props} />
  // ),
};
