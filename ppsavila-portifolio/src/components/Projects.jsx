import { useState } from "react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import projects from "../data/projects";

const FILTERS = ["All", "Professional", "Indie"];

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

export default function Projects() {
    const [filter, setFilter] = useState("All");

    const filtered = filter === "All" ? projects
        : filter === "Professional" ? projects.filter(p => p.type === "professional")
            : projects.filter(p => p.type === "indie");

    const featured = filtered.filter(p => p.featured);
    const others = filtered.filter(p => !p.featured);

    return (
        <section id="projects" className="section" style={{ background: "var(--bg-secondary)" }}>
            <div className="container">
                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <p className="section-label">Things I've Built</p>
                    <h2 className="section-title">Projects</h2>
                    <div className="divider" />
                </motion.div>

                {/* Filter */}
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                    style={{ display: "flex", gap: 8, marginBottom: 40 }}>
                    {FILTERS.map(f => (
                        <button key={f} onClick={() => setFilter(f)}
                            style={{
                                padding: "6px 18px", borderRadius: "var(--radius-full)", cursor: "pointer",
                                fontFamily: "var(--font-mono)", fontSize: "0.78rem",
                                border: "1px solid",
                                borderColor: filter === f ? "var(--accent)" : "var(--border)",
                                background: filter === f ? "var(--accent-dim)" : "transparent",
                                color: filter === f ? "var(--accent)" : "var(--text-muted)",
                                transition: "all 0.2s",
                            }}>
                            {f}
                        </button>
                    ))}
                </motion.div>

                {/* Featured grid */}
                {featured.length > 0 && (
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 20, marginBottom: 24 }}>
                        {featured.map((project, i) => (
                            <ProjectCard key={project.id} project={project} index={i} large />
                        ))}
                    </div>
                )}

                {/* Indie/other grid */}
                {others.length > 0 && (
                    <>
                        {featured.length > 0 && (
                            <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: 16, letterSpacing: "0.1em" }}>
                                — Personal & Study Projects
                            </p>
                        )}
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
                            {others.map((project, i) => (
                                <ProjectCard key={project.id} project={project} index={i} />
                            ))}
                        </div>
                    </>
                )}
            </div>
        </section>
    );
}

function ProjectCard({ project, index, large }) {
    return (
        <motion.div
            custom={index} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="card"
            style={{ padding: large ? "28px" : "22px", display: "flex", flexDirection: "column" }}>

            {/* Top accent bar */}
            <div style={{
                height: 3, borderRadius: "2px 2px 0 0",
                background: `linear-gradient(90deg, ${project.accentColor}, transparent)`,
                marginBottom: 20, marginLeft: -28, marginRight: -28, marginTop: -28,
                borderRadius: "var(--radius-lg) var(--radius-lg) 0 0",
            }} />

            {/* Company badge */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                <span style={{
                    fontFamily: "var(--font-mono)", fontSize: "0.7rem", padding: "3px 8px",
                    borderRadius: "var(--radius-full)", border: `1px solid ${project.accentColor}40`,
                    color: project.accentColor, background: `${project.accentColor}12`,
                }}>
                    {project.company}
                </span>
                <a href={project.url} target="_blank" rel="noreferrer"
                    style={{ color: "var(--text-muted)", transition: "color 0.2s" }}
                    onMouseEnter={e => e.currentTarget.style.color = project.accentColor}
                    onMouseLeave={e => e.currentTarget.style.color = "var(--text-muted)"}>
                    <FiExternalLink size={16} />
                </a>
            </div>

            {/* Title */}
            <h3 style={{ fontSize: large ? "1.2rem" : "1rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: 4 }}>
                {project.title}
            </h3>
            <p style={{ fontSize: "0.78rem", color: project.accentColor, marginBottom: 12, fontWeight: 500 }}>
                {project.subtitle}
            </p>

            {/* Description */}
            <p style={{ color: "var(--text-muted)", fontSize: "0.87rem", lineHeight: 1.75, flexGrow: 1, marginBottom: 20 }}>
                {project.description}
            </p>

            {/* Tags */}
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {project.tags.map(tag => (
                    <span key={tag} className="tag" style={{ fontSize: "0.65rem" }}>{tag}</span>
                ))}
            </div>
        </motion.div>
    );
}
