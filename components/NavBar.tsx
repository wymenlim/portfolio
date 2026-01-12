
export default function NavBar()
{
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
    
            <div className="flex gap-10 text-white/70 font-bold">
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
