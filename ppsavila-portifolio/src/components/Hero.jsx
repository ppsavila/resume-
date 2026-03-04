import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FiArrowDown, FiGithub, FiLinkedin } from "react-icons/fi";
import { SiItchdotio } from "react-icons/si";
import profile from "../data/profile";

export default function Hero() {
    return (
        <section id="hero" style={{
            minHeight: "100vh", display: "flex", alignItems: "center",
            position: "relative", overflow: "hidden",
        }}>
            {/* Animated grid background */}
            <div className="grid-bg" style={{ position: "absolute", inset: 0, opacity: 0.6 }} />

            {/* Green radial glow */}
            <div style={{
                position: "absolute", top: "30%", left: "60%",
                width: 600, height: 600,
                background: "radial-gradient(circle, rgba(46,160,67,0.12) 0%, transparent 70%)",
                transform: "translate(-50%, -50%)", pointerEvents: "none",
            }} />

            <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: 80 }}>
                <motion.div style={{ maxWidth: 760 }}
                    initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}>

                    {/* Mono label */}
                    <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}
                        style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "var(--accent)", marginBottom: 16, letterSpacing: "0.05em" }}>
                        {"// Hello, World!"}
                    </motion.p>

                    {/* Name */}
                    <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                        style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)", fontWeight: 900, lineHeight: 1.05, marginBottom: 16, letterSpacing: "-0.02em" }}>
                        Pedro Paulo S.{" "}
                        <span className="gradient-text">Avila</span>
                    </motion.h1>

                    {/* Animated subtitle */}
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
                        style={{ marginBottom: 24 }}>
                        <TypewriterTitle titles={[
                            "Tech Artist",
                            "UI Engineer",
                            "Game Developer",
                            "Creative Engineer",
                        ]} />
                    </motion.div>

                    {/* Tagline */}
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                        style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: "var(--text-muted)", maxWidth: 560, lineHeight: 1.8, marginBottom: 40 }}>
                        {profile.tagline}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
                        style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 48 }}>
                        <Link to="projects" smooth duration={600} offset={-64}>
                            <button className="btn btn-primary" style={{ fontSize: "0.95rem", padding: "12px 28px" }}>
                                See My Work
                            </button>
                        </Link>
                        <Link to="contact" smooth duration={600} offset={-64}>
                            <button className="btn btn-outline" style={{ fontSize: "0.95rem", padding: "12px 28px" }}>
                                Contact Me
                            </button>
                        </Link>
                    </motion.div>

                    {/* Social icons */}
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.75 }}
                        style={{ display: "flex", gap: 16, alignItems: "center" }}>
                        {[
                            { href: profile.links.linkedin, Icon: FiLinkedin, label: "LinkedIn" },
                            { href: profile.links.github, Icon: FiGithub, label: "GitHub" },
                            { href: profile.links.itchio, Icon: SiItchdotio, label: "Itch.io" },
                        ].map(({ href, Icon, label }) => (
                            <a key={label} href={href} target="_blank" rel="noreferrer"
                                title={label}
                                style={{
                                    color: "var(--text-muted)", fontSize: "1.3rem",
                                    transition: "color 0.2s, transform 0.2s",
                                }}
                                onMouseEnter={e => { e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                                onMouseLeave={e => { e.currentTarget.style.color = "var(--text-muted)"; e.currentTarget.style.transform = "translateY(0)"; }}>
                                <Icon />
                            </a>
                        ))}
                        <div style={{ width: 1, height: 20, background: "var(--border)", margin: "0 4px" }} />
                        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-muted)" }}>
                            {profile.location}
                        </span>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
                style={{
                    position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)",
                    display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
                    color: "var(--text-muted)", cursor: "pointer",
                }}>
                <Link to="about" smooth duration={600} offset={-64}>
                    <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
                        <FiArrowDown size={20} color="var(--accent)" />
                    </motion.div>
                </Link>
            </motion.div>
        </section>
    );
}

function TypewriterTitle({ titles }) {
    const [index, setIndex] = useState(0);
    const [displayed, setDisplayed] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const current = titles[index];
        const speed = isDeleting ? 60 : 100;
        const timer = setTimeout(() => {
            if (!isDeleting) {
                setDisplayed(current.slice(0, displayed.length + 1));
                if (displayed.length + 1 === current.length) {
                    setTimeout(() => setIsDeleting(true), 1800);
                }
            } else {
                setDisplayed(current.slice(0, displayed.length - 1));
                if (displayed.length - 1 === 0) {
                    setIsDeleting(false);
                    setIndex((index + 1) % titles.length);
                }
            }
        }, speed);
        return () => clearTimeout(timer);
    }, [displayed, isDeleting, index, titles]);

    return (
        <h2 style={{
            fontFamily: "var(--font-mono)", fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
            color: "var(--text-secondary)", fontWeight: 400,
            height: 32,
        }}>
            <span style={{ color: "var(--accent)" }}>{">"}</span>{" "}
            {displayed}
            <span style={{ animation: "blink 1s step-end infinite", color: "var(--accent)" }}>█</span>
            <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
        </h2>
    );
}
