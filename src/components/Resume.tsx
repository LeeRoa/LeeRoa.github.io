import { GraduationCap, Code2, Database, Cloud, Wrench } from "lucide-react";

const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "Stanford University",
    year: "2014 - 2016",
    description: "Specialized in Distributed Systems and Machine Learning"
  },
  {
    degree: "Bachelor of Science in Software Engineering",
    school: "University of California, Berkeley",
    year: "2010 - 2014",
    description: "Graduated with Honors, GPA: 3.8/4.0"
  }
];

const skillCategories = [
  {
    icon: Code2,
    title: "Languages",
    skills: ["JavaScript/TypeScript", "Python", "Java", "Go", "C++"]
  },
  {
    icon: Wrench,
    title: "Frameworks",
    skills: ["React", "Node.js", "Next.js", "Django", "Spring Boot"]
  },
  {
    icon: Database,
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"]
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"]
  }
];

export function Resume() {
  return (
    <section id="resume" className="py-20 px-6 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Education & Skills</h2>
        <div className="w-20 h-1 bg-cyan-500 mb-12"></div>
        
        {/* Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-cyan-400" />
            Education
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
                <p className="text-slate-300 mb-1">{edu.school}</p>
                <p className="text-sm text-slate-500 mb-3">{edu.year}</p>
                <p className="text-slate-400">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Skills */}
        <div>
          <h3 className="text-2xl font-semibold mb-8">Technical Skills</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="p-6 bg-slate-800/50 border border-slate-700 rounded-lg"
              >
                <category.icon className="w-8 h-8 text-cyan-400 mb-4" />
                <h4 className="font-semibold mb-4">{category.title}</h4>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-sm text-slate-400">
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
