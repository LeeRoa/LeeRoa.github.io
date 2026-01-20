import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    period: "2020 - Present",
    description: "Lead engineer for cloud infrastructure migration and microservices architecture.",
    achievements: [
      "Architected and led migration of monolithic application to microservices, reducing deployment time by 70%",
      "Implemented CI/CD pipeline using GitHub Actions and AWS, improving release frequency from monthly to daily",
      "Mentored team of 5 junior engineers, conducting code reviews and technical training sessions",
      "Optimized database queries and caching strategies, improving API response times by 60%"
    ]
  },
  {
    title: "Software Engineer",
    company: "DataFlow Systems",
    location: "Seattle, WA",
    period: "2018 - 2020",
    description: "Full-stack developer building real-time data processing applications.",
    achievements: [
      "Developed real-time analytics dashboard processing 1M+ events per day using React and WebSockets",
      "Built RESTful APIs and GraphQL endpoints serving 100K+ daily active users",
      "Implemented automated testing suite increasing code coverage from 40% to 85%",
      "Collaborated with product team to design and ship 3 major features on schedule"
    ]
  },
  {
    title: "Junior Software Developer",
    company: "StartupHub",
    location: "Austin, TX",
    period: "2016 - 2018",
    description: "Full-stack developer contributing to SaaS product development.",
    achievements: [
      "Built responsive web applications using React, Redux, and Node.js",
      "Integrated third-party APIs including Stripe, SendGrid, and Twilio",
      "Participated in agile development process with 2-week sprint cycles",
      "Contributed to open-source projects and internal tooling"
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Professional Experience</h2>
        <div className="w-20 h-1 bg-cyan-500 mb-12"></div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 pb-8 border-l-2 border-slate-700 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-950"></div>
              
              <div className="p-6 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-slate-600 transition-colors">
                <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-cyan-400 mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-lg text-slate-300">{exp.company}</p>
                    <p className="text-sm text-slate-500">{exp.location}</p>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 rounded-lg">
                    <Briefcase className="w-4 h-4 text-slate-400" />
                    <span className="text-sm text-slate-300">{exp.period}</span>
                  </div>
                </div>
                
                <p className="text-slate-400 mb-4">{exp.description}</p>
                
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex gap-3 text-slate-400">
                      <span className="text-cyan-400 mt-1">▹</span>
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
