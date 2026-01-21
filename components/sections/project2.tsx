import Tag from "@/components/tag"
import ImageCarouselUploader from "@/components/image";

export default function ExpSection()
{
    return(
            <section id="2" className="min-h-screen bg-[#1E1E1E] ">
            <div className="px-10 py-20">
                <div>
                    <h1 className="mt-8 font-bold text-2xl md:text-5xl">Flight Path Visualisation Web App</h1>
                    <h2 className="mt-2">Flight route visualisation web application that models airports as graph nodes and computes optimal routes using </h2>
                    <h2>Dijkstra’s algorithm, allowing users to compare routes based on distance, layovers, and cost efficiency.</h2>
                    <h2>Caching of computed flight routes is also implemented to optimize calculation time and reduce redundant pathfinding operations.</h2>
                    <div className ="flex gap-1 mt-2">
                        <Tag>Python</Tag>
                        <Tag>Data Structures</Tag>
                        <Tag>Algorithms</Tag>
                        <Tag>Dynamic Programming</Tag>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="flex h-150 w-225 mt-10">
                            <ImageCarouselUploader images={["/flight-1.jpeg", "/flight-2.jpeg", "/flight-3.jpeg", "/flight4.jpeg"]} />
                        </div>
                    </div>
                    
                </div>
                
            </div>
          </section>
        )
}