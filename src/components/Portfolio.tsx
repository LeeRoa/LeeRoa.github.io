import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with real-time inventory management and payment processing.",
    image: "https://images.unsplash.com/photo-1603575448360-153f093fd0b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBkZXZlbG9wZXIlMjBsYXB0b3B8ZW58MXx8fHwxNzY4ODM5NDE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    github: "https://github.com",
    demo: "https://example.com"
  },
  {
    title: "Mobile Fitness App",
    description: "Cross-platform fitness tracking application with workout plans and progress analytics.",
    image: "https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY4NzY2NzM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React Native", "Firebase", "Redux"],
    github: "https://github.com",
    demo: "https://example.com"
  },
  {
    title: "Design System",
    description: "Comprehensive component library and design system for enterprise applications.",
    image: "https://images.unsplash.com/photo-1677214467820-ab069619bbb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ258ZW58MXx8fHwxNzY4Nzg2NzI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React", "TypeScript", "Storybook", "Tailwind"],
    github: "https://github.com",
    demo: "https://example.com"
  },
  {
    title: "Analytics Dashboard",
    description: "Real-time analytics platform with customizable widgets and data visualization.",
    image: "https://images.unsplash.com/photo-1761264889291-52edcd3979b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2ODgxMjI5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Next.js", "D3.js", "WebSockets", "MongoDB"],
    github: "https://github.com",
    demo: "https://example.com"
  },
  {
    title: "Cloud Infrastructure",
    description: "Scalable cloud infrastructure with auto-scaling and disaster recovery capabilities.",
    image: "https://images.unsplash.com/photo-1667984390538-3dea7a3fe33d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZ3xlbnwxfHx8fDE3Njg4NTY2NzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["AWS", "Terraform", "Docker", "Kubernetes"],
    github: "https://github.com",
    demo: "https://example.com"
  },
  {
    title: "Data Visualization Tool",
    description: "Interactive data visualization platform for complex datasets and business intelligence.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3Njg4NTUzMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Python", "Django", "Plotly", "PostgreSQL"],
    github: "https://github.com",
    demo: "https://example.com"
  }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 px-6 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
        <div className="w-20 h-1 bg-cyan-500 mb-12"></div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden hover:border-slate-600 transition-all hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden bg-slate-800">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-cyan-400">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                
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
                
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
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
