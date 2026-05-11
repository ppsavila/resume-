import { motion } from "framer-motion";
import profile from "../data/profile";
import ShowcaseReel from "./ShowcaseReel";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.6 } }),
};

export default function About() {
    return (
        <section id="about" className="section">
            <div className="container">
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}
                    className="about-grid">

                    {/* Left: text */}
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <p className="section-label">Who I Am</p>
                        <h2 className="section-title">Bridging Art<br />& Engineering</h2>
                        <div className="divider" />
                        <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: "0.97rem" }}>
                            {profile.summary.replace(/\s+/g, " ").trim()}
                        </p>

                        {/* Tech badge row */}
                        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 28 }}>
                            {["Unity", "React", "Godot", "Blender", "Firebase", "GLSL"].map(tech => (
                                <span key={tech} className="tag">{tech}</span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: showcase reel */}
                    <motion.div
                        variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
                        style={{ display: "flex", justifyContent: "center" }}>
                        <ShowcaseReel maxWidth={340} />
                    </motion.div>
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
