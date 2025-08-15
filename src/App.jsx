import { useMemo } from "react";
import { motion } from "framer-motion";

/* --- CONFIG DATA --- */
const CONFIG = {
  name: "Saurav Kumar",
  role: "Data Engineer | Analytics | GCP • BigQuery • PySpark • EDA",
  tagline: "Bridging data engineering precision with analytical insight to build scalable, insight-driven solutions.",
  location: "Pune, India",
  email: "mailto:sauravk1403@gmail.com",
  avatar: "/avatar.jpg",
  links: {
    linkedin: "https://www.linkedin.com/in/saurav-kumar-255b49105/",
    github: "https://github.com/Im-sk",
    leetcode: "https://leetcode.com/sauravkumar__7/",
    hackerrank: "https://www.hackerrank.com/Im_sk?hr_r=1",
    credly: "https://www.credly.com/users/saurav-kumar.d0d51b9b",
    resume: "/resume.pdf",
  },
  specialties: [
    "BigQuery & SQL (performance tuning)",
    "PySpark on Dataproc/Databricks",
    "GCP: Dataflow, Composer (Airflow), Cloud Functions",
    "Streaming: Pub/Sub, Kafka",
    "Python, EDA, Statistical Modelling, Tableau",
  ],
  skills: {
    languages: ["Python", "SQL", "Java", "R", "Scala", "Shell"],
    data: ["BigQuery", "Spark/PySpark", "HiveQL", "Dataproc", "Dataflow", "Pub/Sub", "Cloud Composer"],
    tooling: [
      "Git",
      "JIRA",
      "Tableau",
      "Power BI",
      "Looker",
      "Excel",
      "Google Colab",
      "Jupyter Notebook",
      "Visual Studio",
      "Bitbucket",
      "GitHub",
      "Insomnia/Postman",
    ],
  },
  projects: [
    {
      title: "Face Detection and Recognition using OpenCV",
      period: "—",
      summary: "Developed a face recognition system using Haar Cascade Classifier in Python, achieving 85%+ accuracy in real-time recognition.",
      tech: ["Python", "OpenCV", "Haar Cascade", "Tkinter"],
      highlights: [
        "Built user-friendly GUI",
        "Fine-tuned classifiers to reduce query execution time by 25–30%",
      ],
    },
    {
      title: "SQL Business Case Study",
      period: "—",
      summary: "Analyzed large MNC data in Brazil, improving sales & profit margins by over 15%.",
      tech: ["SQL", "Data Visualization", "KPI Analysis"],
      highlights: [
        "Compiled yearly performance reports",
        "Applied visualization strategies for better sales tracking",
      ],
    },
    {
      title: "Netflix Business Case Study",
      period: "—",
      summary: "Analyzed OTT release patterns to optimize viewership and revenue by 20%.",
      tech: ["SQL", "Python", "Data Analysis"],
      highlights: [
        "Recommended cost-saving actor-director combos",
        "Delivered actionable release strategy insights",
      ],
    },
  ],
  experience: [
    {
      company: "Mphasis",
      title: "Data Engineer",
      period: "Dec 2024 – Present",
      bullets: [
        "Reduced data latency by 30% via Hive query optimization and ETL streamlining.",
        "Automated validation pipelines, improving insights delivery by 25%.",
        "Built cross-platform data consistency tool, cutting manual effort by 30%.",
      ],
    },
    {
      company: "Tata Consultancy Services",
      title: "Lead Data Analyst",
      period: "May 2022 – Dec 2024",
      bullets: [
        "Built 5+ interactive Looker dashboards, accelerating decisions by 30%.",
        "Improved analytics efficiency for Google products, boosting sales by 15–18%.",
        "Streamlined vendor workflows using BigQuery/Dataproc, reducing analysis time by 25%.",
      ],
    },
    {
      company: "Tata Consultancy Services",
      title: "Software Development Engineer (Backend)",
      period: "Nov 2021 – Apr 2022",
      bullets: [
        "Implemented microservices for a reservation system, improving scalability.",
        "Set up CI/CD pipelines, cutting deployment time by 25%.",
        "Enhanced analytics efficiency by 25% via advanced SQL queries.",
      ],
    },
  ],
  education: [
    {
      school: "Pune University",
      focus: "B.E. Computer Engineering | CGPA: 8.08 / 10",
      period: "2021",
    },
    {
      school: "CBSE — Science (PCM)",
      focus: "Class 12 | 79.2%",
      period: "2016",
    },
  ],
  achievements: [
    "Associate Google Cloud Engineer (Google)",
    "Python for Data Science (NPTEL)",
    "Programming in Java (NPTEL)",
    "SQL Skill Mastery (Scaler)",
    "Microsoft Data Analyst Associate",
  ],
};

/* --- REUSABLE COMPONENTS --- */
function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-24 max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">{title}</h2>
      {children}
    </section>
  );
}

function Chip({ children }) {
  return (
    <span className="inline-block rounded-2xl border px-3 py-1 text-sm mr-2 mb-2 shadow-sm">
      {children}
    </span>
  );
}

function Card({ children }) {
  return (
    <div className="rounded-2xl border p-5 shadow-sm hover:shadow-md transition-shadow bg-white/70 dark:bg-zinc-900/60">
      {children}
    </div>
  );
}

/* --- MAIN APP COMPONENT --- */
export default function App() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-black dark:to-zinc-950 text-zinc-900 dark:text-zinc-100">
      <header className="max-w-5xl mx-auto px-4 pt-10 pb-6">
        <div className="flex flex-col-reverse md:flex-row items-center gap-6">
          <div className="flex-1">
            <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="text-3xl md:text-5xl font-extrabold">
              {CONFIG.name}
            </motion.h1>
            <p className="mt-2 text-lg md:text-2xl opacity-90">{CONFIG.role}</p>
            <p className="mt-4 max-w-2xl opacity-80">{CONFIG.tagline}</p>
            <div className="mt-4 flex flex-wrap gap-4">
              <a href={CONFIG.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">LinkedIn</a>
              <a href={CONFIG.links.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">GitHub</a>
              <a href={CONFIG.links.leetcode} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">LeetCode</a>
              <a href={CONFIG.links.hackerrank} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">HackerRank</a>
              <a href={CONFIG.links.credly} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Credly</a>
              <a href={CONFIG.links.resume} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Resume</a>
            </div>
            <div className="mt-6 flex flex-wrap">
              {CONFIG.specialties.map((s) => (
                <Chip key={s}>{s}</Chip>
              ))}
            </div>
          </div>
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border shadow-sm">
            <img src={CONFIG.avatar} alt={`${CONFIG.name} avatar`} className="w-full h-full object-cover" />
          </div>
        </div>
      </header>

      <Section id="skills" title="Skills">
        <div className="grid md:grid-cols-3 gap-4">
          {Object.entries(CONFIG.skills).map(([category, items]) => (
            <Card key={category}>
              <h3 className="font-semibold mb-2 capitalize">{category}</h3>
              {items.map((x) => (
                <Chip key={x}>{x}</Chip>
              ))}
            </Card>
          ))}
        </div>
      </Section>

      <Section id="projects" title="Projects">
        <div className="grid md:grid-cols-3 gap-4">
          {CONFIG.projects.map((p) => (
            <Card key={p.title}>
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <p className="text-sm opacity-70">{p.period}</p>
              <p className="mt-3 opacity-90">{p.summary}</p>
              <div className="mt-3">
                {p.tech.map((t) => (
                  <Chip key={t}>{t}</Chip>
                ))}
              </div>
              <ul className="mt-3 list-disc pl-5 space-y-1">
                {p.highlights.map((h) => (
                  <li key={h} className="opacity-90 text-sm">{h}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="experience" title="Experience">
        <div className="grid gap-4">
          {CONFIG.experience.map((e) => (
            <Card key={e.company + e.title}>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">{e.title}</h3>
                  <p className="opacity-80">{e.company}</p>
                </div>
                <p className="text-sm opacity-70">{e.period}</p>
              </div>
              <ul className="mt-3 list-disc pl-5 space-y-1">
                {e.bullets.map((b) => (
                  <li key={b} className="opacity-90">{b}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="education" title="Education & Achievements">
        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <h3 className="font-semibold mb-2">Education</h3>
            {CONFIG.education.map((ed) => (
              <div key={ed.school}>
                <p className="font-medium">{ed.school}</p>
                <p className="text-sm opacity-80">{ed.focus}</p>
                <p className="text-sm opacity-70">{ed.period}</p>
              </div>
            ))}
          </Card>
          <Card>
            <h3 className="font-semibold mb-2">Achievements</h3>
            <ul className="list-disc pl-5 space-y-1">
              {CONFIG.achievements.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      <footer className="max-w-5xl mx-auto px-4 py-10 opacity-70 text-sm">
        © {year} {CONFIG.name}. Built with React + Tailwind.
      </footer>
    </div>
  );
}
