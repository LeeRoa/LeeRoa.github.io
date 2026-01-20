import { Download, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full">
        <div className="space-y-6">
          {/* 상태 배지 */}
          <div className="inline-block">
            <div className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full text-sm text-slate-300">
              새로운 기회를 찾고 있습니다 {/* 또는 '현재 업무 의뢰 가능' */}
            </div>
          </div>
          
          {/* 메인 타이틀 */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            안녕하세요, <span className="text-cyan-400">[이로아]</span>입니다
          </h1>
          
          {/* 직무 */}
          <h2 className="text-2xl md:text-3xl text-slate-300 font-medium">
            Backend Developer
          </h2>
          
          {/* 자기소개 요약 */}
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            사용자에게 가치 있는 경험을 제공하기 위해 효율적이고 확장 가능한 웹 서비스를 만듭니다. 
            단순한 코딩을 넘어 복잡한 문제를 우아한 솔루션으로 해결하는 과정에 즐거움을 느낍니다.
          </p>
          
          {/* 주요 버튼 */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="/resume.pdf" // public 폴더에 resume.pdf 파일을 넣으세요
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold rounded-lg transition-colors"
            >
              <Download className="w-5 h-5" />
              이력서 다운로드
            </a>
            
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors text-white"
            >
              프로젝트 보기
            </a>
          </div>
          
          {/* 소셜 링크 */}
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
              href="https://linkedin.com/in/[내-아이디]"
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
      </div>
    </section>
  );
}