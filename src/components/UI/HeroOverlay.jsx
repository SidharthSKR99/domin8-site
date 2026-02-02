import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function HeroOverlay() {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], [0, 200])
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

    // Text animation variants
    const lineVariants = {
        hidden: { y: 100, opacity: 0 },
        visible: (i) => ({
            y: 0,
            opacity: 1,
            transition: {
                duration: 1.2,
                delay: i * 0.15,
                ease: [0.16, 1, 0.3, 1]
            }
        })
    }

    return (
        <motion.section
            ref={containerRef}
            className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32"
            style={{ opacity }}
        >
            <motion.div style={{ y }} className="max-w-[1600px] mx-auto w-full">
                {/* Main Hero Text */}
                <div className="overflow-hidden mb-4">
                    <motion.h1
                        className="display-xl text-white leading-[0.85]"
                        custom={0}
                        initial="hidden"
                        animate="visible"
                        variants={lineVariants}
                    >
                        A different
                    </motion.h1>
                </div>

                <div className="overflow-hidden mb-4">
                    <motion.h1
                        className="display-xl text-white leading-[0.85] italic"
                        custom={1}
                        initial="hidden"
                        animate="visible"
                        variants={lineVariants}
                    >
                        Creative
                    </motion.h1>
                </div>

                <div className="overflow-hidden mb-16">
                    <motion.h1
                        className="display-xl text-white leading-[0.85]"
                        custom={2}
                        initial="hidden"
                        animate="visible"
                        variants={lineVariants}
                    >
                        approach
                    </motion.h1>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    className="absolute bottom-12 left-1/2 -translate-x-1/2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                >
                    <motion.a
                        href="#about"
                        className="text-3xl text-white/50 hover:text-white transition-colors"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        ↓
                    </motion.a>
                </motion.div>
            </motion.div>
        </motion.section>
    )
}
