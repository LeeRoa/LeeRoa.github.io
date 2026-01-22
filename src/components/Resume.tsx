import {GraduationCap, Code2, Database, Cloud, Wrench, BookOpen, Layout, Terminal} from "lucide-react";

// 1. 학력 데이터 (공식 학위)
const degrees = [
  {
    title: "컴퓨터과학과 학사",
    school: "한국방송통신대학교 (편입)",
    year: "2024 - 재학 중",
    description: "현업 개발자로 일하며 부족한 이론적 토대를 채우기 위해 편입했습니다. 실무 경험 위에 CS 지식(운영체제, 자료구조 등)을 더하여, 원리를 알고 코드를 작성하는 공학적 역량을 기르고 있습니다."
  },
  {
    title: "뷰티매니저학과 전문학사",
    school: "경복대학교",
    year: "2019 - 2021",
    description: "개발자로 전직하기 전, 고객 중심의 서비스 마인드를 길렀던 시기입니다. 비전공자의 시각에서 출발했기에 사용자의 니즈를 더 섬세하게 파악할 수 있는 밑거름이 되었습니다."
  }
];

// 2. 직무 교육/수료 데이터 (실무 과정)
const certifications = [
  {
    title: "(산대특) 프로젝트 기반 자바 풀스택 과정",
    org: "구리 이젠아카데미컴퓨터학원",
    year: "2023.02 - 2023.09",
    description: "7개월간의 집중 실무 과정입니다. Java/Spring 백엔드 구현부터 AWS 배포까지 웹 서비스 전 과정을 경험하며, 팀 프로젝트 리딩과 협업 프로세스를 정립했습니다."
  },
  {
    title: "Java 프로그래밍 기초 및 객체지향",
    org: "강남 그린컴퓨터아카데미",
    year: "2022.09 - 2022.10",
    description: "프레임워크 학습 전, 메모리 구조와 객체지향(OOP)의 개념을 깊이 있게 파고들며 탄탄한 기본 문법과 로직 설계 능력을 다졌습니다."
  },
  {
    title: "웹 표준 & 웹 접근성 (HTML/CSS)",
    org: "강남 그린컴퓨터아카데미",
    year: "2022.07 - 2022.09",
    description: "웹 표준과 접근성을 준수하여 '누구나 편리하게 사용할 수 있는' 견고한 UI 구조와 스타일링 기법을 익혔습니다."
  }
];

// 3. 기술 스택 (변경 없음)
const skillCategories = [
  {
    icon: Code2,
    title: "언어 (Languages)",
    skills: ["Java", "SQL", "Python"]
  },
  {
    icon: Wrench,
    title: "백엔드 (Backend)",
    skills: ["Spring Boot", "Spring Framework", "JPA (Hibernate)", "Spring Security"]
  },
  {
    icon: Layout,
    title: "프론트엔드 (Frontend)",
    skills: ["React", "TypeScript", "JavaScript", "HTML/CSS"]
  },
  {
    icon: Database,
    title: "데이터베이스 (Databases)",
    skills: ["MySQL (MariaDB)", "Oracle", "MSSQL"]
  },
  {
    icon: Cloud,
    title: "서버 & 인프라 (Infra)",
    skills: ["AWS", "Azure", "Docker", "Linux"]
  },
  {
    icon: Terminal,
    title: "도구 & 협업 (Tools)",
    skills: ["Git", "GitHub", "Gradle", "Postman"]
  }
];

export function Resume() {
  return (
      <section id="resume" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          {/* 섹션 헤더 */}
          <h2 className="text-4xl font-bold mb-4">이력 및 기술 (Resume & Skills)</h2>
          <div className="w-20 h-1 bg-cyan-500 mb-12"></div>

          {/* 1. 학력 (Education) */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-cyan-400" />
              학력 (Education)
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {degrees.map((edu, index) => (
                  <div
                      key={index}
                      className="p-6 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-cyan-500/50 transition-colors"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-semibold text-cyan-400">{edu.title}</h4>
                      <span className="text-xs font-mono py-1 px-2 bg-slate-700 rounded text-slate-300 whitespace-nowrap ml-2">
                    {edu.year}
                  </span>
                    </div>
                    <p className="text-slate-300 mb-4 font-medium">{edu.school}</p>
                    <p className="text-slate-400 text-sm leading-relaxed">{edu.description}</p>
                  </div>
              ))}
            </div>
          </div>

          {/* 2. 직무 교육 (Professional Training) */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-cyan-400" />
              직무 교육 (Professional Training)
            </h3>

            <div className="space-y-6">
              {certifications.map((cert, index) => (
                  <div
                      key={index}
                      className="group p-6 bg-slate-800/30 border border-slate-700 rounded-lg hover:bg-slate-800 hover:border-slate-600 transition-all"
                  >
                    {/* 수정 포인트:
         1. gap-4: 제목과 날짜 사이에 최소 여백 확보
         2. items-start: 텍스트가 길어져 줄바꿈 되어도 레이아웃이 어색하지 않게 상단 정렬
      */}
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-2">
                      <h4 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors leading-snug">
                        {cert.title}
                      </h4>

                      {/* 수정 포인트:
           1. shrink-0: 제목이 길어도 날짜 영역이 찌그러지지 않음
           2. whitespace-nowrap: 날짜가 두 줄로 꺾이지 않음
        */}
                      <span className="text-sm text-slate-500 whitespace-nowrap shrink-0 md:pt-1">
          {cert.year}
        </span>
                    </div>

                    <p className="text-cyan-500/80 mb-2 text-sm font-medium">{cert.org}</p>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
              ))}
            </div>
          </div>

          {/* 3. 기술 스택 (Skills) */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">보유 기술 (Technical Skills)</h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skillCategories.map((category, index) => (
                  <div
                      key={index}
                      className="p-6 bg-slate-800/50 border border-slate-700 rounded-lg hover:bg-slate-800 hover:shadow-lg hover:shadow-cyan-500/10 transition-all"
                  >
                    <category.icon className="w-8 h-8 text-cyan-400 mb-4" />
                    <h4 className="font-semibold mb-4 text-lg">{category.title}</h4>
                    <ul className="space-y-2">
                      {category.skills.map((skill, skillIndex) => (
                          <li key={skillIndex} className="text-sm text-slate-400 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span>
                            {skill}
                          </li>
                      ))}
                    </ul>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  );
}