'use client'

import { useEffect, useState } from 'react'

export default function NavBar() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('theme')
    const initialTheme = storedTheme === 'dark' ? 'dark' : 'light'
    setTheme(initialTheme)
    document.documentElement.classList.toggle('dark', initialTheme === 'dark')
    document.documentElement.style.colorScheme = initialTheme === 'dark' ? 'dark' : 'light'
  }, [])

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
    window.localStorage.setItem('theme', nextTheme)
    document.documentElement.classList.toggle('dark', nextTheme === 'dark')
  }

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-sm border-b border-gray-100 dark:bg-slate-950/90 dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
        <div className="font-serif text-lg text-slate-950 dark:text-slate-100">William Zuo</div>

        <nav className="flex-1 items-center justify-center hidden sm:flex space-x-6 text-sm font-sans text-slate-800 dark:text-slate-100">
          <a href="#about" className="hover:text-accent">About</a>
          <a href="#projects" className="hover:text-accent">Projects</a>
          <a href="#writings" className="hover:text-accent">Selected Essays</a>
        </nav>

        <button
          type="button"
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-800 transition hover:border-accent hover:text-accent dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
        >
          {theme === 'dark' ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M12 3.75a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0V4.5A.75.75 0 0112 3.75zM12 17.25a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75zM6.22 6.22a.75.75 0 011.06 0l1.06 1.06a.75.75 0 11-1.06 1.06L6.22 7.28a.75.75 0 010-1.06zM15.66 15.66a.75.75 0 011.06 0l1.06 1.06a.75.75 0 01-1.06 1.06l-1.06-1.06a.75.75 0 010-1.06zM3.75 12a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5H4.5A.75.75 0 013.75 12zM17.25 12a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM6.22 17.78a.75.75 0 011.06 0l1.06 1.06a.75.75 0 11-1.06 1.06L6.22 18.84a.75.75 0 010-1.06zM15.66 8.34a.75.75 0 011.06 0l1.06 1.06a.75.75 0 11-1.06 1.06L15.66 9.4a.75.75 0 010-1.06zM12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" fill="currentColor" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M21.752 15.002A9.718 9.718 0 0112 21.75 9.75 9.75 0 0112 2.25a.75.75 0 010 1.5 8.25 8.25 0 100 16.5.75.75 0 010 1.5 9.718 9.718 0 019.752-6.748z" fill="currentColor" />
            </svg>
          )}
        </button>
      </div>
    </header>
  )
}
