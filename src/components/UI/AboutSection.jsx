import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'

export default function AboutSection() {
    const containerRef = useRef(null)
    const isInView = useInView(containerRef, { once: true, margin: "-100px" })

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], [100, -100])

    return (
        <section
            ref={containerRef}
            id="about"
            className="py-32 md:py-48 px-6 md:px-12 border-t border-white/[0.08]"
        >
            <div className="max-w-[1600px] mx-auto">
                {/* Section Header */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 1 }}
                >
                    <div className="md:col-span-8">
                        {/* Star icon + tagline */}
                        <motion.p
                            className="flex items-center gap-2 text-white/60 text-sm mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <span className="text-lg">✦</span>
                            With EMOTION + INNOVATION, We push THE BOUNDARIES OF DIGITAL CREATIVITY.
                        </motion.p>

                        {/* Main description */}
                        <motion.p
                            className="text-3xl md:text-5xl lg:text-6xl font-light leading-[1.2] text-white mb-8"
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 1, delay: 0.3 }}
                        >
                            We are Vertical Eye, a global digital marketing, branding & web design agency.
                        </motion.p>

                        <motion.a
                            href="#about"
                            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            About Us
                            <span>→</span>
                        </motion.a>
                    </div>

                    <div className="md:col-span-4 md:pt-16">
                        <motion.p
                            className="text-white/50 text-lg leading-relaxed"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            Every brand has a story, from startups finding their voice to titans refining their legacy. We ensure that tale shines brilliantly. With a blend of rapid iteration and collaborative spirit, we empower you to reshape your digital narrative.
                        </motion.p>

                        <motion.a
                            href="#about"
                            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm mt-6"
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            About Us
                            <span>→</span>
                        </motion.a>
                    </div>
                </motion.div>

                {/* Trusted By */}
                <motion.div
                    className="mt-32 md:mt-48"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, delay: 0.7 }}
                >
                    <h2 className="display-lg text-white/20">
                        Trusted by
                    </h2>
                    <h2 className="display-lg text-white -mt-4 italic">
                        Leaders
                    </h2>
                </motion.div>
            </div>
        </section>
    )
}
