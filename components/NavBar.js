export default function NavBar() {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="font-serif text-lg">William</div>
        <nav className="space-x-6 text-sm font-sans text-gray-800">
          <a href="#about" className="hover:text-accent">About</a>
          <a href="#projects" className="hover:text-accent">Projects</a>
          <a href="#writings" className="hover:text-accent">Selected Essays</a>
        </nav>
      </div>
    </header>
  )
}
