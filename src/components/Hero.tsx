import { Download, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full">
        <div className="space-y-6">
          <div className="inline-block">
            <div className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full text-sm text-slate-300">
              Available for new opportunities
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Hi, I'm <span className="text-cyan-400">Alex Morgan</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-slate-300">
            Senior Software Engineer
          </h2>
          
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            I specialize in building scalable web applications and modern cloud infrastructure. 
            With 8+ years of experience, I transform complex problems into elegant solutions 
            using cutting-edge technologies.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold rounded-lg transition-colors"
            >
              <Download className="w-5 h-5" />
              Download CV
            </a>
            
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
            >
              View Projects
            </a>
          </div>
          
          <div className="flex gap-4 pt-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800/50 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800/50 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:alex.morgan@example.com"
              className="p-3 bg-slate-800/50 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
