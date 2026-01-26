"use client"
import { useState } from "react"
import { useIsMobile } from "./ismobile"

export default function NavBar()
{
  const isMobile =useIsMobile()
  const [open, setOpen] = useState(false)

   if (isMobile && !open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="
          fixed bottom-4 right-4
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
    <div className="fixed inset-0 z-50 bg-transparent">
      <div
        className="
          absolute top-0 right-0
          h-full w-64
          bg-transparent backdrop-blur-sm
          p-6
          shadow-2xl
          rounded-3xl
        "
      >
        <div className="flex justify-between items-center mb-8">
          <span className="text-white font-bold text-lg"></span>
          <button
            onClick={() => setOpen(false)}
            className="text-white text-xl"
          >
            ✕
          </button>
        </div>

        <nav className="flex flex-col gap-6 text-white font-semibold ">
          <a href="#home" onClick={() => setOpen(false)}>Home</a>
          <a href="#1" onClick={() => setOpen(false)}>Food For Thought</a>
          <a href="#2" onClick={() => setOpen(false)}>Dont say Bojio</a>
          <a href="#3" onClick={() => setOpen(false)}>Flight Path Visualisation</a>
          <a href="#4" onClick={() => setOpen(false)}>Smart Waste Management</a>
          <a href="#5" onClick={() => setOpen(false)}>Gamified Feedback App</a>
        </nav>
      </div>
    </div>
  )
  }
  
    return (
        <nav className="
          fixed bottom-20 left-1/2 -translate-x-1/2
          rounded-2xl
          backdrop-blur-md bg-white/15
          border border-white/20
          shadow-lg
          px-4 py-3
          w-[90vw] max-w-[1050px]
          overflow-hidden
          z-50
        ">
          <div className="flex items-center justify-center">
            <div className="flex w-full text-white/70 font-bold gap-10 overflow-x-auto whitespace-nowrap px-2 no-scrollbar">
              <a href="#home" className="hover:text-white transition">
                Home
              </a>
              <a href="#1" className="hover:text-white transition">
                Food For Thought 
              </a>
              <a href="#2" className="hover:text-white transition">
                Dont Say Bojio
              </a>
              <a href="#3" className="hover:text-white transition">
                Flight Path Visualisation
              </a>
               <a href="#4" className="hover:text-white transition">
                Smart Waste Management
              </a>
              <a href="#5" className="hover:text-white transition">
                Gamified Feedback App
              </a>
              
             
            </div>
          </div>
        </nav>
      );
}
