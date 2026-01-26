import { Briefcase } from "lucide-react";

// 경력 데이터: 최신순 (File2.hwp 바탕으로 재구성)
const experiences = [
  {
    title: "OKey-GTSA (산재병원 - 시점확인센터 연계 에이전트 개발)",
    company: "(주)한국보안인증 기술연구소",
    location: "서울",
    period: "2025.11 - 2026.01",
    description: "근로복지공단 폐쇄망 환경에서의 인증 연계 안정성 확보 및 문서 무결성 검증 시스템 구축",
    achievements: [
      "폐쇄망 네트워크 지연 대응을 위한 Spring Scheduler 기반 실패 요청 자동 재처리 로직 구현 (무중단 운영 달성)",
      "공공 문서 무결성 확보를 위한 PDF 생성 로직(타임스탬프/인영마크) 고도화 및 품질 개선",
      "응답 메시지 포맷 표준화 및 명확한 에러 코드 체계 도입으로 유지보수 대응 속도 향상",
      "요구사항 분석부터 배포까지 프로젝트 전 과정을 주도하여 2개월 내 납품 완료"
    ]
  },
  {
    title: "OKeyMedical Cloud (SaaS 전환 및 고도화)",
    company: "(주)한국보안인증 기술연구소",
    location: "서울",
    period: "2024.01 - 2025.01",
    description: "기존 온프레미스 환경의 한계를 극복하기 위해 의료용 전자서명 솔루션의 클라우드(SaaS) 전환 및 통합 관리 시스템 구축",
    achievements: [
      "병원별 파편화된 온프레미스 환경을 중앙 서버로 통합하여 장애 발생률 감소 및 환경 표준화",
      "Spring Boot/Security 기반의 통합 Admin 백엔드 시스템 신규 개발 및 RBAC 권한 제어 적용",
      "운영 효율화를 위한 대규모 로그 수집 파이프라인 설계 및 실시간 통계 모니터링 환경 구축",
      "고객사/라이선스 관리의 일원화된 운영 환경을 확보하여 이슈 추적 및 대응 프로세스 개선"
    ]
  },
  {
    title: "OKey-TSA (타임스탬프 인증 서버 및 SDK 개발)",
    company: "(주)한국보안인증 기술연구소",
    location: "서울",
    period: "2024.06 - 2025.01",
    description: "전자문서의 법적 효력(시점 확인)을 보장하기 위한 자체 TSA(Time Stamping Authority) 서버 구축 및 클라이언트 연동 환경 제공",
    achievements: [
      "Spring Boot 기반의 자체 TSA 서버를 구축하여 타임스탬프 토큰 발행 프로세스 및 요청 데이터 표준 RFC 3161 규격 정립",
      "클라이언트 연동 유연성을 위해 라이브러리(JAR) 제공 및 REST API 통신 방식을 모두 지원하도록 아키텍처 설계",
      "OKey Medical Cloud 서비스와 실시간 연동 시스템을 구축하여 병원 전자서명 원문에 대한 시점 확인 무결성 보장",
      "외부 의존성 없이 독립적으로 동작 가능한 모듈 구성을 통해 사내 타 프로젝트로의 확장성 확보"
    ]
  },
  {
    title: "OKey-CA (기기인증용 사설 인증기관 시스템 구축)",
    company: "(주)한국보안인증 기술연구소",
    location: "서울",
    period: "2025.01 - 2025.12",
    description: "IoT 및 모바일 기기 인증을 위한 고보안 ECDSA 알고리즘 기반의 사설 인증기관(CA) 시스템 및 인증서 관리 프로세스 구축",
    achievements: [
      "RSA 대비 키 길이는 짧고 보안성은 높은 ECDSA 알고리즘을 적용하여 기기 환경에 최적화된 인증서 발급 로직 구현",
      "X.509 표준 규격을 준수하여 기기 식별에 필요한 인증서 프로파일(Subject, Extensions 등) 및 필드 정책 설계",
      "인증서의 전체 생명주기(Lifecycle) 관리를 위한 발급(Issuance) 및 폐기(Revocation) 프로세스 핵심 모듈 개발",
      "기기별 고유 식별값을 포함한 안전한 인증서 발급 체계를 수립하여 비인가 기기의 접근 차단 기반 마련"
    ]
  },
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
                        {/* 위치 정보가 중요하지 않다면 숨겨도 됩니다 */}
                        <p className="text-sm text-slate-500">{exp.location}</p>
                      </div>

                      {/* 근무 기간 배지 */}
                      <div className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 rounded-lg shrink-0">
                        <Briefcase className="w-4 h-4 text-slate-400" />
                        <span className="text-sm text-slate-300 font-medium">{exp.period}</span>
                      </div>
                    </div>

                    <p className="text-slate-400 mb-4 leading-relaxed font-medium">
                      {exp.description}
                    </p>

                    {/* 성과 리스트 */}
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex gap-3 text-slate-400 text-sm md:text-base">
                            <span className="text-cyan-400 mt-1.5 text-xs shrink-0">▶</span>
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