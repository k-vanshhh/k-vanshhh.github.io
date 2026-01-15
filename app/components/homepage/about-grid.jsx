// @flow strict
import { personalData } from "@/utils/data/personal-data";
import { skillsData } from "@/utils/data/skills";
import { BsCpu, BsPerson } from "react-icons/bs";

function AboutGrid() {
    return (
        <section id="about" className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* About Card */}
            <div className="md:col-span-2 p-6 rounded-2xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/50 transition duration-300">
                <div className="flex items-center gap-2 mb-4 text-zinc-100">
                    <BsPerson className="text-zinc-500" size={16} />
                    <h2 className="text-sm font-medium uppercase tracking-wider text-zinc-500">About Me</h2>
                </div>
                <p className="text-zinc-400 leading-relaxed text-sm mb-4">
                    I am a Computer Science undergraduate focused on building practical software systems that solve real problems. I enjoy working across the stack — from designing intuitive user interfaces with Flutter to building reliable backend services and data-driven features using Python and Node.js.
                </p>
                <div className="flex items-center gap-4 pt-2 border-t border-zinc-800/50">
                    <div className="text-xs text-zinc-500">
                        <span className="block text-zinc-300 font-medium">Thapar Institute Of Engineering And Technology</span>
                        <span className="block mt-0.5">2022 - 2026</span>
                    </div>
                </div>
            </div>

            {/* Skills Card */}
            <div className="md:col-span-1 p-6 rounded-2xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/50 transition duration-300">
                <div className="flex items-center gap-2 mb-4">
                    <BsCpu className="text-zinc-500" size={16} />
                    <h2 className="text-sm font-medium uppercase tracking-wider text-zinc-500">Stack</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                    {skillsData.map((skill, id) => (
                        <span key={id} className="px-2.5 py-1 rounded-md bg-zinc-800/50 border border-zinc-700/50 text-xs text-zinc-300 hover:text-white transition-colors cursor-default">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutGrid;
