import { GraduationCap, Code2, Database, Cloud, Wrench } from "lucide-react";

// 1. 학력 데이터 입력 (최신순)
const education = [
  {
    degree: "[학위/전공 입력 (예: 컴퓨터공학 학사)]",
    school: "[학교명 입력 (예: OO대학교)]",
    year: "20xx - 20xx",
    description: "[관련 활동, 졸업 논문 주제, 또는 높은 학점 등 강조하고 싶은 내용]"
  },
  {
    degree: "[고등학교 또는 이전 학위]",
    school: "[학교명]",
    year: "20xx - 20xx",
    description: "[간단한 설명 (선택 사항)]"
  }
];

// 2. 기술 스택 입력 (아이콘은 lucide-react에서 변경 가능)
const skillCategories = [
  {
    icon: Code2,
    title: "언어 (Languages)",
    skills: ["Java", "Python", "JavaScript/TypeScript", "SQL"]
  },
  {
    icon: Wrench,
    title: "프레임워크 (Frameworks)",
    skills: ["Spring Boot", "Django", "NestJS", "React"]
  },
  {
    icon: Database,
    title: "데이터베이스 (Databases)",
    skills: ["MySQL", "Oracle", "Redis", "MongoDB"]
  },
  {
    icon: Cloud,
    title: "인프라 & 도구 (DevOps)",
    skills: ["AWS", "Docker", "Kubernetes", "Git/GitHub"]
  }
];

export function Resume() {
  return (
    <section id="resume" className="py-20 px-6 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        {/* 섹션 타이틀 */}
        <h2 className="text-4xl font-bold mb-4">학력 및 기술 (Education & Skills)</h2>
        <div className="w-20 h-1 bg-cyan-500 mb-12"></div>
        
        {/* Education 영역 */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-cyan-400" />
            학력 (Education)
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="p-6 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-slate-600 transition-colors"
              >
                <h4 className="text-xl font-semibold text-cyan-400 mb-2">
                  {edu.degree}
                </h4>
                <p className="text-slate-300 mb-1 font-medium">{edu.school}</p>
                <p className="text-sm text-slate-500 mb-3">{edu.year}</p>
                <p className="text-slate-400 leading-relaxed">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Skills 영역 */}
        <div>
          <h3 className="text-2xl font-semibold mb-8">보유 기술 (Technical Skills)</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="p-6 bg-slate-800/50 border border-slate-700 rounded-lg hover:bg-slate-800/80 transition-colors"
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