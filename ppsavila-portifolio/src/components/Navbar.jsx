import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { label: "About", to: "about" },
    { label: "Skills", to: "skills" },
    { label: "Experience", to: "experience" },
    { label: "Projects", to: "projects" },
    { label: "Contact", to: "contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", handler);
        return () => window.removeEventListener("scroll", handler);
    }, []);

    return (
        <header style={{
            position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
            transition: "all 0.3s ease",
            background: scrolled ? "rgba(13,17,23,0.92)" : "transparent",
            backdropFilter: scrolled ? "blur(12px)" : "none",
            borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        }}>
            <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
                {/* Logo */}
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                    style={{ fontFamily: "var(--font-mono)", fontSize: "1rem", fontWeight: 600, color: "var(--accent)" }}>
                    {"<ppsavila/>"}
                </motion.div>

                {/* Desktop Nav */}
                <nav style={{ display: "flex", gap: 8, alignItems: "center" }} className="desktop-nav">
                    {navLinks.map((link, i) => (
                        <motion.div key={link.to} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.05 * i }}>
                            <Link to={link.to} smooth duration={600} offset={-64}
                                style={{
                                    padding: "6px 14px", borderRadius: "var(--radius-md)", cursor: "pointer",
                                    fontSize: "0.88rem", fontWeight: 500, color: "var(--text-muted)",
                                    transition: "color 0.2s, background 0.2s",
                                }}
                                activeStyle={{ color: "var(--accent)", background: "var(--accent-dim)" }}
                                onMouseEnter={e => { e.target.style.color = "var(--text-primary)"; }}
                                onMouseLeave={e => { e.target.style.color = "var(--text-muted)"; }}
                            >
                                {link.label}
                            </Link>
                        </motion.div>
                    ))}
                    <motion.a
                        href="https://www.linkedin.com/in/pedropsa/" target="_blank" rel="noreferrer"
                        className="btn btn-primary" style={{ padding: "6px 18px", fontSize: "0.85rem" }}
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
                    >
                        Hire Me
                    </motion.a>
                </nav>

                {/* Mobile toggle */}
                <button onClick={() => setMenuOpen(!menuOpen)}
                    style={{ background: "none", border: "none", color: "var(--text-primary)", cursor: "pointer", fontSize: "1.4rem", display: "none" }}
                    className="mobile-toggle">
                    {menuOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div key="mobile-menu"
                        initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
                        style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border)", overflow: "hidden" }}>
                        <div style={{ padding: "16px 24px", display: "flex", flexDirection: "column", gap: 4 }}>
                            {navLinks.map(link => (
                                <Link key={link.to} to={link.to} smooth duration={600} offset={-64}
                                    onClick={() => setMenuOpen(false)}
                                    style={{
                                        padding: "12px 16px", borderRadius: "var(--radius-md)",
                                        color: "var(--text-secondary)", fontSize: "0.95rem", cursor: "pointer",
                                        transition: "color 0.2s, background 0.2s",
                                    }}>
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
      `}</style>
        </header>
    );
}
