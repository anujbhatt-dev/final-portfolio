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
      href: "https://github.com/your-username",
      icon: IconBrandGithub,
      label: "GitHub",
    },
    {
      href: "https://youtube.com/@your-channel",
      icon: IconBrandYoutube,
      label: "YouTube",
    },
    {
      href: "https://instagram.com/your-handle",
      icon: IconBrandInstagram,
      label: "Instagram",
    },
    {
      href: "https://twitter.com/your-handle",
      icon: IconBrandX,
      label: "Twitter",
    },
    {
      href: "https://linkedin.com/in/your-profile",
      icon: IconBrandLinkedin,
      label: "LinkedIn",
    },
    {
      href: "https://linkedin.com/in/your-profile",
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
          key={label}
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
          <Icon className="hover:text-white transition-all duration-75 hover:scale-125" />
        </motion.a>
      ))}
    </motion.div>
  )
}
