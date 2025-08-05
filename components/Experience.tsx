import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { anton, geistMono, inter, poppins } from "@/utils/fonts";
import { Poppins } from "next/font/google";

export default function Experience() {
  const data = [
    {
      title: "Designation",
      content: (
        <div className="">
          <div className="font-normal text-neutral-800 md:text-sm dark:text-neutral-200 flex justify-between text-lg mb-12">
               <div className="text-xl uppercase text-neutral-500">
                    Company name
               </div>
               <div className="text-xl uppercase text-neutral-500">
                    From date - To Date
               </div>
          </div>
          <ul className="list-disc pl-8 mb-12 text-neutral-500">
            <li  className="text-[16px] mb-4 leading-[24px]">
                 Responsibility 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, tempora.
            </li>
            <li  className="text-[16px] mb-4 leading-[24px]">
                Responsibility 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, tempora.
            </li>
            <li  className="text-[16px] mb-4 leading-[24px]">
                Responsibility 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, tempora.
            </li>

          </ul>
          <div className="">
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
      title: "Designation",
      content: (
        <div>
          <div className="font-normal text-neutral-800 md:text-sm dark:text-neutral-200 flex justify-between text-lg mb-12">
               <div className="text-xl uppercase text-neutral-500">
                    Company name
               </div>
               <div className="text-xl uppercase text-neutral-500">
                    From date - To Date
               </div>
          </div>
          <ul className="list-disc pl-8 mb-12 text-neutral-500">
            <li  className="text-[16px] mb-4 leading-[24px]">
                 Responsibility 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, tempora.
            </li>
            <li  className="text-[16px] mb-4 leading-[24px]">
                Responsibility 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, tempora.
            </li>
            <li  className="text-[16px] mb-4 leading-[24px]">
                Responsibility 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, tempora.
            </li>

          </ul>
          <div className="">
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
    {
      title: "Designation",
      content: (
        <div>
          <div className="font-normal text-neutral-800 md:text-sm dark:text-neutral-200 flex justify-between text-lg mb-12">
               <div className="text-xl uppercase text-neutral-500">
                    Company name
               </div>
               <div className="text-xl uppercase text-neutral-500">
                    From date - To Date
               </div>
          </div>
          <ul className="list-disc pl-8 mb-12 text-neutral-500">
            <li  className="text-[16px] mb-4 leading-[24px]">
                 Responsibility 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, tempora.
            </li>
            <li  className="text-[16px] mb-4 leading-[24px]">
                Responsibility 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, tempora.
            </li>
            <li  className="text-[16px] mb-4 leading-[24px]">
                Responsibility 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, tempora.
            </li>

          </ul>
          <div className="">
            <img
              src="https://assets.aceternity.com/features-section.png"
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
