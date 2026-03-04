import { motion } from "framer-motion";
import { FiExternalLink, FiCalendar, FiMapPin } from "react-icons/fi";
import experience from "../data/experience";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6 } }),
};

export default function Experience() {
    return (
        <section id="experience" className="section">
            <div className="container">
                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <p className="section-label">Where I've Worked</p>
                    <h2 className="section-title">Experience</h2>
                    <div className="divider" />
                </motion.div>

                {/* Timeline */}
                <div style={{ position: "relative", paddingLeft: 32 }}>
                    {/* Vertical line */}
                    <div style={{
                        position: "absolute", left: 0, top: 8, bottom: 0, width: 2,
                        background: "linear-gradient(to bottom, var(--accent), transparent)",
                    }} />

                    {experience.map((item, i) => (
                        <motion.div key={item.id}
                            custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                            style={{ position: "relative", marginBottom: 48 }}>

                            {/* Timeline dot */}
                            <div style={{
                                position: "absolute", left: -39, top: 6, width: 14, height: 14,
                                borderRadius: "50%",
                                background: item.featured ? "var(--accent)" : "var(--bg-card)",
                                border: "2px solid var(--accent)",
                                boxShadow: item.featured ? "0 0 12px rgba(46,160,67,0.5)" : "none",
                            }} />

                            <div className="card" style={{ padding: "28px 32px" }}>
                                {/* Header */}
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12, marginBottom: 16 }}>
                                    <div>
                                        <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: 4 }}>
                                            {item.role}
                                        </h3>
                                        <a href={item.companyUrl} target="_blank" rel="noreferrer"
                                            style={{ color: "var(--accent)", fontWeight: 600, fontSize: "0.95rem", display: "inline-flex", alignItems: "center", gap: 4 }}
                                            onMouseEnter={e => e.currentTarget.style.opacity = "0.8"}
                                            onMouseLeave={e => e.currentTarget.style.opacity = "1"}>
                                            {item.company} <FiExternalLink size={13} />
                                        </a>
                                    </div>
                                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4 }}>
                                        <span style={{ display: "flex", alignItems: "center", gap: 6, fontSize: "0.8rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                                            <FiCalendar size={12} /> {item.period}
                                        </span>
                                        <span style={{ display: "flex", alignItems: "center", gap: 6, fontSize: "0.8rem", color: "var(--text-muted)" }}>
                                            <FiMapPin size={12} /> {item.location}
                                        </span>
                                    </div>
                                </div>

                                {/* Description */}
                                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
                                    {item.description.map((point, j) => (
                                        <li key={j} style={{ display: "flex", gap: 10, color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.7 }}>
                                            <span style={{ color: "var(--accent)", marginTop: 2, flexShrink: 0 }}>▹</span>
                                            {point}
                                        </li>
                                    ))}
                                </ul>

                                {/* Tags */}
                                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                                    {item.tags.map(tag => (
                                        <span key={tag} className="tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
