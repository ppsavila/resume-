import { motion } from "framer-motion";
import { FiMail, FiLinkedin, FiGithub } from "react-icons/fi";
import { SiItchdotio } from "react-icons/si";
import profile from "../data/profile";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const socials = [
    { label: "LinkedIn", href: profile.links.linkedin, Icon: FiLinkedin },
    { label: "GitHub", href: profile.links.github, Icon: FiGithub },
    { label: "Itch.io", href: profile.links.itchio, Icon: SiItchdotio },
    { label: "Email", href: `mailto:${profile.email}`, Icon: FiMail },
];

export default function Contact() {
    return (
        <section id="contact" className="section" style={{ position: "relative", overflow: "hidden" }}>
            {/* Glow */}
            <div style={{
                position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
                width: 500, height: 500,
                background: "radial-gradient(circle, rgba(46,160,67,0.08) 0%, transparent 70%)",
                pointerEvents: "none",
            }} />

            <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <p className="section-label" style={{ justifyContent: "center", display: "flex" }}>Get In Touch</p>
                    <h2 className="section-title" style={{ textAlign: "center" }}>
                        Let's Build Something<br /><span className="gradient-text">Together</span>
                    </h2>
                    <div className="divider" style={{ margin: "16px auto 24px" }} />

                    <p style={{ color: "var(--text-muted)", maxWidth: 480, margin: "0 auto 40px", fontSize: "0.97rem", lineHeight: 1.8 }}>
                        I'm open to new opportunities, collaborations, and interesting conversations.
                        Whether it's a game, a product, or something in between — let's talk.
                    </p>

                    {/* Social links */}
                    <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap", marginBottom: 48 }}>
                        {socials.map(({ label, href, Icon }) => (
                            <a key={label} href={href} target="_blank" rel="noreferrer"
                                className="card"
                                style={{
                                    display: "flex", alignItems: "center", gap: 10,
                                    padding: "14px 24px", textDecoration: "none",
                                    color: "var(--text-secondary)", transition: "all 0.2s",
                                }}
                                onMouseEnter={e => { e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.borderColor = "var(--accent)"; }}
                                onMouseLeave={e => { e.currentTarget.style.color = "var(--text-secondary)"; e.currentTarget.style.borderColor = "var(--border)"; }}>
                                <Icon size={18} />
                                <span style={{ fontWeight: 500, fontSize: "0.9rem" }}>{label}</span>
                            </a>
                        ))}
                    </div>

                    {/* CTA */}
                    <a href={`mailto:${profile.email}`}
                        className="btn btn-primary"
                        style={{ fontSize: "1rem", padding: "14px 36px" }}>
                        Say Hello 👋
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
