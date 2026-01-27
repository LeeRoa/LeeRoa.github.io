// 보완된 경력 데이터 (최신순 및 직무 중요도순 정렬)
const experiences = [
  {
    title: "OKey-GTSA (산재병원 시점확인센터 연계 에이전트)",
    company: "(주)한국보안인증 기술연구소",
    period: "2025.11 - 2026.01",
    role: "백엔드 설계 및 개발 총괄, 관리자 페이지 UI 구현",
    description: "공공 의료기관 폐쇄망 환경에서의 데이터 연계 안정성 확보 및 문서 법적 효력 강화를 위한 연계 시스템 구축",
    tech: "Java, Spring Boot, Spring Scheduler, MyBatis, Bouncy Castle, PDFBox, Oracle",
    achievements: [
      "Spring Scheduler 기반 '실패 요청 자동 재처리(Retry)' 로직 설계로 폐쇄망 네트워크 지연 상황에서 데이터 유실 0건 달성",
      "PDF 생성 엔진 고도화(타임스탬프 토큰 삽입 및 워터마킹)를 통해 전자문서 무결성 및 법적 신뢰성 확보",
      "통신 규격 표준화 및 에러 코드 체계 정립으로 장애 원인 분석 및 현장 대응 속도 50% 이상 단축",
      "요구사항 분석부터 배포까지 전 과정을 리딩하여 2개월 내 안정적인 시스템 납품 및 운영 자동화 기여"
    ]
  },
  {
    title: "OKey-CA (기기인증용 사설 인증기관 시스템 구축)",
    company: "(주)한국보안인증 기술연구소",
    period: "2025.01 - 2025.12",
    role: "메인 백엔드 개발, 인증 아키텍처 설계, 어드민 UI 구현",
    description: "IoT 및 모바일 기기 인증을 위한 고보안 ECDSA 알고리즘 기반 사설 인증기관(CA) 및 인증서 생명주기 관리 시스템",
    tech: "Java, Spring Framework, MyBatis, Oracle, ECDSA, X.509",
    achievements: [
      "저사양 IoT 디바이스 환경 최적화를 위해 ECDSA 알고리즘 기반 인증서 발급 로직을 설계하여 인증서 크기 경량화(2KB) 달성",
      "X.509 표준 규격 기반의 기기 식별 정책 수립 및 인증서 발급(Issuance)·폐기(CRL) 자동화 프로세스 구축",
      "인증서 상태 및 발급 현황을 실시간 제어할 수 있는 관리자 대시보드 및 웹 인터페이스 통합 구축",
      "비인가 기기 접근 차단을 위한 인증서 기반 인증 체계를 수립하여 시스템 전반의 보안 신뢰성 강화"
    ]
  },
  {
    title: "OKey-Medical Cloud (의료 전자서명 SaaS 고도화)",
    company: "(주)한국보안인증 기술연구소",
    period: "2024.01 - 2025.01",
    role: "백엔드 시스템 설계, 인프라 전환 담당, 어드민 UI 구현",
    description: "병원별 온프레미스 서버를 중앙 집중형 SaaS 환경으로 전환하여 인프라 운영 표준화 달성",
    tech: "Java, Spring Boot, Spring Security, MariaDB, Kakao Cloud",
    achievements: [
      "온프레미스 서버의 클라우드 SaaS 전환으로 인프라 운영 환경을 표준화하고 유지보수 리소스 절감",
      "Spring Security 기반 RBAC(Role-Based Access Control)를 적용하여 병원/협력사 단위의 정교한 데이터 접근 권한 분리",
      "로그 수집 파이프라인 및 실시간 통계 대시보드 구축을 통해 선제적 장애 대응 및 시스템 가시성 확보",
      "라이선스 발급 및 고객사 관리 프로세스 자동화 설계로 운영팀의 수동 업무 부하 70% 감소 견인"
    ]
  },
  {
    title: "OKey-TSA (타임스탬프 인증 서버 및 SDK 개발)",
    company: "(주)한국보안인증 기술연구소",
    period: "2024.06 - 2025.01",
    role: "서버 아키텍처 설계 및 SDK 개발",
    description: "전자문서의 시점 확인 및 무결성 검증을 위한 RFC 3161 표준 준수 TSA 서버 구축",
    tech: "Java, Spring Boot, JPA, Bouncy Castle, REST API",
    achievements: [
      "RFC 3161 국제 표준을 준수하는 자체 TSA 서버 구축으로 사내 솔루션의 독자적 무결성 검증 기술력 확보",
      "라이브러리(JAR)와 REST API 방식을 모두 지원하는 듀얼 인터페이스 설계로 클라이언트 연동 편의성 극대화",
      "외부 의존성을 최소화한 독립 모듈화 설계를 통해 타 의료 솔루션과의 즉각적인 연동 및 높은 재사용성 증명"
    ]
  },
  {
    title: "금융·보험사 고객사 인프라 운영 및 보안 관리",
    company: "(주)한국보안인증 기술연구소",
    period: "2023.11 - 2025.03",
    role: "인프라 운영 및 보안 컴플라이언스 담당",
    description: "주요 금융사(롯데캐피탈, 흥국생명 등)의 폐쇄망 인프라 최적화 및 보안 컴플라이언스 준수 운영",
    achievements: [
      "이중화(Active-Active) 환경에서 Rolling Update 방식의 단계적 인증서 교체를 수행하여 서비스 다운타임 최소화",
      "금융권 특유의 폐쇄망 인프라 정책에 맞춘 서버 취약점 조치 및 정기 보안 점검 프로세스 전담 수행",
      "트래픽 전환 영향도 최소화를 위한 사전/사후 점검 체크리스트를 정립하여 안정적인 인프라 연속성 유지"
    ]
  },
  {
    title: "의료기관 전자서명 시스템 통합 유지보수",
    company: "(주)한국보안인증 기술연구소",
    period: "2023.09 - 2026.01",
    role: "솔루션 운영 및 기술 트러블슈팅",
    description: "전국 주요 의료기관 전자서명 솔루션의 장애 대응 및 소스 레벨 기능 개선",
    achievements: [
      "보안/인증서 검증 실패 이슈 발생 시 소스 레벨 분석을 통한 근본 원인 해결 및 환경 최적화 수행",
      "의료기관별 상이한 요구사항에 맞춘 정책 커스터마이징 및 기능 개선을 통해 솔루션 적합성 향상",
      "운영 이력 및 대응 노하우의 문서화(Asset)를 통해 팀 내 장애 복구 시간(MTTR) 단축에 기여"
    ]
  }
];

export function Experience() {
  return (
      <section id="experience" className="py-20 px-6 bg-slate-950 text-slate-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">경력 기술서 (Professional Experience)</h2>
          <div className="w-20 h-1 bg-cyan-500 mb-12"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 pb-12 border-l-2 border-slate-800 last:pb-0">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-950"></div>

                  <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-cyan-900/50 transition-all duration-300">
                    <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                        <div className="flex flex-col gap-1">
                          <p className="text-cyan-400 font-semibold">{exp.company}</p>
                          <p className="text-sm text-slate-400 font-medium">역할: {exp.role}</p>
                        </div>
                      </div>
                      <div className="px-3 py-1 bg-slate-800 rounded text-sm text-slate-300 font-mono">
                        {exp.period}
                      </div>
                    </div>

                    <p className="text-slate-300 mb-6 leading-relaxed italic border-l-4 border-slate-700 pl-4">
                      &quot;{exp.description}&quot;
                    </p>

                    <div className="mb-6">
                      <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-3">Key Achievements</h4>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex gap-3 text-slate-400 leading-snug">
                              <span className="text-cyan-500 font-bold shrink-0">✓</span>
                              <span className="text-sm md:text-[15px]">{achievement}</span>
                            </li>
                        ))}
                      </ul>
                    </div>

                    {exp.tech && (
                        <div className="pt-4 border-t border-slate-800/50">
                          <div className="flex flex-wrap gap-2">
                            {exp.tech.split(", ").map((t, i) => (
                                <span key={i} className="text-[11px] px-2 py-0.5 bg-cyan-950/30 text-cyan-400 border border-cyan-900/50 rounded">
                          {t}
                        </span>
                            ))}
                          </div>
                        </div>
                    )}
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
}