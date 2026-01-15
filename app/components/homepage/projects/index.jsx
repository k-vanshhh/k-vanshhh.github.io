import { projectsData } from '@/utils/data/projects-data';
import ProjectCard from './project-card';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const Projects = () => {

  return (
    <section id='projects' className="max-w-5xl mx-auto px-6 mb-12 space-y-6">
      <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
        <h2 className="text-lg font-medium text-zinc-100 tracking-tight">Selected Projects</h2>
        <Link href="https://github.com/k-vanshhh" target="_blank" className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors flex items-center gap-1">
          View all <FaArrowRight />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projectsData.slice(0, 4).map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;