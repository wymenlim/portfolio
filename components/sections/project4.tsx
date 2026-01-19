import Tag from "@/components/tag"
import ImageCarouselUploader from "@/components/image";

export default function Project4()
{
    return(
            <section id="4" className="min-h-screen bg-[#1E1E1E] ">
            <div className="px-10 py-20">
                <div>
                    <h1 className="mt-8 font-bold text-2xl md:text-5xl">Gamified Feedback App</h1>
                    <h2 className="mt-2">This is a webapp the help elderly connect with each other through signing up for events</h2>
                    <div className ="flex gap-1 mt-2">
                        <Tag>Professional Software Development</Tag>
                        <Tag>Next.JS</Tag>
                        <Tag>Supabase</Tag>
                        <Tag>Agile Scrum Methodology</Tag>
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