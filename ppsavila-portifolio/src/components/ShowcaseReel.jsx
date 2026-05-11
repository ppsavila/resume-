import { useState, useRef, useEffect } from "react";
import { FiPlay, FiPause, FiVolume2, FiVolumeX } from "react-icons/fi";
import projects from "../data/projects";

const reel = projects.flatMap(p =>
    (p.videos || []).map(v => ({
        ...v,
        project: p.title,
        accentColor: p.accentColor,
        company: p.company,
    }))
);

export default function ShowcaseReel({ maxWidth = 340 }) {
    const [active, setActive] = useState(0);
    const [progress, setProgress] = useState(0);
    const [paused, setPaused] = useState(false);
    const [muted, setMuted] = useState(true);
    const videoRef = useRef(null);

    const current = reel[active];
    const isPortrait = (current?.orientation ?? "portrait") === "portrait";
    const aspect = isPortrait ? "9 / 16" : "16 / 9";

    useEffect(() => {
        const el = videoRef.current;
        if (!el) return;
        el.currentTime = 0;
        setProgress(0);
        if (!paused) el.play().catch(() => { });
    }, [active]);

    useEffect(() => {
        const el = videoRef.current;
        if (!el) return;
        if (paused) el.pause();
        else el.play().catch(() => { });
    }, [paused]);

    if (!reel.length) return null;

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 18, width: "100%" }}>
            <div style={{
                position: "relative",
                width: "100%",
                maxWidth: isPortrait ? maxWidth : maxWidth * 1.7,
                aspectRatio: aspect,
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                border: `1px solid ${current.accentColor}40`,
                background: "#000",
                boxShadow: `0 24px 80px rgba(0,0,0,0.5), 0 0 60px ${current.accentColor}25`,
                transition: "border-color 0.6s ease, box-shadow 0.6s ease, max-width 0.4s ease",
            }}>
                <video
                    ref={videoRef}
                    key={current.src}
                    src={current.src}
                    autoPlay
                    muted={muted}
                    playsInline
                    preload="auto"
                    onEnded={() => setActive((active + 1) % reel.length)}
                    onTimeUpdate={e => {
                        const t = e.currentTarget;
                        if (t.duration) setProgress(t.currentTime / t.duration);
                    }}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />

                <div style={{
                    position: "absolute", inset: 0, pointerEvents: "none",
                    background: "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, transparent 22%, transparent 65%, rgba(0,0,0,0.75) 100%)",
                }} />

                <div style={{
                    position: "absolute", top: 12, left: 12, right: 12,
                    display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap",
                }}>
                    <span style={{
                        fontFamily: "var(--font-mono)", fontSize: "0.62rem",
                        padding: "3px 8px", borderRadius: "var(--radius-full)",
                        background: "rgba(0,0,0,0.6)", backdropFilter: "blur(8px)",
                        color: current.accentColor,
                        border: `1px solid ${current.accentColor}80`,
                        letterSpacing: "0.08em",
                    }}>
                        {current.company}
                    </span>
                    <span style={{
                        fontSize: "0.85rem", fontWeight: 700, color: "#fff",
                        textShadow: "0 2px 12px rgba(0,0,0,0.8)",
                    }}>
                        {current.project}
                    </span>
                </div>

                <div style={{
                    position: "absolute", bottom: 16, left: 14, right: 60,
                    fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "#fff",
                    textShadow: "0 2px 8px rgba(0,0,0,0.8)", letterSpacing: "0.04em",
                    whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
                }}>
                    <span style={{ color: current.accentColor }}>{"> "}</span>
                    {current.label}
                </div>

                <div style={{
                    position: "absolute", right: 10, bottom: 12,
                    display: "flex", flexDirection: "column", gap: 6,
                }}>
                    <IconBtn onClick={() => setPaused(p => !p)} accent={current.accentColor} label={paused ? "Play" : "Pause"}>
                        {paused ? <FiPlay size={13} /> : <FiPause size={13} />}
                    </IconBtn>
                    <IconBtn onClick={() => setMuted(m => !m)} accent={current.accentColor} label={muted ? "Unmute" : "Mute"}>
                        {muted ? <FiVolumeX size={13} /> : <FiVolume2 size={13} />}
                    </IconBtn>
                </div>

                <div style={{
                    position: "absolute", left: 0, right: 0, bottom: 0,
                    height: 3, background: "rgba(255,255,255,0.12)",
                }}>
                    <div style={{
                        width: `${progress * 100}%`, height: "100%",
                        background: current.accentColor,
                        transition: "width 0.15s linear",
                        boxShadow: `0 0 12px ${current.accentColor}`,
                    }} />
                </div>
            </div>

            <div style={{
                display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center",
                maxWidth: 420,
            }}>
                {reel.map((item, i) => {
                    const isActive = i === active;
                    return (
                        <button
                            key={item.src}
                            onClick={() => setActive(i)}
                            style={{
                                display: "inline-flex", alignItems: "center", gap: 6,
                                padding: "6px 11px",
                                borderRadius: "var(--radius-full)",
                                fontFamily: "var(--font-mono)", fontSize: "0.66rem",
                                cursor: "pointer",
                                border: "1px solid",
                                borderColor: isActive ? item.accentColor : "var(--border)",
                                background: isActive ? `${item.accentColor}18` : "transparent",
                                color: isActive ? item.accentColor : "var(--text-muted)",
                                transition: "all 0.2s ease",
                                whiteSpace: "nowrap",
                            }}>
                            <span style={{
                                width: 5, height: 5, borderRadius: "50%",
                                background: item.accentColor,
                                boxShadow: isActive ? `0 0 8px ${item.accentColor}` : "none",
                            }} />
                            {item.label}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

function IconBtn({ children, onClick, accent, label }) {
    return (
        <button
            onClick={onClick}
            aria-label={label}
            style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                width: 28, height: 28,
                borderRadius: "var(--radius-full)",
                background: "rgba(0,0,0,0.6)", backdropFilter: "blur(8px)",
                border: `1px solid ${accent}70`,
                color: "#fff", cursor: "pointer", padding: 0,
                transition: "all 0.2s ease",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = `${accent}40`; }}
            onMouseLeave={e => { e.currentTarget.style.background = "rgba(0,0,0,0.6)"; }}>
            {children}
        </button>
    );
}
