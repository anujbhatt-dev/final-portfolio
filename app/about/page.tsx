import type { Metadata } from "next";
import TopicHeading from "@/components/TopicHeading";
import { anton, geistMono } from "@/utils/fonts";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Anuj Bhatt's background as a full stack developer focused on building performant, real-time web applications.",
  keywords: [
    "About Anuj Bhatt",
    "Full stack developer profile",
    "Next.js developer experience",
    "TypeScript engineer",
    "Real-time web applications",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    type: "profile",
    url: "/about",
    title: "About | Anuj Bhatt",
    description:
      "Get to know Anuj Bhatt—a full stack developer building performant, real-time web products with Next.js, Node.js, and modern tooling.",
  },
};

export default function AboutPage() {
  const highlights = [
    "8+ years delivering shipped products across SaaS, e‑commerce, and realtime collaboration.",
    "Strong with Next.js, Node.js, PostgreSQL, Prisma, WebSockets, and serverless deployments.",
    "Design-aware developer: performance budgets, accessibility checks, and crisp UX copy baked into builds.",
  ];

  const principles = [
    "Ship small, ship often—tight feedback loops over long rewrites.",
    "Measure: real user metrics first, then polish animations and microcopy.",
    "Secure by default—auth, roles, auditing, and observability wired from sprint one.",
  ];

  const stack = [
    "Next.js / React",
    "Node.js",
    "PostgreSQL / Prisma",
    "TypeScript",
    "Tailwind",
    "AWS / Vercel",
    "WebSockets",
    "Storybook",
  ];

  return (
    <main className="px-8">
      <div className="max-w-6xl mx-auto pb-20 min-h-screen">
        <TopicHeading text="Shipping resilient products with intent" pad />

        <div className="space-y-10 lg:mt-8">
          <section className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
            <div className="space-y-4">
              <p className={`${anton.className} text-lg text-neutral-300`}>
                I’m Anuj Bhatt, a full stack developer who thrives on building
                responsive, real-time web experiences. My sweet spot is
                connecting clean frontend flows with reliable backend systems so
                teams can move fast without burning trust.
              </p>
              <p className="text-neutral-400">
                Recent work spans tokenized asset platforms, collaborative media
                streaming, and commerce builds. I’m comfortable taking products
                from zero to launch—aligning with stakeholders, mapping the
                architecture, and iterating with design and data in mind.
              </p>
            </div>
            <div
              className={`${geistMono.className} rounded-2xl border border-neutral-800/70 bg-neutral-900/40 p-5 text-sm text-neutral-300`}
            >
              <p className="text-green-400 uppercase mb-3">Highlights</p>
              <ul className="space-y-2 list-disc list-inside text-neutral-400">
                {highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-neutral-800/70 bg-black/30 p-6 backdrop-blur">
              <p className={`${geistMono.className} text-green-400 uppercase`}>
                Principles I work by
              </p>
              <ul className="mt-4 space-y-2 text-neutral-300 list-disc list-inside">
                {principles.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-neutral-800/70 bg-black/30 p-6 backdrop-blur">
              <p className={`${geistMono.className} text-green-400 uppercase`}>
                Current toolkit
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-neutral-900/70 px-3 py-2 text-xs uppercase text-neutral-200 border border-neutral-800/70"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
