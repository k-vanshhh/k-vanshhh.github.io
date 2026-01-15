// @flow strict
import Link from 'next/link';
import { CgGitFork } from "react-icons/cg";
import { IoStarSharp } from "react-icons/io5";

function Footer() {
  return (
    <div className="relative border-t border-zinc-800/50">
      {/* Keeping the 'fixed bottom' style if it was intended context,
           but the HTML demo has footer as relative at bottom.
           I will implement it as relative in the 'layout' context by just returning the div.
       */}
      <div className="max-w-5xl mx-auto px-6 pb-8">
        <footer className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600 pt-8 border-t border-transparent">
          <p>© {new Date().getFullYear()} Vansh Kansal. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="https://www.linkedin.com/in/vansh-kansal-a53294285/" target='_blank' className="hover:text-zinc-400 transition-colors">LinkedIn</Link>
            <Link href="https://github.com/k-vanshhh" target='_blank' className="hover:text-zinc-400 transition-colors">GitHub</Link>
            {/* <Link href="https://twitter.com" target='_blank' className="hover:text-zinc-400 transition-colors">Twitter</Link> */}
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;