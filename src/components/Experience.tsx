import { Briefcase } from "lucide-react";

// 경력 데이터: 최신순으로 작성해주세요
const experiences = [
  {
    title: "[직무명 (예: 백엔드 개발자)]",
    company: "[회사 이름 (예: 네이버)]",
    location: "[위치 (예: 서울, 판교 / 원격 근무)]",
    period: "2023.03 - 현재", // 재직 중일 경우 '현재' 표기
    description: "[해당 포지션에서의 역할 한 줄 요약 (예: 결제 시스템 모듈화 및 성능 최적화 리딩)]",
    achievements: [
      "[성과 1: 구체적인 수치 포함 (예: 레거시 코드를 리팩토링하여 API 응답 속도 50% 개선)]",
      "[성과 2: 도입한 기술이나 해결한 문제 (예: CI/CD 파이프라인 구축으로 배포 시간 1시간 -> 10분 단축)]",
      "[성과 3: 협업 및 리더십 경험 (예: 주니어 개발자 3명 멘토링 및 코드 리뷰 문화 정착)]",
      "[성과 4: 기타 비즈니스 기여도]"
    ]
  },
  {
    title: "[이전 직무명]",
    company: "[이전 회사 이름]",
    location: "[위치]",
    period: "2020.01 - 2023.02",
    description: "[역할 요약]",
    achievements: [
      "[성과 1: 주요 프로젝트 성공 사례]",
      "[성과 2: 사용한 핵심 기술 스택 활용 경험]",
      "[성과 3: 트러블 슈팅 경험]"
    ]
  },
  {
    title: "[초기 직무명]",
    company: "[초기 회사 이름]",
    location: "[위치]",
    period: "2018.06 - 2019.12",
    description: "[역할 요약]",
    achievements: [
      "[성과 1: 프로젝트 기여 내용]",
      "[성과 2: 유지보수 및 운영 경험]",
      "[성과 3]"
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* 섹션 헤더 */}
        <h2 className="text-4xl font-bold mb-4">경력 기술서 (Professional Experience)</h2>
        <div className="w-20 h-1 bg-cyan-500 mb-12"></div>
        
        {/* 타임라인 컨테이너 */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 pb-8 border-l-2 border-slate-700 last:pb-0"
            >
              {/* 타임라인 점 (Dot) */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-950"></div>
              
              {/* 카드 본문 */}
              <div className="p-6 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-slate-600 transition-colors">
                <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-cyan-400 mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-lg text-slate-300 font-medium">{exp.company}</p>
                    <p className="text-sm text-slate-500">{exp.location}</p>
                  </div>
                  
                  {/* 근무 기간 배지 */}
                  <div className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 rounded-lg shrink-0">
                    <Briefcase className="w-4 h-4 text-slate-400" />
                    <span className="text-sm text-slate-300 font-medium">{exp.period}</span>
                  </div>
                </div>
                
                <p className="text-slate-400 mb-4 leading-relaxed">
                  {exp.description}
                </p>
                
                {/* 성과 리스트 */}
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex gap-3 text-slate-400">
                      <span className="text-cyan-400 mt-1.5 text-xs">▶</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}