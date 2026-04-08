"use client";
import Tag from "@/components/tag";
import ImageCarouselUploader from "@/components/image";
import { motion } from "framer-motion";

export default function Project6()
{
    return(
        <section id="project-los-nlos" className="min-h-[70vh] scroll-mt-28 bg-slate-900/50 ">
        <div className="px-10 py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="mt-8 font-bold text-2xl md:text-5xl">LOS/NLOS Classification and Time-of-Flight Predictor </h1>
                <h2 className="mt-2">Developed an end-to-end machine learning pipeline for ultra-wideband indoor positioning that classifies LOS and NLOS signal conditions and predicts path distances from channel impulse response data.</h2>
                <div className ="flex gap-1 mt-2">
                    <Tag>scikit-learn</Tag>
                    <Tag>NumPy</Tag>
                    <Tag>Pandas</Tag>
                </div>
                <div className ="flex gap-1 mt-2">
                    <Tag>Data Analysis</Tag>
                    <Tag>Machine Learning</Tag>
                </div>

            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="flex items-center justify-center"
            >
                <div className="flex h-150 w-225 mt-6">
                    <ImageCarouselUploader
                      images={["/ML-pipeline.png"]}
                      captions={[
                        "Machine learning pipeline for LOS/NLOS classification and Time-of-Flight prediction"
                      ]}
                    />
                </div>
            </motion.div>
            
        </div>
      </section>
    )
} 
