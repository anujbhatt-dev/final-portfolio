import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconBrandX, IconBrandYoutube, IconMail } from "@tabler/icons-react";

const SideSocialIcons = () => {
  return (
    <div className="hidden lg:flex flex-col items-center gap-y-2 lg:gap-y-4 ">
      <a
        href={process.env.NEXT_PUBLIC_GITHUB}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="mk-side-elements-item"
      >
        <IconBrandGithub className={`hover:text-green-500 transition-all duration-75 hover:scale-125`} />
      </a>
      {/* <a
        href={process.env.NEXT_PUBLIC_YOUTUBE}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="YouTube"
        className="mk-side-elements-item"
      >
        <IconBrandYoutube className={`hover:text-green-500 transition-all duration-75 hover:scale-125`} />
      </a> */}

      <a
        href={process.env.NEXT_PUBLIC_INSTAGRAM}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="mk-side-elements-item"
      >
        <IconBrandInstagram  className={`hover:text-green-500 transition-all duration-75 hover:scale-125`} />
      </a>

      <a
        href={process.env.NEXT_PUBLIC_X}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
        className="mk-side-elements-item"
      >
        <IconBrandX  className={`hover:text-green-500 transition-all duration-75 hover:scale-125`} />
      </a>

      <a
        href={process.env.NEXT_PUBLIC_LINKEDIN}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="mk-side-elements-item"
      >
        <IconBrandLinkedin  className={`hover:text-green-500 transition-all duration-75 hover:scale-125`} />
      </a>

      <a
        href={process.env.NEXT_PUBLIC_EMAIL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Email"
        className="mk-side-elements-item"
      >
        <IconMail className={`hover:text-green-500 transition-all duration-75 hover:scale-125`} />
      </a>

      <div className="h-12 lg:h-24 bg-white/60 w-[1px]  " />
    </div>
  );
};

export default SideSocialIcons;
