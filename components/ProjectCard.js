export default function ProjectCard({ project }) {
  return (
    <article className="p-5 border border-gray-200 rounded-sm hover:shadow-sm transition-shadow duration-150">
      <h3 className="font-serif text-lg mb-2">{project.title}</h3>
      <p className="text-sm text-gray-700 mb-3">{project.description}</p>
      <div className="text-xs text-gray-600 mb-4">
        <strong>Tech:</strong> {project.tech.join(', ')}
      </div>
      <a href={project.link} className="inline-block text-sm text-accent hover:underline" target="_blank" rel="noreferrer">View Project</a>
    </article>
  )
}
