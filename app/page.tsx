import Card from "@/components/Card";
import NavBar from "@/components/NavBar";
import { ArrowLeft } from "lucide-react";

export default function Home() {
  return (
    <main>
      <NavBar></NavBar>
      <section id="home" className="min-h-screen bg-stone-500">
        <div className="flex item-center justify-center md:grid place-items-center min-h-screen">
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-white font-bold text-2xl md:text-6xl">Wymen's e-Portfolio</h1>
            <h2 className="text-white">Scroll or use the Navigation Bar to view</h2>
          </div>
          
        </div>
      </section>
      <section id="about" className="min-h-screen bg-zinc-500">
        <div className="px-10 py-10">
            <div>
                <h1 className="mt-8 font-bold text-2xl md:text-6xl mb-15">About Me</h1>
                <div className="flex justify-center gap-4 ">
                  <Card>
                    <Card>
                      <div className="text-white">
                        Currently pursuing a degree in Computing Science <br />
                        By Singapore Institute of Technology <br /> and <br /> University of Glasgow
                      </div>
                    </Card>
                  </Card>
                  <div className="flex flex-col gap-4">                     
                    <Card>
                      <img src="/uog.png" alt="UOG Logo" />
                    </Card>
                    <div>
                      <Card>
                        <img src="/sit.png" alt="SIT Logo" />
                      </Card>
                    </div>
                  </div>
                </div>
            </div>
            
        </div>
      </section>
      <section id="projects" className="min-h-screen bg-slate-500 ">
        <div className="px-10 py-10">
            <div>
                <h1 className="mt-8 font-bold text-2xl md:text-6xl">Projects</h1>
            </div>
            
        </div>
      </section>
      <section id="experience" className="min-h-screen bg-grey-500">
        <div className="px-10 py-10">
            <div>
                <h1 className="mt-8 font-bold text-2xl md:text-6xl">Past Experiences</h1>
            </div>
            
        </div>
      </section>
      <section id="contact" className="min-h-screen bg-neutral-500">
        <div className="px-10 py-10">
            <div>
                <h1 className="mt-8 font-bold text-2xl md:text-6xl">Contact Me</h1>
            </div>
            
        </div>
      </section>
      
    </main>
    
  );
}
