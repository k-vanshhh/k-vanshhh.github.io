// @flow strict

import * as React from 'react';
import { BsBoxArrowUpRight } from "react-icons/bs";
import { FaCode } from "react-icons/fa";
import Link from 'next/link';

function ProjectCard({ project }) {

  return (
    <Link href={project.code || '#'} target="_blank" className="group relative p-6 rounded-2xl bg-zinc-900/20 border border-zinc-800 hover:bg-zinc-900/40 hover:border-zinc-700 transition duration-300 overflow-hidden block h-full">
      {/* Gradient Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
          <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-100">
            <FaCode size={20} />
          </div>
          <div className="text-zinc-600 group-hover:text-zinc-100 transition-colors">
            <BsBoxArrowUpRight size={18} />
          </div>
        </div>

        <h3 className="text-zinc-100 font-medium text-base mb-2">{project.name}</h3>
        <p className="text-sm text-zinc-500 mb-6 flex-grow leading-relaxed line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-400 font-mono">
          {project.tools.map((tool, i) => (
            <span key={i} className="flex items-center gap-1">
              <span className={`w-1.5 h-1.5 rounded-full ${['bg-red-500', 'bg-green-500', 'bg-blue-500', 'bg-yellow-500'][i % 4]}`}></span>
              {tool}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;