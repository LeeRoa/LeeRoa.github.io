import { ExternalLink, Github } from "lucide-react";
// ImageWithFallback 컴포넌트가 없다면 에러가 날 수 있어 표준 img 태그로 통일했습니다.

// [수정 포인트] 여기에 본인의 프로젝트 내용을 채워주세요.
const projects = [
  {
    title: "이커머스 플랫폼 구축",
    description: "React와 Node.js를 활용한 풀스택 쇼핑몰 프로젝트입니다. 결제 모듈 연동과 실시간 재고 관리 시스템을 중점적으로 구현했습니다.",
    // 나중에 본인 스크린샷으로 교체하세요 (예: "/images/project1.jpg")
    image: "https://images.unsplash.com/photo-1603575448360-153f093fd0b2?q=80&w=1080", 
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    github: "https://github.com",
    demo: "https://example.com"
  },
  {
    title: "운동 기록 모바일 앱",
    description: "크로스 플랫폼 운동 추적 애플리케이션입니다. 사용자 맞춤형 운동 계획을 제공하고 성과를 시각화하여 보여줍니다.",
    image: "https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?q=80&w=1080",
    tags: ["React Native", "Firebase", "Redux"],
    github: "https://github.com",
    demo: "https://example.com"
  },
  {
    title: "사내 디자인 시스템",
    description: "엔터프라이즈 애플리케이션의 UI 일관성을 위한 컴포넌트 라이브러리 및 디자인 시스템을 구축했습니다.",
    image: "https://images.unsplash.com/photo-1677214467820-ab069619bbb6?q=80&w=1080",
    tags: ["React", "TypeScript", "Storybook", "Tailwind"],
    github: "https://github.com",
    demo: "https://example.com"
  },
  {
    title: "실시간 분석 대시보드",
    description: "대용량 데이터를 실시간으로 처리하여 시각화하는 관리자용 대시보드입니다. 웹소켓을 활용해 데이터 지연을 최소화했습니다.",
    image: "https://images.unsplash.com/photo-1761264889291-52edcd3979b2?q=80&w=1080",
    tags: ["Next.js", "D3.js", "WebSockets", "MongoDB"],
    github: "https://github.com",
    demo: "https://example.com"
  },
  {
    title: "클라우드 인프라 구축",
    description: "AWS 기반의 확장 가능한 클라우드 인프라를 설계했습니다. 오토 스케일링과 재해 복구(DR) 시스템을 적용하여 안정성을 높였습니다.",
    image: "https://images.unsplash.com/photo-1667984390538-3dea7a3fe33d?q=80&w=1080",
    tags: ["AWS", "Terraform", "Docker", "Kubernetes"],
    github: "https://github.com",
    demo: "https://example.com"
  },
  {
    title: "데이터 시각화 도구",
    description: "복잡한 비즈니스 데이터를 분석하고 인사이트를 도출할 수 있는 인터랙티브 시각화 플랫폼입니다.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1080",
    tags: ["Python", "Django", "Plotly", "PostgreSQL"],
    github: "https://github.com",
    demo: "https://example.com"
  }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 px-6 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        {/* 섹션 제목 한글화 */}
        <h2 className="text-4xl font-bold mb-4">주요 프로젝트 (Featured Projects)</h2>
        <div className="w-20 h-1 bg-cyan-500 mb-12"></div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden hover:border-slate-600 transition-all hover:-translate-y-1"
            >
              {/* 이미지 영역 */}
              <div className="relative h-48 overflow-hidden bg-slate-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* 내용 영역 */}
              <div className="p-6">
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
                
                {/* 링크 버튼 */}
                <div className="flex gap-3 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    코드 보기
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    라이브 데모
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}