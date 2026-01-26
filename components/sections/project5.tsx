import Tag from "@/components/tag"
import ImageCarouselUploader from "@/components/image";

export default function Project5()
{
    return(
            <section id="1" className="min-h-screen bg-[#1E1E1E] ">
            <div className="px-10 py-20">
                <div>
                    <h1 className="mt-8 font-bold text-2xl md:text-5xl">Food For Thought</h1>
                    <h2 className="mt-2">Food for Thought is an AI-powered app that helps households reduce food waste by tracking groceries, predicting expiry dates,</h2>
                    <h2>and suggesting recipes with exact serving sizes based on what you already have.</h2>
                    <h2>Simply snap a photo of your groceries and get smart reminders before food expires — saving money while protecting the planet, one meal at a time.</h2>
                    <div className ="flex gap-1 mt-2">
                        <Tag>Artificial Intelligence</Tag>
                        <Tag>Sustainability</Tag>
                        <Tag>Hackathon</Tag>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="flex h-150 w-225 mt-10">
                            <ImageCarouselUploader images={["/food-home.jpeg", "/food-cam.mp4", "/food-log.mp4","/food-recipe.mp4","/food-noti.mp4" ]}
                            captions={[
                            "Home page with ingredient list",
                            "Adding ingredients using image recognition, the app estimates the quantity and days left till expiry",
                            "AI estimation of ingredients used for a meal",
                            "Recipes reccomended by LLM based on selected ingredients to help users better utilise leftover ingredients",
                            "Push notifications will be sent to users when an ingredient in the list is expiring"
                          ]} />
                        </div>
                    </div>
                    
                </div>
                
            </div>
          </section>
        )
}