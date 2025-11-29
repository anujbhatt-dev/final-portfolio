import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import {
  IconArrowUpRight,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  IconMail,
} from "@tabler/icons-react";
import { anton, geistMono } from "@/utils/fonts";
import TopicHeading from "@/components/TopicHeading";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Anuj Bhatt for collaboration, freelance opportunities, or questions about full stack web development.",
  keywords: [
    "Contact Anuj Bhatt",
    "Hire full stack developer",
    "Freelance Next.js developer",
    "Software engineer Dubai",
    "Web developer collaboration",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    type: "website",
    url: "/contact",
    title: "Contact | Anuj Bhatt",
    description:
      "Reach out to Anuj Bhatt to discuss projects, collaborations, or speaking opportunities in full stack web development.",
  },
};

export default function ContactPage() {
  const socialLinks = [
    {
      href: process.env.NEXT_PUBLIC_GITHUB,
      icon: IconBrandGithub,
      label: "GitHub",
    },
    {
      href: process.env.NEXT_PUBLIC_INSTAGRAM,
      icon: IconBrandInstagram,
      label: "Instagram",
    },
    {
      href: process.env.NEXT_PUBLIC_X,
      icon: IconBrandX,
      label: "Twitter",
    },
    {
      href: process.env.NEXT_PUBLIC_LINKEDIN,
      icon: IconBrandLinkedin,
      label: "LinkedIn",
    },
    {
      href: process.env.NEXT_PUBLIC_EMAIL,
      icon: IconMail,
      label: "Email",
    },
  ];

  const blurbs: Record<string, { blurb: string; emphasis: string }> = {
    GitHub: {
      blurb: "Browse code, architecture notes, and open-source work.",
      emphasis: "Code",
    },
    Instagram: {
      blurb: "Behind-the-scenes drops and design-first experiments.",
      emphasis: "Creative",
    },
    Twitter: {
      blurb: "DMs open for quick questions and collaboration threads.",
      emphasis: "Fast lane",
    },
    LinkedIn: {
      blurb: "Let’s connect professionally and talk roadmaps.",
      emphasis: "Networking",
    },
    Email: {
      blurb: "Direct line for projects, gigs, or advisory work.",
      emphasis: "Preferred",
    },
  };

  return (
    <main className="px-4 lg:px-8 ">
      <div className="max-w-6xl mx-auto  pb-20 min-h-screen">
        <TopicHeading text="Let's make something that ships" pad />
        <div className="">
          <div className={`${anton.className} text-lg text-neutral-400`}>
            Drop a line. I respond within 24 hours to ship-ready briefs,
            prototyping help, or long-term builds.
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {socialLinks.map(({ label, href, icon: Icon }) => {
              const copy = blurbs[label] ?? {
                blurb: "Reach out to collaborate.",
                emphasis: "Connect",
              };

              const sanitizedHref =
                label === "Email"
                  ? href
                    ? href.startsWith("mailto:")
                      ? href
                      : `mailto:${href}`
                    : "mailto:hello@example.com"
                  : href || "#";

              return (
                <Link
                  key={label}
                  href={sanitizedHref}
                  target="_blank"
                  rel="noreferrer nofollow"
                  className="group relative overflow-hidden rounded-2xl border border-neutral-800/80 bg-black/30 p-6 backdrop-blur transition-all duration-300 hover:border-green-500/70 hover:-translate-y-[2px]"
                  aria-label={`Reach out on ${label}`}
                >
                  <div className="flex items-start justify-between gap-x-4">
                    <div className="flex items-center gap-x-3">
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-900/80 text-neutral-200 transition-all duration-200 group-hover:text-green-400 group-hover:shadow-[0_0_0_1px_rgba(74,222,128,0.3)]">
                        <Icon className="h-6 w-6" />
                      </span>
                      <div>
                        <p className="text-base font-semibold text-white">
                          {label}
                        </p>
                        <p className="text-sm text-neutral-400">
                          {copy.blurb}
                        </p>
                      </div>
                    </div>
                    <IconArrowUpRight className="h-5 w-5 text-neutral-500 transition-all duration-200 group-hover:text-green-400 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
                  </div>
                  <div
                    className={`${geistMono.className} mt-4 inline-block rounded-full border border-neutral-800/70 px-3 py-1 text-xs uppercase text-green-400`}
                  >
                    {copy.emphasis}
                  </div>
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-green-500/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </Link>
              );
            })}
          </div>

          <div
            className={`${geistMono.className} mt-12 flex flex-wrap items-center gap-4 rounded-2xl border border-dashed border-neutral-800/70 bg-neutral-900/40 p-5 text-xs uppercase text-neutral-400`}
          >
            <span className="rounded-full bg-neutral-800/80 px-3 py-1 text-white">
              Based in Dubai
            </span>
            <span className="rounded-full bg-neutral-800/80 px-3 py-1">
              Available for remote work
            </span>
            <span className="rounded-full bg-neutral-800/80 px-3 py-1 text-green-400">
              Response time: &lt; 24h
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
