import Card from "../Card"
import Image from "next/image";

export default function AboutSection()
{
    return (
        <section id="about" className="min-h-screen bg-zinc-500">
                <div className="px-10 py-10">
                    <div>
                        <h1 className="mt-8 font-bold text-2xl md:text-6xl mb-15">About Me</h1>
                        <div className="flex justify-center gap-4 ">
                          <Card>
                            <Card>
                              <div className="text-white font-bold">
                                Currently pursuing a degree in Computing Science <br />
                                By Singapore Institute of Technology <br /> and <br /> University of Glasgow
                              </div>
                            </Card>
                          </Card>
                          <div className="flex flex-col gap-4">                     
                            <Card>
                              <Image
                                src="/uog.png"
                                alt="University of Glasgow logo"
                                width={400}
                                height={5}
                                className="object-contain"
                            />
                            </Card>
                            <div>
                              <Card>
                                <Image
                                src="/sit.png"
                                alt="SIT logo"
                                width={375}
                                height={5}
                                className="object-contain"
                            />
                              </Card>
                            </div>
                          </div>
                        </div>
                    </div>
                    
                </div>
              </section>
    )
}