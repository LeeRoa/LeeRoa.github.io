import { ExternalLink, Github } from "lucide-react";

// [수정 포인트] 프로젝트 데이터
const projects = [
  {
    title: "ROTP (자체 구축 2FA 인증 시스템)",
    description: "표준 TOTP(Time-based One-Time Password) 알고리즘을 Java로 직접 구현하여 Google Authenticator와 호환되는 2차 인증 서버를 구축했습니다. React 기반의 관리자 대시보드와 연동되며, Nginx와 Docker Compose를 활용해 안정적인 배포 환경을 구성했습니다.",
    image: "https://rotp.groamit.kro.kr/logo.png",
    tags: ["Spring Boot", "JPA", "React", "TypeScript", "Docker", "Nginx", "TOTP/HMAC"],
    github: "https://github.com/LeeRoa/ROTP",
    demo: "https://rotp.groamit.kro.kr/"
  },
  {
    title: "Jiburo (유기동물 찾기 서비스)",
    description: "유실/유기 동물 공공데이터 API를 활용하여 반려동물을 잃어버린 사용자와 보호소를 연결하는 플랫폼입니다. 현재 백엔드 아키텍처 설계 및 핵심 API 개발 단계에 있습니다.",
    image: "https://placehold.co/600x400/1e293b/06b6d4?text=Project+Jiburo+(Dev)",
    tags: ["Spring Boot", "JPA", "Docker", "In Progress", "Open API", "Pet Service", "Toy Project"],
    github: "https://github.com/LeeRoa/jiburo-server",
    demo: "https://jiburo.on-do.kro.kr/swagger-ui/index.html"
  },
  {
    title: "NPKI Certificate Utility (오픈소스 라이브러리)",
    description: "Bouncy Castle 암호화 라이브러리를 기반으로 구현한 공인인증서(NPKI) 전자서명 유틸리티입니다. 복잡한 인증서 파싱 및 개인키 복호화 로직을 캡슐화하여 개발 편의성을 높였으며, Gradle 빌드 환경을 구축해 누구나 쉽게 사용할 수 있도록 배포했습니다.",
    image: "/images/npki-lib.png",
    tags: ["Java", "Gradle", "Bouncy Castle", "Open Source", "PKI/NPKI"],
    github: "https://github.com/LeeRoa/npki-sign-util.git",
    demo: ""
  },
  {
    title: "README Auto Generator (AI 기반 문서 자동 생성)",
    description: "프로젝트 폴더나 GitHub URL을 입력하면 AI가 코드를 분석하여 전문적인 README.md를 자동으로 생성해주는 웹 서비스입니다. Google Gemini API를 활용하며, 한국어/영어 지원 및 실시간 마크다운 미리보기 기능을 제공합니다.",
    image: "https://placehold.co/600x400/1e293b/06b6d4?text=README+Generator",
    tags: ["Python", "FastAPI", "Google Gemini", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/LeeRoa/readme-generator",
    demo: "https://readme-generator-4mxy.onrender.com"
  },
  {
    title: "PDF Extractor & Merger (PDF 추출/병합 도구)",
    description: "PDF 파일에서 원하는 페이지만 추출하거나 여러 PDF를 하나로 병합할 수 있는 데스크탑 유틸리티입니다. PyMuPDF 라이브러리를 활용하여 빠르고 정확한 PDF 처리를 지원합니다.",
    image: "https://placehold.co/600x400/1e293b/06b6d4?text=PDF+Extractor",
    tags: ["Python", "PyMuPDF", "Tkinter", "Desktop App"],
    github: "https://github.com/LeeRoa/pdf-extractor",
    demo: ""
  }
];

export function Portfolio() {
  return (
      <section id="portfolio" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">주요 프로젝트 (Featured Projects)</h2>
          <div className="w-20 h-1 bg-cyan-500 mb-12"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
                <div
                    key={index}
                    className="group bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden hover:border-slate-600 transition-all hover:-translate-y-1 flex flex-col"
                >
                  {/* 이미지 영역 */}
                  <div className="relative h-48 overflow-hidden bg-slate-800">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* 내용 영역 - flex-col과 flex-1을 주어 높이를 맞춤 */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-cyan-400">
                      {project.title}
                    </h3>

                    <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* 태그 리스트 */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                          <span
                              key={tagIndex}
                              className="px-2 py-1 text-xs bg-slate-700/50 text-slate-300 rounded"
                          >
                      {tag}
                    </span>
                      ))}
                    </div>

                    {/* 링크 버튼 영역 (mt-auto로 하단 고정) */}
                    <div className="flex gap-3 mt-auto">
                      {/* GitHub 버튼도 링크가 있을 때만 보이게 하려면 똑같이 감싸주면 됩니다. */}
                      {project.github && (
                          <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                          >
                            <Github className="w-4 h-4" />
                            코드 보기
                          </a>
                      )}

                      {project.demo && (
                          <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                            라이브 데모
                          </a>
                      )}
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
}