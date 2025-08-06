"use client"

import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  IconBrandYoutube,
  IconMail,
} from "@tabler/icons-react"
import { motion, Variants } from "framer-motion"

const iconVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
      ease: "easeOut",
    },
  }),
  exit: (i: number = 0) => ({
    opacity: 0,
    y: 10,
    transition: {
      delay: i * 0.05,
      duration: 0.2,
      ease: "easeIn",
    },
  }),
}

export default function SocialMedia() {
  const socialLinks = [
    {
      href:process.env.NEXT_PUBLIC_GITHUB,
      icon: IconBrandGithub,
      label: "GitHub",
    },
    // {
    //   href:process.env.NEXT_PUBLIC_YOUTUBE,
    //   icon: IconBrandYoutube,
    //   label: "YouTube",
    // },
    {
      href:process.env.NEXT_PUBLIC_INSTAGRAM,
      icon: IconBrandInstagram,
      label: "Instagram",
    },
    {
      href:process.env.NEXT_PUBLIC_X,
      icon: IconBrandX,
      label: "Twitter",
    },
    {
      href:process.env.NEXT_PUBLIC_LINKEDIN,
      icon: IconBrandLinkedin,
      label: "LinkedIn",
    },
    {
      href:process.env.NEXT_PUBLIC_EMAIL,
      icon: IconMail,
      label: "LinkedIn",
    },
  ]

  return (
    <motion.div
      key="social"
      className="flex items-center gap-x-4"
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {socialLinks.map(({ href, icon: Icon, label }, i) => (
        <motion.a
          key={label+i}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="mk-side-elements-item"
          custom={i}
          variants={iconVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <Icon className="hover:text-green-500  transition-all duration-75 hover:scale-125 cursor-pointer" />
        </motion.a>
      ))}
    </motion.div>
  )
}
