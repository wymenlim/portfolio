import Tag from "@/components/tag"
import ImageCarouselUploader from "@/components/image";

export default function Project5()
{
    return(
            <section id="1" className="min-h-screen bg-[#1E1E1E] ">
            <div className="px-10 py-20">
                <div>
                    <h1 className="mt-8 font-bold text-2xl md:text-5xl">Food For Thought</h1>
                    <h2 className="mt-2">This app is an ongoing project with Singapore Cancer Society to increase the feedback quality and completion rate </h2>
                    <div className ="flex gap-1 mt-2">
                        <Tag>Professional Software Development</Tag>
                        <Tag>Next.JS</Tag>
                        <Tag>Supabase</Tag>
                        <Tag>Agile Scrum Methodology</Tag>
                    </div>
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