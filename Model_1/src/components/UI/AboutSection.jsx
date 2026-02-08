import { useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function AboutSection() {
    const containerRef = useRef(null)
    const isInView = useInView(containerRef, { once: true, margin: "-100px" })

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Staggered reveal animation
            gsap.fromTo('.about-line',
                {
                    y: 60,
                    opacity: 0,
                    clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)'
                },
                {
                    y: 0,
                    opacity: 1,
                    clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0 100%)',
                    duration: 1,
                    ease: 'power3.out',
                    stagger: 0.08,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 75%',
                        toggleActions: 'play none none reverse'
                    }
                }
            )

            // Horizontal scroll for large text
            gsap.to('.scroll-text', {
                scrollTrigger: {
                    trigger: '.scroll-text',
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1
                },
                x: -80
            })

        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={containerRef}
            id="about"
            className="py-40 md:py-56 px-6 md:px-12 border-t border-white/[0.08]"
        >
            <div className="max-w-[1600px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
                    <div className="md:col-span-8">
                        {/* Tagline */}
                        <p className="about-line flex items-center gap-3 text-white/50 text-sm mb-10">
                            <span className="text-base">✦</span>
                            With EMOTION + INNOVATION, We push THE BOUNDARIES OF DIGITAL CREATIVITY.
                        </p>

                        {/* Main Text */}
                        <p className="about-line text-3xl md:text-5xl lg:text-6xl font-light leading-[1.15] text-white mb-10">
                            We are Vertical Eye, a global digital marketing, branding & web design agency.
                        </p>

                        <a
                            href="#about"
                            className="about-line inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm group"
                        >
                            About Us
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </a>
                    </div>

                    <div className="md:col-span-4 md:pt-16">
                        <p className="about-line text-white/35 text-lg leading-relaxed">
                            Every brand has a story, from startups finding their voice to titans refining their legacy. We ensure that tale shines brilliantly.
                        </p>

                        <a
                            href="#about"
                            className="about-line inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm mt-8 group"
                        >
                            About Us
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </a>
                    </div>
                </div>

                {/* Large scrolling text */}
                <div className="scroll-text mt-40 md:mt-48 overflow-hidden">
                    <h2 className="text-6xl md:text-8xl lg:text-[9rem] text-white/10 font-light tracking-tight whitespace-nowrap">
                        Trusted by
                    </h2>
                    <h2 className="text-6xl md:text-8xl lg:text-[9rem] text-white font-light tracking-tight -mt-4 md:-mt-6 italic whitespace-nowrap">
                        Leaders
                    </h2>
                </div>
            </div>
        </section>
    )
}
