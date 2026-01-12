"use client"
import { useEffect, useState } from "react"

export default function NavBar()
{
  const [isMobile, setIsMobile] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768)
    checkScreen()
    window.addEventListener("resize", checkScreen)
    return () => window.removeEventListener("resize", checkScreen)
  }, [])

   if (isMobile && !open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="
          fixed top-4 right-4
          z-50
          rounded-lg
          bg-white/20 backdrop-blur-md
          border border-white/30
          px-4 py-2
          text-white font-bold
          shadow-lg
        "
      >
        ☰
      </button>
    )
  }

  else if (isMobile)
  {
    return (
    <div className="fixed inset-0 z-50 bg-transparent backdrop-blur-sm">
      <div
        className="
          absolute top-0 right-0
          h-full w-64
          bg-white/20 backdrop-blur-md
          p-6
          shadow-xl
        "
      >
        <div className="flex justify-between items-center mb-8">
          <span className="text-white font-bold text-lg">Menu</span>
          <button
            onClick={() => setOpen(false)}
            className="text-white text-xl"
          >
            ✕
          </button>
        </div>

        <nav className="flex flex-col gap-6 text-white font-semibold">
          <a href="#home" onClick={() => setOpen(false)}>Home</a>
          <a href="#about" onClick={() => setOpen(false)}>Education</a>
          <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
          <a href="#experience" onClick={() => setOpen(false)}>Experience</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </nav>
      </div>
    </div>
  )
  }
  
    return (
        <nav className="
          fixed bottom-20 left-1/2 -translate-x-1/2
          inline-flex
          rounded-2xl
          backdrop-blur-md bg-white/15
          border border-white/20
          shadow-lg
          px-20 py-3
          z-50
        ">
          <div className="flex items-center justify-center">
    
            <div className="flex text-white/70 font-bold gap-10">
              <a href="#home" className="hover:text-white transition">
                Home
              </a>
              <a href="#about" className="hover:text-white transition">
                Education
              </a>
              <a href="#projects" className="hover:text-white transition">
                Projects
              </a>
               <a href="#experience" className="hover:text-white transition">
                Experiences
              </a>
              <a href="#contact" className="hover:text-white transition">
                Contact Me
              </a>
              
            </div>
          </div>
        </nav>
      );
}
