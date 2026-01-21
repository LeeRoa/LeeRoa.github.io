import { Download, Github, Linkedin, Mail } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <div className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full text-sm text-slate-300">
                새로운 기회를 찾고 있습니다
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-snug">
              안녕하세요, <br className="md:hidden" />
              <span className="text-cyan-400">이로아</span>입니다
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-slate-300">
              Backend Developer
            </h2>
            
            <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
              편리한 도구에 의존하기보다 코드의 작동 원리를 깊이 이해하고 주도하는 것을 선호합니다. 남들이 보지 못하는 문제의 본질을 파고들어, 가장 효율적이고 확장 가능한 서비스를 직접 설계하고 구축합니다.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold rounded-lg transition-colors"
              >
                <Download className="w-5 h-5" />
                이력서 다운로드
              </a>
              
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
              >
                프로젝트 보기
              </a>
            </div>
            
            <div className="flex gap-4 pt-8">
              <a
                href="https://github.com/LeeRoa"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800/50 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors text-white"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/로아-이-1386583a7"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800/50 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors text-white"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:loa3256@gmail.com"
                className="p-3 bg-slate-800/50 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors text-white"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Right Column - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-slate-700 shadow-2xl">
                <ImageWithFallback
                  src="/images/profile.jpg"
                  alt="Alex Morgan"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative gradient ring */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}