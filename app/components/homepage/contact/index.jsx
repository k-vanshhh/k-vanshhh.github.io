// @flow strict
import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { MdEmail, MdPhone } from "react-icons/md";

function ContactSection() {
  return (
    <section id="contact" className="mt-12 pt-12 border-t border-zinc-800 max-w-5xl mx-auto px-6 mb-8">
      <div className="rounded-2xl bg-zinc-900/30 border border-zinc-800 p-8 md:p-12 text-center space-y-6">
        <h2 className="text-2xl font-medium tracking-tight text-zinc-100">Let&apos;s connect</h2>
        <p className="text-zinc-400 max-w-md mx-auto text-sm">
          I&apos;m currently based in Bathinda, Punjab and open to remote or relocation opportunities. Feel free to reach out.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalData.email}`} target="_blank" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-zinc-100 text-zinc-950 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-white transition-all active:scale-95">
            <MdEmail size={18} />
            {personalData.email}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;