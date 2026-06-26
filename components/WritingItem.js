export default function WritingItem({ item }) {
  return (
    <li>
      <div className="flex items-baseline justify-between">
        <div>
          <div className="font-serif text-base">{item.title}</div>
          <div className="text-sm text-gray-700">{item.venue} — {item.year}</div>
        </div>
        <div>
          <a href={item.link} className="text-sm text-accent hover:underline" target="_blank" rel="noreferrer">PDF</a>
        </div>
      </div>
      {item.abstract && <p className="mt-2 text-sm text-gray-700">{item.abstract}</p>}
    </li>
  )
}
