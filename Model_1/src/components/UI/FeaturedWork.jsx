import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const projects = [
    {
        name: "Lando Norris",
        services: ["Brand & Design", "Development", "WebGL, 3D"],
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    },
    {
        name: "Aether 1",
        services: ["Design", "Development", "WebGL, 3D"],
        image: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=800&h=600&fit=crop",
    },
    {
        name: "Bella Kitchenwear",
        services: ["Design", "Development", "WebGL, 3D"],
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
    },
    {
        name: "Jasper",
        services: ["Design", "Development", "Motion / Rive"],
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop",
    },
    {
        name: "Slack",
        services: ["Content", "Development", "3D"],
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
    },
    {
        name: "Aptos Labs",
        services: ["Brand", "Development", "WebGL, 3D"],
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop",
    },
]

function WorkCard({ project, index }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-50px" })

    return (
        <motion.a
            ref={ref}
            href="#"
            className="group block relative overflow-hidden rounded-lg aspect-[16/10] bg-[#141414]"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.1 }}
        >
            {/* Image */}
            <motion.img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl md:text-3xl text-white font-light mb-3">
                    {project.name}
                </h3>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-white/60">
                    {project.services.map((service, i) => (
                        <span key={i} className="flex items-center gap-1">
                            <span className="text-xs">
                                {i === 0 ? '●' : i === 1 ? '△' : '⁂'}
                            </span>
                            {service}
                        </span>
                    ))}
                </div>
            </div>
        </motion.a>
    )
}

export default function FeaturedWork() {
    const containerRef = useRef(null)
    const isInView = useInView(containerRef, { once: true, margin: "-100px" })

    return (
        <section
            ref={containerRef}
            id="work"
            className="py-32 md:py-48 px-6 md:px-12 border-t border-white/[0.08]"
        >
            <div className="max-w-[1600px] mx-auto">
                {/* Section Header */}
                <motion.div
                    className="flex justify-between items-end mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <div>
                        <h2 className="text-sm text-white/50 mb-4">Featured work</h2>
                    </div>
                    <motion.a
                        href="#work"
                        className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-2"
                        whileHover={{ x: 5 }}
                    >
                        All Work
                        <span>→</span>
                    </motion.a>
                </motion.div>

                {/* Work Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {projects.map((project, index) => (
                        <WorkCard key={project.name} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}
