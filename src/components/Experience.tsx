import { Briefcase } from "lucide-react";

// 경력 데이터 (최신순 정렬)
const experiences = [
  {
    title: "OKey-GTSA (산재병원 시점확인센터 연계 에이전트)",
    company: "(주)한국보안인증 기술연구소",
    period: "2025.11 - 2026.01",
    description: "공공 의료기관 폐쇄망 환경에서의 데이터 연계 안정성 확보 및 문서 법적 효력 강화를 위한 연계 시스템 구축",
    achievements: [
      "폐쇄망 네트워크 지연으로 인한 데이터 유실 문제를 Spring Scheduler 기반 자동 재처리(Retry) 로직으로 해결",
      "전자문서 무결성 검증 요구사항을 충족하기 위해 PDF 엔진에 타임스탬프 토큰 삽입 및 워터마킹 기능을 직접 구현",
      "장애 발생 시 원인 파악이 어려운 문제를 통신 규격 표준화 및 에러 코드 체계 정립으로 개선한 경험",
      "요구사항 분석부터 배포까지 전 과정을 주도적으로 수행하며 일정 내 시스템을 안정적으로 납품"
    ]
  },
  {
    title: "OKey-CA (기기인증용 사설 인증기관 시스템 구축)",
    company: "(주)한국보안인증 기술연구소",
    period: "2025.01 - 2025.12",
    description: "IoT 및 모바일 기기 인증을 위한 고보안 ECDSA 알고리즘 기반 사설 인증기관(CA) 및 인증서 생명주기 관리 시스템",
    achievements: [
      "저사양 IoT 디바이스의 리소스 제약 문제를 ECDSA 기반 경량 인증서(2KB) 설계로 해결",
      "인증서 발급·폐기 과정의 수동 처리 비효율을 X.509 표준 기반 자동화 프로세스로 개선",
      "인증서 현황 파악의 어려움을 해결하기 위해 실시간 모니터링 대시보드를 직접 설계 및 구현",
      "비인가 기기 접근 문제에 대응하기 위한 인증서 기반 인증 체계를 설계하고 적용한 경험"
    ]
  },
  {
    title: "OKey-Medical Cloud (의료 전자서명 SaaS 고도화)",
    company: "(주)한국보안인증 기술연구소",
    period: "2024.01 - 2025.01",
    description: "병원별 온프레미스 서버를 중앙 집중형 SaaS 환경으로 전환하여 인프라 운영 표준화 달성",
    achievements: [
      "병원별로 분산된 온프레미스 서버의 관리 복잡성 문제를 클라우드 SaaS 전환으로 해결하는 과정에 참여",
      "병원/협력사 간 데이터 접근 권한 분리 요구사항을 Spring Security 기반 RBAC 적용으로 해결",
      "장애 발생 시 사후 대응에 그치던 문제를 로그 수집 파이프라인과 실시간 대시보드 구축으로 개선",
      "라이선스 발급 및 고객사 관리의 수동 처리 문제를 자동화 프로세스 설계로 해결한 경험"
    ]
  },
  {
    title: "OKey-TSA (타임스탬프 인증 서버 및 SDK 개발)",
    company: "(주)한국보안인증 기술연구소",
    period: "2024.06 - 2025.01",
    description: "전자문서의 시점 확인 및 무결성 검증을 위한 RFC 3161 표준 준수 TSA 서버 구축",
    achievements: [
      "외부 TSA 의존으로 인한 비용 및 연동 복잡성 문제를 RFC 3161 표준 준수 자체 서버 구축으로 해결",
      "다양한 클라이언트 연동 요구사항을 JAR 라이브러리와 REST API 듀얼 인터페이스 설계로 대응",
      "타 솔루션과의 연동 시 의존성 충돌 문제를 독립 모듈화 설계로 해결한 경험"
    ]
  },
  {
    title: "금융·보험사 고객사 인프라 운영 및 보안 관리",
    company: "(주)한국보안인증 기술연구소",
    period: "2023.11 - 2025.03",
    description: "주요 금융사(롯데캐피탈, 흥국생명 등)의 폐쇄망 인프라 최적화 및 보안 컴플라이언스 준수 운영",
    achievements: [
      "이중화 환경에서 인증서 교체 시 서비스 중단 문제를 Rolling Update 방식 적용으로 해결",
      "금융권 폐쇄망 환경의 보안 취약점 조치 및 정기 점검 프로세스를 직접 수행하며 컴플라이언스 대응 경험",
      "트래픽 전환 시 장애 발생 위험을 사전/사후 점검 체크리스트 정립으로 예방한 경험"
    ]
  },
  {
    title: "의료기관 전자서명 시스템 통합 유지보수",
    company: "(주)한국보안인증 기술연구소",
    period: "2023.09 - 2026.01",
    description: "전국 주요 의료기관 전자서명 솔루션의 장애 대응 및 소스 레벨 기능 개선",
    achievements: [
      "인증서 검증 실패 등 보안 이슈 발생 시 소스 레벨 분석을 통해 근본 원인을 파악하고 해결한 경험",
      "의료기관별 상이한 요구사항에 맞춰 정책 커스터마이징 및 기능 개선을 수행",
      "반복되는 장애 대응 과정에서 운영 노하우를 문서화하여 팀 내 지식 공유에 기여"
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

                <p className="text-base md:text-lg text-slate-300 mb-4 leading-relaxed">
                  {exp.description}
                </p>

                {/* 성과 리스트 */}
                <div className="bg-slate-900/50 rounded-lg p-4">
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex gap-3 text-slate-400 text-sm leading-relaxed">
                        <span className="text-cyan-400 mt-0.5 text-xs shrink-0">▶</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
