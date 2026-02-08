import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function HeroOverlay() {
    const containerRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    })

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
    const y = useTransform(scrollYProgress, [0, 1], [0, 150])

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Zentry-style clip-path reveal
            gsap.fromTo('.hero-line',
                {
                    clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
                    y: 80,
                },
                {
                    clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0 100%)',
                    y: 0,
                    duration: 1.2,
                    ease: 'power4.out',
                    stagger: 0.12,
                    delay: 0.4
                }
            )

            // Parallax on scroll
            gsap.to('.hero-content', {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1.5
                },
                y: 200,
                scale: 0.9,
                opacity: 0
            })

        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <motion.section
            ref={containerRef}
            className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32"
            style={{ opacity }}
        >
            <motion.div style={{ y }} className="hero-content max-w-[1600px] mx-auto w-full">
                {/* Main Text */}
                <div className="overflow-hidden mb-3">
                    <h1 className="hero-line display-xl text-white leading-[0.9]">
                        A different
                    </h1>
                </div>

                <div className="overflow-hidden mb-3">
                    <h1 className="hero-line display-xl text-white leading-[0.9] italic">
                        Creative
                    </h1>
                </div>

                <div className="overflow-hidden mb-12">
                    <h1 className="hero-line display-xl text-white leading-[0.9]">
                        approach
                    </h1>
                </div>

                {/* Tagline */}
                <div className="overflow-hidden">
                    <p className="hero-line text-white/40 text-lg md:text-xl max-w-lg">
                        Crafting exceptional digital experiences that captivate and inspire.
                    </p>
                </div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-12 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
            >
                <motion.a
                    href="#about"
                    className="text-2xl text-white/40 hover:text-white/80 transition-colors"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    ↓
                </motion.a>
            </motion.div>
        </motion.section>
    )
}
