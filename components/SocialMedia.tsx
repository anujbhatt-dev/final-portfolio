import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconBrandX, IconBrandYoutube } from "@tabler/icons-react";

export default function SocialMedia() {
  return (
    <div className=" flex items-center gap-x-4 ">
      <a
        href="https://github.com/your-username"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="mk-side-elements-item"
      >
        <IconBrandGithub className={`hover:text-white transition-all duration-75 hover:scale-125`} />
      </a>
      <a
        href="https://youtube.com/@your-channel"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="YouTube"
        className="mk-side-elements-item"
      >
        <IconBrandYoutube className={`hover:text-white transition-all duration-75 hover:scale-125`} />
      </a>

      <a
        href="https://instagram.com/your-handle"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="mk-side-elements-item"
      >
        <IconBrandInstagram  className={`hover:text-white transition-all duration-75 hover:scale-125`} />
      </a>

      <a
        href="https://twitter.com/your-handle"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
        className="mk-side-elements-item"
      >
        <IconBrandX  className={`hover:text-white transition-all duration-75 hover:scale-125`} />
      </a>

      <a
        href="https://linkedin.com/in/your-profile"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="mk-side-elements-item"
      >
        <IconBrandLinkedin  className={`hover:text-white transition-all duration-75 hover:scale-125`} />
      </a>
    </div>
  )
}
