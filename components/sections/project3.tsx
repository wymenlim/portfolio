import Tag from "@/components/tag"
import ImageCarouselUploader from "@/components/image";

export default function ContactSection()
{
    return(
            <section id="4" className="min-h-screen bg-[#0B1220] ">
            <div className="px-10 py-20">
                <div>
                    <h1 className="mt-8 font-bold text-2xl md:text-5xl">Smart Waste Management</h1>
                    <h2 className="mt-2">Developed an IoT-enabled smart waste bin using Raspberry Pi and multiple sensors,  </h2>
                    <h2>featuring contactless operation, overflow detection, real-time status monitoring, and MQTT-based device communication.</h2>
                    <div className ="flex gap-1 mt-2">
                        <Tag>Embedded Systems</Tag>
                    </div>
                    <div className ="flex gap-1 mt-2">
                        <Tag>Internet of Things</Tag>
                        <Tag>Networking</Tag>
                        <Tag>MQTT</Tag>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="flex h-150 w-225 mt-6">
                            <ImageCarouselUploader images={["/bin-1.jpeg", "/bin-2.jpeg", "/bin-3.jpeg"]}
                            captions={[
                            "Infographic that gives a brief overview of the project ",
                            "Visual representation of the project arhitecture",
                            "Admin dashboard that shows the status of the bin",
                          ]} 
                          />
                        </div>
                    </div>
                    
                </div>
                
            </div>
          </section>
        )
}