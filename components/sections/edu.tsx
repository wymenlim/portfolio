import Card from "../Card"
import Image from "next/image";

export default function EduSection()
{
    return (
        <section id="about" className="min-h-screen bg-zinc-500">
                <div className="px-10 py-10">
                    <div>
                    
                        <h1 className="flex gap-4 mt-8 font-bold text-2xl md:text-6xl mb-15">
                          <span className="inline-block w-1 h-13 bg-white rounded-full"></span>
                          Education
                        </h1>
                        <div className="flex flex-col items-center justify-center">
                          <div className="flex flex-col items-start gap-10">
                            <Card>
                              <div className="flex flex-row gap-6">
                                <Image
                                  src = "/sit.png"
                                  alt="SIT logo"
                                  width={150}
                                  height={200}
                                  />
                                <div className="mt-2">
                                  <p className="text-lg font-bold">Singapore Institute of Technology</p>
                                  <p className=" font-bold text-sm">Bachelor in Computing Science</p>
                                </div>
                              </div>
                            </Card>
                            <Card>
                              <div className="flex flex-row gap-6 pr-10">
                                <Image
                                  src = "/uog.png"
                                  alt="UOG logo"
                                  width={190}
                                  height={100}
                                  />
                                <div className="mt-2">
                                  <p className="text-lg font-bold">University of Glasgow</p>
                                  <p className=" font-bold text-sm">Bachelor in Computing Science</p>
                                </div>
                              </div>
                            </Card>
                            <Card>
                              <div className="flex flex-row gap-6 pr-20">
                                <Image
                                  src = "/tp.png"
                                  alt="TP logo"
                                  width={120}
                                  height={100}
                                  />
                                <div className="mt-2">
                                  <p className="text-lg font-bold">Temasek Polytechnic</p>
                                  <p className=" font-bold text-sm">Diploma in Accounting and Finance</p>
                                </div>
                              </div>
                            </Card>
                          </div>
                          
                        </div>
                        
                    </div>
                    
                </div>
              </section>
    )
}