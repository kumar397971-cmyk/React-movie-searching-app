import React from 'react';
import { useState, useEffect } from "react";



// ─── Data ───────────────────────────────────────────────────────────────────
const skills = [
  { name: "React", level: 90, color: "bg-cyan-400" },
  { name: "Tailwind CSS", level: 85, color: "bg-teal-400" },
  { name: "JavaScript", level: 88, color: "bg-yellow-400" },
  { name: "Node.js", level: 75, color: "bg-green-400" },
  { name: "TypeScript", level: 70, color: "bg-blue-400" },
  { name: "REST APIs", level: 80, color: "bg-purple-400" },
];

const timeline = [
  {
    year: "2021",
    title: "Started Coding",
    desc: "Picked up HTML & CSS, built first static websites.",
    icon: "🌱",
  },
  {
    year: "2022",
    title: "JavaScript Deep Dive",
    desc: "Mastered ES6+, async/await, and DOM manipulation.",
    icon: "⚡",
  },
  {
    year: "2023",
    title: "React & Frameworks",
    desc: "Built full-stack apps with React, Node, and databases.",
    icon: "⚛️",
  },
  {
    year: "2024",
    title: "Open Source & Jobs",
    desc: "Contributed to open source and landed first dev role.",
    icon: "🚀",
  },
  {
    year: "2025",
    title: "Full-Stack Engineer",
    desc: "Leading projects, mentoring juniors, learning every day.",
    icon: "🏆",
  },
];

const stats = [
  { label: "Projects Built", value: "40+" },
  { label: "GitHub Commits", value: "1.2k" },
  { label: "Cups of Coffee", value: "∞" },
  { label: "Years Coding", value: "4+" },
];

// ─── Animated Skill Bar ──────────────────────────────────────────────────────
function SkillBar({ name, level, color, delay }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setWidth(level), 300 + delay);
    return () => clearTimeout(timer);
  }, [level, delay]);

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-semibold text-slate-300">{name}</span>
        <span className="text-sm text-slate-400">{level}%</span>
      </div>
      <div className="w-full bg-slate-700 rounded-full h-2.5 overflow-hidden">
        <div
          className={`${color} h-2.5 rounded-full transition-all duration-1000 ease-out`}
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

// ─── Section Heading ─────────────────────────────────────────────────────────
function SectionHeading({ label, title }) {
  return (
    <div className="mb-10 text-center">
      <span className="text-xs font-bold tracking-[0.3em] text-cyan-400 uppercase">
        {label}
      </span>
      <h2 className="mt-2 text-3xl font-extrabold text-white">{title}</h2>
      <div className="mx-auto mt-3 h-0.5 w-16 rounded bg-gradient-to-r from-cyan-400 to-teal-400" />
    </div>
  );
}

// ─── Main About Page ─────────────────────────────────────────────────────────

const About = () => {
  const [activeTab, setActiveTab] = useState("skills")

  return (
    <div className="min-h-screen bg-zinc-800 text-white font-sans">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden px-6 py-24 text-center">
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-0 w-72 h-72 rounded-full bg-teal-500/10 blur-2xl" />

        {/* Avatar */}
        <div className="relative mx-auto mb-6 w-32 h-32">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 to-teal-500 animate-pulse opacity-60" />
          <div className="relative flex items-center justify-center w-32 h-32 rounded-full bg-slate-800 border-4 border-cyan-400 text-5xl select-none">
            👨‍💻
          </div>
        </div>

        {/* Name & role */}
        <h1 className="text-5xl font-black tracking-tight">
          Alex{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
            Morgan
          </span>
        </h1>
        <p className="mt-2 text-lg text-slate-400 font-medium">
          Full-Stack Developer · React Enthusiast · Open Source Contributor
        </p>

        {/* Badge strip */}
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {["React", "Tailwind CSS", "Node.js", "TypeScript"].map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-xs font-semibold text-cyan-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <button className="rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 px-7 py-3 text-sm font-bold text-slate-900 shadow-lg hover:scale-105 transition-transform">
            Download CV
          </button>
          <button className="rounded-full border border-slate-600 px-7 py-3 text-sm font-bold text-slate-300 hover:border-cyan-400 hover:text-cyan-400 transition-colors">
            Contact Me
          </button>
        </div>
      </section>

      {/* ── Stats Row ── */}
      <section className="border-y border-slate-800 bg-slate-800/40 px-6 py-10">
        <div className="mx-auto grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map(({ label, value }) => (
            <div key={label} className="text-center">
              <p className="text-3xl font-black text-cyan-400">{value}</p>
              <p className="mt-1 text-xs text-slate-400 uppercase tracking-widest">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── About Me Bio ── */}
      <section className="mx-auto max-w-3xl px-6 py-20">
        <SectionHeading label="Who I Am" title="About Me" />
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-700 bg-slate-800/60 p-6">
            <p className="text-slate-300 leading-relaxed text-sm">
              Hi! I'm Alex, a passionate full-stack developer who loves building
              elegant, performant web experiences. I believe in writing clean
              code, continuous learning, and the power of open source.
            </p>
            <p className="mt-4 text-slate-300 leading-relaxed text-sm">
              When I'm not coding, you'll find me reading tech blogs, hiking, or
              experimenting with new frameworks. I enjoy turning complex problems
              into simple, beautiful solutions.
            </p>
          </div>

          {/* Info card */}
          <div className="rounded-2xl border border-slate-700 bg-slate-800/60 p-6 space-y-3">
            {[
              ["📍", "Location", "San Francisco, CA"],
              ["🎓", "Education", "Bca Computer Science"],
              ["💼", "Experience", "4+ Years"],
              ["🌐", "Languages", "English,hindi, gujrati"],
              ["📧", "Email", "ravi@example.com"],
            ].map(([icon, key, val]) => (
              <div key={key} className="flex items-center gap-3 text-sm">
                <span className="text-base">{icon}</span>
                <span className="text-slate-500 w-24">{key}</span>
                <span className="text-slate-200 font-medium">{val}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Skills / Timeline Tabs ── */}
      <section className="mx-auto max-w-3xl px-6 pb-20">
        <SectionHeading label="Expertise" title="Skills & Journey" />

        {/* Tabs */}
        <div className="flex justify-center mb-8 gap-2">
          {["skills", "timeline"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-6 py-2 text-sm font-semibold capitalize transition-all ${activeTab === tab
                  ? "bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-900 shadow"
                  : "border border-slate-600 text-slate-400 hover:border-cyan-400 hover:text-cyan-400"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Skills Panel */}
        {activeTab === "skills" && (
          <div className="rounded-2xl border border-slate-700 bg-slate-800/60 p-6 animate-fade-in">
            {skills.map((s, i) => (
              <SkillBar key={s.name} {...s} delay={i * 100} />
            ))}
          </div>
        )}

        {/* Timeline Panel */}
        {activeTab === "timeline" && (
          <div className="relative pl-6 border-l-2 border-slate-700 space-y-8 animate-fade-in">
            {timeline.map(({ year, title, desc, icon }) => (
              <div key={year} className="relative">
                {/* dot */}
                <span className="absolute -left-[1.65rem] top-1 flex h-8 w-8 items-center justify-center rounded-full border-2 border-cyan-400 bg-slate-900 text-base">
                  {icon}
                </span>
                <div className="rounded-xl border border-slate-700 bg-slate-800/60 p-4 ml-4">
                  <span className="text-xs font-bold text-cyan-400 tracking-widest">
                    {year}
                  </span>
                  <h3 className="mt-1 font-bold text-white">{title}</h3>
                  <p className="mt-1 text-sm text-slate-400">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ── Services ── */}
      <section className="bg-slate-800/40 border-t border-slate-800 px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <SectionHeading label="What I Do" title="Services" />
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              {
                icon: "🎨",
                title: "UI Development",
                desc: "Pixel-perfect, responsive interfaces with React & Tailwind.",
              },
              {
                icon: "⚙️",
                title: "Backend APIs",
                desc: "Scalable REST/GraphQL APIs with Node.js & databases.",
              },
              {
                icon: "🔍",
                title: "Code Review",
                desc: "Thorough reviews focused on performance and best practices.",
              },
            ].map(({ icon, title, desc }) => (
              <div
                key={title}
                className="group rounded-2xl border border-slate-700 bg-slate-900 p-6 hover:border-cyan-400/60 hover:bg-slate-800 transition-all cursor-default"
              >
                <span className="text-3xl">{icon}</span>
                <h3 className="mt-3 font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {title}
                </h3>
                <p className="mt-2 text-sm text-slate-400">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-slate-800 px-6 py-8 text-center text-xs text-slate-500">
        <p>
          Built with{" "}
          <span className="text-cyan-400 font-semibold">React</span> &{" "}
          <span className="text-teal-400 font-semibold">Tailwind CSS</span> ·
          Learning Project © 2026
        </p>
      </footer>
    </div>
  );
}

export default About;