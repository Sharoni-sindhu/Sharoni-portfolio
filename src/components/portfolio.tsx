import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  Code2,
  Github,
  GraduationCap,
  Leaf,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Moon,
  Network,
  Sparkles,
  Sun,
  Users,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const navItems = ["About", "Skills", "Experience", "Projects", "Education", "Contact"];

const skills = [
  { title: "Core languages", items: "Java · JavaScript · Python · C · SQL", tone: "sky" },
  { title: "Frontend", items: "React · HTML5 · CSS3 · Tailwind · Vite", tone: "lime" },
  { title: "Backend", items: "Node.js · Express · REST APIs · JWT · Spring Boot basics", tone: "lavender" },
  { title: "Data & tools", items: "MongoDB · MySQL · Git · Postman · Railway · Vercel", tone: "yellow" },
];

const projects = [
  {
    number: "01",
    title: "AgriConnect",
    type: "Farmer–buyer marketplace",
    summary:
      "A full-stack platform connecting farmers directly with consumers, reducing middlemen and creating a clearer path from produce to purchase.",
    stack: ["React", "Node.js", "Express", "MongoDB", "AI chatbot"],
    contribution: "Full-stack development · REST APIs · authentication · optimization · team leadership",
    accent: "project-lime",
  },
  {
    number: "02",
    title: "Team Task Manager",
    type: "Production-style full-stack app",
    summary:
      "A collaborative workspace for assigning tasks, managing status, controlling roles, and understanding project progress through analytics.",
    stack: ["React", "Express", "MongoDB Atlas", "JWT", "REST APIs"],
    contribution: "API architecture · frontend integration · task workflows · separate deployments",
    accent: "project-sky",
  },
];

const supportingProjects = [
  {
    icon: Network,
    title: "Cyber Threat Intelligence",
    text: "ML and NLP workflows for threat-data processing, monitoring, visualization, and actionable insights.",
  },
  {
    icon: BookOpen,
    title: "Book Store Management",
    text: "A Java Swing and MySQL desktop system for inventory, billing, customers, and automated stock updates.",
  },
];

function scrollToSection(id: string) {
  document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
}

export function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const preferred = window.localStorage.getItem("sharoni-theme");
    const shouldUseDark = preferred === "dark";
    setDarkMode(shouldUseDark);
    document.documentElement.classList.toggle("dark", shouldUseDark);
  }, []);

  function toggleTheme() {
    const next = !darkMode;
    setDarkMode(next);
    document.documentElement.classList.toggle("dark", next);
    window.localStorage.setItem("sharoni-theme", next ? "dark" : "light");
  }

  function navigate(id: string) {
    setMenuOpen(false);
    scrollToSection(id);
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto grid h-16 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 lg:px-8">
          <button
            type="button"
            onClick={() => navigate("home")}
            className="min-w-0 text-left font-display text-lg font-semibold tracking-normal"
            aria-label="Go to home"
          >
            Sharoni<span className="text-primary">.</span>
          </button>

          <div className="flex shrink-0 items-center gap-1">
            <nav className="mr-3 hidden items-center gap-6 lg:flex" aria-label="Main navigation">
              {navItems.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => navigate(item)}
                  className="text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item}
                </button>
              ))}
            </nav>
            <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Switch appearance">
              {darkMode ? <Sun /> : <Moon />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        {menuOpen && (
          <nav className="border-t border-border bg-background px-5 py-4 lg:hidden" aria-label="Mobile navigation">
            <div className="mx-auto grid max-w-7xl gap-1">
              {navItems.map((item) => (
                <Button key={item} variant="ghost" className="justify-start" onClick={() => navigate(item)}>
                  {item}
                </Button>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main>
        <section id="home" className="hero-glow relative flex min-h-[94svh] scroll-mt-16 flex-col justify-center overflow-hidden pt-24">
          <div className="hero-orb hero-orb-a" aria-hidden />
          <div className="hero-orb hero-orb-b" aria-hidden />
          <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 pb-12 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
            <div className="animate-entrance pt-8 lg:pt-0">
              <div className="glass mb-8 inline-flex items-center gap-3 rounded-full px-4 py-2 text-xs font-medium text-muted-foreground">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-70" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-success" />
                </span>
                Available for full-time roles
                <span className="h-3 w-px bg-border" />
                <MapPin className="h-3.5 w-3.5" /> Hyderabad
              </div>
              <p className="mb-3 font-accent text-2xl italic text-muted-foreground sm:text-3xl">Hi, I’m</p>
              <h1 className="max-w-4xl font-display text-6xl font-semibold leading-[0.9] tracking-tight sm:text-7xl lg:text-8xl xl:text-9xl">
                Barigilla
                <br />
                <span className="text-gradient font-accent font-normal italic">Sharoni.</span>
              </h1>
              <div className="mt-8 max-w-xl">
                <h2 className="text-lg font-semibold sm:text-xl">Aspiring Software Engineer · Full-Stack Developer</h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
                  Passionate developer dedicated to building professional, functional, and modern applications that make a difference.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button size="lg" onClick={() => navigate("projects")}>
                  View my work <ArrowDown />
                </Button>
                <Button size="lg" variant="outline" onClick={() => navigate("contact")}>
                  Get in touch <ArrowUpRight />
                </Button>
                <div className="ml-1 flex items-center gap-1">
  <a
    href="https://github.com/Sharoni-sindhu"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
    className="glass grid h-10 w-10 place-items-center rounded-full text-muted-foreground transition hover:-translate-y-0.5 hover:text-primary"
  >
    <Github className="h-4 w-4" />
  </a>

  <a
    href="https://www.linkedin.com/in/barigilla-sharoni"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    className="glass grid h-10 w-10 place-items-center rounded-full text-muted-foreground transition hover:-translate-y-0.5 hover:text-primary"
  >
    <Linkedin className="h-4 w-4" />
  </a>

  <a
    href="mailto:sharonisindhu75@gmail.com"
    aria-label="Email"
    className="glass grid h-10 w-10 place-items-center rounded-full text-muted-foreground transition hover:-translate-y-0.5 hover:text-primary"
  >
    <Mail className="h-4 w-4" />
  </a>
</div>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-sm animate-entrance lg:max-w-md">
              <div className="avatar-ring rounded-[2.2rem] p-0.75 shadow-soft">
                <div className="group relative aspect-4/5 overflow-hidden rounded-[2rem] bg-surface">
                  <img
                    src="https://i.postimg.cc/vTnpgH2k/IMG-20260610-WA0540.jpg"
                    alt="Barigilla Sharoni, Information Technology graduate and full-stack developer"
                    className="absolute inset-0 h-full w-full scale-[1.08] object-cover object-top transition duration-700 ease-out group-hover:scale-[1.14]"
                    loading="eager"
                    decoding="async"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-36 bg-linear-to-t from-background/90 via-background/45 to-transparent" />
                  <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-2xl border border-border/70 bg-background/80 px-4 py-3 backdrop-blur-md">
                    <div className="min-w-0">
                      <p className="truncate font-display text-sm font-semibold">Barigilla Sharoni</p>
                      <p className="text-[11px] text-muted-foreground">IT Graduate · Class of 2026</p>
                    </div>
                    <span className="ml-3 inline-flex shrink-0 items-center gap-1.5 rounded-full bg-success/15 px-2.5 py-1 text-[10px] font-semibold text-success">
                      <span className="h-1.5 w-1.5 rounded-full bg-success" /> Open to work
                    </span>
                  </div>
                </div>
              </div>
              <div className="glass float-slow absolute -right-3 top-8 rounded-full px-4 py-2 text-xs shadow-soft">
                <Sparkles className="mr-2 inline h-3.5 w-3.5 text-primary" /> Thoughtful systems
              </div>
              <div className="glass float-slow absolute -left-3 top-[54%] rounded-full px-4 py-2 text-xs shadow-soft [animation-delay:1.5s]">
                <Code2 className="mr-2 inline h-3.5 w-3.5 text-primary" /> Full-stack curious
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                {[["4+", "Projects"], ["2", "Deployed apps"], ["1", "Team led"]].map(([n, l]) => (
                  <div key={l} className="glass-card rounded-xl px-2 py-3">
                    <p className="font-display text-xl font-semibold">{n}</p>
                    <p className="text-[11px] text-muted-foreground">{l}</p>
                  </div>
                ))}
              </div>
              <div className="glass-card mt-4 rounded-2xl p-4 font-mono text-xs leading-6">
                <p><span className="text-primary">const</span> sharoni = {"{"}</p>
                <p className="pl-4">focus: <span className="text-success">"full-stack"</span>, stack: [<span className="text-success">"Java"</span>, <span className="text-success">"React"</span>],</p>
                <p className="pl-4">mindset: <span className="text-success">"root cause first"</span></p>
                <p>{"}"};</p>
              </div>
            </div>
          </div>
          <div className="mx-auto flex w-full max-w-7xl flex-wrap gap-2 px-5 pb-10 lg:px-8" aria-label="Core strengths">
            {["Java", "React", "Node.js", "REST APIs", "MongoDB", "Team Leadership"].map((s) => (
              <span key={s} className="glass rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground transition hover:-translate-y-0.5 hover:text-foreground">
                {s}
              </span>
            ))}
          </div>
        </section>

        <section id="about" className="scroll-mt-16 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <p className="section-kicker">Hello / my approach</p>
              <h2 className="mt-5 font-display text-4xl font-medium leading-tight tracking-normal sm:text-6xl">
                I look for the <span className="font-accent italic text-primary">root cause</span>—not the quickest patch.
              </h2>
              <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                I’m a calm, people-oriented problem solver who values listening before acting. I enjoy turning complex
                needs into clear, useful software—and growing alongside teammates who care about meaningful work.
              </p>
            </div>
            <div className="mt-16 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
              {[{ icon: Users, title: "People first", text: "Clear communication, thoughtful collaboration, and space for every voice." }, { icon: Code2, title: "Build with purpose", text: "Software choices grounded in real user needs and maintainable foundations." }, { icon: Leaf, title: "Always growing", text: "Curiosity, reflection, and continuous learning guide every new challenge." }].map(({ icon: Icon, title, text }) => (
                <article key={title} className="bg-background p-8 sm:p-10">
                  <Icon className="h-6 w-6 text-primary" />
                  <h3 className="mt-8 text-lg font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="scroll-mt-16 bg-surface py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
              <div>
                <p className="section-kicker">Technical toolkit</p>
                <h2 className="mt-5 font-display text-4xl font-medium tracking-normal sm:text-6xl">Skills with honest depth.</h2>
                <p className="mt-6 max-w-md text-sm leading-7 text-muted-foreground">
                  Strong foundations, practical full-stack experience, and a growing backend focus—without pretending every tool is mastered.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {skills.map((skill, index) => (
                  <article key={skill.title} className={`skill-card skill-${skill.tone} min-h-52 p-7`}>
                    <span className="font-mono text-xs text-muted-foreground">0{index + 1}</span>
                    <h3 className="mt-10 text-xl font-semibold">{skill.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-muted-foreground">{skill.items}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="scroll-mt-16 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <p className="section-kicker text-center">Where theory met practice</p>
            <h2 className="mx-auto mt-5 max-w-3xl text-center font-display text-4xl font-medium tracking-normal sm:text-6xl">Experience shaped by building—and listening.</h2>
            <div className="mt-16 grid gap-12 border-t border-border pt-10 lg:grid-cols-[0.72fr_1.28fr]">
              <div>
                <div className="flex items-center gap-3 text-primary"><BriefcaseBusiness className="h-5 w-5" /><span className="text-xs font-semibold uppercase tracking-widest">2026 · 4 months</span></div>
                <h3 className="mt-6 text-2xl font-semibold">Web Development & AI Intern</h3>
                <p className="mt-2 text-sm text-muted-foreground">HexaDot · CSR Initiative of Hexagon</p>
              </div>
              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-widest">What I built</h4>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">AgriConnect’s frontend and backend services, REST APIs, secure authentication, database integration, optimization, and AI chatbot experience.</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-widest">How I led</h4>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">By listening to every contributor, balancing opinions, making space for compromise, and keeping technical progress aligned with team harmony.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="scroll-mt-16 bg-projects py-24 text-projects-foreground sm:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="section-kicker text-projects-muted">Selected work / 2026</p>
                <h2 className="mt-5 font-display text-4xl font-medium tracking-normal sm:text-6xl">Projects that solve real problems.</h2>
              </div>
              <p className="max-w-sm text-sm leading-7 text-projects-muted">From marketplace access to team coordination—each project connects technical decisions to people’s needs.</p>
            </div>
            <div className="mt-16 grid gap-6 lg:grid-cols-2">
              {projects.map((project) => (
                <article key={project.title} className={`project-card ${project.accent} p-7 sm:p-10`}>
                  <div className="flex items-center justify-between"><span className="font-mono text-xs">{project.number}</span><ArrowUpRight className="h-5 w-5" /></div>
                  <div className="project-visual my-10 grid min-h-56 place-items-center overflow-hidden rounded-md border border-current/15">
                    <div className="mock-window w-[82%] rounded-md bg-background p-3 text-foreground shadow-soft">
                      <div className="mb-3 flex gap-1"><span /><span /><span /></div>
                      <div className="grid grid-cols-[0.6fr_1.4fr] gap-2"><div className="mock-side rounded-sm" /><div className="grid gap-2"><div className="mock-bar rounded-sm" /><div className="grid grid-cols-2 gap-2"><div className="mock-block rounded-sm" /><div className="mock-block rounded-sm" /></div></div></div>
                    </div>
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-widest opacity-70">{project.type}</p>
                  <h3 className="mt-3 font-display text-3xl font-semibold">{project.title}</h3>
                  <p className="mt-4 text-sm leading-7 opacity-75">{project.summary}</p>
                  <div className="mt-7 flex flex-wrap gap-2">{project.stack.map((item) => <span key={item} className="rounded-full border border-current/20 px-3 py-1 text-xs">{item}</span>)}</div>
                  <p className="mt-7 border-t border-current/15 pt-6 text-xs leading-6 opacity-70">{project.contribution}</p>
                </article>
              ))}
            </div>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {supportingProjects.map(({ icon: Icon, title, text }) => (
                <article key={title} className="flex gap-5 rounded-lg border border-projects-border p-7">
                  <Icon className="h-6 w-6 shrink-0 text-projects-accent" />
                  <div><h3 className="font-semibold">{title}</h3><p className="mt-2 text-sm leading-7 text-projects-muted">{text}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="scroll-mt-16 py-24 sm:py-32">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
            <div>
              <p className="section-kicker">Education & leadership</p>
              <h2 className="mt-5 font-display text-4xl font-medium tracking-normal sm:text-6xl">Four years of showing up.</h2>
              <div className="mt-10 rounded-lg bg-primary p-8 text-primary-foreground">
                <GraduationCap className="h-7 w-7" />
                <p className="mt-8 text-xs font-semibold uppercase tracking-widest opacity-70">B.Tech · Information Technology</p>
                <h3 className="mt-3 text-2xl font-semibold">J.B. Institute of Engineering and Technology</h3>
                <div className="mt-8 flex items-end justify-between border-t border-primary-foreground/20 pt-6"><span>2022—2026</span><strong className="text-3xl">9.40</strong></div>
                <p className="mt-1 text-right text-xs opacity-70">CGPA</p>
              </div>
            </div>
            <div className="border-l border-border pl-7 sm:pl-12">
              {[{ stage: "Student", title: "Branch topper", text: "Built rigorous technical foundations while topping the Information Technology branch." }, { stage: "Representative", title: "Class representative · 4 years", text: "Practiced responsibility, communication, and coordination throughout the degree." }, { stage: "Organizer", title: "Head of Innovatex events", text: "Led technical and non-technical events and participated in the Codeverse hackathon." }, { stage: "Team leader", title: "AgriConnect internship", text: "Balanced delivery with listening, contribution, compromise, and team harmony." }].map((item, index) => (
                <article key={item.stage} className="relative border-b border-border py-8 first:pt-0">
                  <span className="absolute left-[-2.18rem] top-9 h-3 w-3 rounded-full border-2 border-background bg-primary sm:left-[-3.43rem]" />
                  <div className="grid gap-3 sm:grid-cols-[8rem_1fr]"><span className="font-mono text-xs text-primary">0{index + 1} / {item.stage}</span><div><h3 className="text-lg font-semibold">{item.title}</h3><p className="mt-2 text-sm leading-7 text-muted-foreground">{item.text}</p></div></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-surface py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <p className="section-kicker text-center">What I can contribute</p>
            <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
              {["Front-End Web Development", "Full-Stack Web Development", "Java Backend Development"].map((service, index) => (
                <div key={service} className="bg-surface p-8"><span className="font-mono text-xs text-primary">0{index + 1}</span><h3 className="mt-8 text-lg font-semibold">{service}</h3></div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact-glow scroll-mt-16 py-24 sm:py-32">
          <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
            <p className="section-kicker">Let’s make something meaningful</p>
            <h2 className="mt-6 font-display text-5xl font-medium leading-none tracking-normal sm:text-7xl lg:text-8xl">Ready to learn.<br /><span className="font-accent italic text-primary">Ready to build.</span></h2>
            <p className="mx-auto mt-8 max-w-xl text-sm leading-7 text-muted-foreground">I’m open to software engineering opportunities, thoughtful collaborations, and conversations with people who care about building well.</p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <Button size="lg" asChild><a href="mailto:sharonisindhu75@gmail.com"><Mail /> Email me</a></Button>
              <Button size="lg" variant="outline" asChild>
  <a
    href="/CV_Sharoni.pdf"
    target="_blank"
    rel="noopener noreferrer"
  >
    View Resume <ArrowRight />
  </a>
</Button></div>
            <div className="mt-14 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" /> Hyderabad, India</span>
              <a className="inline-flex items-center gap-2 transition-colors hover:text-foreground" href="mailto:sharonisindhu75@gmail.com"><Mail className="h-4 w-4" /> sharonisindhu75@gmail.com</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <span>© 2026 Barigilla Sharoni</span>
          <div className="flex items-center gap-4">
  <a
    href="https://github.com/Sharoni-sindhu"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
    className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
  >
    <Github className="h-4 w-4" /> GitHub
  </a>

  <a
    href="https://www.linkedin.com/in/barigilla-sharoni"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
  >
    <Linkedin className="h-4 w-4" /> LinkedIn
  </a>
</div></div>
      </footer>
    </div>
  );
}