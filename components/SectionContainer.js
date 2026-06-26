export default function SectionContainer({ title, children }) {
  return (
    <div className="py-10 border-b border-gray-200/60">
      <h2 className="text-2xl font-serif mb-4">{title}</h2>
      <div className="text-base font-sans text-gray-800">{children}</div>
    </div>
  )
}
