import { motion } from "framer-motion";
import profile from "../data/profile";

const highlights = [
    { icon: "🎮", label: "Games Shipped", value: "3+ titles", sub: "iOS & Android" },
    { icon: "🚀", label: "Downloads", value: "400M+", sub: "CodyCross" },
    { icon: "🧠", label: "Founded", value: "Tralingo", sub: "EdTech · AI" },
    { icon: "🎓", label: "Degree", value: "Digital Games", sub: "PUC Minas" },
];

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.6 } }),
};

export default function About() {
    return (
        <section id="about" className="section">
            <div className="container">
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}
                    className="about-grid">

                    {/* Left: text */}
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <p className="section-label">Who I Am</p>
                        <h2 className="section-title">Bridging Art<br />& Engineering</h2>
                        <div className="divider" />
                        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                            {profile.summary.split("\n").filter(Boolean).map((para, i) => (
                                <p key={i} style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: "0.97rem" }}>
                                    {para.trim()}
                                </p>
                            ))}
                        </div>

                        {/* Tech badge row */}
                        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 28 }}>
                            {["Unity", "React", "Godot", "Blender", "Firebase", "GLSL"].map(tech => (
                                <span key={tech} className="tag">{tech}</span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: highlight cards */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                        {highlights.map((h, i) => (
                            <motion.div key={h.label} className="card"
                                custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                                style={{ padding: "24px", display: "flex", flexDirection: "column", gap: 6 }}>
                                <span style={{ fontSize: "1.6rem" }}>{h.icon}</span>
                                <span style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--text-primary)" }}>{h.value}</span>
                                <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.08em" }}>{h.label}</span>
                                <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{h.sub}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
        </section>
    );
}
