import Tag from "@/components/tag"
import ImageCarouselUploader from "@/components/image";

export default function ProjectsSection()
{
    return(
        <section id="1" className="min-h-screen bg-[#0B1220] ">
        <div className="px-10 py-20">
            <div>
                <h1 className="mt-8 font-bold text-2xl md:text-5xl">Dont Say Bojio</h1>
                <h2 className="mt-2">This web application empowers elderly users to build social connections by attending and engaging in community events.</h2>
                <h2>It prioritizes accessibility by using simple, gesture-based interactions such as swiping, making the app easy to navigate for elderly users.</h2>
                <div className ="flex gap-1 mt-2">
                    <Tag>Docker</Tag>
                    <Tag>Docker compose</Tag>
                    <Tag>Python Flask</Tag>
                    <Tag>AWS</Tag>
                    <Tag>PostgreSQL</Tag>
                </div>
                <p className="mt-4">Description goes here</p>
                <div className="flex items-center justify-center">
                    <div className="flex h-150 w-225 mt-10">
                        <ImageCarouselUploader images={["/black-bg.jpg", "/uog.png", "/sit.png"]} />
                    </div>
                </div>
                
            </div>
            
        </div>
      </section>
    )
} 