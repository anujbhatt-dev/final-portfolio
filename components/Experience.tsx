import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { anton, geistMono, inter, poppins } from "@/utils/fonts";
import { Poppins } from "next/font/google";

export default function Experience() {
  const data = [
    {
      title: "Full Stack Developer",
      content: (
        <div className="">
          <div className="font-normal text-neutral-800 md:text-sm dark:text-neutral-200 flex justify-between text-lg mb-12">
            <div className="text-lg uppercase text-neutral-400">
              Toouk, Dubai
            </div>
            <div className="text-sm uppercase text-neutral-400">
              Aug 2024 - Present
            </div>
          </div>
          <ul className="list-disc pl-8 mb-12 text-neutral-500">
            <li className="text-[16px] mb-4 leading-[24px]">
              Building a modern ecosystem of real-world asset tokenization (RWA), 
              staking, referral system, and marketplace architecture using 
              Next.js, Node.js, PostgreSQL, Prisma, Strapi, and AWS.
            </li>
            <li className="text-[16px] mb-4 leading-[24px]">
              Developed full product modules including authentication, 
              KYC onboarding, staking packages, referral tracking,
              encrypted wallet flows, and admin dashboards.
            </li>
            <li className="text-[16px] mb-4 leading-[24px]">
              Implemented scalable backend APIs, database schemas, and 
              multi-environment deployments across Vercel, Plesk, and Strapi Cloud.
            </li>
          </ul>
          <div className="hidden">
            <img
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-auto w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Full Stack Developer",
      content: (
        <div className="">
          <div className="font-normal text-neutral-800 md:text-sm dark:text-neutral-200 flex justify-between text-lg mb-12">
            <div className="text-lg uppercase text-neutral-400">
              Apex Software, Dubai
            </div>
            <div className="text-sm uppercase text-neutral-400">
              Sept 2024 - Present
            </div>
          </div>
          <ul className="list-disc pl-8 mb-12 text-neutral-500">
            <li className="text-[16px] mb-4 leading-[24px]">
              Developed and maintained web applications using React, Next.js, and
              TypeScript.
            </li>
            <li className="text-[16px] mb-4 leading-[24px]">
              Implemented responsive design and optimized performance for better
              user experience.
            </li>
          </ul>
          <div className="hidden">
            <img
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-auto w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Frontend Developer",
      content: (
        <div>
          <div className="font-normal text-neutral-800 md:text-sm dark:text-neutral-200 flex justify-between text-lg mb-12">
            <div className="text-lg uppercase text-neutral-400">
              Vedship Innovations, Remote
            </div>
            <div className="text-sm uppercase text-neutral-400">
              March 2021 - December 2023
            </div>
          </div>
          <ul className="list-disc pl-8 mb-12 text-neutral-500">
            <li className="text-[16px] mb-4 leading-[24px]">
              Built scalable, interactive web apps using React.js, Redux, and
              modern tech, with a focus on responsive design and performance
              optimization.
            </li>
            <li className="text-[16px] mb-4 leading-[24px]">
              Led end-to-end project development, from UI/UX design to frontend
              coding and backend integration, enhancing user engagement and
              satisfaction.
            </li>
          </ul>
          <div className="hidden">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="startup template"
              width={500}
              height={500}
              className="h-auto w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  
  return (
    <div className={`${geistMono.className} relative w-full overflow-clip`}>
      <Timeline data={data} />
    </div>
  );
}
