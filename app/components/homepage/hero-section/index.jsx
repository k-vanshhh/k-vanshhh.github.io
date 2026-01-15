// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdDownload } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";

function HeroSection() {
  return (
    <section className="pt-32 pb-10 md:pb-16 animate-fade-in-up max-w-5xl mx-auto px-6">
      <div className="flex flex-col-reverse md:flex-row gap-8 justify-between items-start md:items-center">
        <div className="space-y-6 flex-1">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-medium tracking-tight text-zinc-100 leading-[1.1]">
              Building intelligent systems and cross-platform experiences.
            </h1>
            <p className="text-lg text-zinc-400 max-w-xl leading-relaxed font-light">
              I&apos;m <span className="text-zinc-100 font-normal">{personalData.name}</span>, a Computer Science undergraduate at Thapar Institute. I specialize in Full Stack development and Machine Learning.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href={personalData.resume} target="_blank" className="group inline-flex items-center gap-2 bg-zinc-100 text-zinc-950 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-white transition-all active:scale-95">
              Download Resume
              <MdDownload size={16} className="group-hover:translate-y-0.5 transition-transform" />
            </Link>
            <Link href={personalData.github} target="_blank" className="group inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 text-zinc-300 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-zinc-800 hover:text-white transition-all active:scale-95">
              <BsGithub size={16} />
              GitHub
            </Link>
            <Link href={personalData.linkedIn} target="_blank" className="group inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 text-zinc-300 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-zinc-800 hover:text-white transition-all active:scale-95">
              <BsLinkedin size={16} />
              LinkedIn
            </Link>
            <Link href={personalData.leetcode} target="_blank" className="group inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 text-zinc-300 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-zinc-800 hover:text-white transition-all active:scale-95">
              <SiLeetcode size={16} />
              LeetCode
            </Link>
          </div>
        </div>

        {/* Profile Image */}
        <div className="relative shrink-0 self-start md:self-center">
          <div className="group w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border border-zinc-700 bg-zinc-800 shadow-2xl relative">
            <Image
              src={personalData.profile}
              alt={personalData.name}
              width={200}
              height={200}
              className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;