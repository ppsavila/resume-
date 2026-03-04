import { useState } from "react";
import { motion } from "framer-motion";
import skills from "../data/skills";

const CATEGORIES = ["All", "Engine", "Language", "Art", "Web", "Tool"];

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.05, duration: 0.4 } }),
};

export default function Skills() {
    const [active, setActive] = useState("All");

    const filtered = active === "All" ? skills : skills.filter(s => s.category === active);

    return (
        <section id="skills" className="section" style={{ background: "var(--bg-secondary)" }}>
            <div className="container">
                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <p className="section-label">What I Use</p>
                    <h2 className="section-title">Skills & Tools</h2>
                    <div className="divider" />
                </motion.div>

                {/* Filter tabs */}
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                    style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 40 }}>
                    {CATEGORIES.map(cat => (
                        <button key={cat} onClick={() => setActive(cat)}
                            style={{
                                padding: "6px 18px", borderRadius: "var(--radius-full)", cursor: "pointer",
                                fontFamily: "var(--font-mono)", fontSize: "0.78rem", fontWeight: 500,
                                border: "1px solid",
                                borderColor: active === cat ? "var(--accent)" : "var(--border)",
                                background: active === cat ? "var(--accent-dim)" : "transparent",
                                color: active === cat ? "var(--accent)" : "var(--text-muted)",
                                transition: "all 0.2s",
                            }}>
                            {cat}
                        </button>
                    ))}
                </motion.div>

                {/* Skills grid */}
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                    gap: 12,
                }}>
                    {filtered.map((skill, i) => (
                        <motion.div key={skill.name}
                            className="card"
                            custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                            style={{ padding: "16px 20px" }}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                                <span style={{ fontWeight: 600, fontSize: "0.9rem", color: "var(--text-primary)" }}>{skill.name}</span>
                                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--accent)" }}>{skill.level}%</span>
                            </div>
                            {/* Progress bar */}
                            <div style={{ height: 4, background: "var(--border)", borderRadius: 2, overflow: "hidden" }}>
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: i * 0.03, ease: "easeOut" }}
                                    style={{ height: "100%", background: "linear-gradient(90deg, var(--accent), var(--accent-hover))", borderRadius: 2 }}
                                />
                            </div>
                            <div style={{ marginTop: 8 }}>
                                <span className="tag" style={{ fontSize: "0.65rem" }}>{skill.category}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
