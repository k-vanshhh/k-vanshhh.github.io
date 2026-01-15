// @flow strict
import Link from "next/link";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-zinc-800/10 glass-card">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-zinc-100 font-semibold tracking-tighter text-lg hover:text-white transition-colors">
          vansh.dev
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-400">
          <Link href="/#about" className="hover:text-zinc-100 transition-colors">About</Link>
          <Link href="/#experience" className="hover:text-zinc-100 transition-colors">Experience</Link>
          <Link href="/#projects" className="hover:text-zinc-100 transition-colors">Work</Link>
          <Link href="/#contact" className="hover:text-zinc-100 transition-colors">Contact</Link>
        </div>
        {/* Mobile Menu Icon (Placeholder - functionality can be added if needed, but keeping it simple for now) */}
        <button className="md:hidden text-zinc-100">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;