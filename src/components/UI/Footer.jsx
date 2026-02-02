import { motion } from 'framer-motion'

const footerLinks = {
    sitemap: [
        { name: "Home", href: "#" },
        { name: "About Us", href: "#about" },
        { name: "Work", href: "#work" },
        { name: "Services", href: "#services" },
        { name: "Contact", href: "#contact" },
    ],
    connect: [
        { name: "Twitter", href: "#" },
        { name: "Awwwards", href: "#" },
        { name: "FWA", href: "#" },
        { name: "Instagram", href: "#" },
        { name: "LinkedIn", href: "#" },
    ],
    legal: [
        { name: "Privacy", href: "#" },
        { name: "Careers", href: "#" },
    ]
}

export default function Footer() {
    return (
        <footer className="pt-32 pb-16 md:pt-40 md:pb-20 px-6 md:px-12 border-t border-white/[0.08]">
            <div className="max-w-[1600px] mx-auto">
                {/* Main Footer Grid */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-12 md:gap-8 lg:gap-16 mb-24 md:mb-32">
                    {/* Sitemap */}
                    <div className="col-span-1">
                        <h4 className="text-white/30 text-xs uppercase tracking-widest mb-8">Sitemap</h4>
                        <ul className="space-y-4">
                            {footerLinks.sitemap.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-white/60 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group"
                                    >
                                        {link.name}
                                        <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect */}
                    <div className="col-span-1">
                        <h4 className="text-white/30 text-xs uppercase tracking-widest mb-8">Connect</h4>
                        <ul className="space-y-4">
                            {footerLinks.connect.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-white/60 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group"
                                    >
                                        {link.name}
                                        <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Offices */}
                    <div className="col-span-1">
                        <h4 className="text-white/30 text-xs uppercase tracking-widest mb-8">Offices</h4>
                        <ul className="space-y-4">
                            <li className="text-white/60 text-sm">India</li>
                            <li className="text-white/60 text-sm">Remote</li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="col-span-1">
                        <h4 className="text-white/30 text-xs uppercase tracking-widest mb-8">Legal</h4>
                        <ul className="space-y-4">
                            {footerLinks.legal.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-white/60 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group"
                                    >
                                        {link.name}
                                        <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="col-span-2 md:col-span-1">
                        <h4 className="text-white/30 text-xs uppercase tracking-widest mb-8">Contact</h4>
                        <ul className="space-y-4">
                            <li className="text-white/60 text-sm">hello@verticaleye.co</li>
                        </ul>
                    </div>
                </div>

                {/* Copyright Bar */}
                <div className="pt-8 border-t border-white/[0.08] flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <p className="text-white/25 text-xs tracking-wide">
                        © 2024 Vertical Eye. All rights reserved.
                    </p>
                    <a href="/" className="text-white text-sm font-medium tracking-wide hover:text-white/80 transition-colors">
                        VERTICAL EYE.
                    </a>
                </div>
            </div>
        </footer>
    )
}
