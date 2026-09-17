import React from "react";

const skills = [
  "AI Content Writing",
  "Prompt Engineering",
  "Content Research",
  "Social Media Content",
  "Blog Writing",
  "AI-assisted SEO",
];

const projects = [
  {
    title: "AI Blog Content",
    description:
      "SEO-friendly blog articles created with AI-assisted research, structured writing and human editing.",
    tag: "Content",
  },
  {
    title: "Social Media Campaign",
    description:
      "Engaging social media captions, hooks and content ideas designed for better audience engagement.",
    tag: "Social Media",
  },
  {
    title: "AI Prompt Library",
    description:
      "A collection of reusable prompts for content generation, research, brainstorming and productivity.",
    tag: "Prompt Engineering",
  },
];

const tools = [
  "ChatGPT",
  "Google Gemini",
  "Claude",
  "Canva",
  "Notion",
  "Google Docs",
];

function App() {
  return (
    <div className="min-h-screen bg-[#08090d] text-white">

      {/* NAVBAR */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#08090d]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">

          <a href="#home" className="text-xl font-bold">
            Anubhav<span className="text-cyan-400">.AI</span>
          </a>

          <div className="hidden gap-8 text-sm text-gray-300 md:flex">
            <a href="#home" className="hover:text-cyan-400">Home</a>
            <a href="#about" className="hover:text-cyan-400">About</a>
            <a href="#skills" className="hover:text-cyan-400">Skills</a>
            <a href="#projects" className="hover:text-cyan-400">Projects</a>
            <a href="#contact" className="hover:text-cyan-400">Contact</a>
          </div>

          <a
            href="#contact"
            className="rounded-full border border-cyan-400/40 px-5 py-2 text-sm text-cyan-400 transition hover:bg-cyan-400 hover:text-black"
          >
            Let's Talk
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24"
      >
        {/* Background glow */}
        <div className="absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">

          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[4px] text-cyan-400">
              AI Content Creator
            </p>

            <h1 className="text-5xl font-bold leading-tight md:text-7xl">
              Creating
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Ideas with AI.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
              I create engaging, useful and human-focused content using
              artificial intelligence, creative thinking and modern content
              strategies.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-cyan-400 px-7 py-3 font-semibold text-black transition hover:scale-105"
              >
                View My Work →
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/20 px-7 py-3 font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* AI CARD */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl">

              <div className="mb-6 flex items-center justify-between">
                <span className="text-sm text-gray-400">
                  AI Content Studio
                </span>

                <span className="flex items-center gap-2 text-xs text-green-400">
                  <span className="h-2 w-2 rounded-full bg-green-400" />
                  Online
                </span>
              </div>

              <div className="rounded-2xl bg-black/30 p-5">
                <p className="text-sm text-gray-500">Prompt</p>

                <p className="mt-2 text-gray-200">
                  Create an engaging content idea for a technology audience.
                </p>
              </div>

              <div className="mt-4 rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.03] p-5">
                <p className="text-sm text-cyan-400">AI Output</p>

                <p className="mt-2 leading-7 text-gray-300">
                  "Technology isn't replacing creativity — it's giving
                  creators new ways to express it."
                </p>
              </div>

              <div className="mt-6 flex gap-2">
                <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-gray-400">
                  AI
                </span>
                <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-gray-400">
                  Content
                </span>
                <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-gray-400">
                  Creativity
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">

          <p className="text-sm uppercase tracking-[4px] text-cyan-400">
            About Me
          </p>

          <div className="mt-5 grid gap-10 md:grid-cols-2">

            <h2 className="text-4xl font-bold md:text-5xl">
              Turning ideas into
              <span className="text-cyan-400"> meaningful content.</span>
            </h2>

            <div className="text-gray-400">
              <p className="leading-8">
                Hi, I'm Anubhav. I'm an AI Content Creator interested in
                combining creativity, technology and artificial intelligence
                to create valuable digital content.
              </p>

              <p className="mt-5 leading-8">
                I use AI tools for brainstorming, research, content
                structuring and idea generation while keeping the final
                content clear, useful and human-focused.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="border-y border-white/10 bg-white/[0.02] px-6 py-24">
        <div className="mx-auto max-w-6xl">

          <p className="text-sm uppercase tracking-[4px] text-cyan-400">
            What I Do
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            My Creative Skills
          </h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {skills.map((skill, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-xl text-cyan-400">
                  ✦
                </div>

                <h3 className="text-lg font-semibold">
                  {skill}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  Creating clear, engaging and audience-focused content with
                  modern AI-assisted workflows.
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">

          <p className="text-sm uppercase tracking-[4px] text-cyan-400">
            Portfolio
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Featured Work
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">

            {projects.map((project, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30"
              >

                <div className="flex h-48 items-center justify-center bg-gradient-to-br from-cyan-500/10 to-blue-500/5">
                  <span className="text-6xl opacity-70">
                    {index === 0 ? "✍️" : index === 1 ? "📱" : "🤖"}
                  </span>
                </div>

                <div className="p-6">

                  <span className="text-xs text-cyan-400">
                    {project.tag}
                  </span>

                  <h3 className="mt-3 text-xl font-bold">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-500">
                    {project.description}
                  </p>

                  <button className="mt-6 text-sm font-semibold text-cyan-400">
                    View Project →
                  </button>

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section className="border-y border-white/10 bg-white/[0.02] px-6 py-20">
        <div className="mx-auto max-w-6xl text-center">

          <p className="text-sm uppercase tracking-[4px] text-cyan-400">
            My Toolkit
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            Tools I Work With
          </h2>

          <div className="mt-8 flex flex-wrap justify-center gap-3">

            {tools.map((tool, index) => (
              <span
                key={index}
                className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-gray-300 transition hover:border-cyan-400/40 hover:text-cyan-400"
              >
                {tool}
              </span>
            ))}

          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">

          <p className="text-sm uppercase tracking-[4px] text-cyan-400">
            Services
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            How I Can Help
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl border border-white/10 p-7">
              <h3 className="text-xl font-bold">AI Content</h3>
              <p className="mt-4 leading-7 text-gray-500">
                Blogs, articles, website copy and informative content using
                AI-assisted workflows.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 p-7">
              <h3 className="text-xl font-bold">Social Media</h3>
              <p className="mt-4 leading-7 text-gray-500">
                Captions, hooks, content ideas and social media campaigns
                designed for digital audiences.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 p-7">
              <h3 className="text-xl font-bold">Prompt Engineering</h3>
              <p className="mt-4 leading-7 text-gray-500">
                Structured prompts for research, content generation,
                brainstorming and productivity.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-24">
        <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center md:p-14">

          <p className="text-sm uppercase tracking-[4px] text-cyan-400">
            Let's Connect
          </p>

          <h2 className="mt-5 text-4xl font-bold md:text-5xl">
            Have an idea?
            <span className="block text-cyan-400">
              Let's create it.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-gray-500">
            I'm open to content creation projects, collaborations and
            opportunities where AI and creativity come together.
          </p>

          <a
            href="mailto:your-email@gmail.com"
            className="mt-8 inline-block rounded-full bg-cyan-400 px-8 py-3 font-semibold text-black transition hover:scale-105"
          >
            Email Me →
          </a>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-gray-500 md:flex-row">

          <p>
            © 2026 Anubhav. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="www.linkedin.com/in/anubhav-gangele-10951a31a" className="hover:text-cyan-400">
              LinkedIn
            </a>

            <a href="https://github.com/anubahvgangele" className="hover:text-cyan-400">
              GitHub
            </a>

            <a href="https://www.instagram.com/" className="hover:text-cyan-400">
              Instagram
            </a>
          </div>

        </div>
      </footer>

    </div>
  );
}

export default App;