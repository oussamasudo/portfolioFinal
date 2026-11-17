"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Terminal,
  Database,
  Server,
  GitBranch,
  Cpu,
  Factory,
  Brain,
  File,
  ShieldCheck,
  ShoppingCart,
  TrendingDown,
  BarChart3,
  Network,
  Briefcase,
  GraduationCap,
  Award,
  MapPin,
  Sparkles,
} from "lucide-react"
import Link from "next/link"
import { useEffect, useState, type ReactNode } from "react"
import ContactForm from "./app/contact-form"

type Category = "ML & NLP" | "Data & BI" | "Web" | "Systems"

type Project = {
  title: string
  description: string
  metric?: string
  image?: string
  technologies: string[]
  category: Category
  github?: string
  live?: string
  icon: ReactNode
}

const FILTERS: ("All" | Category)[] = ["All", "ML & NLP", "Data & BI", "Web", "Systems"]

const projects: Project[] = [
  {
    title: "PhishGuard",
    description:
      "Intelligent phishing detection (RAG, NLP). Multilingual system (FR, EN, AR) combining FAISS, BM25 and LLaMA 3.3-70B to analyze messages and URLs, with explainable analysis.",
    metric: "Macro F1 0.766 · 3,038 entries",
    technologies: ["Python", "RAG", "FAISS", "BM25", "LLaMA 3.3", "Flask"],
    category: "ML & NLP",
    icon: <ShieldCheck className="h-6 w-6" />,
  },
  {
    title: "Heritage Artisan AI",
    description:
      "Classifies Moroccan handcrafted products from a photo. MobileNetV2 trained on 4,500 images across 6 classes, served through an API and a web interface.",
    metric: "94% accuracy",
    technologies: ["Python", "TensorFlow", "MobileNetV2", "Flask", "Next.js"],
    category: "ML & NLP",
    github: "https://github.com/oussamasudo/artisanat-frontend",
    live: "https://heritageartisanatai.vercel.app/",
    icon: <Brain className="h-6 w-6" />,
  },
  {
    title: "Real-Time Amazon Reviews",
    description:
      "Streaming sentiment analysis pipeline: Kafka for ingestion, Spark Streaming for processing, MongoDB for storage.",
    metric: "≈ 1,200 reviews / minute",
    technologies: ["Kafka", "Spark Streaming", "MongoDB", "NLP"],
    category: "ML & NLP",
    icon: <ShoppingCart className="h-6 w-6" />,
  },
  {
    title: "Company Bankruptcy Prediction",
    description:
      "SVM and Gradient Boosting on 6,800 companies and 64 variables. Class imbalance handled with SMOTE.",
    metric: "F1-score 0.86",
    technologies: ["Python", "Scikit-Learn", "SMOTE", "SVM", "Gradient Boosting"],
    category: "ML & NLP",
    icon: <TrendingDown className="h-6 w-6" />,
  },
  {
    title: "Machine Learning Pipeline App",
    description:
      "Streamlit app showcasing the full ML workflow: data preprocessing, feature selection, model training and evaluation.",
    technologies: ["Python", "Streamlit", "Scikit-learn", "Pandas", "Matplotlib"],
    category: "ML & NLP",
    github: "https://github.com/oussamasudo/machine-learning-streamlit-app",
    live: "https://machine-learn.streamlit.app/",
    icon: <Cpu className="h-6 w-6" />,
  },
  {
    title: "Supply Chain Analytics (BI)",
    description:
      "MySQL star-schema Data Warehouse, Talend ETL and a Power BI dashboard with DAX measures.",
    metric: "180,519 records",
    technologies: ["MySQL", "Talend", "Power BI", "DAX", "ETL"],
    category: "Data & BI",
    icon: <BarChart3 className="h-6 w-6" />,
  },
  {
    title: "I.M.M",
    description:
      "Industrial Machine Maintenance System: manages machines, maintenance requests and work orders.",
    metric: "8 screens · OCP internship",
    technologies: ["React", "Next.js", "MySQL"],
    category: "Web",
    github: "https://github.com/oussamasudo/IMM",
    icon: <Factory className="h-6 w-6" />,
  },
  {
    title: "Intelligent Medical Negotiation",
    description:
      "Multi-agent system (3 agent types) allocating hospital resources through negotiation.",
    technologies: ["JADE", "Java", "Multi-agent systems"],
    category: "Systems",
    icon: <Network className="h-6 w-6" />,
  },
]

const skillGroups = [
  {
    title: "Machine Learning",
    icon: <Brain className="h-6 w-6 mx-auto mb-2 text-primary" />,
    items: ["Python", "Pandas", "NumPy", "Scikit-Learn", "TensorFlow", "Deep Learning", "SMOTE", "Feature Engineering", "Matplotlib", "Seaborn"],
  },
  {
    title: "NLP & Generative AI",
    icon: <Sparkles className="h-6 w-6 mx-auto mb-2 text-primary" />,
    items: ["Sentiment analysis", "RAG", "LLaMA 3.3", "FAISS", "BM25", "Multilingual NLP (FR, EN, AR)"],
  },
  {
    title: "Data & BI",
    icon: <Database className="h-6 w-6 mx-auto mb-2 text-primary" />,
    items: ["Power BI", "DAX", "Talend", "ETL", "Data Warehouse", "MySQL", "PostgreSQL", "SQL Server", "Oracle", "MongoDB"],
  },
  {
    title: "Big Data & MLOps",
    icon: <Server className="h-6 w-6 mx-auto mb-2 text-primary" />,
    items: ["Apache Spark", "Apache Kafka", "Streamlit Cloud", "REST API (Flask)", "Git", "GitHub"],
  },
  {
    title: "Development",
    icon: <Code2 className="h-6 w-6 mx-auto mb-2 text-primary" />,
    items: ["Python", "Java", "PHP", "JavaScript", "React.js", "Flask", "Spring Boot", "HTML5", "CSS3"],
  },
]

const experiences = [
  {
    role: "Data Science & Machine Learning Intern (PFA)",
    company: "TE Connectivity, Tangier",
    period: "2025 – 2026",
    icon: <Brain className="h-5 w-5 text-white" />,
    bullets: [
      "ML pipeline in Python (Pandas, Scikit-Learn) on 12,000 machine records (15 machines) to predict failures.",
      "Compared 4 models (Random Forest, Logistic Regression, Gradient Boosting, SVM): Random Forest selected, F1-score of 0.89.",
      "Streamlit app in production (Excel and Power BI export): data preparation cut from 3 h to 10 min.",
    ],
  },
  {
    role: "Development Intern (PFE)",
    company: "OCP, Khouribga",
    period: "April – June 2025",
    icon: <Briefcase className="h-5 w-5 text-white" />,
    bullets: [
      "Industrial maintenance management app (8 screens): analysis, design and front-end, working with the supervising team.",
    ],
  },
  {
    role: "Customer Advisor",
    company: "Concentrix, Marrakech",
    period: "June – October 2024",
    icon: <Terminal className="h-5 w-5 text-white" />,
    bullets: ["Handled 12 customer requests per day, problem solving (92% satisfaction)."],
  },
]

const education = [
  { title: "Master's (MST) in Artificial Intelligence & Data Science", school: "FST Tangier", period: "2025 – 2027" },
  { title: "Bachelor's (LST) in Distributed Computer Systems", school: "FST Marrakech", period: "2024 – 2025" },
  { title: "DEUST – University Diploma in Scientific and Technical Studies", school: "FST Marrakech", period: "2021 – 2024" },
]

const certifications = [
  "2nd place, FINNOVATE Hackathon (AIESEC, 2025)",
  "Data Fundamentals, IBM SkillsBuild (2026)",
  "AI Fundamentals, IBM SkillsBuild (2026)",
  "Fundamentals of Generative AI, AWS Skill Builder (2026)",
  "Azure Data : Core Data Concepts, Microsoft Learn (2026)",
  "Introduction to Data Science, Cisco (2025)",
  "TCF level B2 (C1 in reading comprehension), France Éducation International (2024)",
]

const stats = [
  { value: "8", label: "Projects completed" },
  { value: "0.89", label: "F1-score, failure prediction" },
  { value: "94%", label: "Accuracy, image classification" },
  { value: "3 h → 10 min", label: "Data preparation time" },
]

const codeSnippets = [
  "df = pd.read_csv('machines.csv')",
  "model = RandomForestClassifier()",
  "print(f1_score(y_test, y_pred))",
  "git commit -m 'Another day, another model'",
  "SELECT * FROM fact_orders;",
  "while(learning) { coffee++; }",
]

export default function DeveloperPortfolio() {
  const [typedText, setTypedText] = useState("")
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All")
  const [bgSnippets, setBgSnippets] = useState<{ text: string; left: number; delay: number; duration: number }[]>([])
  const fullText = "Data Scientist · ML & NLP"

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, 80)
    return () => clearInterval(timer)
  }, [])

  // Generated client-side to avoid hydration errors (Math.random)
  useEffect(() => {
    setBgSnippets(
      Array.from({ length: 15 }, () => ({
        text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
        left: Math.random() * 100,
        delay: Math.random() * 4,
        duration: 4 + Math.random() * 2,
      }))
    )
  }, [])

  const visibleProjects = filter === "All" ? projects : projects.filter((p) => p.category === filter)

  const navLinks = [
    { href: "#about", label: "about()" },
    { href: "#experience", label: "experience[]" },
    { href: "#skills", label: "skills{}" },
    { href: "#projects", label: "projects()" },
    { href: "#contact", label: "contact()" },
  ]

  const sectionTitle = "text-3xl font-bold text-center mb-12 font-mono text-primary"

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Code Background Effect */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent"></div>
        {bgSnippets.map((s, i) => (
          <div
            key={i}
            className="absolute text-primary text-xs font-mono animate-code"
            style={{ left: `${s.left}%`, animationDelay: `${s.delay}s`, animationDuration: `${s.duration}s` }}
          >
            {s.text}
          </div>
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/90 backdrop-blur-sm border-b border-primary/20 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Code2 className="h-6 w-6 text-primary" />
              <h1 className="text-xl font-bold font-mono">{"<Oussama/>"}</h1>
            </div>
            <div className="hidden md:flex space-x-6 font-mono">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-24 pb-16 px-4 relative">
        <div className="container mx-auto text-center">
          <div className="relative mb-8">
            <div className="w-40 h-40 mx-auto rounded-full border-2 border-primary/50 p-2 animate-glow">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-purple-900/20 flex items-center justify-center animate-float">
                <Brain className="h-16 w-16 text-primary" />
              </div>
            </div>
          </div>

          <div className="font-mono text-sm text-primary mb-4">{">"} console.log("Hello World!");</div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-mono">
            <span className="text-primary">OUSSAMA</span> <span className="text-white">HAFDOUNE</span>
          </h1>

          <div className="text-xl md:text-2xl text-muted-foreground mb-6 font-mono min-h-[2rem]">
            <span className="border-r-2 border-primary animate-blink">{typedText}</span>
          </div>

          <p className="text-lg text-muted-foreground mb-4 max-w-2xl mx-auto">
            Master's student in AI & Data Science, looking for a final-year (PFE) internship in Data Science, Data Engineering and Artificial Intelligence.
          </p>
          <p className="flex items-center justify-center gap-2 text-sm text-muted-foreground font-mono mb-8">
            <MapPin className="h-4 w-4 text-primary" /> Tangier, Morocco
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-primary hover:bg-primary/80 font-mono" asChild>
              <Link href="#contact">
                <Terminal className="h-4 w-4 mr-2" />
                contact()
              </Link>
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 font-mono" asChild>
              <Link href="#projects">
                <GitBranch className="h-4 w-4 mr-2" />
                git checkout projects
              </Link>
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 font-mono" asChild>
              <Link href="/cv_oussamahafdoune.pdf" target="_blank">
                <File className="h-4 w-4 mr-2" />
                Download CV
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 px-4 bg-secondary/50">
        <div className="container mx-auto">
          <h2 className={sectionTitle}>{"// About"}</h2>
          <div className="grid md:grid-cols-3 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 rounded-lg overflow-hidden border-2 border-primary/50 animate-glow">
                  <img src="/linkin .png" alt="Oussama Hafdoune, Data Scientist" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -top-2 -left-2 w-6 h-6 border-l-2 border-t-2 border-primary"></div>
                <div className="absolute -top-2 -right-2 w-6 h-6 border-r-2 border-t-2 border-primary"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 border-l-2 border-b-2 border-primary"></div>
                <div className="absolute -bottom-2 -right-2 w-6 h-6 border-r-2 border-b-2 border-primary"></div>
              </div>
            </div>

            <div className="md:col-span-2">
              <p className="text-lg mb-6">
                I build end-to-end AI solutions: data processing, modeling (Machine Learning, Deep Learning, NLP) and deployment. At TE Connectivity, I put into production an app that predicts machine failures and cut data preparation from 3 h to 10 min.
              </p>

              <div className="bg-card border border-primary/20 rounded-lg p-4 font-mono text-sm mb-6">
                <div className="text-primary mb-2">const developer = {"{"}</div>
                <div className="ml-4 text-muted-foreground space-y-1">
                  <div>name: <span className="text-green-400">"OUSSAMA HAFDOUNE"</span>,</div>
                  <div>role: <span className="text-green-400">"Data Scientist – Machine Learning & NLP"</span>,</div>
                  <div>study: <span className="text-green-400">"Master's in AI & Data Science, FST Tangier"</span>,</div>
                  <div>location: <span className="text-green-400">"Tangier, Morocco"</span>,</div>
                  <div>languages: [<span className="text-green-400">"Arabic", "French", "English"</span>],</div>
                  <div>lookingFor: <span className="text-green-400">"PFE internship – Data Science / Data Engineering / AI"</span>,</div>
                  <div>coffee: <span className="text-yellow-400">true</span></div>
                </div>
                <div className="text-primary">{"};"}</div>
              </div>

              <div className="flex space-x-4">
                <Button variant="outline" size="icon" className="border-primary hover:bg-primary/10" asChild>
                  <Link href="https://github.com/oussamasudo" aria-label="GitHub" target="_blank">
                    <Github className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" className="border-primary hover:bg-primary/10" asChild>
                  <Link href="https://www.linkedin.com/in/oussama-hafdoune-974006260/" aria-label="LinkedIn" target="_blank">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" className="border-primary hover:bg-primary/10" asChild>
                  <Link href="mailto:oussamahafdoune6@gmail.com" aria-label="Email">
                    <Mail className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Education */}
      <section id="experience" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className={sectionTitle}>{"/* Experience */"}</h2>
          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/30"></div>
            {experiences.map((e) => (
              <div key={e.role} className="relative flex items-start mb-8">
                <div className="absolute left-0 top-6 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  {e.icon}
                </div>
                <Card className="ml-12 w-full bg-card border-primary/20 hover:border-primary/50 transition-all">
                  <CardContent className="p-6">
                    <h3 className="font-bold font-mono text-primary">{e.role}</h3>
                    <p className="text-muted-foreground">{e.company}</p>
                    <p className="text-sm text-muted-foreground font-mono mb-3">{e.period}</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                      {e.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <h2 className={`${sectionTitle} mt-16`}>{"/* Education */"}</h2>
          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/30"></div>
            {education.map((e) => (
              <div key={e.title} className="relative flex items-center mb-8">
                <div className="absolute left-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <GraduationCap className="h-5 w-5 text-white" />
                </div>
                <Card className="ml-12 w-full bg-card border-primary/20 hover:border-primary/50 transition-all">
                  <CardContent className="p-6">
                    <h3 className="font-bold font-mono text-primary">{e.title}</h3>
                    <p className="text-muted-foreground">{e.school}</p>
                    <p className="text-sm text-muted-foreground font-mono">{e.period}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-16 px-4 bg-secondary/50">
        <div className="container mx-auto">
          <h2 className={sectionTitle}>{"// Technologies"}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {skillGroups.map((g) => (
              <Card key={g.title} className="bg-card border-primary/20 hover:border-primary/50 transition-colors">
                <CardContent className="p-6 text-center">
                  {g.icon}
                  <h3 className="font-semibold mb-4 font-mono">{g.title}</h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {g.items.map((s) => (
                      <Badge
                        key={s}
                        variant="secondary"
                        className="text-xs py-1 px-3 bg-primary/10 text-primary border border-primary/30 font-mono"
                      >
                        {s}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className={`${sectionTitle} mb-8`}>{"/* Projects */"}</h2>

          <div className="flex flex-wrap justify-center gap-2 mb-10" role="tablist" aria-label="Filter projects">
            {FILTERS.map((f) => (
              <Button
                key={f}
                size="sm"
                role="tab"
                aria-selected={filter === f}
                variant={filter === f ? "default" : "outline"}
                className={filter === f ? "bg-primary font-mono" : "border-primary text-primary hover:bg-primary/10 font-mono"}
                onClick={() => setFilter(f)}
              >
                {f}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleProjects.map((project) => (
              <Card
                key={project.title}
                className="overflow-hidden flex flex-col bg-card border-primary/20 hover:border-primary/50 transition-all hover:animate-glow"
              >
                <div className="aspect-video relative overflow-hidden bg-white/95 flex items-center justify-center">
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="w-full h-full object-contain" />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-purple-900/30 flex items-center justify-center text-primary [&_svg]:h-14 [&_svg]:w-14">
                      {project.icon}
                    </div>
                  )}
                </div>

                <CardHeader>
                  <CardTitle className="font-mono text-primary">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>

                <CardContent className="mt-auto">
                  {project.metric && (
                    <p className="text-sm font-mono text-green-400 mb-3">{project.metric}</p>
                  )}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs border-primary/30 text-primary font-mono">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {(project.github || project.live) && (
                    <div className="flex space-x-2">
                      {project.github && (
                        <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary/10 font-mono" asChild>
                          <Link href={project.github} target="_blank">
                            <Github className="h-4 w-4 mr-1" />
                            Code
                          </Link>
                        </Button>
                      )}
                      {project.live && (
                        <Button size="sm" className="bg-primary hover:bg-primary/80 font-mono" asChild>
                          <Link href={project.live} target="_blank">
                            <ExternalLink className="h-4 w-4 mr-1" />
                            Demo
                          </Link>
                        </Button>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 bg-secondary/50">
        <div className="container mx-auto">
          <h2 className={sectionTitle}>{"// Results"}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((s) => (
              <Card key={s.label} className="bg-card border-primary/20 hover:border-primary/50 transition-all text-center">
                <CardContent className="p-6">
                  <div className="text-2xl md:text-3xl font-bold text-primary font-mono mb-2">{s.value}</div>
                  <p className="text-sm text-muted-foreground">{s.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className={sectionTitle}>{"/* Certifications & Awards */"}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((c) => (
              <div key={c} className="flex items-start gap-3 bg-card border border-primary/20 rounded-lg p-4">
                <Award className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-4 bg-secondary/50">
        <div className="container mx-auto">
          <h2 className={`${sectionTitle} mb-8`}>{"// Contact & Feedback"}</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <div className="bg-card border border-primary/20 rounded-lg p-6 font-mono text-sm mb-6">
                <div className="text-primary mb-2">$ whoami</div>
                <div className="text-muted-foreground mb-4">oussamahafdoune6@gmail.com</div>
                <div className="text-primary mb-2">$ cat message.txt</div>
                <p className="text-muted-foreground mb-4">
                  An internship opportunity, a project to discuss, or feedback on this portfolio: get in touch.
                </p>
                <div className="text-primary">$ ./send_message --interactive</div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="font-mono">oussamahafdoune6@gmail.com</span>
                </div>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon" className="border-primary hover:bg-primary/10" asChild>
                    <Link href="https://github.com/oussamasudo" aria-label="GitHub" target="_blank">
                      <Github className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" className="border-primary hover:bg-primary/10" asChild>
                    <Link href="https://www.linkedin.com/in/oussama-hafdoune-974006260/" aria-label="LinkedIn" target="_blank">
                      <Linkedin className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" className="border-primary hover:bg-primary/10" asChild>
                    <Link href="/cv_oussamahafdoune.pdf" aria-label="CV" target="_blank">
                      <File className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-primary/20 py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <Code2 className="h-5 w-5 text-primary" />
            <p className="text-muted-foreground font-mono">© 2026 OUSSAMA HAFDOUNE – Data Scientist</p>
          </div>
          <p className="text-xs text-muted-foreground font-mono">
            {"{ "} Built with ❤️ using Next.js & TypeScript {" }"}
          </p>
        </div>
      </footer>
    </div>
  )
}