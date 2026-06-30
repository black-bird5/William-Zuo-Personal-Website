import SectionContainer from '../components/SectionContainer'
import ProjectCard from '../components/ProjectCard'
import WritingItem from '../components/WritingItem'
import projects from '../data/projects'
import writings from '../data/writings'

export default function Home() {
  return (
    <div className="prose prose-lg max-w-none py-12">
      <section id="about">
        <SectionContainer title="About Me">
          <h1 className="text-4xl font-serif">William Zuo</h1>
          <p className="text-lg text-gray-800 mt-1">Statistics & Data Science Undergraduate, Philosophy Minor</p>
          <p className="mt-4">I work at the intersection of rigorous statistical methods and philosophical theory. Currently pursuing an honors thesis on applications of learning theory to causal transportability.</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold">Academic Profile</h3>
              <ul className="mt-2 text-sm text-gray-700 dark:text-slate-300">
                <li><strong>Major:</strong> Statistics and Data Science</li>
                <li><strong>Selected Coursework:</strong> Graduate Philosophy Courses; Graduate Mathematical Statistics Course</li>
                <li><strong>Skills:</strong> Python, R, SQL (BigQuery/PostgreSQL), noSQL (MongoDB/Neo4j), Git, Linux, HTML, LaTeX</li>
                <li><strong>GPA:</strong> 4.0 in Math & Statistics Courses</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">Contact</h3>
              <div className="mt-2 flex items-center space-x-4 text-gray-800">
                <a href="mailto:zuowilliamc@gmail.com" className="flex items-center space-x-2 hover:text-accent" target="_blank" rel="noreferrer">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M3 6.5L12 13L21 6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.2" />
                  </svg>
                  <span>Email</span>
                </a>
                <a href="https://github.com/black-bird5" className="flex items-center space-x-2 hover:text-accent" target="_blank" rel="noreferrer">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.49v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.04 1.53 1.04.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.71.115 2.5.337 1.9-1.29 2.74-1.02 2.74-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.86v2.76c0 .27.18.58.69.48A10 10 0 0022 12c0-5.52-4.48-10-10-10z" fill="currentColor" />
                  </svg>
                  <span>GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/william-zuo-253320239/" className="flex items-center space-x-2 hover:text-accent" target="_blank" rel="noreferrer">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M4.98 3.5a2.5 2.5 0 11-.001 5.001A2.5 2.5 0 014.98 3.5zM3.5 9h3v11h-3zM9.5 9h2.9v1.5h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6V20h-3v-4.2c0-1-.02-2.3-1.4-2.3-1.4 0-1.62 1.1-1.62 2.2V20h-3V9z" fill="currentColor" />
                  </svg>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </SectionContainer>
      </section>

      <section id="projects">
        <SectionContainer title="Technical Projects">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {projects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </SectionContainer>
      </section>

      <section id="writings">
        <SectionContainer title="Selected Essays">
          <ol className="list-decimal pl-5 space-y-4">
            {writings.map((w) => (
              <WritingItem key={w.id} item={w} />
            ))}
          </ol>
        </SectionContainer>
      </section>
    </div>
  )
}
