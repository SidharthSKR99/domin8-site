import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const awards = [
    {
        number: "01",
        platform: "Awwwards",
        achievements: ["Site of the day", "Developer award", "Honors"]
    },
    {
        number: "02",
        platform: "FWA",
        achievements: ["FWA of the day"]
    },
    {
        number: "03",
        platform: "CSS Design Awards",
        achievements: ["Site of the day"]
    },
    {
        number: "04",
        platform: "Orpetron",
        achievements: ["Site of the day", "Site of the Month"]
    }
]

export default function AwardsSection() {
    const containerRef = useRef(null)
    const isInView = useInView(containerRef, { once: true, margin: "-100px" })

    return (
        <section
            ref={containerRef}
            className="py-40 md:py-56 px-6 md:px-12 border-t border-white/[0.08]"
        >
            <div className="max-w-[1600px] mx-auto">
                {/* Section Header */}
                <motion.div
                    className="mb-24 md:mb-32"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <p className="flex items-center gap-2 text-white/60 text-sm mb-10">
                        <span className="text-lg">✦</span>
                        Elevating Brands in Unexpected Ways.
                    </p>
                    <h2 className="text-5xl md:text-7xl lg:text-8xl text-white/20 font-light tracking-tight">
                        Recognitions
                    </h2>
                    <h2 className="text-5xl md:text-7xl lg:text-8xl text-white font-light tracking-tight -mt-2 md:-mt-4">
                        + Awards
                    </h2>
                </motion.div>

                {/* Awards List */}
                <div className="space-y-0 mb-24 md:mb-32">
                    {awards.map((award, index) => (
                        <motion.div
                            key={award.platform}
                            className="grid grid-cols-12 gap-4 md:gap-8 py-10 md:py-12 border-b border-white/[0.08] first:border-t hover:bg-white/[0.02] transition-colors duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <div className="col-span-2 md:col-span-1">
                                <span className="text-white/30 text-sm font-light">{award.number}</span>
                            </div>
                            <div className="col-span-5 md:col-span-3">
                                <span className="text-white text-lg md:text-xl font-light">{award.platform}</span>
                            </div>
                            <div className="col-span-5 md:col-span-8 flex flex-wrap items-center gap-x-8 gap-y-2">
                                {award.achievements.map((achievement, i) => (
                                    <span key={i} className="text-white/40 text-sm md:text-base font-light">
                                        {achievement}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    className="flex flex-col sm:flex-row gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-black rounded-full text-sm font-medium hover:bg-white/90 transition-all duration-300 hover:scale-[1.02]"
                    >
                        Get in touch
                        <span>→</span>
                    </a>
                    <a
                        href="#work"
                        className="inline-flex items-center justify-center gap-3 px-10 py-5 border border-white/20 text-white rounded-full text-sm font-medium hover:bg-white/5 hover:border-white/30 transition-all duration-300"
                    >
                        View our work
                        <span>→</span>
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
