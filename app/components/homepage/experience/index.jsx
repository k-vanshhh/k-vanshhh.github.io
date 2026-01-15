// @flow strict

import { experiences } from "@/utils/data/experience";
import { BsBriefcase, BsBoxArrowUpRight } from "react-icons/bs";

function Experience() {
  return (
    <section id="experience" className="max-w-5xl mx-auto px-6 mb-12 space-y-6">
      <div className="flex items-center gap-2 pb-2 border-b border-zinc-800">
        <BsBriefcase className="text-zinc-500" size={18} />
        <h2 className="text-lg font-medium text-zinc-100 tracking-tight">Experience</h2>
      </div>

      <div className="relative pl-8 border-l border-zinc-800 space-y-8">
        {experiences.map((experience) => (
          <div key={experience.id} className="relative">
            <span className="absolute -left-[37px] top-1 h-3 w-3 rounded-full border-2 border-zinc-900 bg-zinc-600"></span>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <h3 className="text-zinc-100 font-medium">{experience.title}</h3>
              <span className="text-xs font-mono text-zinc-500 bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded w-fit mt-1 sm:mt-0">
                {experience.company}
              </span>
            </div>

            <div className="text-xs text-zinc-500 mb-3 flex gap-4 items-center">
              <span>{experience.duration}</span>
              {experience.certificate && (
                <a href={experience.certificate} target="_blank" rel="noopener noreferrer" className="text-emerald-500 hover:text-emerald-400 font-medium flex items-center gap-1 transition-colors">
                  Certificate
                  <BsBoxArrowUpRight size={10} />
                </a>
              )}
            </div>

            {experience.description && (
              <ul className="list-disc list-outside ml-4 text-sm text-zinc-400 space-y-1.5 marker:text-zinc-600">
                {experience.description.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;