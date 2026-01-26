import Tag from "@/components/tag"
import ImageCarouselUploader from "@/components/image";

export default function Project4()
{
    return(
            <section id="5" className="min-h-screen bg-[#1E1E1E] ">
            <div className="px-10 py-20">
                <div>
                    <h1 className="mt-8 font-bold text-2xl md:text-5xl">Gamified Feedback App</h1>
                    <h2 className="mt-2">Our app enhances event feedback by transforming surveys into an engaging narrative experience, guiding users through a mystery that encourages thoughtful responses and higher completion rates.</h2> 
                    <h2>It is an ongoing project with Singapore Cancer Society</h2>
                    <div className ="flex gap-1 mt-2">
                        <Tag>Professional Software Development</Tag>
                        <Tag>Next.JS</Tag>
                        
                        
                    </div>
                    <div className ="flex gap-1 mt-2">
                        <Tag>Supabase</Tag>
                        <Tag>Scrum</Tag>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="flex h-150 w-225 mt-8">
                            <ImageCarouselUploader images={["/game-story.jpeg", "/game-tasks.jpeg", "/game-feedback.jpeg"]}
                            captions={[
                            "Preview of the story",
                            "Example of tasks that users would have to complete before attempting the feedback form",
                            "Example of a question in the feedback form"
                          ]} />
                        </div>
                    </div>
                    
                </div>
                
            </div>
          </section>
        )
}